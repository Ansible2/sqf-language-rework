import { text } from "stream/consumers";
import { BikiTextInterpreter } from "./BikiTextInterpreter";
import { WikiPage, ParsedPage, WikiPageDetail, WikiPageDetailType } from "./BikiTypes";

export class MediaWikiConverter {
	private textInterpreter: BikiTextInterpreter;
	constructor() {
		this.textInterpreter = new BikiTextInterpreter();
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


		return '';
	}


	/* ----------------------------------------------------------------------------
		parseWikiPage
	---------------------------------------------------------------------------- */
	getWikiPageDetails(page: WikiPage): WikiPageDetail[] {
		const matchPageDetailsRegEx =
            /(\|(\s*|\S*)\=)(.*?(\n*\*.*)*)(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gim;
		const pageDetails: RegExpMatchArray | null | undefined = page.revision?.text?.match(
			matchPageDetailsRegEx
		);
		if (!pageDetails || pageDetails.length < 1) return [];
		
		const detailsParsed: WikiPageDetail[] = pageDetails.map((detail: string, index: number) => {
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