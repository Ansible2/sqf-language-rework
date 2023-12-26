import { XMLParser } from "fast-xml-parser";
import { DocParser, IJSON, ParsedPage, SQFGrammarType, UnparsedPage } from "../SQFParser.namespace";
import path from "path";
import fs from "fs";

interface BikiPage {
    title?: string;
    revision?: {
        text?: string;
    };
}

interface UnparsedBikiPage extends UnparsedPage {
    title: string;
}

enum BikiPageDetailType {
    PageType,
    Parameter,
    Syntax,
    Description,
    ArgLocality,
    EffectLocality,
    Return,
    Example,
    Unknown,
    FunctionExecution,
    Group,
    ServerExecution,
}

interface BikiPageDetail {
    type: BikiPageDetailType;
    orginal: string;
    content?: string;
    fullName?: string;
    name?: string;
}

export class BikiParserV2 implements DocParser {
    private xmlParser = new XMLParser();
    private textInterpreter = new BikiTextInterpreter();

    constructor() {}
    /* ----------------------------------------------------------------------------
        getPages
    ---------------------------------------------------------------------------- */
    async getPages(): Promise<UnparsedBikiPage[]> {
        // const functionsPath = path.resolve(__dirname,"./Seed Files/Biki Seed Files/functions.MediaWiki.xml");
        const xmlPath = path.resolve(__dirname, "./Seed Files/commands.MediaWiki.xml");
        const xmlFileBuffer = fs.readFileSync(xmlPath);
        const xmlAsJSON = this.xmlParser.parse(xmlFileBuffer);
        const wikiPages: BikiPage[] = xmlAsJSON.mediawiki.page;

        const pages: UnparsedBikiPage[] = [];
        wikiPages.forEach((page) => {
            const pageText = page.revision?.text;
            if (!pageText) return;
            pages.push({ text: pageText, title: page.title || "" });
        });

        return pages;
    }

    /* ----------------------------------------------------------------------------
        parsePages
    ---------------------------------------------------------------------------- */
    async parsePages(pages: UnparsedBikiPage[]): Promise<ParsedPage[]> {
        const parsedPages: ParsedPage[] = [];
        pages.forEach((unparsedPage) => {
            const parsedPage = this.parseBikiPage(unparsedPage);
            if (!parsedPage) return;
            parsedPages.push(parsedPage);
        });

        return parsedPages;
    }

    /* ----------------------------------------------------------------------------
        getOutputFolderName
    ---------------------------------------------------------------------------- */
    getOutputFolderName(): string {
        return "Biki Parser";
    }

    /* ----------------------------------------------------------------------------
        parseBikiPage
    ---------------------------------------------------------------------------- */
    private parseBikiPage(page: UnparsedBikiPage): ParsedPage | null {
        if (!page.title) return null;
        const titleFormatted = this.textInterpreter.getPageTitleFormatted(page);
        const pageIsCategory = titleFormatted.startsWith("Category:");
        if (pageIsCategory) return null;

        const pageDetails = this.getBikiPageDetails(page);
        if (!pageDetails || pageDetails.details.length < 1) return null;

        const detailsMap = pageDetails.detailsMap;
        const examples: string[] = [];
        if (detailsMap.has(BikiPageDetailType.Example)) {
            const exampleDetails = detailsMap.get(BikiPageDetailType.Example);
            exampleDetails?.forEach((detail) => {
                if (!detail.content) return;
                const exampleInMarkdown = this.textInterpreter.convertTextToMarkdown(
                    detail.content
                );
                examples.push(exampleInMarkdown);
            });
        }

        return null;
    }

    /* ----------------------------------------------------------------------------
        getBikiPageDetails
    ---------------------------------------------------------------------------- */
    private getBikiPageDetails(page: UnparsedBikiPage): {
        details: BikiPageDetail[];
        detailsMap: Map<BikiPageDetailType, BikiPageDetail[]>;
    } | null {
        const matchPageDetailsRegEx =
            /(?<=^{{RV[.\s\S]*)(\|([\s\w]*)\=(?!\=)([\S\s]*?))(?=(\s*\n+}}\s*$)|(\|([\s\w]*)\=(?!\=)))/gi;
        const pageDetails: IterableIterator<RegExpMatchArray> | undefined =
            page.text.matchAll(matchPageDetailsRegEx);

        if (!pageDetails) return null;

        const pageDetailsArray = [...pageDetails];
        if (pageDetailsArray.length < 1) return null;

        const allParsedDetails: BikiPageDetail[] = [];
        const detailsMap: Map<BikiPageDetailType, BikiPageDetail[]> = new Map();
        pageDetailsArray.forEach((matchGroups: string[]) => {
            const detailFull = matchGroups.at(0)?.trimEnd();
            if (!detailFull) return;

            const pageDetail: BikiPageDetail = {
                type: this.textInterpreter.getDetailType(detailFull),
                orginal: detailFull,
                name: matchGroups[2],
                content: matchGroups[3].trim(),
                fullName: `|${matchGroups[2]}=`,
            };

            allParsedDetails.push(pageDetail);

            if (detailsMap.has(pageDetail.type)) {
                detailsMap.get(pageDetail.type)?.push(pageDetail);
            } else {
                detailsMap.set(pageDetail.type, [pageDetail]);
            }
        });

        return { details: allParsedDetails, detailsMap };
    }
}

