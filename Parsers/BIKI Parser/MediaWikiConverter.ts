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
    return (
        type === SQFSyntaxType.ScheduledFunction ||
        type === SQFSyntaxType.UnscheduledFunction
    );
}

export class MediaWikiConverter {
    public static textInterpreter: BikiTextInterpreter =
        new BikiTextInterpreter();
    public static currentParsedPageType: SQFSyntaxType = SQFSyntaxType.Empty;
    constructor() {}
    /* ----------------------------------------------------------------------------
		findEdgeCaseMatches
	---------------------------------------------------------------------------- */
    private static findEdgeCaseMatches(input: string): SQFDataType[] {
        const edgeIdenticalMatch = input.includes("b: identical to ''a''");
        if (edgeIdenticalMatch) {
            const identicalType =
                MediaWikiConverter.textInterpreter.getSQFDataType("Identical");
            return [identicalType];
        }

        const edgeNothingMatch = input.match(/\|r\d*=\s*Nothing/);
        if (edgeNothingMatch) {
            const typeCovnerted =
                MediaWikiConverter.textInterpreter.getSQFDataType("Nothing");

            return [typeCovnerted];
        }

        const nameSpaceEdgeMatch = input.includes(
            "varspace: variable space in which variable can be set."
        );
        if (nameSpaceEdgeMatch) {
            const typeCovnerted =
                MediaWikiConverter.textInterpreter.getSQFDataType("Namespace");
            return [typeCovnerted];
        }

        const edgeArrayMatch = input.includes("|r1= in format [x,y] in meters");
        if (edgeArrayMatch) {
            const typeCovnerted =
                MediaWikiConverter.textInterpreter.getSQFDataType("Array");
            return [typeCovnerted];
        }

        return [];
    }

    /* ----------------------------------------------------------------------------
		getSQFDataTypes
	---------------------------------------------------------------------------- */
    private static getSQFDataTypes(input: string): SQFDataType[] {
        const edgeReturn = MediaWikiConverter.findEdgeCaseMatches(input);
        if (edgeReturn.length > 0) {
            return edgeReturn;
        }

        const typeMatches: RegExpMatchArray | null = input.match(
            /(?<=\[\[)([\S\D]*?)(?=\]\])/gi
        );
        if (!typeMatches) {
            console.log(`Could not find type in string: ${input}`);
            return [];
        }

        const matchesParsed = typeMatches.flatMap((match: string) => {
            if (!match.includes("|")) {
                const convertedType =
                    MediaWikiConverter.textInterpreter.getSQFDataType(match);
                if (convertedType) {
                    return convertedType;
                }
            }

            // check each match for "|" to see if it's an array
            const multipleTypes = match.split("|");
            const mappedTypes = multipleTypes.map((matchedType: string) => {
                const type =
                    MediaWikiConverter.textInterpreter.getSQFDataType(
                        matchedType
                    );

                if (type) {
                    return type;
                }
            });

            return mappedTypes;
        });

        // filter out undefined
        const filtered = matchesParsed.filter((item) => item);
        return filtered as SQFDataType[];
    }

    /* ----------------------------------------------------------------------------
		convertParsingSyntax
	---------------------------------------------------------------------------- */
    private static convertParsingSyntax(
        pageTitle: string,
        parsingSyntax: ParsingSyntax
    ): ParsedSyntax {
        const parsingSyntaxDetails = parsingSyntax.syntax;
        let syntaxType: SQFSyntaxType = SQFSyntaxType.NularOperator;
        let leftArgTypes: SQFDataType[] | null = null;
        let rightArgTypes: SQFDataType[] | null = null;

        let returnType = parsingSyntax.syntax.returnType;
        if (!returnType) {
            console.log(
                `${pageTitle} has no return type for syntax: ${parsingSyntax.syntax}`
            );
        }

        const parsedSyntax = {
            pageTitle: pageTitle,
            returnType: returnType,
        } as ParsedSyntax;
        const isFunction = isSyntaxTypeFunction(
            MediaWikiConverter.currentParsedPageType
        );

        if (MediaWikiConverter.currentParsedPageType !== SQFSyntaxType.Empty) {
            syntaxType = MediaWikiConverter.currentParsedPageType;
            if (parsingSyntaxDetails.parameters_1) {
                leftArgTypes = parsingSyntaxDetails.parameters_1;
            }
        } else if (
            parsingSyntaxDetails.parameters_1 &&
            parsingSyntaxDetails.parameters_2
        ) {
            syntaxType = SQFSyntaxType.BinaryOperator;
            leftArgTypes = parsingSyntaxDetails.parameters_1;
            rightArgTypes = parsingSyntaxDetails.parameters_2;
        } else if (parsingSyntaxDetails.parameters_1 && !isFunction) {
            syntaxType = SQFSyntaxType.UnaryOperator;
            rightArgTypes = parsingSyntaxDetails.parameters_1;
        } else if (parsingSyntaxDetails.parameters_1 && isFunction) {
            syntaxType = MediaWikiConverter.currentParsedPageType;
            leftArgTypes = parsingSyntaxDetails.parameters_1;
        }

        if (syntaxType) {
            parsedSyntax.syntaxType = syntaxType;
        }
        if (leftArgTypes) {
            parsedSyntax.leftArgTypes = leftArgTypes;
        }
        if (rightArgTypes) {
            parsedSyntax.rightArgTypes = rightArgTypes;
        }

        return parsedSyntax;
    }

