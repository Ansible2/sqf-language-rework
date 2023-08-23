import {
    SQFArgument,
    SQFDataType,
    SQFEffect,
    SQFGrammarType,
    SQFSyntaxType,
    SyntaxMatchDifference,
} from "../SQFParser.namespace";
import { BikiTextInterpreter } from "./BikiTextInterpreter";
import {
    WikiPage,
    WikiPageDetail,
    WikiPageDetailType,
    ParsedSyntax,
    WikiPageType,
} from "./BikiTypes";
import * as fs from "fs";
import * as path from "path";

interface ParsingSyntax {
    detailIndex: number;
    syntax: {
        returnType?: SQFDataType;
        parameters_1?: SQFDataType[];
        parameters_2?: SQFDataType[];
        syntaxType?: SQFSyntaxType;
    };
}

interface ParsedPage {
    title: string;
    syntaxes: ParsedSyntax[];
    argumentLocality?: SQFArgument;
    effectLocality?: SQFEffect;
    serverExecution?: boolean;
    grammarType: SQFGrammarType;
}

function findLastIndex<T>(
    array: Array<T>,
    predicate: (value: T, index: number, obj: T[]) => boolean
): number {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}

function isSyntaxTypeFunction(type: SQFSyntaxType): boolean {
    return type === SQFSyntaxType.ScheduledFunction || type === SQFSyntaxType.UnscheduledFunction;
}

export class MediaWikiConverter {
    private textInterpreter: BikiTextInterpreter = new BikiTextInterpreter();
    private currentParsedPageType: SQFSyntaxType = SQFSyntaxType.Empty;
    private currentParsedPageIsFunction: boolean = false;
    private documentationWriter: BikiDocumentationWriter = new BikiDocumentationWriter(
        this.textInterpreter
    );
    constructor() {}

    /* ----------------------------------------------------------------------------
        parseWikiPage
    ---------------------------------------------------------------------------- */
    public parseWikiPage(page: WikiPage): string {
        this.currentParsedPageType = SQFSyntaxType.Empty;
        if (!page.title || !page.revision || !page.revision.text) return "";

        const actualTitle = BikiTextInterpreter.getProperTitle(page.title);
        if (actualTitle.startsWith("Category:")) return "";
        page.title = actualTitle;

        const pageDetails: WikiPageDetail[] = this.parseWikiPageDetails(page);
        if (pageDetails.length < 1) return "";

        this.documentationWriter.writeDocumentation(page.title, pageDetails);
        this.currentParsedPageIsFunction = this.isPageFunction(pageDetails);

        let parsedSyntaxes: ParsedSyntax[] = this.getParsedSyntaxes(pageDetails);
        const grammarType: SQFGrammarType = this.textInterpreter.getSQFGrammarType(
            page.title.toLowerCase()
        );
        parsedSyntaxes = this.consolidateSyntaxes(parsedSyntaxes);
    }

    /* ----------------------------------------------------------------------------
        parseWikiPageDetails
    ---------------------------------------------------------------------------- */
    private parseWikiPageDetails(page: WikiPage): WikiPageDetail[] {
        const MATCH_PAGE_DETAILS_REGEX =
            /(?<=^{{RV[.\s\S]*)(\|([\s\w]*)\=(?!\=)([\S\s]*?))(?=(\s*\n+}}\s*$)|(\|([\s\w]*)\=(?!\=)))/gi;

        const pageDetails: IterableIterator<RegExpMatchArray> | undefined =
            page.revision?.text?.matchAll(MATCH_PAGE_DETAILS_REGEX);
        if (!pageDetails) return [];

        const pageDetailsArray = [...pageDetails];
        if (pageDetailsArray.length < 1) return [];

        const detailsParsed: WikiPageDetail[] = pageDetailsArray.map(
            (matchGroups: string[], index: number) => {
                const detailFull = matchGroups[0]?.trim();
                return {
                    pageTitle: page.title || "Undefined Title",
                    index: index,
                    type: this.textInterpreter.getDetailType(detailFull),
                    detailFull: detailFull,
                    detailName: matchGroups[2],
                    detailContent: matchGroups[3].trim(),
                    detailNameFull: `|${matchGroups[2]}=`,
                };
            }
        );

        return detailsParsed;
    }