class BikiTextInterpreter {
    /* ----------------------------------------------------------------------------
        getDetailType
    ---------------------------------------------------------------------------- */
    public getDetailType(detail: string): BikiPageDetailType {
        const isSyntax = !!detail.match(/^\|s\d*\=/);
        if (isSyntax) return BikiPageDetailType.Syntax;

        const isParameter = !!detail.match(/^\|p\d*=/);
        if (isParameter) return BikiPageDetailType.Parameter;

        const isServerExec = detail.toLowerCase().startsWith("|serverexec");
        if (isServerExec) return BikiPageDetailType.ServerExecution;

        const isReturnType = !!detail.match(/^\|r\d*=/);
        if (isReturnType) return BikiPageDetailType.Return;

        const isExample = !!detail.match(/^\|x\d*\=/);
        if (isExample) return BikiPageDetailType.Example;

        const isDescription = detail.startsWith("|descr");
        if (isDescription) return BikiPageDetailType.Description;

        const isArgLocality = detail.startsWith("|arg");
        if (isArgLocality) return BikiPageDetailType.ArgLocality;

        const isEffectLocality = detail.startsWith("|eff");
        if (isEffectLocality) return BikiPageDetailType.EffectLocality;

        const isPageType = detail.startsWith("|type");
        if (isPageType) return BikiPageDetailType.PageType;

        const isFunctionExecution = !!detail.match(/^\|exec\s*\=/);
        if (isFunctionExecution) return BikiPageDetailType.FunctionExecution;

        return BikiPageDetailType.Unknown;
    }

    /* ----------------------------------------------------------------------------
        COMMAND_NAME_MAP
    ---------------------------------------------------------------------------- */
    private readonly COMMAND_NAME_MAP: IJSON<string> = {
        "a && b": "'&&'",
        "a or b": "'||'",
        "a hash b": "'#'",
        "a != b": "'!='",
        "! a": "'!'",
        "a % b": "'%'",
        "a less= b": "'<='",
        "a greater b": "'>'",
        "a ^ b": "'^'",
        "a / b": "'/'",
        "a * b": "'*'",
        "a = b": "'='",
        "a : b": "':'",
        "a less b": "'<'",
        "a == b": "'=='",
        "a greater= b": "'>='",
        "+": "'+'",
        "-": "'-'",
        false: "'false'",
        true: "'true'",
        toString: "'toString'",
        "config greater greater name": "'>>'",
    };

    /* ----------------------------------------------------------------------------
        getPageTitleFormatted
    ---------------------------------------------------------------------------- */
    public getPageTitleFormatted(page: UnparsedBikiPage): string {
        let title = "";
        if (typeof page.title === "boolean") {
            // ensuring it is not mistaken by JS for an actual bool value
            title = new Boolean(page.title).toString();
        }

        title = title.trim();
        const mappedName = this.COMMAND_NAME_MAP[title];
        if (mappedName) return mappedName;

        // xml does not preserve underscores but replaces them with spaces
        const underscoredTitle = title.replace(/\ /g, "_");
        return underscoredTitle;
    }

    /* ----------------------------------------------------------------------------
        TEMPLATE_KEY_MAP
    ---------------------------------------------------------------------------- */
    private readonly TEMPLATE_KEY_MAP: IJSON<{
        text: string;
        gameVersionIcon?: boolean;
        feature?: boolean;
    }> = {
        // collected from https://community.bistudio.com/wiki/Category:Templates
        ofp: {
            text: "Operation Flashpoint",
            gameVersionIcon: true,
            feature: true,
        },
        ofpe: {
            text: "Operation Flashpoint: Elite",
            gameVersionIcon: true,
            feature: true,
        },
        ofpr: {
            text: "Operation Flashpoint: Resistance",
            gameVersionIcon: true,
            feature: true,
        },
        afm: {
            text: "Arma 3: Advanced Helicopter Flight Model",
            feature: true,
        },
        arma: {
            text: "Arma",
            gameVersionIcon: true,
            feature: true,
        },
        arma0: {
            text: "Arma: Cold War Assault",
            gameVersionIcon: true,
            feature: true,
        },
        arma1: {
            text: "Armed Assault",
            gameVersionIcon: true,
            feature: true,
        },
        arma2: {
            text: "Arma 2",
            gameVersionIcon: true,
            feature: true,
        },
        arma2oa: {
            text: "Arma 2: Operation Arrowhead",
            gameVersionIcon: true,
            feature: true,
        },
        arma3: {
            text: "Arma 3",
            gameVersionIcon: true,
            feature: true,
        },
        important: {
            text: "IMPORTANT",
            feature: true,
        },
        informative: {
            text: "NOTE",
            feature: true,
        },
        warning: {
            text: "WARNING",
            feature: true,
        },
    };

