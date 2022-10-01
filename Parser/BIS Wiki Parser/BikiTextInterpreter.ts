import { IJSON, SQFGrammarType } from "../SQFParser.namespace";
import { WikiPageDetailType } from "./BikiTypes";

interface DetailTypeChecker {
	checkFunction: (a: string) => boolean,
	wikiType: WikiPageDetailType
}

export class BikiTextInterpreter {
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
		grammarTypeMap
	---------------------------------------------------------------------------- */
	private static readonly grammarTypeMap: IJSON<SQFGrammarType> = {
		// todo: implement
	};


	/* ----------------------------------------------------------------------------
		getProperTitle
	---------------------------------------------------------------------------- */
	public static getProperTitle(wikiTitile: string): string {
		wikiTitile = wikiTitile.trim();
        if (typeof wikiTitile == "boolean") {
			// ensuring it is not mistaken by JS for an actual bool value
            wikiTitile = new Boolean(wikiTitile).toString();
        }

        const mappedName = BikiTextInterpreter.commandNameMap[wikiTitile];
        if (mappedName) {
            return mappedName;
        }
		
		// xml does not preserve underscores but replaces them with spaces
		const underscoredTitle = wikiTitile.replace(/\ /g,'_');
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

	private static readonly detailTypeCheckers: DetailTypeChecker[] = [
		{checkFunction: this.isSyntax, wikiType: WikiPageDetailType.Syntax,},
		{checkFunction: this.isParameter, wikiType: WikiPageDetailType.Parameter,},
		{checkFunction: this.isReturnType, wikiType: WikiPageDetailType.Return,},
		{checkFunction: this.isExample, wikiType: WikiPageDetailType.Example,},
		{checkFunction: this.isDescription, wikiType: WikiPageDetailType.Description,},
		{checkFunction: this.isArgLocality, wikiType: WikiPageDetailType.ArgLocality,},
		{checkFunction: this.isEffectLocality, wikiType: WikiPageDetailType.EffectLocality,},
	];

	/* ----------------------------------------------------------------------------
		getDetailType
	---------------------------------------------------------------------------- */
	public getDetailType(detail: string): WikiPageDetailType {
		for (const {checkFunction,wikiType} of BikiTextInterpreter.detailTypeCheckers) {
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
		name = name.toLowerCase();
		if (name.includes('_fnc_')) {
			return SQFGrammarType.Function;
		}
		
		const type = BikiTextInterpreter.grammarTypeMap[name];
		if (type) {
			return type;
		}

		return SQFGrammarType.Command;
	}
}