import * as path from "path";
import { BikiParser } from "./Biki Parser/BikiParser";
import { KiskaParser as KiskaParser } from "./KISKA Parser/KiskaParser";
// https://community.bistudio.com/wiki/Special:Export/
const parseType = process.argv[2];

switch (parseType?.toLowerCase()) {
    case "biki:commands": {
        try {
            const parser = new BikiParser();
            const pages = parser.getPages(
                path.resolve(__dirname, "./Seed Files/commands.MediaWiki.xml")
            );
            const parsedPages = parser.parsePages(pages);
            parser.doWithParsedPages(parsedPages);
        } catch (error) {
            console.log("An error happened while parsing pages:");
            console.log(error);
        }
        break;
    }
    case "biki:functions": {
        try {
            const parser = new BikiParser();
            const pages = parser.getPages(
                path.resolve(__dirname, "./Seed Files/functions.MediaWiki.xml")
            );
            // const pages = parser.getPages(path.resolve(__dirname,"./Seed Files/functionsShort.xml"));
            const parsedPages = parser.parsePages(pages);
            parser.doWithParsedPages(parsedPages);
        } catch (error) {
            console.log("An error happened while parsing pages:");
            console.log(error);
        }
        break;
    }
    case "kiska": {
        try {
            const parser = new KiskaParser();
            const pages = parser.getPages(
                path.resolve(
                    "B:/Arma Working Folder/My Mods/KISKA Function Library/Unpacked/Kiska-Function-Library/addons"
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
