import * as path from "path";
import { BikiParser } from "./Biki Parser/BikiParser";
import { KiskaParsers as KiskaParser } from "./KISKA Parser/KiskaParser";

// try {
// 	const parser = new BikiParser();
// 	const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/commands.MediaWiki.xml"));
// 	// const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/edgecases.xml"));
// 	const parsedPages = parser.parsePages(pages);
// 	parser.doWithParsedPages(parsedPages);
// } catch (error) {
// 	console.log("An error happened while parsing pages:");
// 	console.log(error);
// }

try {
    const parser = new KiskaParser();
    const pages = parser.getPages(
        path.resolve(
            // "S:/Arma Working Folder/My Mods/Functional Mods/Function Library/No PBO/KISKA Function Library/addons"
			__dirname,
			"./Seed Files/Example Kiska Functions"
        )
    );
    // const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/edgecases.xml"));
    const parsedPages = parser.parsePages(pages);
    parser.doWithParsedPages(parsedPages);
} catch (error) {
    console.log("An error happened while parsing pages:");
    console.log(error);
}

// S:\Arma Working Folder\My Mods\Functional Mods\Function Library\No PBO\KISKA Function Library\addons
