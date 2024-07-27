import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import {
    DocParser,
    getParserSecrets,
    IGithubBlobResponse,
    IGithubTreeEntry,
    IGithubTreeResponse,
    ISecrets,
    UnparsedItem,
} from "../SQFParser.namespace";
import path from "path";
import fs from "fs-extra";

interface UnparsedKiskaPage extends UnparsedItem {
    fileName: string;
}

export class KiskaParserV2 implements DocParser {
    public readonly SEED_FILE_NAME: string = "KiskaFunctionLibrary.json";
    private readonly MAX_NUMBER_OF_CONCURRENT_REQUESTS = 20;

    constructor() {}

    async getLatestSeedFile(): Promise<string> {
        const secrets = await getParserSecrets();
        const REQUEST_OPTIONS = Object.freeze({
            headers: { Authorization: `Bearer ${secrets.KiskaToken}` },
        });

        console.log("Fetching git tree...");
        const gitTreeUrl =
            "https://api.github.com/repos/Ansible2/Kiska-Function-Library/git/trees/master?recursive=1";
        const gitTree = await fetch(gitTreeUrl, REQUEST_OPTIONS).then(
            (response) => response.json() as unknown as IGithubTreeResponse
        );
        console.log("Completed tree fetch with", gitTree.tree.length, "items");

        let currentRequests: Promise<UnparsedKiskaPage | null>[] = [];
        const unparsedPages: UnparsedKiskaPage[] = [];
        const waitForCurrentRequestsToComplete = async (index: number) => {
            console.log(
                "Waiting for",
                currentRequests.length,
                "requests to finish at index",
                index
            );

            const responses = await Promise.all(currentRequests);
            responses.forEach((response) => {
                if (response) {
                    unparsedPages.push(response);
                }
            });
            currentRequests = [];
        };

        const getUnparsedKiskaPage = async (
            entry: IGithubTreeEntry
        ): Promise<UnparsedKiskaPage | null> => {
            if (entry.type !== "blob") return null;

            const filePath = entry.path;
            const fileName = path.basename(filePath);
            if (!filePath.endsWith(".sqf") || !fileName.startsWith("fn_")) return null;

            const response = await fetch(entry.url, REQUEST_OPTIONS).then(
                (response) => response.json() as unknown as IGithubBlobResponse
            );
            const decoded = Buffer.from(response.content, "base64").toString();

            return {
                text: decoded,
                fileName,
            };
        };

        let index = 0;
        for (const entry of gitTree.tree) {
            currentRequests.push(getUnparsedKiskaPage(entry));
            if (currentRequests.length >= this.MAX_NUMBER_OF_CONCURRENT_REQUESTS) {
                await waitForCurrentRequestsToComplete(index);
            }
            index++;
        }
        
        if (currentRequests.length) {
            await waitForCurrentRequestsToComplete(gitTree.tree.length - 1);
        }
        console.log("Total number of files fetched ->", unparsedPages.length);

        return JSON.stringify(unparsedPages, null, 2);
    }

    async getUnparsedItems(seedFilePath: string): Promise<UnparsedKiskaPage[]> {
        return await fs.readJson(seedFilePath);
    }

    async convertToItemConfigs(pages: UnparsedKiskaPage[]): Promise<SQFItemConfig[]> {
        const parsedPages: SQFItemConfig[] = [];
        pages.forEach((unparsedPage) => {
            try {
                const parsedPage = this.parseKiskaPage(unparsedPage);
                if (!parsedPage) return;
                parsedPages.push(parsedPage);
            } catch (error) {
                console.error(`Error while parsing KISKA page: "${unparsedPage.fileName}"`, error);
            }
        });

        return parsedPages;
    }

    private parseKiskaPage(unparsedPage: UnparsedKiskaPage): SQFItemConfig {
        return {
            documentation: {},
            configuration: {
                label: "",
                grammarType: "",
            },
        };
    }

    getOutputFileName(): string {
        return "kiska.syntax";
    }
}
