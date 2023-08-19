import { IJSON, SQFGrammarType, SQFDataType, SQFEffect, SQFArgument } from "../SQFParser.namespace";
import { WikiPageDetailType, WikiPageType } from "./BikiTypes";
import { SQFGrammarTypeMap } from "./SQFCommandsGrammarMap";

interface DetailTypeChecker {
    checkFunction: (a: string) => boolean;
    wikiType: WikiPageDetailType;
}

export class BikiTextInterpreter {
    /* ----------------------------------------------------------------------------
		wikiTypeToDataTypeMap
	---------------------------------------------------------------------------- */
    private static readonly wikiTypeToDataTypeMap: IJSON<SQFDataType> = {
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
        POSITION2D: SQFDataType.Position2d,
        POSITION3D: SQFDataType.Position3d,
        POSITIONATL: SQFDataType.PositionATL,
        POSITIONASL: SQFDataType.PositionASL,
        POSITIONAGLS: SQFDataType.PositionAGLS,
        POSITIONAGL: SQFDataType.PositionAGL,
        POSITIONRELATIVE: SQFDataType.PositionRelative,
        "PARTICLE ARRAY": SQFDataType.ParticleArray,
        PARTICLEARRAY: SQFDataType.ParticleArray,
        IDENTICAL: SQFDataType.IDENTICAL,
    };