    /* ----------------------------------------------------------------------------
		addPageDetailToSyntax
	---------------------------------------------------------------------------- */
    private static addPageDetailToSyntax(
        parsingSyntaxes: ParsingSyntax[],
        pageDetail: WikiPageDetail,
        isFunctionSyntax: boolean = false
    ) {
        const indexOfSyntax = findLastIndex(
            parsingSyntaxes,
            (syntax) => syntax.detailIndex < pageDetail.index
        );
        const parsingSyntax = parsingSyntaxes[indexOfSyntax];

        const isParameter = pageDetail.type === WikiPageDetailType.Parameter;
        const isReturn = pageDetail.type === WikiPageDetailType.Return;
        if (!isParameter && !isReturn) return;

        const typesParsed = MediaWikiConverter.getSQFDataTypes(
            pageDetail.detailFull
        );
        if (typesParsed.length < 1) {
            console.log(
                "Could not parse any types for a detail on command",
                pageDetail.pageTitle
            );
            console.log("Detail:", pageDetail.detailFull);
            return;
        }

        if (isParameter && !isFunctionSyntax) {
            if (parsingSyntax.syntax.parameters_1) {
                parsingSyntax.syntax.parameters_2 = typesParsed;

                // some commands (!= & == for example)
                // list param 'b' as being identical to 'a'
                const parameters_1IsIdentical =
                    parsingSyntax.syntax.parameters_1.includes(
                        SQFDataType.IDENTICAL
                    ) && parsingSyntax.syntax.parameters_1.length === 1;

                const parameters_2IsIdentical =
                    parsingSyntax.syntax.parameters_2.includes(
                        SQFDataType.IDENTICAL
                    ) && parsingSyntax.syntax.parameters_2.length === 1;

                if (parameters_1IsIdentical && !parameters_2IsIdentical) {
                    parsingSyntax.syntax.parameters_1 = [
                        ...parsingSyntax.syntax.parameters_2,
                    ];
                } else if (
                    !parameters_1IsIdentical &&
                    parameters_2IsIdentical
                ) {
                    parsingSyntax.syntax.parameters_2 = [
                        ...parsingSyntax.syntax.parameters_1,
                    ];
                }
            } else {
                parsingSyntax.syntax.parameters_1 = typesParsed;
            }

            return;
        }

        if (isParameter && isFunctionSyntax) {
            if (!parsingSyntax.syntax.parameters_1) {
                parsingSyntax.syntax.parameters_1 = [];
            }
            parsingSyntax.syntax.parameters_1 = [
                ...parsingSyntax.syntax.parameters_1,
                ...typesParsed,
            ];

            return;
        }

        if (isReturn) {
            parsingSyntax.syntax.returnType = typesParsed[0];
            return;
        }
    }

    /* ----------------------------------------------------------------------------
		getParsedSyntaxes
	---------------------------------------------------------------------------- */
    private static getParsedSyntaxes(
        pageDetails: WikiPageDetail[]
    ): ParsedSyntax[] {
        const parsingSyntaxes: ParsingSyntax[] = [];

        pageDetails.forEach((detail: WikiPageDetail) => {
            if (detail.type === WikiPageDetailType.Syntax) {
                parsingSyntaxes.push({
                    detailIndex: detail.index,
                    syntax: {},
                });
            }
        });

        if (parsingSyntaxes.length < 1) return [];

        for (const pageDetail of pageDetails) {
            if (
                pageDetail.type === WikiPageDetailType.Return ||
                pageDetail.type === WikiPageDetailType.Parameter
            ) {
                MediaWikiConverter.addPageDetailToSyntax(
                    parsingSyntaxes,
                    pageDetail,
                    isSyntaxTypeFunction(
                        MediaWikiConverter.currentParsedPageType
                    )
                );
            }
        }

        const parsedSyntaxes: ParsedSyntax[] = parsingSyntaxes.map((syntax) => {
            return MediaWikiConverter.convertParsingSyntax(
                pageDetails[0].pageTitle,
                syntax
            );
        });
        return parsedSyntaxes;
    }

