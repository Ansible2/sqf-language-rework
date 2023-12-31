import { XMLParser } from "fast-xml-parser";
import {
    DocParser,
    IJSON,
    ParsedPage,
    ParsedSyntax,
    ParsedSyntaxDataType,
    SQFArgumentLocality,
    SQFArray,
    SQFDataType,
    SQFEffectLocality,
    SQFGrammarType,
    SQFSyntaxType,
    UnparsedPage,
} from "../SQFParser.namespace";
import path from "path";
import fs from "fs";
import { SQFGrammarTypeMap } from "../BIKI Parser/SQFCommandsGrammarMap";

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
            try {
                const parsedPage = this.parseBikiPage(unparsedPage);
                if (!parsedPage) return;
                parsedPages.push(parsedPage);
            } catch (error) {
                console.log(error);
            }
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
        if (this.textInterpreter.isPageCategory(titleFormatted)) return null;

        const pageDetails = this.getBikiPageDetails(page);
        if (!pageDetails || pageDetails.details.length < 1) return null;

        const detailsMap = pageDetails.detailsMap;

        const examples: string[] = [];
        const exampleDetails = detailsMap.get(BikiPageDetailType.Example);
        if (exampleDetails) {
            exampleDetails.forEach((detail) => {
                if (!detail.content) return;
                const exampleInMarkdown = this.textInterpreter.convertTextToMarkdown(
                    detail.content
                );
                examples.push(exampleInMarkdown);
            });
        }

        const syntaxExamples: string[] = [];
        const syntaxDetails = detailsMap.get(BikiPageDetailType.Syntax);
        if (syntaxDetails) {
            syntaxDetails.forEach((detail) => {
                if (!detail.content) return;
                const syntaxInMarkdown = this.textInterpreter.convertTextToMarkdown(detail.content);
                syntaxExamples.push(syntaxInMarkdown);
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

        const parsedSyntaxes: ParsedSyntax[] = [];
        pageDetails.syntaxMap.forEach((bikiSyntax) => {
            parsedSyntaxes.push(this.parseSyntax(bikiSyntax, detailsMap));
        });

        return {
            name: titleFormatted,
            description,
            examples,
            syntaxExamples,
            parsedSyntaxes,
            argumentLocality,
            effectLocality,
            serverExecution,
            grammarType: this.textInterpreter.getSQFGrammarType(titleFormatted),
        };
    }

    /* ----------------------------------------------------------------------------
        parseSyntax
    ---------------------------------------------------------------------------- */
    private parseSyntax(
        bikiSyntax: BikiSyntax,
        detailsMap: Map<BikiPageDetailType, BikiPageDetail[]>
    ): ParsedSyntax {
        // TODO: this still may be desired in some cases
        // const definedSyntax = this.textInterpreter.getDefinedSyntax(bikiSyntax);
        // if (definedSyntax) return definedSyntax;

        let leftParameters: ParsedSyntaxDataType | undefined;
        let rightParameters: ParsedSyntaxDataType | undefined;
        let returnType: ParsedSyntaxDataType = SQFDataType.Nothing;

        const functionExecutionDetail = detailsMap.get(BikiPageDetailType.FunctionExecution)?.at(0);
        let functionSyntaxType:
            | SQFSyntaxType.UnscheduledFunction
            | SQFSyntaxType.ScheduledFunction
            | undefined;
        if (functionExecutionDetail) {
            functionSyntaxType =
                this.textInterpreter.getFunctionSyntaxType(functionExecutionDetail);
        }

        if (!bikiSyntax.syntaxDetail) {
            throw new Error(`syntax detail was not provided -> ${bikiSyntax}`);
        }

        const { leftParameterCount, rightParameterCount, rightIsArray, leftIsArray } =
            this.textInterpreter.getSyntaxParameterSideInfo(
                bikiSyntax.syntaxDetail.content,
                bikiSyntax.syntaxTitle
            );

        let usedLeftParameterCount = 0;
        let usedRightParameterCount = 0;
        const leftParamsCollection: ParsedSyntaxDataType[] = [];
        const rightParamsCollection: ParsedSyntaxDataType[] = [];
        for (const parameterDetail of bikiSyntax.parameterDetails) {
            const dataType = this.textInterpreter.getDatatypeFromDetailContent(
                parameterDetail.content
            );
            if (!dataType) {
                throw new Error(
                    `Could not parse parameter data type from content -> ${parameterDetail}`
                );
            }

            if (usedLeftParameterCount !== leftParameterCount) {
                usedLeftParameterCount++;
                if (leftIsArray) {
                    leftParamsCollection.push(dataType);
                } else {
                    leftParameters = dataType;
                }
                continue;
            }

            if (usedRightParameterCount !== rightParameterCount) {
                usedRightParameterCount++;
                if (rightIsArray) {
                    rightParamsCollection.push(dataType);
                } else {
                    rightParameters = dataType;
                }
                continue;
            }
        }

        // TODO: in the case of createHashMapFromArray, it would be an array of x not exactly x
        if (leftIsArray) {
            leftParameters = this.textInterpreter.combineDataTypeArray(leftParamsCollection);
        }
        if (rightIsArray) {
            rightParameters = this.textInterpreter.combineDataTypeArray(rightParamsCollection);
        }

        if (bikiSyntax.returnDetail) {
            const returnDatatype = this.textInterpreter.getDatatypeFromDetailContent(
                bikiSyntax.returnDetail.content
            );
            if (!returnDatatype) {
                throw new Error(
                    `Could not parse return data type from return detail -> ${bikiSyntax}`
                );
            }
        }

        // functions
        if (functionSyntaxType && leftParameters) {
            return {
                syntaxType: functionSyntaxType,
                leftParameters,
                returnType,
            };
        }

        // nular
        if (!functionSyntaxType && !leftParameters && !rightParameters) {
            return {
                syntaxType: SQFSyntaxType.NularOperator,
                returnType,
            };
        }

        // unary
        if (!functionSyntaxType && !leftParameters && rightParameters) {
            return {
                syntaxType: SQFSyntaxType.UnaryOperator,
                rightParameters,
                returnType,
            };
        }

        // binary
        if (!functionSyntaxType && leftParameters && rightParameters) {
            return {
                syntaxType: SQFSyntaxType.BinaryOperator,
                rightParameters,
                leftParameters,
                returnType,
            };
        }

        throw new Error(`Did not parse valid syntax from provided details ${bikiSyntax}`);
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
            /(?<=^{{RV[.\s\S]*)(\|([\s\w]*)\=(?!\=)([\S\s]*?))(?=(\s*\n+}}\s*$)|(\|([\s\w]*)\=(?!\=)))/gi;
        const pageDetails: IterableIterator<RegExpMatchArray> | undefined =
            page.text.matchAll(matchPageDetailsRegEx);

        if (!pageDetails) return null;

        const pageDetailsArray = [...pageDetails];
        if (pageDetailsArray.length < 1) return null;

        const allParsedDetails: BikiPageDetail[] = [];
        const detailsMap: Map<BikiPageDetailType, BikiPageDetail[]> = new Map();
        const syntaxMap: Map<number, BikiSyntax> = new Map();
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

            const isParameter = pageDetail.type === BikiPageDetailType.Parameter;
            const isSyntaxExample = pageDetail.type === BikiPageDetailType.Syntax;
            const isReturn = pageDetail.type === BikiPageDetailType.Syntax;
            if (!isParameter && !isSyntaxExample && !isReturn) return;

            const syntaxIdString = pageDetail.name.match(/(?<=\w+)\d{1}/i)?.at(0);
            if (!syntaxIdString) {
                throw new Error(`Could not locate syntax index in detail: ${pageDetail}`);
            }
            const syntaxId = parseInt(syntaxIdString);
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

interface BikiFunctionalTypeGetter {
    matcher: (input: string, context?: any) => boolean;
    parser: (input: string, context?: any) => ParsedSyntaxDataType;
    context?: any;
}

interface BikiRegexTypeGetter {
    matcher: RegExp;
    parser: (match: RegExpMatchArray, context?: any) => ParsedSyntaxDataType;
    context?: any;
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
    private static readonly COMMAND_NAME_MAP: IJSON<string> = {
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
        const mappedName = BikiTextInterpreter.COMMAND_NAME_MAP[title];
        if (mappedName) return mappedName;

        // xml does not preserve underscores but replaces them with spaces
        const underscoredTitle = title.replace(/\ /g, "_");
        return underscoredTitle;
    }

    /* ----------------------------------------------------------------------------
        TEMPLATE_KEY_MAP
    ---------------------------------------------------------------------------- */
    private static readonly TEMPLATE_KEY_MAP: IJSON<{
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
    public convertTextToMarkdown(text: string | undefined): string {
        if (!text) return "";

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

        Object.entries(BikiTextInterpreter.TEMPLATE_KEY_MAP).forEach(
            ([templateKey, templateInfo]) => {
                const replacementText = templateInfo.text;
                const simpleTextRegex = new RegExp(`\\{\\{${templateKey}\\}\\}`, "gi");
                convertedText = convertedText.replace(simpleTextRegex, replacementText);

                if (templateInfo.gameVersionIcon) {
                    const gameVersionRegex = new RegExp(
                        `\\{\\{GVI\\|${templateKey}\\|([\\d\\.]+).*?\\}\\}`,
                        "gi"
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
                        `\\{\\{Feature\\s*\\|\\s*${templateKey}\\s*\\|{0,1}([\\W\\w]+?)\\}\\}`,
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
            }
        );

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

    /* ----------------------------------------------------------------------------
        grammarTypeMap
    ---------------------------------------------------------------------------- */
    private static readonly grammarTypeMap: IJSON<SQFGrammarType> = SQFGrammarTypeMap;

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
        "POSITION#POSITIONASL\\|POSITIONASL": SQFDataType.PositionASL,
        POSITIONAGLS: SQFDataType.PositionAGLS,
        "POSITION#POSITIONAGLS|POSITIONAGLS": SQFDataType.PositionAGLS,
        POSITIONAGL: SQFDataType.PositionAGL,
        "POSITION#POSITIONAGL|POSITIONAGL": SQFDataType.PositionAGL,
        POSITIONRELATIVE: SQFDataType.PositionRelative,
        "POSITION#POSITIONRELATIVE|POSITIONRELATIVE": SQFDataType.PositionRelative,
        "PARTICLE ARRAY": SQFDataType.ParticleArray,
        PARTICLEARRAY: SQFDataType.ParticleArray,
        IDENTICAL: SQFDataType.IDENTICAL,
    };

    private static getSqfDataTypeFromWikiType(wikiType: string): SQFDataType {
        const type = this.WIKI_TYPE_CONVERSION_MAP[wikiType.toUpperCase()];
        if (!type) {
            throw new Error(`Could not find data type to match wiki type: ${wikiType}`);
        }

        return type;
    }

    private static readonly WIKI_TYPES_REGEX_STRING = Object.keys(
        BikiTextInterpreter.WIKI_TYPE_CONVERSION_MAP
    ).map((typeName) => typeName.replaceAll("|", "\\|"));

    /* ----------------------------------------------------------------------------
        TYPE_PARSERS
    ---------------------------------------------------------------------------- */
    private static readonly TYPE_PARSERS: (BikiRegexTypeGetter | BikiFunctionalTypeGetter)[] = [
        {
            matcher(input: string) {
                return input.toLowerCase().startsWith("b: identical to ''a''");
            },
            parser: () => SQFDataType.IDENTICAL,
        },
        {
            matcher(input: string) {
                return input.toLowerCase().startsWith("nothing");
            },
            parser: () => SQFDataType.Nothing,
        },
        {
            matcher(input: string) {
                return input
                    .toLowerCase()
                    .startsWith("varspace: variable space in which variable can be set.");
            },
            parser: () => SQFDataType.Namespace,
        },
        {
            matcher(input: string) {
                return input.toLowerCase().startsWith("in format [x,y] in meters");
            },
            parser: () => SQFDataType.Position2d,
        },
        {
            // inAreaArray
            // |p1= positions: [[Array]] of [[Object]]s and/or [[Position]]s
            // /\[\[array\]\] of \[\[(\S+)\]\]s{0,1} and\/or \[\[(\S+)\]\]/i
            matcher: new RegExp(
                `\\[\\[array\\]\\] of \\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\]s{0,1} and\\/or \\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\]`,
                "i"
            ),
            parser(match: RegExpMatchArray) {
                const types = [match[1], match[2]].map(
                    BikiTextInterpreter.getSqfDataTypeFromWikiType
                );
                return SQFArray.ofAnyOfThese(types);
            },
        },
        {
            // |p22= '''targets''' (Optional, default: 0): [[Number]], [[Object]], [[String]], [[Side]], [[Group]] or [[Array]] - See the main syntax above for more details.
            // |p2= area: [[Object]], [[String]], [[Location]]
            // |p2= mode: [[String]], [[Number]] or [[Array]]:
            // |p2= area: [[Object]], [[Location]] or [[String]] - the defined area:
            // /((?<=[)\w]+?: )\[\[(\S+)\]\](?=, \[\[\S+\]\])|(?<!\[\[Array\]\] in format.*)(?<=\[\[\S+\]\], )\[\[(\S+)\]\]|(?<=\]\], \[\[\S+\]\],{0,1} or )\[\[(\S+)\]\](?=\s))/gi
            context: {
                // (?<=[)\w]+?: )\[\[(\w+)\]\](?=, \[\[\w+\]\])
                listStartRegex: new RegExp(
                    `(?<=[)\\w]+?: )\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\](?=, \\[\\[${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING}\\]\\])`,
                    "i"
                ),
                // (?<!\[\[Array\]\] in format.*)(?<=\[\[\w+\]\], )\[\[(\w+)\]\]
                middleToPossibleEndOfListRegex: new RegExp(
                    `(?<!\\[\\[Array\\]\\] in format.*)(?<=\\[\\[${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING}\\]\\], )\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\]`,
                    "gi"
                ),
                // (?<=\]\], \[\[\w+\]\],{0,1} or )\[\[(\w+)\]\](?=\s)
                otherListEndingRegex: new RegExp(
                    `(?<=\\]\\], \\[\\[${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING}\\]\\],{0,1} or )\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\](?=\\s)`,
                    "i"
                ),
            },
            matcher(
                input: string,
                context?: {
                    listStartRegex: RegExp;
                    middleToPossibleEndOfListRegex: RegExp;
                    otherListEndingRegex: RegExp;
                }
            ) {
                if (
                    context?.listStartRegex.test(input) ||
                    context?.otherListEndingRegex.test(input) ||
                    context?.middleToPossibleEndOfListRegex.test(input)
                ) {
                    return true;
                }

                return false;
            },
            parser(
                input: string,
                context?: {
                    listStartRegex: RegExp;
                    middleToPossibleEndOfListRegex: RegExp;
                    otherListEndingRegex: RegExp;
                }
            ) {
                if (!context) throw new Error(`Context was not included for list matching`);

                const unparsedTypes: string[] = [];

                const listStartTypeMatch = input.match(context.listStartRegex)?.at(1);
                if (listStartTypeMatch) unparsedTypes.push(listStartTypeMatch);

                const listBodyMatches = input.matchAll(context.middleToPossibleEndOfListRegex);
                for (const match of listBodyMatches) {
                    const typeMatch = match[1];
                    unparsedTypes.push(typeMatch);
                }

                const possibleListEndTypeMatch = input.match(context.listStartRegex)?.at(1);
                if (possibleListEndTypeMatch) unparsedTypes.push(possibleListEndTypeMatch);

                return unparsedTypes.map(BikiTextInterpreter.getSqfDataTypeFromWikiType);
            },
        },
        {
            // inArea
            // |p1= position: [[Object]] or [[Array]] in format [[Position#Introduction|Position2D]] or [[Position#Introduction|Position3D]] (must be [[Position#PositionAGL|PositionAGL]] if area is checked in 3D)
            // example test regex for other apps
            // /(?:\[\[(\S+)\]\] or |: ){0,1}\[\[(\S+)\]\](?: - center of the area){0,1} in format \[\[([\S]+)\]\](?:, | or )\[\[([\S]+)\]\](\s*\(must be \[\[([\S]+)\]\]){0,1}/i
            matcher: new RegExp(
                `(?:\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\] or |: ){0,1}\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\](?: - center of the area){0,1} in format \\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\](?:, | or )\\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\](\\s*\\(must be \\[\\[(${BikiTextInterpreter.WIKI_TYPES_REGEX_STRING})\\]\\]){0,1}`,
                "i"
            ),
            parser(match: RegExpMatchArray) {
                const parsedTypes: ParsedSyntaxDataType = [];

                const firstTypeMatch = match.at(1);
                if (firstTypeMatch) {
                    const firstType =
                        BikiTextInterpreter.getSqfDataTypeFromWikiType(firstTypeMatch);
                    if (firstType !== SQFDataType.Array) parsedTypes.push(firstType);
                }

                const secondTypeMatch = match.at(3);
                if (secondTypeMatch) {
                    const secondType =
                        BikiTextInterpreter.getSqfDataTypeFromWikiType(secondTypeMatch);
                    if (secondType !== SQFDataType.Array) parsedTypes.push(secondType);
                }

                let thirdType = match[4];
                const specificThirdType = match.at(6);
                if (specificThirdType) {
                    thirdType = specificThirdType;
                }
                parsedTypes.push(BikiTextInterpreter.getSqfDataTypeFromWikiType(thirdType));

                return parsedTypes;
            },
        },
        {
            matcher: new RegExp(``, "i"),
            parser(match: RegExpMatchArray) {
                return [];
            },
        },
    ];

    /* ----------------------------------------------------------------------------
        getDatatypeFromDetailContent
    ---------------------------------------------------------------------------- */
    public getDatatypeFromDetailContent(content: string): ParsedSyntaxDataType | null {
        for (const parserInfo of BikiTextInterpreter.TYPE_PARSERS) {
            if (parserInfo.matcher instanceof RegExp) {
                const match = content.match(parserInfo.matcher);
                if (!match || !match.length) continue;

                return (parserInfo as BikiRegexTypeGetter).parser(match, parserInfo.context)!;
            } else {
                const isMatch = parserInfo.matcher(content, parserInfo.context);
                if (!isMatch) continue;

                return (parserInfo as BikiFunctionalTypeGetter).parser(
                    content,
                    parserInfo.context
                )!;
            }
        }

        return null;
    }

    /* ----------------------------------------------------------------------------
        getFunctionSyntaxType
    ---------------------------------------------------------------------------- */
    // TODO: remove any concept of a page detail from the text interpreter
    // be it moving functions around or changing their parameters to not know about it
    public getFunctionSyntaxType(
        functionExecutionDetail: BikiPageDetail
    ): SQFSyntaxType.ScheduledFunction | SQFSyntaxType.UnscheduledFunction {
        if (functionExecutionDetail.type !== BikiPageDetailType.FunctionExecution) {
            throw new Error(
                `Provided detail does is not a function execution detail! ${functionExecutionDetail}`
            );
        }

        if (functionExecutionDetail.orginal.includes("spawn")) {
            return SQFSyntaxType.ScheduledFunction;
        }

        return SQFSyntaxType.UnscheduledFunction;
    }

    /* ----------------------------------------------------------------------------
        isPageCategory
    ---------------------------------------------------------------------------- */
    public isPageCategory(pageTitle: string): boolean {
        return pageTitle.startsWith("Category:");
    }

    /* ----------------------------------------------------------------------------
        getNumberOfParametersOnEachSide
    ---------------------------------------------------------------------------- */
    public getSyntaxParameterSideInfo(
        syntaxExample: string,
        pageName: string
    ): {
        leftParameterCount: number;
        rightParameterCount: number;
        leftIsArray: boolean;
        rightIsArray: boolean;
    } {
        let leftParameterCount = 0;
        let rightParameterCount = 0;
        let leftIsArray = false;
        let rightIsArray = false;

        // test regex
        // /(?<=\[\[\w+\]\].*)(?<=,\s*|(?:\s+|^)\[)\w+(?=,|\]$|\],|\]\s)/gi
        const rightParametersArrayRegex = new RegExp(
            `(?<=\\[\\[${pageName}\\]\\].*)(?<=,\\s*|(?:\\s+|^)\\[)\\w+(?=,|\\]$|\\],|\\]\\s)`,
            "gi"
        );
        const rightSideArrayMatches = syntaxExample.matchAll(rightParametersArrayRegex);
        if (rightSideArrayMatches) {
            rightParameterCount = Array.from(rightSideArrayMatches).length;
            rightIsArray = true;
            // has right side params
        } else {
            const hasRightSideParameterRegex = new RegExp(`\\w+\\s+\\[\\[${pageName}\\]\\]`, "i");
            if (hasRightSideParameterRegex.test(syntaxExample)) rightParameterCount = 1;
        }

        // test regex
        // /(?<=,\s*|(?:\s+|^)\[)\w+(?=,|\]$|\],|\]\s)(?=.*\[\[\w+\]\])/gi
        const leftParametersArrayRegex = new RegExp(
            `(?<=,\\s*|(?:\\s+|^)\\[)\w+(?=,|\\]$|\\],|\\]\\s)(?=.*\\[\\[${pageName}\\]\\])`,
            "gi"
        );
        const leftSideArrayMatches = syntaxExample.matchAll(leftParametersArrayRegex);
        if (leftSideArrayMatches) {
            leftParameterCount = Array.from(leftSideArrayMatches).length;
            leftIsArray = true;
        } else {
            const hasLeftSideParameterRegex = new RegExp(`\\[\\[${pageName}\\]\\]\\s+\\w+`, "i");
            if (hasLeftSideParameterRegex.test(syntaxExample)) leftParameterCount = 1;
        }

        return { leftParameterCount, rightParameterCount, leftIsArray, rightIsArray };
    }

    /* ----------------------------------------------------------------------------
        getDefinedSyntax
    ---------------------------------------------------------------------------- */
    // public getDefinedSyntax(syntaxNumber: number, pageTitle: string): ParsedSyntax | null {
    //     // TODO: implement for inArea commands
    //     return null;
    // }
}
