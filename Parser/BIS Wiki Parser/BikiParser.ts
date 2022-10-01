import { Parser } from "../SQFParser.namespace";
import { XMLParser } from "fast-xml-parser";
import { MediaWikiConverter } from "./MediaWikiConverter";
import { WikiPage } from "./BikiTypes";

import * as fs from "fs";
import * as path from "path";

export class BikiParser implements Parser  {
	private wikiConveter: MediaWikiConverter;
	constructor() {
		this.wikiConveter = new MediaWikiConverter()
	}
	
	/* ----------------------------------------------------------------------------
		getPages
	---------------------------------------------------------------------------- */
    public getPages(xmlFilePath: string): any[] {
		const xmlPath = path.resolve(xmlFilePath);
		const xmlFileAsString = fs.readFileSync(xmlPath);
		const xmlParser = new XMLParser();
		const xmlAsJSON = xmlParser.parse(xmlFileAsString);
		const pages: WikiPage[] = xmlAsJSON.mediawiki.page;

		return pages;
    }
    
	/* ----------------------------------------------------------------------------
		parsePages
	---------------------------------------------------------------------------- */
	public parsePages(pages: WikiPage[]): string[] {
		const parsedPages: string[] = pages.map(this.wikiConveter.parseWikiPage);
		// filter undefined or empty returns
        return parsedPages.filter((page) => page);
	};


	/* ----------------------------------------------------------------------------
		doWithParsedPages
	---------------------------------------------------------------------------- */
	public doWithParsedPages(parsedPages: string[]): void {
		
	}
}
