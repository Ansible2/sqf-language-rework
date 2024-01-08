import * as path from "path";
import fs from "fs-extra";
import { KiskaParser } from "./KISKA Parser/KiskaParser";
import { DocParser, ParsedItem } from "./SQFParser.namespace";
import { BikiParserV2 } from "./BIKI Parser 2.0/BikiParserV2";
import { SQFItemConfig } from "../configuration/grammars/sqf.namespace";
// https://community.bistudio.com/wiki/Special:Export/
const parseType = process.argv[2];

function getDocumentation(parsedPage: ParsedItem): string {
    // TODO: implement
    return "";
}

function getItemConfig(parsedPage: ParsedItem): SQFItemConfig {
    // TODO: implement
    return {};
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
        parsedPages.forEach((parsedPage) => {
            const documentation = getDocumentation(parsedPage);
            // TODO: this may not be able to be an item config since it really needs to be written to the config file as one
            const itemConfig = getItemConfig(parsedPage);

            // TODO: write config and documentation to files
        });
    } catch (error) {
        console.log("An error happened while parsing pages:");
        console.error(error);
    }
}

main();
