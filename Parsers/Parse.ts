import * as path from "path";
import fs from "fs";
import { KiskaParser } from "./KISKA Parser/KiskaParser";
import { BikiParser } from "./BIKI Parser/BikiParser";
import { DocParser, ParsedPage } from "./SQFParser.namespace";
// https://community.bistudio.com/wiki/Special:Export/
const parseType = process.argv[2];

function convertPageToText(parsedPage: ParsedPage): string {
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
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }

        const parsedOutputFolder = `${outputFolder}/${parser.getOutputFolderName()}/docs`;
        if (!fs.existsSync(parsedOutputFolder)) {
            fs.mkdirSync(parsedOutputFolder);
        }

        const docsFolder = `${parsedOutputFolder}/docs`;
        if (!fs.existsSync(docsFolder)) {
            fs.mkdirSync(docsFolder);
        }

        parsedPages.forEach((parsedPage) => {
            fs.writeFileSync(`${docsFolder}/${parsedPage.name}.md`, convertPageToText(parsedPage));
        });
    } catch (error) {
        console.log("An error happened while parsing pages:");
        console.error(error);
    }
}

main();