    /* ----------------------------------------------------------------------------
		getFunctionType
	---------------------------------------------------------------------------- */
    private static getFunctionType(
        pageDetails: WikiPageDetail[]
    ): SQFSyntaxType {
        let wikiPageType: WikiPageType = WikiPageType.Unknown;
        for (const pageDetail of pageDetails) {
            if (pageDetail.type !== WikiPageDetailType.PageType) continue;
            wikiPageType = MediaWikiConverter.textInterpreter.getWikiPageType(
                pageDetail.detailFull
            );
            break;
        }

        if (wikiPageType !== WikiPageType.Function) return SQFSyntaxType.Empty;

        // is function
        // functions are by default unscheduled in wiki export
        let functionType: SQFSyntaxType = SQFSyntaxType.UnscheduledFunction;
        for (const pageDetail of pageDetails) {
            if (pageDetail.type !== WikiPageDetailType.FunctionExecution)
                continue;
            if (pageDetail.detailFull.includes("spawn")) {
                functionType = SQFSyntaxType.ScheduledFunction;
            }

            break;
        }

        return functionType;
    }

    /* ----------------------------------------------------------------------------
		parseWikiPage
	---------------------------------------------------------------------------- */
    public static parseWikiPage(page: WikiPage): string {
        MediaWikiConverter.currentParsedPageType = SQFSyntaxType.Empty;
        if (!page.title || !page.revision || !page.revision.text) return "";

        const actualTitle = BikiTextInterpreter.getProperTitle(page.title);
        if (actualTitle.startsWith("Category:")) return "";
        page.title = actualTitle;

        const pageDetails: WikiPageDetail[] =
            MediaWikiConverter.getWikiPageDetails(page);
        if (pageDetails.length < 1) return "";

        MediaWikiConverter.writeDocumentation(page.title, pageDetails);

        const pageType = MediaWikiConverter.getFunctionType(pageDetails);
        if (pageType !== SQFSyntaxType.Empty) {
            MediaWikiConverter.currentParsedPageType = pageType;
        }

        let parsedSyntaxes: ParsedSyntax[] =
            MediaWikiConverter.getParsedSyntaxes(pageDetails);
        const grammarType: SQFGrammarType =
            MediaWikiConverter.textInterpreter.getSQFGrammarType(
                page.title.toLowerCase()
            );
        parsedSyntaxes = MediaWikiConverter.consolidateSyntaxes(parsedSyntaxes);

        let parsedPage: ParsedPage = {
            title: page.title,
            syntaxes: parsedSyntaxes,
            grammarType: grammarType,
        };
        parsedPage = MediaWikiConverter.addMiscDetailsToParsedPage(
            parsedPage,
            pageDetails
        );

        // TODO:
        // server
        // add check to any in side array handler that will only remove the Any if is proceeds an
        /// Array entry so that is was definately parsed as Array of Any
        return MediaWikiConverter.convertParsedPage(parsedPage);
    }

    /* ----------------------------------------------------------------------------
		addMiscDetailsToParsedPage
	---------------------------------------------------------------------------- */
    private static addMiscDetailsToParsedPage(
        parsedPage: ParsedPage,
        pageDetails: WikiPageDetail[]
    ): ParsedPage {
        pageDetails.forEach((pageDetail) => {
            switch (pageDetail.type) {
                case WikiPageDetailType.ArgLocality: {
                    const argumentLocality =
                        MediaWikiConverter.textInterpreter.getArgumentLocality(
                            pageDetail.detailFull
                        );
                    if (argumentLocality) {
                        parsedPage.argumentLocality = argumentLocality;
                    }
                    break;
                }
                case WikiPageDetailType.EffectLocality: {
                    const effectLocality =
                        MediaWikiConverter.textInterpreter.getEffectLocality(
                            pageDetail.detailFull
                        );
                    if (effectLocality) {
                        parsedPage.effectLocality = effectLocality;
                    }
                    break;
                }
                case WikiPageDetailType.ServerExecution: {
                    if (
                        pageDetail.detailContent
                            ?.toLowerCase()
                            .includes("server")
                    ) {
                        parsedPage.serverExecution = true;
                    }
                    break;
                }
                default:
                    break;
            }
        });

        return parsedPage;
    }

