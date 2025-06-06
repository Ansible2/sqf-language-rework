import { XMLParser } from "fast-xml-parser";
import {
    DocParser,
    IJSON,
    UnparsedItem,
    getParserSecrets,
    getStringReplacer,
} from "../SQFParser.namespace";
import {
    ExampleConfig,
    SQFArgumentLocality,
    SQFDataType,
    SQFEffectLocality,
    SQFGrammarType,
    SQFItemConfig,
    SQFParameterConfig,
    SQFSyntaxConfig,
} from "../../configuration/grammars/sqf.namespace";
import fs from "fs";
import { BIKI_ADDITIONAL_COMMAND_PAGES, BIKI_EXCEPTIONS } from "./BikiPageConstants";

interface BikiPage {
    title?: string;
    revision?: {
        text?: string;
    };
}

export interface UnparsedBikiPage extends UnparsedItem {
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
    // TODO: add "multiplayer" detail to description, shows up as "|mp="
}

interface BikiPageDetail {
    type: BikiPageDetailType;
    orginal: string;
    content: string;
    fullName: string;
    name: string;
}

interface BikiSyntax {
    parameterDetails: BikiPageDetail[];
    syntaxDetail: BikiPageDetail;
    returnDetail: BikiPageDetail;
    syntaxTitle: string;
}

class BikiParser implements DocParser {
    private xmlParser = new XMLParser();
    private textInterpreter = new BikiTextInterpreter();
    public readonly SEED_FILE_NAME;

    constructor(private parseType: "functions" | "commands") {
        if (parseType === "functions") {
            this.SEED_FILE_NAME = "functions.MediaWiki.xml";
        } else if (parseType === "commands") {
            this.SEED_FILE_NAME = "commands.MediaWiki.xml";
        } else {
            this.SEED_FILE_NAME = "UNDEFINED_BIKI_PARSE_TYPE";
        }
    }

    /* ----------------------------------------------------------------------------
        getUnparsedItems
    ---------------------------------------------------------------------------- */
    async getLatestSeedFile(): Promise<string> {
        let bikiCategory: string = "";
        if (this.parseType === "functions") {
            bikiCategory = "Arma 3: Functions";
        } else if (this.parseType === "commands") {
            bikiCategory = "Arma 3: Scripting Commands";
        } else {
            throw new Error("Unknown parseType", this.parseType);
        }

        const formData = new FormData();
        formData.append("catname", bikiCategory);
        formData.append("title", "Special:Export/");
        formData.append("addcat", "Add");
        formData.append("curonly", "1");
        formData.append("wpEditToken", "+\\");

        const bikiCookie = (await getParserSecrets()).bikiCookie;
        const BIKI_EXPORT_URL = "https://community.bistudio.com/wiki/Special:Export/";
        const BIKI_EXPORT_METHOD = "POST";
        const BIKI_HEADERS = {
            Cookie: bikiCookie,
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
        };
        const getPageNamesResponse = await fetch(BIKI_EXPORT_URL, {
            body: formData,
            method: BIKI_EXPORT_METHOD,
            headers: BIKI_HEADERS,
        }).then((response) => response.text());

        // ooui-php-2 is the id of the textarea input that the pages are loaded to
        const namesCollection = getPageNamesResponse
            .match(/(?<=id='ooui-php-2'.*?>)[\s\S]+?(?=<\/)/i)
            ?.at(0);
        if (!namesCollection) {
            throw new Error("Empty names collection!");
        }

        const pages = new Set<string>();
        for (const name of namesCollection.split("\n")) {
            if (name.startsWith("Category:")) continue;
            pages.add(encodeURIComponent(name.trim()));
        }

        formData.append("pages", Array.from(pages).join("\n"));
        formData.delete("addcat");
        formData.delete("catname");
        return await fetch(BIKI_EXPORT_URL, {
            body: formData,
            method: BIKI_EXPORT_METHOD,
            headers: BIKI_HEADERS,
        }).then((response) => response.text());
    }

    /* ----------------------------------------------------------------------------
        getUnparsedItems
    ---------------------------------------------------------------------------- */
    async getUnparsedItems(seedFilePath: string): Promise<UnparsedBikiPage[]> {
        const xmlFileBuffer = fs.readFileSync(seedFilePath);
        const xmlAsJSON = this.xmlParser.parse(xmlFileBuffer);
        // single page exports will not be arrays
        const wikiPages: BikiPage[] = Array.isArray(xmlAsJSON.mediawiki.page)
            ? xmlAsJSON.mediawiki.page
            : [xmlAsJSON.mediawiki.page];

        const pages: UnparsedBikiPage[] = [];
        wikiPages.forEach((page) => {
            const pageText = page.revision?.text;
            if (!pageText) return;
            pages.push({ text: pageText, title: page.title || "" });
        });

        return pages;
    }

