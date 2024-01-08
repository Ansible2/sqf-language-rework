import * as path from "path";
import fs from "fs-extra";
import { KiskaParser } from "./KISKA Parser/KiskaParser";
import { BikiParser } from "./BIKI Parser/BikiParser";
import { DocParser, ParsedItem } from "./SQFParser.namespace";
import { BikiParserV2 } from "./BIKI Parser 2.0/BikiParserV2";
// https://community.bistudio.com/wiki/Special:Export/
const parseType = process.argv[2];

function convertPageToText(parsedPage: ParsedItem): string {
    // TODO:
    return "";
}

async function main() {
    let parser: DocParser | undefined = undefined;
    switch (parseType?.toLowerCase()) {
        case "kiska": {
            parser = new KiskaParser();
            break;
        }
        case "biki:commands": {
            parser = new BikiParserV2();
            break;
        }
        default: {
            console.log(process.env);
            console.log(`parseType: ${parseType} is invalid`);
        }
    }

    if (!parser) return;

    try {
        const pages = await parser.getPages();
        const parsedPages = await parser.parsePages(pages);
        const outputFolder = "./Parsers/.output";

        fs.emptyDirSync(outputFolder);

        const parsedOutputFolder = `${outputFolder}/${parser.getOutputFolderName()}/docs`;
        if (!fs.existsSync(parsedOutputFolder)) {
            fs.mkdirSync(parsedOutputFolder);
        }
        fs.ensureDirSync(outputFolder);

        // const docsFolder = `${parsedOutputFolder}/docs`;
        // if (!fs.existsSync(docsFolder)) {
        //     fs.mkdirSync(docsFolder);
        // }

        // parsedPages.forEach((parsedPage) => {
        //     const text = convertPageToText(parsedPage);
        //     if (!text) return;

        //     fs.writeFileSync(`${docsFolder}/${parsedPage.name}.md`, text);
        // });
    } catch (error) {
        console.log("An error happened while parsing pages:");
        console.error(error);
    }
}

main();
