import * as path from "path";
import { BikiParser } from "./Biki Parser/BikiParser";

try {
	const parser = new BikiParser();
	// const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/commands.MediaWiki.xml"));
	const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/edgecases.xml"));
	const parsedPages = parser.parsePages(pages);
	parser.doWithParsedPages(parsedPages);
} catch (error) {
	console.log("An error happened while parsing pages:");
	console.log(error);
}