    /* ----------------------------------------------------------------------------
        convertToItemConfigs
    ---------------------------------------------------------------------------- */
    async convertToItemConfigs(pages: UnparsedBikiPage[]): Promise<SQFItemConfig[]> {
        const parsedPages: SQFItemConfig[] = [];
        if (this.parseType === "commands") {
            pages.push(...BIKI_ADDITIONAL_COMMAND_PAGES);
        }

        pages.forEach((unparsedPage) => {
            try {
                const parsedPage = this.parseBikiPage(unparsedPage);
                if (!parsedPage) return;
                parsedPages.push(parsedPage);
            } catch (error) {
                console.error(`Error while parsing BIKI entry: "${unparsedPage.title}"`, error);
            }
        });

        return parsedPages;
    }

    /* ----------------------------------------------------------------------------
        getOutputFileName
    ---------------------------------------------------------------------------- */
    getOutputFileName(): string {
        if (this.parseType === "commands") {
            return "biki.commands.syntax";
        } else if (this.parseType === "functions") {
            return "biki.functions.syntax";
        } else {
            throw new Error("Unknown parseType", this.parseType);
        }
    }

    /* ----------------------------------------------------------------------------
        parseBikiPage
    ---------------------------------------------------------------------------- */
    private parseBikiPage(page: UnparsedBikiPage): SQFItemConfig | null {
        if (!page.title) return null;

        page = this.textInterpreter.handlePageExceptions(page);

        const titleFormatted = this.textInterpreter.getPageTitleFormatted(page);
        if (this.textInterpreter.isPageCategory(titleFormatted)) return null;

        const pageDetails = this.getBikiPageDetails(page);
        if (!pageDetails || pageDetails.details.length < 1) return null;

        const detailsMap = pageDetails.detailsMap;

        const examples: ExampleConfig[] = [];
        const exampleDetails = detailsMap.get(BikiPageDetailType.Example);
        if (exampleDetails) {
            exampleDetails.forEach((detail) => {
                if (!detail.content) return;
                const exampleInMarkdown = this.textInterpreter.convertTextToMarkdown(
                    detail.content
                );

                // some examples (BIS_fnc_3den_init) only have a dash (-) for example
                const exampleDoesNotHaveActualContent = !/\w+/i.test(exampleInMarkdown);
                if (exampleDoesNotHaveActualContent) return;

                examples.push({ text: exampleInMarkdown });
            });
        }

        const descriptionDetail = detailsMap.get(BikiPageDetailType.Description)?.at(0);
        const description = this.textInterpreter.convertTextToMarkdown(descriptionDetail?.content);

        const serverExecutionDetails = detailsMap.get(BikiPageDetailType.ServerExecution);
        const serverExecution = serverExecutionDetails && serverExecutionDetails.length > 0;

        const effectLocality = this.textInterpreter.getEffectLocality(
            detailsMap.get(BikiPageDetailType.EffectLocality)?.at(0)?.content
        );
        const argumentLocality = this.textInterpreter.getArgumentLocality(
            detailsMap.get(BikiPageDetailType.ArgLocality)?.at(0)?.content
        );

        const syntaxes: SQFSyntaxConfig[] = [];
        // TODO: what happens for pages that have no syntaxes to parse? (BIS_fnc_createMenu for example)
        pageDetails.syntaxMap.forEach((bikiSyntax) => {
            const parsedSyntax = this.parseSyntax(bikiSyntax);
            if (!parsedSyntax) return;

            syntaxes.push(parsedSyntax);
        });

        return {
            documentation: {
                description,
                examples,
                syntaxes,
                argumentLocality,
                effectLocality,
                serverExecution,
                documentationLink: this.textInterpreter.getDocumentationLink(titleFormatted),
            },
            configuration: {
                label: this.textInterpreter.getLabel(titleFormatted),
                grammarType: this.textInterpreter.getSQFGrammarType(titleFormatted),
            },
        };
    }

    /* ----------------------------------------------------------------------------
        parseSyntax
    ---------------------------------------------------------------------------- */
    private parseSyntax(bikiSyntax: BikiSyntax): SQFSyntaxConfig | null {
        const syntax: SQFSyntaxConfig = { parameters: [] };
        const syntaxExample = this.textInterpreter.convertTextToMarkdown(
            bikiSyntax.syntaxDetail.content
        );

        if (syntaxExample) {
            syntax.outline = syntaxExample;
        }

        bikiSyntax.parameterDetails.forEach((parameterDetail) => {
            const markdownContent = this.textInterpreter.convertTextToMarkdown(
                parameterDetail.content
            );
            const parameterConfig = this.textInterpreter.parseParameter(markdownContent);
            if (parameterConfig.description !== null || parameterConfig.name !== null) {
                syntax.parameters.push(parameterConfig);
            }
        });

        const returnText = this.textInterpreter.convertTextToMarkdown(
            bikiSyntax.returnDetail.content
        );
        if (returnText) {
            syntax.returns = returnText;
        }

        return syntax;
    }

