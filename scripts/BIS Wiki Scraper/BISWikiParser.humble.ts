import { XMLParser } from "fast-xml-parser";
import * as fs from "fs";
import * as path from "path";

interface ParsedSyntax {
    commandName: string;
    leftArgType?: string | string[];
    rightArgType?: string | string[];
    returnType: string;
    type: SyntaxType;
}

enum SyntaxMatchDifference {
    leftArg,
    rightArg,
    NoMatch,
}

enum SyntaxType {
    binary = "SQFSyntaxType.BinaryOperator",
    unary = "SQFSyntaxType.UnaryOperator",
    nular = "SQFSyntaxType.NularOperator",
}

interface WikiPage {
    title: string;
    revision: {
        text: string;
    };
}

// TODO:
// - Multi-param arrays ([[Color|Color (RGBA)]]) are not parsed
// - Some commands appear to not correctly be parsed with more in depth arrays
/// (e.g.) "inAreaArray" has not all of its right operands for syntax 1 and is flat out wrong
/// in being a nular command for syntax 2. Same thing with "entities" command
// - Some commands (camSetDir) use bullet lists as params/lines, need to modify the main



// const regex = /(\|(\s*|\S*)\=).*?(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gim;
// group 1: Actual syntax for an entry
// - match starts with a '|'
// - followed by any amount of whitespace OR any amount of non-whitespace characters
// - and lastly an '=' sign

// '.*?' matches any character between zero and unlimited times, as few times as possible, expanding as needed (lazy)

// group 2:
// - Positive Lookahead (?=) Assert that the following below matches but DO NOT include it in the match
// - the rest is asserting that the match is followed by a string that matches any of these:
// 		- the same pattern in group 1
// 		- A set of closing '}}'
// 		- The end of the whole string the regex is being used on

interface IJSON<T> {
    [key: string]: T;
}

interface ParsedPage {
    syntaxes: ParsedSyntax[];
    argumentLocality?: string;
    effectLocality?: string;
}


/* ----------------------------------------------------------------------------
	TextInterpreter Class
---------------------------------------------------------------------------- */
class TextInterpreter {
    private static readonly wikiCommandNameMap: IJSON<string> = {
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
		"false": "'false'",
		"true": "'true'",
		"toString": "'toString'",
		"config greater greater name": "'>>'",
    };

    handleUniqueCommandNames(wikiName: string): string {
		if (typeof wikiName == "boolean") {
			wikiName = new Boolean(wikiName).toString();
		};

        const mappedName = TextInterpreter.wikiCommandNameMap[wikiName];
        if (mappedName) {
            return mappedName;
        }
        if (wikiName.startsWith("diag")) {
            return wikiName.replace("diag ", "diag_");
        }
        if (wikiName.startsWith("buldozer")) {
            return wikiName.replace("buldozer ", "buldozer_");
        }

        return wikiName;
    }

