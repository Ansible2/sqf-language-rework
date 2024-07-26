import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import {
    DocParser,
    IGithubBlobResponse,
    IGithubTreeResponse,
    UnparsedItem,
} from "../SQFParser.namespace";
import path from "path";
import fs from "fs-extra";

export class KiskaParserV2 implements DocParser {
    public readonly SEED_FILE_NAME: string = "KiskaFunctionLibrary.json";
    private readonly MAX_NUMBER_OF_CONCURRENT_REQUESTS = 20;

    constructor() {}

    async getLatestSeedFile(): Promise<string> {
        const secrets = await fs.readJson(path.resolve(__dirname, "../secrets.json"));
        const REQUEST_OPTIONS = Object.freeze({
            headers: { Authorization: `Bearer ${secrets.KiskaToken}` },
        });

        const gitTreeUrl =
            "https://api.github.com/repos/Ansible2/Kiska-Function-Library/git/trees/master?recursive=1";
        console.log("Fetching git tree...");
        const gitTree = await fetch(gitTreeUrl, REQUEST_OPTIONS).then(
            (response) => response.json() as unknown as IGithubTreeResponse
        );
        console.log("Completed tree fetch with", gitTree.tree.length, "items");

        let currentRequests: Promise<IGithubBlobResponse>[] = [];
        const fileResponses: IGithubBlobResponse[] = [];
        const maxIndex = gitTree.tree.length;
        let currentIndex = -1;
        for (const entry of gitTree.tree) {
            currentIndex++;
            if (entry.type !== "blob") continue;

            const filePath = entry.path;
            const fileName = path.basename(filePath);
            if (!filePath.endsWith(".sqf") || !fileName.startsWith("fn_")) continue;

            const request = fetch(entry.url, REQUEST_OPTIONS).then(
                (response) => response.json() as unknown as IGithubBlobResponse
            );
            currentRequests.push(request);

            if (
                currentRequests.length >= this.MAX_NUMBER_OF_CONCURRENT_REQUESTS ||
                currentIndex === maxIndex
            ) {
                console.log(
                    "Sending request for",
                    currentRequests.length,
                    "files on index",
                    currentIndex
                );
                const responses = await Promise.all(currentRequests);
                fileResponses.push(...responses);
                currentRequests = [];
            }
        }

        if (currentRequests.length) {
            console.log(
                "Sending request for",
                currentRequests.length,
                "files on index",
                currentIndex
            );
            const responses = await Promise.all(currentRequests);
            fileResponses.push(...responses);
        }
        console.log("Total number of files fetched ->", fileResponses.length);

        const decodedFiles: string[] = [];
        for (const response of fileResponses) {
            const decoded = Buffer.from(response.content, "base64").toString();
            decodedFiles.push(decoded);
        }
        console.log("Decoded", decodedFiles.length, "files from the KISKA Function Library");

        return JSON.stringify(decodedFiles);
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