    /* ----------------------------------------------------------------------------
        convertTextToMarkdown
    ---------------------------------------------------------------------------- */
    public convertTextToMarkdown(text: string): string {
        let convertedText = text;

        // code blocks are seperated to ensure that any code formatting is not overwritten
        // during formatting
        const sqfCodeBlockMatches = convertedText.matchAll(/(<sqf>\s*)([\s\S]*?)(\s*<\/sqf>)/gi);
        const convertedCodeExamples: string[] = [];
        for (const match of sqfCodeBlockMatches) {
            const matchString = match.input;
            if (!matchString) continue;
            convertedCodeExamples.push(matchString);
            convertedText = convertedText.replace(matchString, "<SQFCodeToReplace>");
        }

        const BIKI_BASE_URL = "https://community.bistudio.com/wiki";
        const SIMPLE_REPLACEMENTS: [RegExp, string][] = [
            // bold text
            [/\'\'\'+(.*?)\'\'\'+/gi, "**$1**"],
            // italic text
            [/\'\'+(.*?)\'\'+/gi, "_$1_"],
            // emphasized text
            [/{{hl\|(.*)}}/gi, "`**$1**`"],
            // other commands
            [/\[\[(\w+)\]\]/gi, "`$1`"],
            // other language code block
            [
                /(<syntaxhighlight\s*lang="(.*)">)(\s*)([\s\S]+?)(\s*<\/syntaxhighlight>)/gi,
                "```$2\n$4\n```",
            ],
            // spoilers
            [/\s*\<(\/{0,1})spoiler\>\s*/gi, ""],
            // Described Internal Hyperlinks
            [/\[\[([\w\s#:]+)\|([\w\s]+)\]\]/gi, `[$2](${BIKI_BASE_URL}/$1)`],
            // Static Internal Hyperlinks
            [/\[\[([\w/:\s]+)\]\]/gi, `[$1](${BIKI_BASE_URL}/$1)`],
        ];
        SIMPLE_REPLACEMENTS.forEach(
            ([selector, replacement]) =>
                (convertedText = convertedText.replace(selector, replacement))
        );

        Object.entries(this.TEMPLATE_KEY_MAP).forEach(([templateKey, templateInfo]) => {
            const replacementText = templateInfo.text;
            const simpleTextRegex = new RegExp(`/\{\{${templateKey}\}\}/gi`);
            convertedText = convertedText.replace(simpleTextRegex, replacementText);

            if (templateInfo.gameVersionIcon) {
                const gameVersionRegex = new RegExp(
                    `/\{\{GVI\|${templateKey}\|([\d\.]+).*?\}\}/gi`
                );
                const gameIconMatches = convertedText.matchAll(gameVersionRegex);
                for (const match of gameIconMatches) {
                    let newText = replacementText;
                    const gameVersion = match[2];
                    if (gameVersion) newText += ` v${gameVersion}`;

                    const originalString = match[0];
                    convertedText = convertedText.replace(originalString, `**(${newText})**`);
                }
            }

            if (templateInfo.feature) {
                const featureRegex = new RegExp(
                    `/\{\{Feature\s*\|\s*${templateKey}\s*\|{0,1}([\W\w]+?)\}\}/gi`
                );
                const featureMatches = convertedText.matchAll(featureRegex);
                for (const match of featureMatches) {
                    let newText: string;
                    const featureMessage = match[1];
                    if (featureMessage) {
                        newText = `**${replacementText}**: ${featureMessage}`;
                    } else {
                        newText = `**(${replacementText})**`;
                    }

                    const originalString = match[0];
                    convertedText = convertedText.replace(originalString, newText);
                }
            }
        });

        const WIKIPEDIA_BASE_URL = "https://en.wikipedia.org/wiki";
        convertedText = convertedText.replace(
            /\{\{wikipedia\|(.*)\|(.*)\}\}/gi,
            `[$2](${WIKIPEDIA_BASE_URL}/$1)`
        );
        // TODO:
        // File links - /\[\[File.*?\]\]/gi
        // images
        // Tables - {{{!}}}...

        for (const convertedExample of convertedCodeExamples) {
            convertedText = convertedText.replace(
                "<SQFCodeToReplace>",
                ["\n```sqf", convertedExample, "```\n"].join("\n")
            );
        }

        return convertedText.trim();
    }
}
