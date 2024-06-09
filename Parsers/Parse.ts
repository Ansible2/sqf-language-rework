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
            parser = new BikiParserV2("commands");
            break;
        }
        case "biki:functions": {
            parser = new BikiParserV2("functions");
            break;
        }
        default: {
            console.log(process.env);
            console.log(`parseType: ${parseType} is invalid`);
        }
    }

    if (!parser) return;

    try {
        const SEED_FILE_PATH = path.resolve(__dirname, "./Seed Files", parser.SEED_FILE_NAME);

        const collectLatestDocument = true;
        if (collectLatestDocument) {
            console.log("Getting latest seed file...");
            const seedFileContent = await parser.getLatestSeedFile();
            console.log("Writing file to", SEED_FILE_PATH, "...");
            fs.writeFileSync(SEED_FILE_PATH, seedFileContent);
            console.log("Completed file write!");
        }

        console.log("Collecting unparsed items...");
        const unparsedItems = await parser.getUnparsedItems(SEED_FILE_PATH);
        console.log("Converting items to configs...");
        const itemConfigs = (await parser.convertToItemConfigs(unparsedItems)).sort((a, b) =>
            a.configuration.label.toLowerCase().localeCompare(b.configuration.label.toLowerCase())
        );
        const outputFilePath = path.resolve(
            __dirname,
            `../configuration/grammars/syntaxes/${parser.getOutputFileName()}.ts`
        );
        const contents = `import { SQFItemConfig } from "../sqf.namespace";\n\nexport const configs: SQFItemConfig[] = ${JSON.stringify(
            itemConfigs,
            null,
            4
        )}`;
        console.log("Writing ouput file to", outputFilePath, "...");
        fs.ensureFileSync(outputFilePath);
        fs.writeFileSync(outputFilePath, contents, { encoding: "utf-8" });
        console.log("----------SUCCESS!----------");
    } catch (error) {
        console.log("An error happened while parsing pages:");
        console.error(error);
        console.log("----------FAIL----------");
    }
}

main();