    /* ----------------------------------------------------------------------------
		getWikiPageDetails
	---------------------------------------------------------------------------- */
    public static getWikiPageDetails(page: WikiPage): WikiPageDetail[] {
        const matchPageDetailsRegEx =
            /(?<=^{{RV[.\s\S]*)(\|([\s\w]*)\=(?!\=)([\S\s]*?))(?=(\s*\n+}}\s*$)|(\|([\s\w]*)\=(?!\=)))/gi;
        const pageDetails: IterableIterator<RegExpMatchArray> | undefined =
            page.revision?.text?.matchAll(matchPageDetailsRegEx);

        if (!pageDetails) return [];

        const pageDetailsArray = [...pageDetails];
        if (pageDetailsArray.length < 1) return [];

        const detailsParsed: WikiPageDetail[] = pageDetailsArray.map(
            (matchGroups: string[], index: number) => {
                let detailFull = matchGroups[0];
                detailFull = detailFull.trim();
                return {
                    pageTitle: page.title!,
                    index: index,
                    type: MediaWikiConverter.textInterpreter.getDetailType(
                        detailFull
                    ),
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
		areSyntaxTypesEqual
	---------------------------------------------------------------------------- */
    private static areSyntaxTypesEqual(
        a?: string[] | string,
        b?: string[] | string
    ): boolean {
        if (a === b) return true;
        if (!a && !b) return true;
        if (!a && b) return false;
        if (a && !b) return false;

        const aIsArray = Array.isArray(a);
        const bIsArray = Array.isArray(b);
        if ((aIsArray && !bIsArray) || (!aIsArray && bIsArray)) return false;

        if (aIsArray && bIsArray) {
            a = [...a!].sort();
            b = [...b!].sort();

            let i = a.length;
            if (i != b.length) return false;
            while (i--) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }

        return false;
    }

    /* ----------------------------------------------------------------------------
		getSyntaxDifference
	---------------------------------------------------------------------------- */
    private static getSyntaxDifference(
        mainSyntax: ParsedSyntax,
        compareSyntax: ParsedSyntax
    ): SyntaxMatchDifference {
        const mainSyntaxType: SQFSyntaxType = mainSyntax.syntaxType;
        if (
            mainSyntaxType === SQFSyntaxType.NularOperator ||
            mainSyntaxType !== compareSyntax.syntaxType ||
            mainSyntax.returnType !== compareSyntax.returnType
        ) {
            return SyntaxMatchDifference.NoMatch;
        }

        const leftArgIsDefined: boolean = !!mainSyntax.leftArgTypes;
        const rightArgIsDefined: boolean = !!mainSyntax.rightArgTypes;
        const leftArgIsTheSame = MediaWikiConverter.areSyntaxTypesEqual(
            mainSyntax.leftArgTypes,
            compareSyntax.leftArgTypes
        );
        const rightArgIsTheSame = MediaWikiConverter.areSyntaxTypesEqual(
            mainSyntax.rightArgTypes,
            compareSyntax.rightArgTypes
        );

        if (mainSyntaxType === SQFSyntaxType.BinaryOperator) {
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

        if (mainSyntaxType === SQFSyntaxType.UnaryOperator) {
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
    /* ----------------------------------------------------------------------------
		consolidateSyntaxes
	---------------------------------------------------------------------------- */
    private static consolidateSyntaxes(
        parsedSyntaxes: ParsedSyntax[]
    ): ParsedSyntax[] {
        const consolidatedSyntaxes: ParsedSyntax[] = [];
        const checkedSyntaxIndexes: number[] = [];

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
                    MediaWikiConverter.getSyntaxDifference(
                        mainSyntax,
                        compareSyntax
                    );

                if (syntaxMatchDiff === SyntaxMatchDifference.NoMatch) continue;

                if (
                    syntaxMatchDiff === SyntaxMatchDifference.leftArg &&
                    mainSyntax.leftArgTypes
                ) {
                    mainSyntax.leftArgTypes = [
                        ...mainSyntax.leftArgTypes,
                        ...compareSyntax.leftArgTypes!,
                    ];
                } else if (
                    syntaxMatchDiff === SyntaxMatchDifference.rightArg &&
                    mainSyntax.rightArgTypes
                ) {
                    mainSyntax.rightArgTypes = [
                        ...mainSyntax.rightArgTypes,
                        ...compareSyntax.rightArgTypes!,
                    ];
                }

                checkedSyntaxIndexes.push(comparisonIndex);
            }

            consolidatedSyntaxes.push(mainSyntax);
        }

        // some syntaxes reference an earlier or later syntax for their return types
        const indexesWithoutReturnType: number[] = [];
        let indexWithReturnType = -1;
        consolidatedSyntaxes.forEach((syntax, index) => {
            if (!syntax.returnType) {
                indexesWithoutReturnType.push(index);
            } else {
                indexWithReturnType = index;
            }

            // filter duplicates
            if (syntax.leftArgTypes) {
                const arrayAsSet = new Set(syntax.leftArgTypes);
                if (
                    arrayAsSet.has(SQFDataType.Any) &&
                    arrayAsSet.has(SQFDataType.Array)
                ) {
                    // this typically means an array of Any rather than an Array OR Any
                    arrayAsSet.delete(SQFDataType.Any);
                }
                syntax.leftArgTypes = [...arrayAsSet];
            }
            if (syntax.rightArgTypes) {
                const arrayAsSet = new Set(syntax.rightArgTypes);
                if (
                    arrayAsSet.has(SQFDataType.Any) &&
                    arrayAsSet.has(SQFDataType.Array)
                ) {
                    // this typically means an array of Any rather than an Array OR Any
                    arrayAsSet.delete(SQFDataType.Any);
                }
                syntax.rightArgTypes = [...arrayAsSet];
            }
        });

        if (indexesWithoutReturnType.length && indexWithReturnType !== -1) {
            indexesWithoutReturnType.forEach((indexWithoutReturnType) => {
                consolidatedSyntaxes[indexWithoutReturnType].returnType =
                    consolidatedSyntaxes[indexWithReturnType].returnType;
            });
        }

        return consolidatedSyntaxes;
    }

    /* ----------------------------------------------------------------------------
		convertSyntaxToString
	---------------------------------------------------------------------------- */
    private static convertSyntaxToString(syntax: ParsedSyntax): string {
        const syntaxArray = [
            "\t{",
            `\t\ttype: ${syntax.syntaxType},`,
            `\t\treturnTypes: ${syntax.returnType},`,
        ];

        if (isSyntaxTypeFunction(syntax.syntaxType)) {
            if (syntax.leftArgTypes) {
                let insertSyntax = "";
                if (syntax.leftArgTypes.length >= 1) {
                    // TODO: what about functions that take a single parameter as an arg without an array?
                    insertSyntax = `SQFArray.ofExactly([${syntax.leftArgTypes}])`;
                    syntaxArray.push(`\t\tleftOperandTypes: ${insertSyntax},`);
                    // TODO may not need this else
                } /*else {
					insertSyntax = `SQFArray.ofExactly([${syntax.leftArgTypes[0]}]),`;
				}*/
            }
        } else {
            if (syntax.leftArgTypes) {
                let insertSyntax = "";
                if (syntax.leftArgTypes.length > 1) {
                    insertSyntax = `[${syntax.leftArgTypes}]`;
                } else {
                    insertSyntax = syntax.leftArgTypes[0];
                }

                syntaxArray.push(`\t\tleftOperandTypes: ${insertSyntax},`);
            }

            if (syntax.rightArgTypes) {
                let insertSyntax = "";
                if (syntax.rightArgTypes.length > 1) {
                    insertSyntax = `[${syntax.rightArgTypes}]`;
                } else {
                    insertSyntax = syntax.rightArgTypes[0];
                }

                syntaxArray.push(`\t\trightOperandTypes: ${insertSyntax},`);
            }
        }

        syntaxArray.push("\t}");
        return syntaxArray.join("\n");
    }

    /* ----------------------------------------------------------------------------
		convertParsedPage
	---------------------------------------------------------------------------- */
    private static convertParsedPage(parsedPage: ParsedPage): string {
        const syntaxes = parsedPage.syntaxes;
        const syntaxesAsString: string[] = syntaxes.map(
            MediaWikiConverter.convertSyntaxToString
        );

        let finalSyntaxString: string;
        if (syntaxes.length > 1) {
            finalSyntaxString = `[\n${syntaxesAsString.join(",\n")}\n\t]`;
        } else {
            finalSyntaxString = syntaxesAsString[0];
        }

        const finalSyntaxesAsArray: string[] = [
            `\n${parsedPage.title}: {`,
            `\tsyntaxes: ${finalSyntaxString},`,
            `\tgrammarType: ${parsedPage.grammarType},`,
        ];

        if (parsedPage.effectLocality) {
            finalSyntaxesAsArray.push(
                `\teffect: ${parsedPage.effectLocality},`
            );
        }
        if (parsedPage.argumentLocality) {
            finalSyntaxesAsArray.push(
                `\targument: ${parsedPage.argumentLocality},`
            );
        }
        if (parsedPage.serverExecution) {
            finalSyntaxesAsArray.push(`\tserver: true,`);
        }

        finalSyntaxesAsArray.push("},");
        return finalSyntaxesAsArray.join("\n");
    }

    /* ----------------------------------------------------------------------------
		writeDocumentation
	---------------------------------------------------------------------------- */
    private static writeDocumentation(
        pageTitle: string,
        pageDetails: WikiPageDetail[]
    ): void {
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

            if (detail.type === WikiPageDetailType.Syntax) {
                syntaxStrings.push(
                    MediaWikiConverter.formatBikiText(detail.detailContent)
                );
                return;
            }

            if (detail.type === WikiPageDetailType.Description) {
                description = MediaWikiConverter.formatBikiText(
                    detail.detailContent
                );

                return;
            }

            if (detail.type === WikiPageDetailType.Example) {
                examples.push(
                    MediaWikiConverter.formatBikiText(detail.detailContent)
                );
                return;
            }
        });
        examples = examples.map((example, index) => {
            return `*Example ${index + 1}:*\n\n${example}`;
        });

        const final = `${description}\n\n\n---\n*Syntaxes:*\n\n${syntaxStrings.join(
            "\n\n"
        )}\n\n---\n${examples.join("\n\n")}`;

        if (final) {
            const filename = this.textInterpreter.getFilename(pageTitle);
            fs.writeFileSync(
                `${documentationFolderPath}/${filename}.md`,
                final
            );
        }
    }

    private static formatDescription(input: string): string {
        let output = input;
        // replace file links
        output = output.replace(/\[\[File.*?\]\]/gi, "");

        // replace code references
        output = output.replace(/(\'\'+)(.*?)(\'\'+)/gi, "`$2`");

        const internalLinkMatches = output.matchAll(
            /(\[\[)([\s\D\|]*?)(\]\])/gi
        );
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
        const linkMatch = output.matchAll(
            /(\{\{)(([\s\w\d]+)(\|)*)((.+?)(\|)*)([\s\w\d]+)(\}\})/gi
        );
        const linkMatchArray = Array.from(linkMatch);
        linkMatchArray.forEach((regexMatchArrayForLink) => {
            const siteName = regexMatchArrayForLink[3];
            const endpoint = regexMatchArrayForLink[6];
            const linkTitle = regexMatchArrayForLink[8];
            const originalString = regexMatchArrayForLink[0];
            const siteBaseUrl =
                this.textInterpreter.getWikiExternalUrl(siteName);
            if (!siteBaseUrl) {
                // TODO: lots of "<see arm reference>"" ending up in output docs
                output = output.replace(
                    originalString,
                    `<See ${siteName} Reference ${linkTitle}>`
                );
                return;
            }

            output = output.replace(
                originalString,
                `[${linkTitle}](${siteBaseUrl}/${endpoint})`
            );
        });

        return output.trim();
    }

    private static formatBikiText(input: string): string {
        let output: string = input;
        const sqfCodeMatches = output.matchAll(/(<sqf>)([\s\S]*?)(<\/sqf>)/gi);
        const savedCodeExamples: string[] = [];
        for (const match of sqfCodeMatches) {
            const matchString: string | undefined = match.input;
            if (!matchString) continue;
            savedCodeExamples.push(matchString);
            output = output.replace(matchString, "<SQFCodeToReplace>");
        }
        output = MediaWikiConverter.formatDescription(input);

        for (const sqfCode of savedCodeExamples) {
            output = output.replace("<SQFCodeToReplace>", sqfCode);
        }

        output = output.replace(/\<sqf\>\n+/gi, "\n```sqf\n");
        output = output.replace(/\<sqf\>/gi, "\n```sqf\n");
        output = output.replace(/\n+\<\/sqf\>/gi, "\n```");
        output = output.replace(/\<\/sqf\>/gi, "\n```");

        return output.trim();
    }
}
