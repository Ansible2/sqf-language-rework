import * as path from "path";
import fs from "fs-extra";
// import { KiskaParser } from "./KISKA Parser/KiskaParser";
import { BikiParserV2 } from "./BIKI Parser 2.0/BikiParserV2";
import { DocParser } from "./SQFParser.namespace";

// https://community.bistudio.com/wiki/Special:Export/
const parseType = process.argv[2];
async function main() {
    let parser: DocParser | undefined = undefined;
    switch (parseType?.toLowerCase()) {
        case "kiska": {
            // parser = new KiskaParser();
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
        const unparsedItems = await parser.getUnparsedItems();
        const itemConfigs = (await parser.convertToItemConfigs(unparsedItems)).sort((a, b) =>
            a.configuration.label.toLowerCase().localeCompare(b.configuration.label.toLowerCase())
        );
        const outputFilePath = path.resolve(
            __dirname,
            `./.output/${parser.getOutputFileName()}.ts`
        );
        const contents = `export const configs = ${JSON.stringify(itemConfigs, null, 4)}`;
        fs.ensureFileSync(outputFilePath);
        fs.writeFileSync(outputFilePath, contents, { encoding: "utf-8" });
    } catch (error) {
        console.log("An error happened while parsing pages:");
        console.error(error);
    }
}

main();
