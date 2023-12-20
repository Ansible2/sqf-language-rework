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
    detailFull: string;
    detailContent?: string;
    detailNameFull?: string;
    detailName?: string;
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
        if (pageDetails.length < 1) return null;

        return null;
    }

    /* ----------------------------------------------------------------------------
        getBikiPageDetails
    ---------------------------------------------------------------------------- */
    private getBikiPageDetails(page: UnparsedBikiPage): BikiPageDetail[] {
        const matchPageDetailsRegEx =
            /(?<=^{{RV[.\s\S]*)(\|([\s\w]*)\=(?!\=)([\S\s]*?))(?=(\s*\n+}}\s*$)|(\|([\s\w]*)\=(?!\=)))/gi;
        const pageDetails: IterableIterator<RegExpMatchArray> | undefined =
            page.text.matchAll(matchPageDetailsRegEx);

        if (!pageDetails) return [];

        const pageDetailsArray = [...pageDetails];
        if (pageDetailsArray.length < 1) return [];

        const detailsParsed: BikiPageDetail[] = [];
        pageDetailsArray.forEach((matchGroups: string[]) => {
            const detailFull = matchGroups.at(0)?.trimEnd();
            if (!detailFull) return;

            const pageDetail: BikiPageDetail = {
                type: this.textInterpreter.getDetailType(detailFull),
                detailFull,
                detailName: matchGroups[2],
                detailContent: matchGroups[3].trim(),
                detailNameFull: `|${matchGroups[2]}=`,
            };
            detailsParsed.push(pageDetail);
        });

        return detailsParsed;
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
}