    private static readonly wikiTypeToDataTypeMap: IJSON<string> = {
        NUMBER: "SQFDataType.Number",
        SCALAR: "SQFDataType.Number",
        "DIARY RECORD": "SQFDataType.DiaryRecord",
        BOOLEAN: "SQFDataType.Boolean",
        BOOL: "SQFDataType.Boolean",
        TRUE: "SQFDataType.Boolean",
        FALSE: "SQFDataType.Boolean",
        ARRAY: "SQFDataType.Array",
        STRING: "SQFDataType.String",
        NOTHING: "SQFDataType.Nothing",
        NIL: "SQFDataType.Nothing",
        ANY: "SQFDataType.Any",
        ANYTHING: "SQFDataType.Any",
        NAMESPACE: "SQFDataType.Namespace",
        "EDEN ENTITY": "SQFDataType.EdenEntity",
        NAN: "SQFDataType.NaN",
        IF: "SQFDataType.IfType",
        "IF TYPE": "SQFDataType.IfType",
        WHILE: "SQFDataType.WhileType",
        "WHILE TYPE": "SQFDataType.WhileType",
        WITH: "SQFDataType.WithType",
        "WITH TYPE": "SQFDataType.WithType",
        FOR: "SQFDataType.ForType",
        "FOR TYPE": "SQFDataType.ForType",
        SWITCH: "SQFDataType.SwitchType",
        "SWITCH TYPE": "SQFDataType.SwitchType",
        EXCEPTION: "SQFDataType.Exception",
        "EXCEPTION TYPE": "SQFDataType.Exception",
        "EXCEPTION HANDLING": "SQFDataType.Exception",
        CODE: "SQFDataType.Code",
        OBJECT: "SQFDataType.Object",
        TARGET: "SQFDataType.Object",
        OBJECTRTD: "SQFDataType.Object",
        VECTOR: "SQFDataType.Vector",
        SIDE: "SQFDataType.Side",
        GROUP: "SQFDataType.Group",
        TEXT: "SQFDataType.StructuredText",
        "STRUCTURED TEXT": "SQFDataType.StructuredText",
        SCRIPT: "SQFDataType.ScriptHandle",
        "SCRIPT HANDLE": "SQFDataType.ScriptHandle",
        CONFIG: "SQFDataType.Config",
        DISPLAY: "SQFDataType.Display",
        CONTROL: "SQFDataType.Control",
        NETOBJECT: "SQFDataType.NetObject",
        TEAM_MEMBER: "SQFDataType.TeamMember",
        "TEAM MEMBER": "SQFDataType.TeamMember",
        HASHMAP: "SQFDataType.HashMap",
        TASK: "SQFDataType.Task",
        DIARY_RECORD: "SQFDataType.DiaryRecord",
        LOCATION: "SQFDataType.Location",
        HASHMAPKEY: "SQFDataType.HashMapKey",
        WAYPOINT: "SQFDataType.Waypoint",
        "COLOR (RGBA)": "SQFDataType.ColorAlpha",
        COLOR: "SQFDataType.Color",
        POSITION: "SQFDataType.Position",
        POSITION2D: "SQFDataType.Position2d",
        POSITION3D: "SQFDataType.Position3d",
        POSITIONATL: "SQFDataType.PositionATL",
        POSITIONASL: "SQFDataType.PositionASL",
        POSITIONAGLS: "SQFDataType.PositionAGLS",
        POSITIONRelative: "SQFDataType.PositionRelative",
        "PARTICLE ARRAY": "SQFDataType.ParticleArray",
    };
    isSyntax(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|s\d*\=/);
    }
    isParameter(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|p\d*=/);
    }
    isReturnType(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|r\d*=/);
    }
    isExample(stringToCheck: string): boolean {
        return !!stringToCheck.match(/^\|x\d*\=/);
    }
    isDescription(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|descr");
    }
    isArgLocality(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|arg");
    }
    isEffectLocality(stringToCheck: string): boolean {
        return stringToCheck.startsWith("|eff");
    }

    convertWikiTypeToSQFDataType(unParsedType: string): string {
        const typeParsed =
            TextInterpreter.wikiTypeToDataTypeMap[unParsedType.toUpperCase()];
        if (typeParsed) return typeParsed;
        throw `convertWikiTypeToSQFDataType: Did not find parse type for: ${unParsedType}`;
    }
}

/* ----------------------------------------------------------------------------
	BISWikiParser Class
---------------------------------------------------------------------------- */
export class BISWikiParser {
    private readonly textInterpreter: TextInterpreter;
    constructor() {
        this.textInterpreter = new TextInterpreter();
    }
	
	
	/* ------------------------------------
		parseType
	------------------------------------ */
    private parseType(unParsedString: string): string[] {
        const typeMatches: RegExpMatchArray | null =
			unParsedString.match(/(?<=\[\[)(\S*?)(?=\]\])/gmi);
            // unParsedString.match(/\[\[([\w\s]*?)\]\]/);
			console.log("Matches:",typeMatches);
			
        if (!typeMatches) {
            throw `Could not find type in string: ${unParsedString}`;
        }
		
		const matchesParsed = typeMatches.flatMap((match: string) => {
			// TODO parse each possible match
			if (!match.includes("|")) {
				const convertedType = this.textInterpreter.convertWikiTypeToSQFDataType(match);
				if (convertedType) {
					return convertedType;
				}
			}
			// check each match for "|" to see if it's an array
			const multipleTypes = match.split("|");
			const mappedTypes = multipleTypes.map((matchedMultiType: string) => {
				const type =  this.textInterpreter.convertWikiTypeToSQFDataType(matchedMultiType);
				if (type) {
					return type;
				}
			});
			
			return mappedTypes;
			// firgure out how to return multiple values
		});
		
        return (matchesParsed as string[]);
    }
	

