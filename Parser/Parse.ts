import * as path from "path";
import { BikiParser } from "./BIS Wiki Parser/BikiParser";

try {
	const parser = new BikiParser();
	const pages = parser.getPages(path.resolve(__dirname,"../scripts/edgecases.xml"));
	const parsedPages = parser.parsePages(pages);
	parser.doWithParsedPages(parsedPages);
} catch (error) {
	console.log("An error happened while parsing pages:");
	console.log(error);
}
