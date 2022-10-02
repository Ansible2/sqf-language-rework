import { SQFDataType, SQFSyntaxType } from "../SQFParser.namespace";
import { BikiTextInterpreter } from "./BikiTextInterpreter";
import { WikiPage, ParsedWikiPage, WikiPageDetail, WikiPageDetailType, ParsedSyntax } from "./BikiTypes";

interface ParsingSyntax {
	detailIndex: number,
	syntax: {
		returnType?: SQFDataType,
		parameters_1?: SQFDataType[];
    	parameters_2?: SQFDataType[];
		syntaxType?: SQFSyntaxType;
	},
}

function findLastIndex<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): number {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array))
            return l;
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
	getSQFDataTypes(input: string): SQFDataType[] {
		const edgeNothingMatch = input.match(/\|r\d*=\s*Nothing/);
		if (edgeNothingMatch) {
			const typeCovnerted = this.textInterpreter.getSQFDataType(
				'Nothing'
			);
			
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
            const mappedTypes = multipleTypes.map(
                (matchedType: string) => {
                    const type =
						this.textInterpreter.getSQFDataType(
                            matchedType
                        );

                    if (type) {
                        return type;
                    }
                }
            );

            return mappedTypes;
        });
		
		// filter out undefined
		const filtered = matchesParsed.filter((item) => item)
        return (filtered as SQFDataType[]);
	}
	

	/* ----------------------------------------------------------------------------
		convertParsingSyntax
	---------------------------------------------------------------------------- */
	convertParsingSyntax(
		pageTitle: string, 
		parsingSyntax: ParsingSyntax, 
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
			
		} else if (parsingSyntaxDetails.parameters_1 && parsingSyntaxDetails.parameters_2) {
			syntaxType = SQFSyntaxType.BinaryOperator;
			leftArgTypes = parsingSyntaxDetails.parameters_1;
			rightArgTypes = parsingSyntaxDetails.parameters_2;

		} else if (parsingSyntaxDetails.parameters_1) {
			syntaxType = SQFSyntaxType.UnaryOperator;
			rightArgTypes = parsingSyntaxDetails.parameters_1;
		}
		


		if (syntaxType) {
			parsedSyntax.syntaxType = syntaxType;
		};
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
	addPageDetailToSyntax(parsingSyntaxes: ParsingSyntax[], pageDetail: WikiPageDetail) {
		const indexOfSyntax = findLastIndex(parsingSyntaxes,(syntax) => syntax.detailIndex > pageDetail.index);
		const parsingSyntax = parsingSyntaxes[indexOfSyntax];
		
		const isParameter = pageDetail.type === WikiPageDetailType.Parameter;
		const isReturn = pageDetail.type === WikiPageDetailType.Return;
		if (!isParameter && !isReturn) return;
		
		
		const typesParsed = this.getSQFDataTypes(pageDetail.detail);
		if (typesParsed.length < 1) {
			console.log("Could not parse any types for a detail on command",pageDetail.pageTitle);
			console.log("Detail:",pageDetail.detail);
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
					syntax: {}
				});
			}
		});

		if (parsingSyntaxes.length < 1) return [];
		
		for (const pageDetail of pageDetails) {
			if (
				pageDetail.type === WikiPageDetailType.Return || 
				pageDetail.type === WikiPageDetailType.Parameter
			) {
				this.addPageDetailToSyntax(parsingSyntaxes,pageDetail);
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
	parseWikiPage(page: WikiPage): string {
		if (!page.title || !page.revision || !page.revision.text)
			return '';
		
		const actualTitle = BikiTextInterpreter.getProperTitle(page.title);
		if (actualTitle.startsWith("Category:")) return '';
		page.title = actualTitle;

		const pageDetails: WikiPageDetail[] = this.getWikiPageDetails(page);
		if (pageDetails.length < 1) return '';

		const parsedSyntaxes: ParsedSyntax[] = this.getParsedSyntaxes(pageDetails);
		
		// TODO:
		// consolidate syntaxes
		// parse grammar type
		// parse argument
		// parse effect
		// description
		// examples
		// server
		
		return '';
	}


	/* ----------------------------------------------------------------------------
		getWikiPageDetails
	---------------------------------------------------------------------------- */
	private getWikiPageDetails(page: WikiPage): WikiPageDetail[] {
		const matchPageDetailsRegEx =
            /(\|(\s*|\S*)\=)(.*?(\n*\*.*)*)(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gim;
		const pageDetails: RegExpMatchArray | null | undefined = page.revision?.text?.match(
			matchPageDetailsRegEx
		);
		if (!pageDetails || pageDetails.length < 1) return [];
		
		const detailsParsed: WikiPageDetail[] = pageDetails.map((detail: string, index: number) => {
			detail = detail.trim();
			return {
				pageTitle: page.title!,
				index: index,
				type: this.textInterpreter.getDetailType(detail),
				detail: detail,
			}
		});

		return detailsParsed;
	}	
}