	/* ------------------------------------
		parseEffectLocality
	------------------------------------ */
    private parseEffectLocality(unParsedString: string): string {
        unParsedString = unParsedString.toLowerCase();
        if (unParsedString.includes("global")) {
            return "SQFEffect.GLOBAL";
        } else if (unParsedString.includes("local")) {
            return "SQFEffect.LOCAL";
        } else {
            return "";
        }
    }
	

	/* ------------------------------------
		parseArgumentLocality
	------------------------------------ */
    private parseArgumentLocality(unParsedString: string): string {
        unParsedString = unParsedString.toLowerCase();
        if (unParsedString.includes("global")) {
            return "SQFArgument.GLOBAL";
        } else if (unParsedString.includes("local")) {
            return "SQFArgument.LOCAL";
        } else {
            return "";
        }
    }
	

	/* ------------------------------------
		createParsedSyntaxWithParams
	------------------------------------ */
    private createParsedSyntaxWithParams(
        inputSyntax: ParsedSyntax,
        parameters: string[]
    ): ParsedSyntax {
        switch (parameters.length) {
            case 0: {
                inputSyntax.type = SyntaxType.nular;
                break;
            }
            case 1: {
                inputSyntax.type = SyntaxType.unary;
                inputSyntax.rightArgType = parameters[0];
                break;
            }
            case 2: {
                inputSyntax.leftArgType = parameters[0];
                inputSyntax.rightArgType = parameters[1];
                inputSyntax.type = SyntaxType.binary;
                break;
            }
            default: {
                inputSyntax.type = SyntaxType.nular;
                break;
            }
        }

        return inputSyntax;
    }
	