    /* ----------------------------------------------------------------------------
		commandNameMap
	---------------------------------------------------------------------------- */
    public static readonly commandNameMap: IJSON<string> = {
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
		filenameMap
	---------------------------------------------------------------------------- */
    private static readonly filenameMap: IJSON<string> = ((obj: object) => {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => {
                // TODO: cleanup into map
                if (k === "a / b") {
                    k = "a divide b";
                }
                if (k === "a : b") {
                    k = "a switch b";
                }
                if (k === "a * b") {
                    k = "a times b";
                }

                return [v, k];
            })
        );
    })(BikiTextInterpreter.commandNameMap);

    /* ----------------------------------------------------------------------------
		grammarTypeMap
	---------------------------------------------------------------------------- */
    private static readonly grammarTypeMap: IJSON<SQFGrammarType> = SQFGrammarTypeMap;

    /* ----------------------------------------------------------------------------
		siteUrlMap
	---------------------------------------------------------------------------- */
    private static readonly siteUrlMap: IJSON<string> = {
        wikipedia: "https://en.wikipedia.org/wiki", // do not include trailing slash
    };

    /* ----------------------------------------------------------------------------
		getSQFDataType
	---------------------------------------------------------------------------- */
    public getSQFDataType(unParsedType: string): SQFDataType {
        const typeParsed =
            BikiTextInterpreter.wikiTypeToDataTypeMap[unParsedType.toUpperCase().trim()];

        return typeParsed;
    }

    /* ----------------------------------------------------------------------------
		getProperTitle
	---------------------------------------------------------------------------- */
    public static getProperTitle(wikiTitle: string): string {
        if (typeof wikiTitle == "boolean") {
            // ensuring it is not mistaken by JS for an actual bool value
            wikiTitle = new Boolean(wikiTitle).toString();
        }

        wikiTitle = wikiTitle.trim();
        const mappedName = BikiTextInterpreter.commandNameMap[wikiTitle];
        if (mappedName) {
            return mappedName;
        }

        // xml does not preserve underscores but replaces them with spaces
        const underscoredTitle = wikiTitle.replace(/\ /g, "_");
        return underscoredTitle;
    }

    /* ----------------------------------------------------------------------------
		Misc Type Checkers
	---------------------------------------------------------------------------- */
    private static isSyntax(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|s\d*\=/);
    }
    private static isParameter(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|p\d*=/);
    }
    private static isServerExec(stringToCheck: string): boolean {
        return !!stringToCheck.toLowerCase().startsWith("|serverexec");
    }
    private static isReturnType(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|r\d*=/);
    }
    private static isExample(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|x\d*\=/);
    }
    private static isDescription(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|descr");
    }
    private static isArgLocality(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|arg");
    }
    private static isEffectLocality(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|eff");
    }
    private static isPageType(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|type");
    }
    private static isFunctionExecution(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|exec\s*\=/);
    }

    private static readonly detailTypeCheckers: DetailTypeChecker[] = [
        {
            checkFunction: this.isFunctionExecution,
            wikiType: WikiPageDetailType.FunctionExecution,
        },
        {
            checkFunction: this.isPageType,
            wikiType: WikiPageDetailType.PageType,
        },
        { checkFunction: this.isSyntax, wikiType: WikiPageDetailType.Syntax },
        {
            checkFunction: this.isParameter,
            wikiType: WikiPageDetailType.Parameter,
        },
        {
            checkFunction: this.isReturnType,
            wikiType: WikiPageDetailType.Return,
        },
        { checkFunction: this.isExample, wikiType: WikiPageDetailType.Example },
        {
            checkFunction: this.isDescription,
            wikiType: WikiPageDetailType.Description,
        },
        {
            checkFunction: this.isArgLocality,
            wikiType: WikiPageDetailType.ArgLocality,
        },
        {
            checkFunction: this.isEffectLocality,
            wikiType: WikiPageDetailType.EffectLocality,
        },
        {
            checkFunction: this.isServerExec,
            wikiType: WikiPageDetailType.ServerExecution,
        },
    ];

    /* ----------------------------------------------------------------------------
		getDetailType
	---------------------------------------------------------------------------- */
    public getDetailType(detail: string): WikiPageDetailType {
        for (const { checkFunction, wikiType } of BikiTextInterpreter.detailTypeCheckers) {
            if (checkFunction(detail)) {
                return wikiType;
            }
        }

        return WikiPageDetailType.Unknown;
    }

    /* ----------------------------------------------------------------------------
		getSQFGrammarType
	---------------------------------------------------------------------------- */
    public getSQFGrammarType(name: string): SQFGrammarType {
        const nameLowered = (name = name.toLowerCase());
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
    public getEffectLocality(pageDetail: string): SQFEffect | null {
        pageDetail = pageDetail.toLowerCase();
        if (pageDetail.includes("global")) {
            return SQFEffect.GLOBAL;
        } else if (pageDetail.includes("local")) {
            return SQFEffect.LOCAL;
        }

        return null;
    }

    /* ----------------------------------------------------------------------------
		getEffectLocality
	---------------------------------------------------------------------------- */
    public getArgumentLocality(pageDetail: string): SQFArgument | null {
        pageDetail = pageDetail.toLowerCase();
        if (pageDetail.includes("global")) {
            return SQFArgument.GLOBAL;
        } else if (pageDetail.includes("local")) {
            return SQFArgument.LOCAL;
        }

        return null;
    }

    /* ----------------------------------------------------------------------------
		getWikiPageType
	---------------------------------------------------------------------------- */
    public getWikiPageType(pageDetail: string): WikiPageType {
        const match: RegExpMatchArray | null = pageDetail.match(/(?<=\|type\s*=)\w*/i);
        if (match) {
            const pageType = match[0].toLowerCase();
            if (pageType === WikiPageType.Function) {
                return WikiPageType.Function;
            }
            if (pageType === WikiPageType.Command) {
                return WikiPageType.Function;
            }
        }

        return WikiPageType.Unknown;
    }

    /* ----------------------------------------------------------------------------
		getFilename
	---------------------------------------------------------------------------- */
    public getFilename(pageTitle: string): string {
        const filename = BikiTextInterpreter.filenameMap[pageTitle];
        if (filename) {
            return filename;
        }

        return pageTitle;
    }

    /* ----------------------------------------------------------------------------
		getWikiExternalUrl
	---------------------------------------------------------------------------- */
    public getWikiExternalUrl(nameOfSiteOnWiki: string): string | undefined {
        return BikiTextInterpreter.siteUrlMap[nameOfSiteOnWiki.toLowerCase()];
    }
}
