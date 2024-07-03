import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import { DocParser, UnparsedItem } from "../SQFParser.namespace";

export class KiskaParserV2 implements DocParser {
    public readonly SEED_FILE_NAME: string = "KiskaFunctionLibrary.json";

    constructor() {}

    async getLatestSeedFile(): Promise<string> {
        const gitTreeUrl =
            "https://api.github.com/repos/Ansible2/Kiska-Function-Library/git/trees/master?recursive=1";

        const gitTree = await fetch(gitTreeUrl).then((response) => response.json());
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
