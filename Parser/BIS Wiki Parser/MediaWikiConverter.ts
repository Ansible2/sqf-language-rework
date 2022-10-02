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
    ParsedWikiPage,
    WikiPageDetail,
    WikiPageDetailType,
    ParsedSyntax,
	WikiPageType,
} from "./BikiTypes";

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

export class MediaWikiConverter {
    private textInterpreter: BikiTextInterpreter;
    constructor() {
        this.textInterpreter = new BikiTextInterpreter();
    }

    /* ----------------------------------------------------------------------------
		getSQFDataTypes
	---------------------------------------------------------------------------- */
    private getSQFDataTypes(input: string): SQFDataType[] {
        const edgeNothingMatch = input.match(/\|r\d*=\s*Nothing/);
        if (edgeNothingMatch) {
            const typeCovnerted =
                this.textInterpreter.getSQFDataType("Nothing");

            return [typeCovnerted];
        }

        const typeMatches: RegExpMatchArray | null = input.match(
            /(?<=\[\[)(\S*|\D*?)(?=\]\])/gim
        );
        if (!typeMatches) {
            throw `Could not find type in string: ${input}`;
        }

        const matchesParsed = typeMatches.flatMap((match: string) => {
            if (!match.includes("|")) {
                const convertedType =
                    this.textInterpreter.getSQFDataType(match);
                if (convertedType) {
                    return convertedType;
                }
            }

            // check each match for "|" to see if it's an array
            const multipleTypes = match.split("|");
            const mappedTypes = multipleTypes.map((matchedType: string) => {
                const type = this.textInterpreter.getSQFDataType(matchedType);

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
    private convertParsingSyntax(
        pageTitle: string,
        parsingSyntax: ParsingSyntax,
		// TODO: implement means of getting functionSyntaxType
        functionSyntaxType?: SQFSyntaxType 
    ): ParsedSyntax {
        const parsingSyntaxDetails = parsingSyntax.syntax;
        let syntaxType: SQFSyntaxType = SQFSyntaxType.NularOperator;
        let leftArgTypes: SQFDataType[] | null = null;
        let rightArgTypes: SQFDataType[] | null = null;

        if (!parsingSyntax.syntax.returnType) {
            throw `${pageTitle} has no return type for syntax: ${parsingSyntax}`;
        }

        const parsedSyntax = {
            pageTitle: pageTitle,
            returnType: parsingSyntax.syntax.returnType,
        } as ParsedSyntax;

        if (functionSyntaxType) {
            syntaxType = functionSyntaxType;
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
        } else if (parsingSyntaxDetails.parameters_1) {
            syntaxType = SQFSyntaxType.UnaryOperator;
            rightArgTypes = parsingSyntaxDetails.parameters_1;
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
    private addPageDetailToSyntax(
        parsingSyntaxes: ParsingSyntax[],
        pageDetail: WikiPageDetail
    ) {
        const indexOfSyntax = findLastIndex(
            parsingSyntaxes,
            (syntax) => syntax.detailIndex > pageDetail.index
        );
        const parsingSyntax = parsingSyntaxes[indexOfSyntax];

        const isParameter = pageDetail.type === WikiPageDetailType.Parameter;
        const isReturn = pageDetail.type === WikiPageDetailType.Return;
        if (!isParameter && !isReturn) return;

        const typesParsed = this.getSQFDataTypes(pageDetail.detail);
        if (typesParsed.length < 1) {
            console.log(
                "Could not parse any types for a detail on command",
                pageDetail.pageTitle
            );
            console.log("Detail:", pageDetail.detail);
            return;
        }

        if (isParameter) {
            if (parsingSyntax.syntax.parameters_1) {
                parsingSyntax.syntax.parameters_2 = typesParsed;
            } else {
                parsingSyntax.syntax.parameters_1 = typesParsed;
            }

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
    private getParsedSyntaxes(pageDetails: WikiPageDetail[]): ParsedSyntax[] {
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
                this.addPageDetailToSyntax(parsingSyntaxes, pageDetail);
            }
        }

        const parsedSyntaxes: ParsedSyntax[] = parsingSyntaxes.map((syntax) => {
            return this.convertParsingSyntax(pageDetails[0].pageTitle, syntax);
        });
        return parsedSyntaxes;
    }

    /* ----------------------------------------------------------------------------
		parseWikiPage
	---------------------------------------------------------------------------- */
    public parseWikiPage(page: WikiPage): string {
        if (!page.title || !page.revision || !page.revision.text) return "";

        const actualTitle = BikiTextInterpreter.getProperTitle(page.title);
        if (actualTitle.startsWith("Category:")) return "";
        page.title = actualTitle;

        const pageDetails: WikiPageDetail[] = this.getWikiPageDetails(page);
        if (pageDetails.length < 1) return "";
		
		let wikiPageType: WikiPageType = WikiPageType.Unknown;
		pageDetails.forEach((pageDetail) => {
			if (pageDetail.type !== WikiPageDetailType.PageType) return;
			wikiPageType = this.textInterpreter.getWikiPageType(pageDetail.detail);
		});


        let parsedSyntaxes: ParsedSyntax[] =
            this.getParsedSyntaxes(pageDetails);
        const grammarType: SQFGrammarType =
            this.textInterpreter.getSQFGrammarType(page.title.toLowerCase());
        parsedSyntaxes = this.consolidateSyntaxes(parsedSyntaxes);


        let parsedPage: ParsedPage = {
            title: page.title,
            syntaxes: parsedSyntaxes,
            grammarType: grammarType,
        };
		parsedPage = this.addMiscDetailsToParsedPage(parsedPage,pageDetails);

        // TODO:
        // description
        // examples
        // server

        return "";
    }
	
	/* ----------------------------------------------------------------------------
		addMiscDetailsToParsedPage
	---------------------------------------------------------------------------- */
	private addMiscDetailsToParsedPage(parsedPage: ParsedPage, pageDetails: WikiPageDetail[]): ParsedPage {
		pageDetails.forEach((pageDetail) => {
            switch (pageDetail.type) {
                case WikiPageDetailType.ArgLocality: {
                    const argumentLocality =
                        this.textInterpreter.getArgumentLocality(
                            pageDetail.detail
                        );
                    if (argumentLocality) {
                        parsedPage.argumentLocality = argumentLocality;
                    }
                    break;
                }
                case WikiPageDetailType.EffectLocality: {
                    const effectLocality =
                        this.textInterpreter.getEffectLocality(
                            pageDetail.detail
                        );
                    if (effectLocality) {
                        parsedPage.effectLocality = effectLocality;
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
    private getWikiPageDetails(page: WikiPage): WikiPageDetail[] {
        const matchPageDetailsRegEx =
            /(\|(\s*|\S*)\=)(.*?(\n*\*.*)*)(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gim;
        const pageDetails: RegExpMatchArray | null | undefined =
            page.revision?.text?.match(matchPageDetailsRegEx);
        if (!pageDetails || pageDetails.length < 1) return [];

        const detailsParsed: WikiPageDetail[] = pageDetails.map(
            (detail: string, index: number) => {
                detail = detail.trim();
                return {
                    pageTitle: page.title!,
                    index: index,
                    type: this.textInterpreter.getDetailType(detail),
                    detail: detail,
                };
            }
        );

        return detailsParsed;
    }

    /* ----------------------------------------------------------------------------
		areSyntaxTypesEqual
	---------------------------------------------------------------------------- */
    private areSyntaxTypesEqual(
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
    private getSyntaxDifference(
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
        const leftArgIsTheSame = this.areSyntaxTypesEqual(
            mainSyntax.leftArgTypes,
            compareSyntax.leftArgTypes
        );
        const rightArgIsTheSame = this.areSyntaxTypesEqual(
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
    private consolidateSyntaxes(
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
                    this.getSyntaxDifference(mainSyntax, compareSyntax);

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
            if (syntax.leftArgTypes && Array.isArray(syntax.leftArgTypes)) {
                syntax.leftArgTypes = [...new Set(syntax.leftArgTypes)];
            }
            if (syntax.rightArgTypes && Array.isArray(syntax.rightArgTypes)) {
                syntax.rightArgTypes = [...new Set(syntax.rightArgTypes)];
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
}