    /* ----------------------------------------------------------------------------
        getBikiPageDetails
    ---------------------------------------------------------------------------- */
    private getBikiPageDetails(page: UnparsedBikiPage): {
        details: BikiPageDetail[];
        detailsMap: Map<BikiPageDetailType, BikiPageDetail[]>;
        syntaxMap: Map<number, BikiSyntax>;
    } | null {
        const matchPageDetailsRegEx =
            /(?<=(?:\s|RV))(\|(\w+)\s*=)([\s\S]+?)(?=(?:\s\|\w+|$|}}\s*{{Note|\n}}\s*$))/gi;
        const pageDetails: IterableIterator<RegExpMatchArray> | undefined =
            page.text.matchAll(matchPageDetailsRegEx);

        if (!pageDetails) return null;

        const pageDetailsArray = [...pageDetails];
        if (pageDetailsArray.length < 1) return null;

        const allParsedDetails: BikiPageDetail[] = [];
        const detailsMap = new Map<BikiPageDetailType, BikiPageDetail[]>();
        const syntaxMap = new Map<number, BikiSyntax>();
        let lastSyntaxId: number;
        pageDetailsArray.forEach((matchGroups: string[]) => {
            const detailFull = matchGroups.at(0)?.trimEnd();
            if (!detailFull) return;

            const pageDetail: BikiPageDetail = {
                type: this.textInterpreter.getDetailType(detailFull),
                orginal: detailFull,
                name: matchGroups[2],
                content: matchGroups[3].trim(),
                fullName: matchGroups[1], // includes | and =
            };

            allParsedDetails.push(pageDetail);

            if (detailsMap.has(pageDetail.type)) {
                detailsMap.get(pageDetail.type)?.push(pageDetail);
            } else {
                detailsMap.set(pageDetail.type, [pageDetail]);
            }

            const isParameter = pageDetail.type === BikiPageDetailType.Parameter;
            const isSyntaxExample = pageDetail.type === BikiPageDetailType.Syntax;
            const isReturn = pageDetail.type === BikiPageDetailType.Return;
            if (!isParameter && !isSyntaxExample && !isReturn) return;

            let syntaxId: number;
            if (isSyntaxExample) {
                // the first syntax parameters do not include the syntax id of "1"
                // only the parameters for syntaxes past the first include a number past 1
                const syntaxIdString =
                    pageDetail.name
                        .match(/(?<=s)\d|(?<=r)\d|(?<=p)(?:\d(?=\d)|(?=\d{1}))/i)
                        ?.at(0) || "1";

                syntaxId = parseInt(syntaxIdString);
                lastSyntaxId = syntaxId;
            } else {
                // Some pages have improperly labeled parameters with the wrong
                // syntax id so this will just use the order of appearance instead of
                // the apparent id.
                syntaxId = lastSyntaxId;
            }

            let bikiSyntax = syntaxMap.get(syntaxId);
            if (!bikiSyntax) {
                bikiSyntax = {
                    parameterDetails: [],
                    syntaxTitle: page.title,
                } as unknown as BikiSyntax;
                syntaxMap.set(syntaxId, bikiSyntax);
            }

            if (isParameter) {
                bikiSyntax.parameterDetails.push(pageDetail);
                return;
            }

            if (isReturn) {
                bikiSyntax.returnDetail = pageDetail;
                return;
            }

            if (isSyntaxExample) {
                bikiSyntax.syntaxDetail = pageDetail;
                return;
            }
        });

        return { details: allParsedDetails, detailsMap, syntaxMap };
    }
}

export class BikiTextInterpreter {
    /* ----------------------------------------------------------------------------
        getDetailType
    ---------------------------------------------------------------------------- */
    public getDetailType(detail: string): BikiPageDetailType {
        if (!!detail.match(/^\|s\d*\=/)) return BikiPageDetailType.Syntax;

        if (!!detail.match(/^\|p\d*=/)) return BikiPageDetailType.Parameter;

        if (detail.toLowerCase().startsWith("|serverexec"))
            return BikiPageDetailType.ServerExecution;

        if (!!detail.match(/^\|r\d*=/)) return BikiPageDetailType.Return;

        if (!!detail.match(/^\|x\d*\=/)) return BikiPageDetailType.Example;

        if (detail.startsWith("|descr")) return BikiPageDetailType.Description;

        if (detail.startsWith("|arg")) return BikiPageDetailType.ArgLocality;

        if (detail.startsWith("|eff")) return BikiPageDetailType.EffectLocality;

        if (detail.startsWith("|type")) return BikiPageDetailType.PageType;

        if (!!detail.match(/^\|exec\s*\=/)) return BikiPageDetailType.FunctionExecution;

        return BikiPageDetailType.Unknown;
    }

    /* ----------------------------------------------------------------------------
        COMMAND_NAME_MAP
    ---------------------------------------------------------------------------- */
    private static readonly COMMAND_NAME_MAP: IJSON<string> = {
        "a && b": "&&",
        "a or b": "||",
        "a hash b": "#",
        "a != b": "!=",
        "! a": "!",
        "a % b": "%",
        "a less= b": "<=",
        "a greater b": ">",
        "a ^ b": "^",
        "a / b": "/",
        "a * b": "*",
        "a = b": "=",
        "a : b": ":",
        "a less b": "<",
        "a == b": "==",
        "a greater= b": ">=",
        // "+": "'+'",
        // "-": "'-'",
        // false: "'false'",
        // true: "'true'",
        toString: "toString",
        "config greater greater name": ">>",
    };

