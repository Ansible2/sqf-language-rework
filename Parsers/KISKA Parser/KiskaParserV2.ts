import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import { DocParser, IGithubTreeResponse, UnparsedItem } from "../SQFParser.namespace";
import path from "path";

export class KiskaParserV2 implements DocParser {
    public readonly SEED_FILE_NAME: string = "KiskaFunctionLibrary.json";

    constructor() {}

    async getLatestSeedFile(): Promise<string> {
        const gitTreeUrl =
            "https://api.github.com/repos/Ansible2/Kiska-Function-Library/git/trees/master?recursive=1";

        const gitTree = await fetch(gitTreeUrl).then(
            (response) => response.json() as unknown as IGithubTreeResponse
        );

        for (const entry of gitTree.tree) {
            if (entry.type !== "blob") continue;

            const filePath = entry.path;
            const fileName = path.basename(filePath);
            if (!filePath.endsWith(".sqf") || !fileName.startsWith("fn_")) continue;

            // TODO: do a fetch api call to the url to get the file contents
            // need to consider how to do this in parrallel
            // might actually need to map all these request
        }

        console.debug("gitTree");
        console.debug(gitTree);
        // TODO:
        // traverse tree
        // request from github all file contents that are sqf function files
        // make output file
        return "";
    }

    async getUnparsedItems(seedFilePath: string): Promise<UnparsedItem[]> {
        return [];
    }

    async convertToItemConfigs(pages: UnparsedItem[]): Promise<SQFItemConfig[]> {
        return [];
    }

    getOutputFileName(): string {
        return "kiska.syntax";
    }
}