    /* ----------------------------------------------------------------------------
        isPageFunction
    ---------------------------------------------------------------------------- */
    private isPageFunction(pageDetails: WikiPageDetail[]): boolean {
        for (const pageDetail of pageDetails) {
            if (pageDetail.type !== WikiPageDetailType.PageType) continue;

            const wikiPageType = this.textInterpreter.getWikiPageType(pageDetail.detailFull);
            if (wikiPageType === WikiPageType.Function) return true;

            break;
        }

        return false;
    }

    /* ----------------------------------------------------------------------------
        getParsedSyntaxes
    ---------------------------------------------------------------------------- */
    private getParsedSyntaxes(pageDetails: WikiPageDetail[]): ParsedSyntax[] {
        const parsingSyntaxes: ParsingSyntax[] = [];

        pageDetails.forEach((detail: WikiPageDetail) => {
            if (detail.type !== WikiPageDetailType.Syntax) return;

            parsingSyntaxes.push({
                detailIndex: detail.index,
                syntax: {},
            });
        });

        if (parsingSyntaxes.length < 1) return [];

        for (const pageDetail of pageDetails) {
            console.log("pageDetail.detailFull", pageDetail.detailFull);

            if (
                pageDetail.type === WikiPageDetailType.Return ||
                pageDetail.type === WikiPageDetailType.Parameter
            ) {
                this.addPageDetailToSyntax(
                    parsingSyntaxes,
                    pageDetail,
                    isSyntaxTypeFunction(this.currentParsedPageType)
                );
            }
        }

        console.log("parsingSyntaxes:", parsingSyntaxes[0].syntax);
        const parsedSyntaxes: ParsedSyntax[] = parsingSyntaxes.map((syntax) => {
            return this.convertParsingSyntax(pageDetails[0].pageTitle, syntax);
        });
        return parsedSyntaxes;
    }

    /* ----------------------------------------------------------------------------
        getPageType
        // TODO: delete
    ---------------------------------------------------------------------------- */
    private getPageType(pageDetails: WikiPageDetail[]): SQFSyntaxType {
        let wikiPageType: WikiPageType = WikiPageType.Unknown;
        for (const pageDetail of pageDetails) {
            if (pageDetail.type !== WikiPageDetailType.PageType) continue;

            wikiPageType = this.textInterpreter.getWikiPageType(pageDetail.detailFull);
            break;
        }

        if (wikiPageType !== WikiPageType.Function) return SQFSyntaxType.Empty;

        // functions are by default unscheduled in wiki export
        let functionType: SQFSyntaxType = SQFSyntaxType.UnscheduledFunction;
        for (const pageDetail of pageDetails) {
            if (pageDetail.type !== WikiPageDetailType.FunctionExecution) continue;
            if (pageDetail.detailFull.includes("spawn")) {
                functionType = SQFSyntaxType.ScheduledFunction;
            }

            break;
        }

        return functionType;
    }
}

class BikiDocumentationWriter {
    constructor(private textInterpreter: BikiTextInterpreter) {}

    /* ----------------------------------------------------------------------------
        writeDocumentation
    ---------------------------------------------------------------------------- */
    public writeDocumentation(pageTitle: string, pageDetails: WikiPageDetail[]): void {
        const documentationFolderPath: string = path.resolve(
            __dirname,
            "../.output/Biki Parser/docs"
        );
        if (!fs.existsSync(documentationFolderPath)) {
            fs.mkdirSync(documentationFolderPath, { recursive: true });
        }

        let examples: string[] = [];
        let description: string = "";
        let syntaxStrings: string[] = [];
        pageDetails.forEach((detail: WikiPageDetail) => {
            if (!detail.detailContent) return;

            switch (detail.type) {
                case WikiPageDetailType.Syntax: {
                    syntaxStrings.push(this.formatBikiText(detail.detailContent));
                    break;
                }
                case WikiPageDetailType.Description: {
                    description = this.formatBikiText(detail.detailContent);
                    break;
                }
                case WikiPageDetailType.Example: {
                    examples.push(this.formatBikiText(detail.detailContent));
                    break;
                }
                default:
                    break;
            }
        });

        examples = examples.map((example, index) => {
            return `*Example ${index + 1}:*\n\n${example}`;
        });

        const syntaxesJoined = syntaxStrings.join("\n\n");
        const examplesJoined = examples.join("\n\n");
        const document = `${description}\n\n\n---\n*Syntaxes:*\n\n${syntaxesJoined}\n\n---\n${examplesJoined}`;

        const filename = this.textInterpreter.getFilename(pageTitle);
        fs.writeFileSync(`${documentationFolderPath}/${filename}.md`, document);
    }