    /* ----------------------------------------------------------------------------
        getPageTitleFormatted
    ---------------------------------------------------------------------------- */
    public getPageTitleFormatted(page: UnparsedBikiPage): string {
        let title = page.title;
        if (typeof title === "boolean") {
            // ensuring it is not mistaken by JS for an actual bool value
            title = new Boolean(title).toString();
        }

        title = title.trim();
        const mappedName = BikiTextInterpreter.COMMAND_NAME_MAP[title];
        if (mappedName) return mappedName;

        // xml does not preserve underscores but replaces them with spaces
        const underscoredTitle = title.replaceAll(" ", "_");
        return underscoredTitle;
    }

    /* ----------------------------------------------------------------------------
        TEMPLATE_KEY_MAP
    ---------------------------------------------------------------------------- */
    private static readonly TEMPLATE_KEY_MAP: IJSON<{
        text: string;
        gameVersionIcon?: boolean;
        feature?: boolean;
        icon?: boolean;
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
        localargument: {
            text: "Local Argument",
            icon: true,
        },
        globalargument: {
            text: "Global Argument",
            icon: true,
        },
        localeffect: {
            text: "Local Effect",
            icon: true,
        },
        globaleffect: {
            text: "Global Effect",
            icon: true,
        },
    };

    /* ----------------------------------------------------------------------------
        WIKI_TYPE_CONVERSION_MAP
    ---------------------------------------------------------------------------- */
    private static readonly WIKI_TYPE_CONVERSION_MAP: IJSON<SQFDataType> = {
        NUMBER: SQFDataType.Number,
        SCALAR: SQFDataType.Number,
        "DIARY RECORD": SQFDataType.DiaryRecord,
        BOOLEAN: SQFDataType.Boolean,
        BOOL: SQFDataType.Boolean,
        TRUE: SQFDataType.Boolean,
        FALSE: SQFDataType.Boolean,
        ARRAY: SQFDataType.Array,
        STRING: SQFDataType.String,
        NOTHING: SQFDataType.Nothing,
        NIL: SQFDataType.Nothing,
        ANY: SQFDataType.Any,
        ANYTHING: SQFDataType.Any,
        NAMESPACE: SQFDataType.Namespace,
        "EDEN ENTITY": SQFDataType.EdenEntity,
        EDITOROBJECT: SQFDataType.Object,
        "EDITOR OBJECT": SQFDataType.Object,
        NAN: SQFDataType.NaN,
        IF: SQFDataType.IfType,
        "IF TYPE": SQFDataType.IfType,
        WHILE: SQFDataType.WhileType,
        "WHILE TYPE": SQFDataType.WhileType,
        WITH: SQFDataType.WithType,
        "WITH TYPE": SQFDataType.WithType,
        FOR: SQFDataType.ForType,
        "FOR TYPE": SQFDataType.ForType,
        SWITCH: SQFDataType.SwitchType,
        "SWITCH TYPE": SQFDataType.SwitchType,
        EXCEPTION: SQFDataType.Exception,
        "EXCEPTION TYPE": SQFDataType.Exception,
        "EXCEPTION HANDLING": SQFDataType.Exception,
        CODE: SQFDataType.Code,
        OBJECT: SQFDataType.Object,
        TARGET: SQFDataType.Object,
        OBJECTRTD: SQFDataType.Object,
        REMOTEEXEC: SQFDataType.String,
        VECTOR: SQFDataType.Vector,
        SIDE: SQFDataType.Side,
        GROUP: SQFDataType.Group,
        TEXT: SQFDataType.StructuredText,
        "STRUCTURED TEXT": SQFDataType.StructuredText,
        SCRIPT: SQFDataType.ScriptHandle,
        "SCRIPT HANDLE": SQFDataType.ScriptHandle,
        CONFIG: SQFDataType.Config,
        DISPLAY: SQFDataType.Display,
        CONTROL: SQFDataType.Control,
        NETOBJECT: SQFDataType.NetObject,
        TEAM_MEMBER: SQFDataType.TeamMember,
        "TEAM MEMBER": SQFDataType.TeamMember,
        HASHMAP: SQFDataType.HashMap,
        TASK: SQFDataType.Task,
        DIARY_RECORD: SQFDataType.DiaryRecord,
        LOCATION: SQFDataType.Location,
        HASHMAPKEY: SQFDataType.HashMapKey,
        WAYPOINT: SQFDataType.Waypoint,
        "Color|Color (RGBA)": SQFDataType.ColorAlpha,
        "COLOR (RGBA)": SQFDataType.ColorAlpha,
        COLOR: SQFDataType.Color,
        POSITION: SQFDataType.Position,
        "POSITION#POSITION|POSITION": SQFDataType.Position,
        POSITION2D: SQFDataType.Position2d,
        "POSITION#POSITION2D|POSITION2D": SQFDataType.Position2d,
        "Position#Introduction|Position2D": SQFDataType.Position2d,
        POSITION3D: SQFDataType.Position3d,
        "POSITION#POSITION3D|POSITION3D": SQFDataType.Position3d,
        "Position#Introduction|Position3D": SQFDataType.Position3d,
        POSITIONATL: SQFDataType.PositionATL,
        "POSITION#POSITIONATL|POSITIONATL": SQFDataType.PositionATL,
        POSITIONASL: SQFDataType.PositionASL,
        "POSITION#POSITIONASL|POSITIONASL": SQFDataType.PositionASL,
        POSITIONAGLS: SQFDataType.PositionAGLS,
        "POSITION#POSITIONAGLS|POSITIONAGLS": SQFDataType.PositionAGLS,
        POSITIONAGL: SQFDataType.PositionAGL,
        "POSITION#POSITIONAGL|POSITIONAGL": SQFDataType.PositionAGL,
        POSITIONRELATIVE: SQFDataType.PositionRelative,
        "POSITION#POSITIONRELATIVE|POSITIONRELATIVE": SQFDataType.PositionRelative,
        "PARTICLE ARRAY": SQFDataType.ParticleArray,
        PARTICLEARRAY: SQFDataType.ParticleArray,
    };

