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

    private readonly GAME_KEY_TO_TEXT_MAP: IJSON<string> = {
        // collected from https://community.bistudio.com/wiki/Category:Templates
        ofp: "Operation Flashpoint",
        ofpe: "Operation Flashpoint: Elite",
        ofpr: "Operation Flashpoint: Resistance",
        arma: "Arma",
        arma0: "Arma: Cold War Assault",
        arma1: "Armed Assault",
        arma2: "Arma 2",
        arma2oa: "Arma 2: Operation Arrowhead",
        arma3: "Arma 3",
    };

    /* ----------------------------------------------------------------------------
        convertTextToMarkdown
    ---------------------------------------------------------------------------- */
    public convertTextToMarkdown(text: string): string {
        let convertedText = text;

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
            // code references
            [/\'\'+(.*?)\'\'+/gi, "`$1`"],
            // emphasized text
            [/{{hl\|(.*)}}/gi, "**$1**"],
            // other commands
            [/\[\[(\w+)\]\]/gi, "`$1`"],
            // sqf code block start
            [/\s*\<sqf\>\s*/gi, "\n```sqf\n"],
            // sqf code block end
            [/\s*\<\/sqf\>\s*/gi, "\n```\n"],
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

        const SELECT_GAME_VERSION_ICON = /\{\{GVI\|(\w+)\|([\d\.]+).*?\}\}/gi;
        const gameIconMatches = convertedText.matchAll(SELECT_GAME_VERSION_ICON);
        for (const match of gameIconMatches) {
            const originalString = match.input;
            if (!originalString) continue;

            const iconCode = match.groups?.["$1"]?.toLowerCase();
            if (!iconCode) continue;

            const gameName = this.GAME_KEY_TO_TEXT_MAP[iconCode];
            if (!gameName) {
                console.log("BikiTextInterpreter - could not locate icon name for", iconCode);
                continue;
            }

            let replacementText = gameName;
            const gameVersion = match.groups?.["$2"];
            if (gameVersion) replacementText += `- ${gameVersion}`;

            convertedText = convertedText.replace(originalString, `**(${replacementText})**`);
        }

        Object.entries(this.GAME_KEY_TO_TEXT_MAP).forEach(([gameKey, gameName]) => {
            convertedText = convertedText.replace(`/\{\{${gameKey}\}\}/gi`, gameName);
        });

        // TODO:
        // File links - /\[\[File.*?\]\]/gi
        // Tables - /{{{![\s\S]*?}}}/gi
        // Notes - /{{Feature[\s\S]*}}/gi
        // External Links - /(\{\{)(([\s\w\d]+)(\|))(.+?)((\|)([\s\w\d]*))?(\}\})/gi
        // game features : /\{\{Feature\s*\|\s*(\w+)\s*\|([\W\w]+?)\}\}/ig
        // {{Feature|arma3|
        // * [[createCenter]] usage is not needed anymore as all centers are automatically created.
        // * When the last unit leaves its group, the group usually gets immediately auto-deleted, regardless of its auto-deletion setting.
        // }}

        for (const convertedExample of convertedCodeExamples) {
            convertedText = convertedText.replace(
                "<SQFCodeToReplace>",
                ["```sqf", convertedExample, "```"].join("\n")
            );
        }

        return convertedText.trim();
    }
}
