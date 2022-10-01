import { SQFDataType, SQFSyntaxType } from "../SQFParser.namespace";
import { BikiTextInterpreter } from "./BikiTextInterpreter";
import { WikiPage, ParsedWikiPage, WikiPageDetail, WikiPageDetailType, ParsedSyntax } from "./BikiTypes";

interface ParsingSyntax {
	detailIndex: number,
	syntax: ParsedSyntax,
	parameters_1?: SQFDataType[],
	parameters_2?: SQFDataType[],
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
		// TODO: add parsing
		return [];
	}

	
	/* ----------------------------------------------------------------------------
		addPageDetailToSyntax
	---------------------------------------------------------------------------- */
	addPageDetailToSyntax(parsingSyntaxes: ParsingSyntax[], pageDetail: WikiPageDetail) {
		const indexOfSyntax = findLastIndex(parsingSyntaxes,(syntax) => syntax.detailIndex > pageDetail.index);
		const parsingSyntax = parsingSyntaxes[indexOfSyntax];
		
		switch (pageDetail.type) {
			case (WikiPageDetailType.Parameter): {
				const typesParsed = this.getSQFDataTypes(pageDetail.detail);
				if (typesParsed.length < 1) {
					console.log("Could not parse any types for a detail on command",pageDetail.pageTitle);
					console.log("Detail:",pageDetail.detail);
				}

				if (parsingSyntax.parameters_1) {
					parsingSyntax.parameters_2 = typesParsed;
				} else {
					parsingSyntax.parameters_1 = typesParsed;
				}
				
				break;
			}
				
		
			default:
				break;
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
					syntax: {
						pageTitle: detail.pageTitle,
						returnType: SQFDataType.Empty,
						syntaxType: SQFSyntaxType.Empty,
					}
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
		

		const parsedSyntaxes: ParsedSyntax[] = [];
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