    private static readonly WIKI_TYPES_REGEX_STRING = Object.keys(
        BikiTextInterpreter.WIKI_TYPE_CONVERSION_MAP
    ).map((typeName) => typeName.replaceAll("|", "\\|"));

    private parseWikiType(wikiType: string): SQFDataType {
        const type = BikiTextInterpreter.WIKI_TYPE_CONVERSION_MAP[wikiType.toUpperCase()];
        if (!type) {
            throw new Error(`Could not find data type to match wiki type: ${wikiType}`);
        }

        return type;
    }

    private readonly WIKIPEDIA_BASE_URL = "https://en.wikipedia.org/wiki";
    private readonly BIKI_BASE_URL = "https://community.bistudio.com/wiki";
    private readonly SIMPLE_REPLACEMENTS: [
        RegExp | string,
        string | ((substring: string, ...args: any[]) => string)
    ][] = [
        ["[[a or b|{{!}}{{!}}]]", "||"],
        ["[[! a|!]]", "!"],
        // bold text
        [/\'\'\'+(.+?)\'\'\'+/gi, "**$1**"],
        // italic text
        [/\'\'+(.+?)\'\'+/gi, "_$1_"],
        // emphasized text
        [/{{hl\|(?:\[\[){0,1}(.+?)(?:\]\]){0,1}}}/gi, "**`$1`**"],
        // other commands
        [/\[\[(\w+)\]\]/gi, "`$1`"],
        // other language code block
        [
            /(<syntaxhighlight\s*lang="(.*)">)(\s*)([\s\S]+?)(\s*<\/syntaxhighlight>)/gi,
            "```$2\n$4\n```",
        ],
        [/<br>/gi, "\n"],
        // spoilers
        [/\s*\<(\/{0,1})spoiler\>\s*/gi, ""],
        // Links to examples inside the doc
        [
            /{{\s*link\s*\|\s*#Example\s*(\d+)\s*}}/gi,
            getStringReplacer((replacementInfo) => {
                const exampleNumber = replacementInfo.captureGroups[1];
                return `_Example ${exampleNumber}_`;
            }),
        ],
        // Links to syntaxes inside the doc
        [
            /{{\s*link\s*\|\s*#Syntax\s*(\d+)\s*}}/gi,
            getStringReplacer((replacementInfo) => {
                const exampleNumber = replacementInfo.captureGroups[1];
                return `_Syntax ${exampleNumber}_`;
            }),
        ],
        // external links
        [/{{link\|([\s\S]+?)\|([\s\S]+?)}}/gi, "[$2]($1)"],
        // Internal Hyperlinks
        [
            /{{\s*link\s*\|\s*([\s\w]+)\#(.*?)}}/gi,
            getStringReplacer((replacementInfo) => {
                const originalSubSection = replacementInfo.captureGroups[2].trim();
                const subUrl = originalSubSection.replaceAll(" ", "_");
                const section = replacementInfo.captureGroups[1].trim();
                return `[${section} - ${originalSubSection}](${
                    this.BIKI_BASE_URL
                }/${section.replaceAll(" ", "_")}#${subUrl})`;
            }),
        ],
        // Described Internal Hyperlinks
        [
            /\[\[([\w\s#:]+)\|([\S\s]+?)\]\]/gi,
            getStringReplacer((replacementInfo) => {
                const subUrl = replacementInfo.captureGroups[1].trim().replaceAll(" ", "_");
                const linkText = replacementInfo.captureGroups[2].trim();
                return `[${linkText}](${this.BIKI_BASE_URL}/${subUrl})`;
            }),
        ],
        [
            /{{wikipedia\|(.*)\|(.*)}}/gi,
            getStringReplacer((replacementInfo) => {
                const subUrl = encodeURIComponent(replacementInfo.captureGroups[1]);
                const linkText = replacementInfo.captureGroups[2];
                return `[${linkText}](${this.WIKIPEDIA_BASE_URL}/${subUrl})`;
            }),
        ],
        // Static Internal Hyperlinks
        [
            /\[\[([\w/:\s]+)\]\]/gi,
            getStringReplacer((replacementInfo) => {
                const subUrl = replacementInfo.captureGroups[1].trim().replaceAll(" ", "_");
                const linkText = replacementInfo.captureGroups[1].trim();
                return `[${linkText}](${this.BIKI_BASE_URL}/${subUrl})`;
            }),
        ],
        [/{{controls\|(\w+)}}/gi, "$1"],
        [/{{controls\|(\w+)\|(\w+)}}/gi, "$1 + $2"],
        ["<nowiki/>", ""],
    ];

    /* ----------------------------------------------------------------------------
        convertTextToMarkdown
    ---------------------------------------------------------------------------- */
    public convertTextToMarkdown(text: string | undefined): string {
        if (!text) return "";

        let convertedText = text;

        // code blocks are seperated to ensure that any code formatting is not overwritten
        // during formatting
        const sqfCodeBlockMatches = convertedText.matchAll(/(<sqf>\s*)([\s\S]*?)(\s*<\/sqf>)/gi);
        const convertedCodeExamples: string[] = [];
        for (const match of sqfCodeBlockMatches) {
            const matchString = match[0];
            if (!matchString) continue;
            convertedCodeExamples.push(matchString);
            convertedText = convertedText.replace(matchString, "<SQFCodeToReplace>");
        }

        const dataTypeMatches = text.matchAll(
            new RegExp(`\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\]`, "gi")
        );
        for (const match of dataTypeMatches) {
            const originalTypeText = match[0];
            const specificType = match[1];
            text = text.replaceAll(originalTypeText, `\`${this.parseWikiType(specificType)}\``);
        }

        this.SIMPLE_REPLACEMENTS.forEach(([selector, replacement]) => {
            if (typeof selector === "string") {
                convertedText = convertedText.replaceAll(selector, replacement as string);
                return;
            }
            convertedText = convertedText.replace(selector, replacement as string);
        });

        Object.entries(BikiTextInterpreter.TEMPLATE_KEY_MAP).forEach(
            ([templateKey, templateInfo]) => {
                const replacementText = templateInfo.text;
                const simpleTextRegex = new RegExp(`{{${templateKey}}}`, "gi");
                convertedText = convertedText.replace(simpleTextRegex, replacementText);

                if (templateInfo.gameVersionIcon) {
                    const gameVersionRegex = new RegExp(
                        `{{GVI\\|${templateKey}\\|([\\d\\.]+).*?}}`,
                        "gi"
                    );
                    const gameIconMatches = convertedText.matchAll(gameVersionRegex);
                    for (const match of gameIconMatches) {
                        let newText = replacementText;
                        const gameVersion = match[1];
                        if (gameVersion) newText += ` v${gameVersion}`;

                        const originalString = match[0];
                        convertedText = convertedText.replace(originalString, `(**${newText}**)`);
                    }
                }

                if (templateInfo.feature) {
                    const featureRegex = new RegExp(
                        `{{Feature\\s*\\|\\s*${templateKey}\\s*\\|([\\s\\S]+?)}}(?=(?:\n+|$))`,
                        // `{{Feature\\s*\\|\\s*${templateKey}\\s*\\|([\\s\\S]+?)}}(?=(?:\\s+(?:\\|\\w+=|{{))|$)`,
                        "gi"
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

                if (templateInfo.icon) {
                    const iconRegex = new RegExp(`{{icon\\|${templateKey}\\|[\\d\\.]+.*?}}`, "gi");
                    const iconMatches = convertedText.matchAll(iconRegex);
                    for (const match of iconMatches) {
                        let newText = replacementText;
                        const originalString = match[0];
                        convertedText = convertedText.replace(originalString, `(**${newText}**)`);
                    }
                }
            }
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

        return convertedText.replaceAll("<sqf>", "").replaceAll("</sqf>", "").trim();
    }

    /* ----------------------------------------------------------------------------
        getEffectLocality
    ---------------------------------------------------------------------------- */
    public getEffectLocality(pageDetailContent: string | undefined): SQFEffectLocality | undefined {
        if (!pageDetailContent) return;

        pageDetailContent = pageDetailContent.toLowerCase();
        if (pageDetailContent.includes("global")) {
            return SQFEffectLocality.GLOBAL;
        } else if (pageDetailContent.includes("local")) {
            return SQFEffectLocality.LOCAL;
        }
    }

    /* ----------------------------------------------------------------------------
        getArgumentLocality
    ---------------------------------------------------------------------------- */
    public getArgumentLocality(
        pageDetailContent: string | undefined
    ): SQFArgumentLocality | undefined {
        if (!pageDetailContent) return;

        pageDetailContent = pageDetailContent.toLowerCase();
        if (pageDetailContent.includes("global")) {
            return SQFArgumentLocality.GLOBAL;
        } else if (pageDetailContent.includes("local")) {
            return SQFArgumentLocality.LOCAL;
        }
    }

    /* ----------------------------------------------------------------------------
        isPageCategory
    ---------------------------------------------------------------------------- */
    public isPageCategory(pageTitle: string): boolean {
        return pageTitle.startsWith("Category:");
    }

    /* ----------------------------------------------------------------------------
        isPageCategory
    ---------------------------------------------------------------------------- */
    public parseParameter(parameterContent: string): SQFParameterConfig {
        return {
            name: parameterContent.match(/.+?(?=(?:\:|\s+-)\s+)/i)?.at(0) || null,
            description: parameterContent.match(/(?<=.+(?:\:|\s+-)\s+)[\s\S]+/i)?.at(0) || null,
        };
    }

    /* ----------------------------------------------------------------------------
        grammarTypeMap
    ---------------------------------------------------------------------------- */
    private static readonly grammarTypeMap: IJSON<SQFGrammarType> = {
        if: SQFGrammarType.ControlStatement,
        apply: SQFGrammarType.ControlStatement,
        foreach: SQFGrammarType.ControlStatement,
        or: SQFGrammarType.ConditionOperator,
        and: SQFGrammarType.ConditionOperator,
        tostring: SQFGrammarType.Command,
        "a && b": SQFGrammarType.ConditionOperator,
        "a or b": SQFGrammarType.ConditionOperator,
        true: SQFGrammarType.BooleanLiteral,
        false: SQFGrammarType.BooleanLiteral,
        private: SQFGrammarType.AccessModifier,
        "a % b": SQFGrammarType.ManipulativeOperator,
        "a == b": SQFGrammarType.ComparisonOperator,
        "! a": SQFGrammarType.ConditionOperator,
        not: SQFGrammarType.ConditionOperator,
        localnamespace: SQFGrammarType.NamespaceLiteral,
        currentnamespace: SQFGrammarType.NamespaceLiteral,
        missionnamespace: SQFGrammarType.NamespaceLiteral,
        player: SQFGrammarType.ReservedLiteral,
        missionprofilenamespace: SQFGrammarType.NamespaceLiteral,
        parsingnamespace: SQFGrammarType.NamespaceLiteral,
        profilenamespace: SQFGrammarType.NamespaceLiteral,
        uinamespace: SQFGrammarType.NamespaceLiteral,
        controlnull: SQFGrammarType.NullLiteral,
        displaynull: SQFGrammarType.NullLiteral,
        diaryrecordnull: SQFGrammarType.NullLiteral,
        getor: SQFGrammarType.NullLiteral,
        netobjnull: SQFGrammarType.NullLiteral,
        grpnull: SQFGrammarType.NullLiteral,
        locationnull: SQFGrammarType.NullLiteral,
        nil: SQFGrammarType.NullLiteral,
        objnull: SQFGrammarType.NullLiteral,
        scriptnull: SQFGrammarType.NullLiteral,
        tasknull: SQFGrammarType.NullLiteral,
        teammembernull: SQFGrammarType.NullLiteral,
        confignull: SQFGrammarType.NullLiteral,
        switch: SQFGrammarType.ControlStatement,
        try: SQFGrammarType.ControlStatement,
        catch: SQFGrammarType.ControlStatement,
        case: SQFGrammarType.ControlStatement,
        for: SQFGrammarType.ControlStatement,
        step: SQFGrammarType.ControlStatement,
        break: SQFGrammarType.ControlStatement,
        default: SQFGrammarType.ControlStatement,
        breakout: SQFGrammarType.ControlStatement,
        breakto: SQFGrammarType.ControlStatement,
        breakwith: SQFGrammarType.ControlStatement,
        continue: SQFGrammarType.ControlStatement,
        call: SQFGrammarType.CodeExecutor,
        spawn: SQFGrammarType.CodeExecutor,
        continuewith: SQFGrammarType.ControlStatement,
        else: SQFGrammarType.ControlStatement,
        exit: SQFGrammarType.ControlStatement,
        foreachmemberteam: SQFGrammarType.ControlStatement,
        exitWith: SQFGrammarType.ControlStatement,
        sleep: SQFGrammarType.ControlStatement,
        uisleep: SQFGrammarType.ControlStatement,
        then: SQFGrammarType.ControlStatement,
        throw: SQFGrammarType.ControlStatement,
        to: SQFGrammarType.ControlStatement,
        waituntil: SQFGrammarType.ControlStatement,
        with: SQFGrammarType.ControlStatement,
        halt: SQFGrammarType.ControlStatement,
        while: SQFGrammarType.ControlStatement,
        goto: SQFGrammarType.ControlStatement,
        assert: SQFGrammarType.ControlStatement,
        do: SQFGrammarType.ControlStatement,
        terminate: SQFGrammarType.ControlStatement,
        foreachmemberagent: SQFGrammarType.ControlStatement,
        from: SQFGrammarType.ControlStatement,
        get: SQFGrammarType.PropertyAccessor,
        set: SQFGrammarType.PropertyAccessor,
        select: SQFGrammarType.PropertyAccessor,
        params: SQFGrammarType.PropertyAccessor,
        param: SQFGrammarType.PropertyAccessor,
        getordefault: SQFGrammarType.PropertyAccessor,
        getordefaultcall: SQFGrammarType.PropertyAccessor,
        "a hash b": SQFGrammarType.PropertyAccessor,
        insert: SQFGrammarType.PropertyAccessor,
        this: SQFGrammarType.ReservedLiteral,
        _this: SQFGrammarType.ReservedLiteral,
        _x: SQFGrammarType.ReservedLiteral,
        _forEachIndex: SQFGrammarType.ReservedLiteral,
        _exception: SQFGrammarType.ReservedLiteral,
        _thisScript: SQFGrammarType.ReservedLiteral,
        _thisFSM: SQFGrammarType.ReservedLiteral,
        thisList: SQFGrammarType.ReservedLiteral,
        thisTrigger: SQFGrammarType.ReservedLiteral,
        west: SQFGrammarType.ReservedLiteral,
        east: SQFGrammarType.ReservedLiteral,
        resistance: SQFGrammarType.ReservedLiteral,
        civilian: SQFGrammarType.ReservedLiteral,
        independent: SQFGrammarType.ReservedLiteral,
        blufor: SQFGrammarType.ReservedLiteral,
        opfor: SQFGrammarType.ReservedLiteral,
        compile: SQFGrammarType.StringCompiler,
        compilescript: SQFGrammarType.FileCompiler,
        compilefinal: SQFGrammarType.StringCompiler,
        exec: SQFGrammarType.FileExecutor,
        execfsm: SQFGrammarType.FileExecutor,
        execvm: SQFGrammarType.FileExecutor,
        preprocessFile: SQFGrammarType.FileCompiler,
        loadfile: SQFGrammarType.FileCompiler,
        preprocessfilelinenumbers: SQFGrammarType.FileCompiler,
    };

    /* ----------------------------------------------------------------------------
        getSQFGrammarType
    ---------------------------------------------------------------------------- */
    public getSQFGrammarType(name: string): SQFGrammarType {
        const nameLowered = name.toLowerCase();
        if (nameLowered.includes("_fnc_")) {
            return SQFGrammarType.Function;
        }

        const type = BikiTextInterpreter.grammarTypeMap[nameLowered];
        if (type) {
            return type;
        } else if (BikiTextInterpreter.grammarTypeMap[name]) {
            return BikiTextInterpreter.grammarTypeMap[name];
        }

        return SQFGrammarType.Command;
    }

    /* ----------------------------------------------------------------------------
        getDocumentationLink
    ---------------------------------------------------------------------------- */
    public getDocumentationLink(name: string): string {
        const urlMap: IJSON<string> = {
            "a % b": "a_%25_b",
            "a times b": "a_*_b",
            "a divide b": "a_/_b",
            "a switch b": "a_:_b",
            "a less b": "a_less_b",
            "a greater b": "a_greater_b",
            "a less= b": "a_less=_b",
            "a greater= b": "a_greater=_b",
            "a == b": "a_==_b",
            "config greater greater name": "config_greater_greater_name",
            "a ^ b": "a_^_b",
            "||": "a_or_b",
        };

        const urlName = urlMap[name.toLowerCase()];
        if (urlName) {
            name = urlName;
        }

        return `https://community.bistudio.com/wiki/${name}`;
    }

    /* ----------------------------------------------------------------------------
        getLabel
    ---------------------------------------------------------------------------- */
    public getLabel(name: string): string {
        // todo get docs for "false" and "="
        const labelMap: IJSON<string> = {
            "a or b": "||",
            "! a": "!",
            "a != b": "!=",
            "a hash b": "#",
            "a % b": "%",
            "a && b": "&&",
            "a times b": "*",
            "a divide b": "/",
            "a switch b": ":",
            "a less b": "<",
            "a greater b": ">",
            "a less= b": "<=",
            "a greater= b": ">=",
            "a == b": "==",
            "config greater greater name": ">>",
            "a ^ b": "^",
        };

        const alternateLabel = labelMap[name.toLowerCase()];
        if (alternateLabel) {
            return alternateLabel;
        }

        return name;
    }

    /* ----------------------------------------------------------------------------
        handlePageExceptions
    ---------------------------------------------------------------------------- */
    public handlePageExceptions(page: UnparsedBikiPage): UnparsedBikiPage {
        const pageHandler = BIKI_EXCEPTIONS.get(page.title);
        if (!pageHandler) return page;

        return pageHandler(page);
    }
}

export class BikiFunctionsParser extends BikiParser {
    constructor() {
        super("functions");
    }
}

export class BikiCommandsParser extends BikiParser {
    constructor() {
        super("commands");
    }
}
