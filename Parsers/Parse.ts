import * as path from "path";
import { KiskaParser } from "./KISKA Parser/KiskaParser";
import { BikiParser } from "./BIKI Parser/BikiParser";
// https://community.bistudio.com/wiki/Special:Export/
const parseType = process.argv[2];

switch (parseType?.toLowerCase()) {
	case 'biki:commands': {
		try {
			const parser = new BikiParser();
			const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/commands.MediaWiki.xml"));
			const parsedPages = parser.parsePages(pages);
			parser.doWithParsedPages(parsedPages);
		} catch (error) {
			console.log("An error happened while parsing pages:");
			console.log(error);
		}
		break;
	}
	case 'biki:functions': {
		try {
			const parser = new BikiParser();
			// const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/Biki Seed Files/functions.MediaWiki.xml"));
			const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/Test Seed Files/EdgeCases.xml"));
			const parsedPages = parser.parsePages(pages);
			parser.doWithParsedPages(parsedPages);
		} catch (error) {
			console.log("An error happened while parsing pages:");
			console.log(error);
		}
		break;
	}
	case 'kiska': {
		try {
			const parser = new KiskaParser();
			const pages = parser.getPages(
				path.resolve(
					"S:/Arma Working Folder/My Mods/Functional Mods/Function Library/No PBO/KISKA Function Library/addons"
					// __dirname,
					// "./Seed Files/Example Kiska Functions"
				)
			);
			const parsedPages = parser.parsePages(pages);
			parser.doWithParsedPages(parsedPages);
		} catch (error) {
			console.log("An error happened while parsing pages:");
			console.log(error);
		}
		
		break;
	}

	default: {
		console.log(process.env);
		console.log(`parseType: ${parseType} is invalid`);
		break;
	}
		
}