    /* ----------------------------------------------------------------------------
        formatBikiText
    ---------------------------------------------------------------------------- */
    private formatBikiText(input: string): string {
        let output: string = input;
        const sqfCodeMatches = output.matchAll(/(<sqf>)([\s\S]*?)(<\/sqf>)/gi);
        const savedCodeExamples: string[] = [];
        for (const match of sqfCodeMatches) {
            const matchString: string | undefined = match.input;
            if (!matchString) continue;
            savedCodeExamples.push(matchString);
            output = output.replace(matchString, "<SQFCodeToReplace>");
        }
        output = this.formatDescription(input);

        for (const sqfCode of savedCodeExamples) {
            output = output.replace("<SQFCodeToReplace>", sqfCode);
        }

        output = output.replace(/(\[\[)(.+)(\]\])/gi, "`$2`");
        output = output.replace(/\<sqf\>\n+/gi, "\n```sqf\n");
        output = output.replace(/\<sqf\>/gi, "\n```sqf\n");
        output = output.replace(/\n+\<\/sqf\>/gi, "\n```");
        output = output.replace(/\<\/sqf\>/gi, "\n```");
        output = output.replace(
            /(<syntaxhighlight\s*lang="(.*)">)(\s*)([\s\S]+?)(\s*<\/syntaxhighlight>)/gi,
            "```$2\n$4\n```"
        );

        return output.trim();
    }

    /* ----------------------------------------------------------------------------
        formatDescription
    ---------------------------------------------------------------------------- */
    private formatDescription(input: string): string {
        let output = input;
        // replace file links
        output = output.replace(/\[\[File.*?\]\]/gi, "");

        // replace code references
        output = output.replace(/(\'\'+)(.*?)(\'\'+)/gi, "`$2`");

        const internalLinkMatches = output.matchAll(/(\[\[)([\s\D\|]*?)(\]\])/gi);
        for (const match of internalLinkMatches) {
            if (!match.input) continue;

            const text = match[2];
            const matchedText = match[0];
            if (!text.includes("|")) {
                output = output.replace(matchedText, `\`${text.trim()}\``);
                continue;
            }

            const [link, linkTitle] = text.split("|");
            output = output.replace(matchedText, `\`${linkTitle}\``);
        }

        // remove tables
        output = output.replace(/{{{![\s\S]*?}}}/gi, "");

        // remove notes
        output = output.replace(/{{Feature[\s\S]*}}/gi, "");

        // replace emphasized text
        output = output.replace(/({{hl\|)(.*)(}})/gi, "**$2**");

        // handle external wiki links
        const linkMatch = output.matchAll(/(\{\{)(([\s\w\d]+)(\|))(.+?)((\|)([\s\w\d]*))?(\}\})/gi);
        const linkMatchArray = Array.from(linkMatch);
        linkMatchArray.forEach((regexMatchArrayForLink) => {
            const siteName = regexMatchArrayForLink[3];
            const endpoint = regexMatchArrayForLink[5];
            const linkTitle = regexMatchArrayForLink[8];
            const originalString = regexMatchArrayForLink[0];
            if (!linkTitle) {
                output = output.replace(originalString, `*(Reference ${siteName} "${endpoint}")*`);
                return;
            }

            const siteBaseUrl = this.textInterpreter.getWikiExternalUrl(siteName);
            if (!siteBaseUrl) {
                output = output.replace(
                    originalString,
                    `*(Reference ${siteName} "${linkTitle}" at ${endpoint})*`
                );
                return;
            }

            output = output.replace(originalString, `[${linkTitle}](${siteBaseUrl}/${endpoint})`);
        });

        return output.trim();
    }
}
