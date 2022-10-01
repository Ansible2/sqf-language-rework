import { BikiTextInterpreter } from "./BikiTextInterpreter";
import { WikiPage, ParsedPage, WikiPageDetail } from "./BikiTypes";

export class MediaWikiConverter {


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

		return [];
	}	
}