	/* ------------------------------------
		parsePageIntoSyntaxes
	------------------------------------ */
    private parsePageIntoSyntaxes(command: string, page: string): ParsedPage {
        const parsedPage: ParsedPage = {
            syntaxes: [],
        };
        // (\|(\s*|\S*)\=)(.*?(\n*\*.*)*)(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$)) // new regex to try with bullet points
        const matchPageDetailsRegEx =
            /(\|(\s*|\S*)\=)(.*?(\n*\*.*)*)(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gim;
        try {
            const pageDetails: RegExpMatchArray | null = page.match(
                matchPageDetailsRegEx
            );
            if (!pageDetails) {
                throw `No pageDetails were found for command: ${command}, page: ${page}`;
            }

            let syntaxBeingParsed: ParsedSyntax | undefined;
            let parameters: string[] = [];
            const numberOfDetailsIndexes = pageDetails.length - 1;
            // loop through each page detail (|x1 = ...) for an example
            pageDetails.forEach((pageDetail: string, index: number) => {
                pageDetail = pageDetail.trim();
                const isLastIndex = numberOfDetailsIndexes === index;

                try {
                    if (this.textInterpreter.isDescription(pageDetail)) {
                    } else if (this.textInterpreter.isExample(pageDetail)) {
                    } else if (
                        this.textInterpreter.isSyntax(pageDetail) ||
                        isLastIndex
                    ) {
                        // If we come across another syntax detail (|s2=...)
                        /// and we have a syntax already being parsed
                        /// it means that the syntaxBeingParsed must be complete
                        const startingNewSyntax: boolean = !!syntaxBeingParsed; // check if truthy
                        if (startingNewSyntax || isLastIndex) {
                            const fullSyntax =
                                this.createParsedSyntaxWithParams(
                                    syntaxBeingParsed!,
                                    parameters
                                );
                            parsedPage.syntaxes.push(fullSyntax);
                        }

                        if (!isLastIndex) {
                            syntaxBeingParsed = {
                                commandName: command,
                            } as ParsedSyntax;
                            parameters = [];
                        }
                    } else if (this.textInterpreter.isArgLocality(pageDetail)) {
                        const locality: string =
                            this.parseArgumentLocality(pageDetail);
                        parsedPage.argumentLocality = locality;
                    } else if (
                        this.textInterpreter.isEffectLocality(pageDetail)
                    ) {
                        const locality: string =
                            this.parseEffectLocality(pageDetail);
                        parsedPage.effectLocality = locality;
                    } else if (this.textInterpreter.isParameter(pageDetail)) {
                        const parameterType: string =
                            this.parseType(pageDetail);
                        parameters.push(parameterType);
                    } else if (this.textInterpreter.isReturnType(pageDetail)) {
                        const returnType: string = this.parseType(pageDetail);
                        syntaxBeingParsed!.returnType = returnType;
                    }
                } catch (error) {
                    console.log("Nested Error with command: ", command);
                    console.log(error);
                    console.log();
                }
            });
        } catch (error) {
            console.log("Error with command: ", command);
            console.log(error);
            console.log();
        }

        return parsedPage;
    }
	

	/* ------------------------------------
		getSyntaxDifference
	------------------------------------ */
    private getSyntaxDifference(
        syntax1: ParsedSyntax,
        syntax2: ParsedSyntax
    ): SyntaxMatchDifference {
        const type: SyntaxType = syntax1.type;
        if (
            type === SyntaxType.nular ||
            type !== syntax2.type ||
            syntax1.returnType !== syntax2.returnType
        ) {
            return SyntaxMatchDifference.NoMatch;
        }

        const leftArgIsDefined: boolean = !!syntax1.leftArgType;
        const rightArgIsDefined: boolean = !!syntax1.rightArgType;
        const leftArgIsTheSame = syntax1.leftArgType === syntax2.leftArgType;
        const rightArgIsTheSame = syntax1.rightArgType === syntax2.rightArgType;

        if (type === SyntaxType.binary) {
            if (leftArgIsDefined && !leftArgIsTheSame && rightArgIsTheSame) {
                return SyntaxMatchDifference.leftArg;
            } else if (
                rightArgIsDefined &&
                !rightArgIsTheSame &&
                leftArgIsTheSame
            ) {
                return SyntaxMatchDifference.rightArg;
            }
        }

        if (type === SyntaxType.unary) {
            if (leftArgIsDefined && !leftArgIsTheSame) {
                return SyntaxMatchDifference.leftArg;
            } else if (rightArgIsDefined && !rightArgIsTheSame) {
                return SyntaxMatchDifference.rightArg;
            }
        }

        return SyntaxMatchDifference.NoMatch;
    }


    // some syntaxes are virtually identical save for one difference
    // e.g. "apply" can take a rightside arg of type ARRAY or HASHMAP
    // however, the wiki considers these two different syntaxes
    // the idea here is to combine these so that preCompiledSQFSyntax just has an array
    // of right args that is [ARRAY, HASHMAP] instead of two full syntax entries
	/* ------------------------------------
		consolidateSyntaxes
	------------------------------------ */
    private consolidateSyntaxes(parsedSyntaxes: ParsedSyntax[]): ParsedSyntax[] {
        const checkedSyntaxIndexes: number[] = [];
        const consolidatedSyntaxes: ParsedSyntax[] = [];
        for (
            let mainIndex = 0;
            mainIndex < parsedSyntaxes.length;
            mainIndex++
        ) {
            if (mainIndex in checkedSyntaxIndexes) continue;
            checkedSyntaxIndexes.push(mainIndex);
            const mainSyntax = parsedSyntaxes[mainIndex];

            for (
                let comparisonIndex = mainIndex + 1;
                comparisonIndex < parsedSyntaxes.length;
                comparisonIndex++
            ) {
                if (comparisonIndex in checkedSyntaxIndexes) continue;
                const compareSyntax = parsedSyntaxes[comparisonIndex];
                const syntaxMatchDiff: SyntaxMatchDifference =
                    this.getSyntaxDifference(mainSyntax, compareSyntax);

                switch (syntaxMatchDiff) {
                    case SyntaxMatchDifference.NoMatch: {
                        continue;
                    }
                    case SyntaxMatchDifference.leftArg: {
                        const syntaxToAdd = compareSyntax.leftArgType as string;
                        if (Array.isArray(mainSyntax.leftArgType)) {
                            const syntaxAsArray =
                                mainSyntax.leftArgType as string[];
                            mainSyntax.leftArgType = [
                                ...syntaxAsArray,
                                syntaxToAdd,
                            ];
                        } else {
                            mainSyntax.leftArgType = [
                                mainSyntax.leftArgType!,
                                syntaxToAdd,
                            ];
                        }

                        break;
                    }
                    case SyntaxMatchDifference.rightArg: {
                        const syntaxToAdd =
                            compareSyntax.rightArgType as string;
                        if (Array.isArray(mainSyntax.rightArgType)) {
                            const syntaxAsArray =
                                mainSyntax.rightArgType as string[];
                            mainSyntax.rightArgType = [
                                ...syntaxAsArray,
                                syntaxToAdd,
                            ];
                        } else {
                            mainSyntax.rightArgType = [
                                mainSyntax.rightArgType!,
                                syntaxToAdd,
                            ];
                        }
                        break;
                    }
                    default:
                        continue;
                }

                checkedSyntaxIndexes.push(mainIndex);
            }

            consolidatedSyntaxes.push(mainSyntax);
        }
		
		return consolidatedSyntaxes;
    }
	

	/* ------------------------------------
		parseWiki
	------------------------------------ */
    public parseWiki(xmlFilePath: string): void {
        try {
            const xmlPath = path.resolve(xmlFilePath);
            console.log("XML Path:", xmlPath);
            const xmlFileAsString = fs.readFileSync(xmlPath);

            const xmlParser = new XMLParser();
            const xmlAsJSON = xmlParser.parse(xmlFileAsString);

            const pages: WikiPage[] = xmlAsJSON.mediawiki.page;
            const parsedPages: string[] = [];
            pages.forEach((page: WikiPage) => {
				if (
					!page.title || 
					!page.revision || 
					!page.revision.text
				) return;
				
                const parsedPage: ParsedPage = this.parsePageIntoSyntaxes(
					page.title,
					page.revision.text
				);

				try {
					const name = this.textInterpreter.handleUniqueCommandNames(page.title);
					if (name.startsWith('Category:')) return;

					const consolidatedSyntaxes = this.consolidateSyntaxes(parsedPage.syntaxes);
					const finalCommandSyntaxString: string = this.createFinalCommandSyntaxString(
						name,
						consolidatedSyntaxes,
						parsedPage.effectLocality,
						parsedPage.argumentLocality,
					);
					parsedPages.push(finalCommandSyntaxString);

				} catch (error) {
					console.log("parseWiki: Handle name fail");
					console.log("Title:",page.title);
					console.log(error);						
				}
            });

            // console.log (parsedPages);
            fs.writeFileSync(
                "./output.ts",
                `import {SQFDataType, SQFEffect, SQFArgument, SQFGrammarType, SQFSyntaxType} from "./configuration/grammars/sqf.namespace";\nconst output = {${parsedPages.join(
                    ""
                )}}`
            );
        } catch (error) {
            console.log(error);
        }
    }
	

	/* ------------------------------------
		convertSyntaxToString
	------------------------------------ */
	private convertSyntaxToString(syntax: ParsedSyntax): string {
		const syntaxArray = [
			"{",
			`\t\ttype: ${syntax.type},`,
			`\t\treturnTypes: ${syntax.returnType},`,
		];

		if (syntax.leftArgType) {
			let insertSyntax = syntax.leftArgType;
			if (Array.isArray(syntax.leftArgType)) {
				insertSyntax = `[${syntax.leftArgType}]`;
			}
			syntaxArray.push(`\t\tleftOperandTypes: ${insertSyntax},`);
		}
		if (syntax.rightArgType) {
			let insertSyntax = syntax.rightArgType;
			if (Array.isArray(syntax.rightArgType)) {
				insertSyntax = `[${syntax.rightArgType}]`;
			}
			syntaxArray.push(`\t\trightOperandTypes: ${insertSyntax},`);
		}

		syntaxArray.push("\t}\n");
		return syntaxArray.join("\n");
	}
	
	/* ------------------------------------
		createFinalCommandSyntaxString
	------------------------------------ */
	private createFinalCommandSyntaxString(
        command: string | undefined,
		consolidatedSyntaxes: ParsedSyntax[],
		effectLocality?: string,
        argurmentLocality?: string
	): string {
		// TODO: Fix formatting
        // convert into final string
        const syntaxesAsString: string[] = consolidatedSyntaxes.map(this.convertSyntaxToString);
        const moreThanOneSyntax = consolidatedSyntaxes.length > 1;
        let finalSyntaxString: string;
        if (moreThanOneSyntax) {
            finalSyntaxString = `[\n${syntaxesAsString.join("\t,")}\n]`;
        } else {
            finalSyntaxString = syntaxesAsString[0];
        }
		
        const finalSyntaxesAsArray: string[] = [
            `\n${command}: {`,
            `\tsyntaxes: ${finalSyntaxString},`,
            `\tgrammarType: SQFGrammarType.Command,`,
        ];

        if (effectLocality) {
            finalSyntaxesAsArray.push(`\teffect: ${effectLocality},`);
        }
        if (argurmentLocality) {
            finalSyntaxesAsArray.push(`\targument: ${argurmentLocality},`);
        }
        finalSyntaxesAsArray.push("},");

        return finalSyntaxesAsArray.join("\n");
	}
}
