import {
    SQFGrammarType,
    SQFItemConfig,
    SQFParameterConfig,
} from "../../configuration/grammars/sqf.namespace";
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
    documentationLink: string;
}

export class KiskaParserV2 implements DocParser {
    public readonly SEED_FILE_NAME: string = "KiskaFunctionLibrary.json";
    private readonly MAX_NUMBER_OF_CONCURRENT_REQUESTS = 20;

    constructor() {}

    private getDocumentationLink(entry: IGithubTreeEntry): string {
        return `https://github.com/Ansible2/Kiska-Function-Library/blob/${entry.sha}/${entry.path}`;
    }

    async getLatestSeedFile(): Promise<string> {
        const secrets = await getParserSecrets();
        const REQUEST_OPTIONS = Object.freeze({
            headers: { Authorization: `Bearer ${secrets.KiskaToken}` },
        });

        console.log("Fetching git tree...");
        const REPO_TREE_URL =
            "https://api.github.com/repos/Ansible2/Kiska-Function-Library/git/trees/master?recursive=1";
        const gitTree = await fetch(REPO_TREE_URL, REQUEST_OPTIONS).then(
            (response) => response.json() as unknown as IGithubTreeResponse
        );
        console.log("Completed tree fetch with", gitTree.tree.length, "items");

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
                documentationLink: this.getDocumentationLink(entry),
            };
        };

        let currentRequests: Promise<UnparsedKiskaPage | null>[] = [];
        const unparsedPages: UnparsedKiskaPage[] = [];
        let index = -1;
        const maxIndex = gitTree.tree.length - 1;
        for (const entry of gitTree.tree) {
            index++;
            currentRequests.push(getUnparsedKiskaPage(entry));

            const waitForCurrentRequestsToComplete =
                currentRequests.length >= this.MAX_NUMBER_OF_CONCURRENT_REQUESTS ||
                index === maxIndex;
            if (waitForCurrentRequestsToComplete) {
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
            }
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
        const page = unparsedPage.text;
        const headerRegexMatch = page.match(
            /(?<=\/\* \-+\r*\n+)([\s\S]*?)(?=\r*\n+\-+ \*\/\r*\n+)/i
        );

        if (!headerRegexMatch) {
            throw new Error("Could not find header comment");
        }

        const headerComment = headerRegexMatch[0];
        const functionName = headerComment.match(/(?<=function:\s*)\b.*/i)?.at(0);
        if (!functionName) {
            throw new Error("Could not find function name");
        }

        const itemConfig: SQFItemConfig = {
            documentation: {
                documentationLink: unparsedPage.documentationLink,
                syntaxes: [],
                examples: [],
            },
            configuration: {
                label: functionName,
                grammarType: SQFGrammarType.Function,
            },
        };

        const descriptionMatch = headerComment.match(
            /(?<=description:\r*\n*)([\s\S]*?)(?=Parameters:)/i
        );
        if (descriptionMatch) {
            // ([\n\r\t]+| {2,}) decent replace regex but still leaves double spaces
            // should seperate the ( {2,}) into one afterthe first replace(?)

            // TODO: convert exmaples in the description and remove spaces better
            const description = descriptionMatch[0].replace(/[\n\r\t]+/gi, " ");
            itemConfig.documentation.description = description.replace(/ {2,}/gi, " ");
        }

        const parametersMatch = headerComment.match(
            /(?<=parameters:\r*\n*)([\s\S]*?)(?=(Examples:|returns:))/i
        );
        if (parametersMatch) {
            let fullParameterSection = parametersMatch[0];
            fullParameterSection += "<END>";

            const individualParametersMatch = fullParameterSection.match(
                /(?<=^(\t| {0,4}))(\d:)([\s\S]*?)(?=(^(\t| {0,4}))(\d:)|<END>)/gim
            );
            individualParametersMatch?.forEach((parameterString) => {
                let description =
                    parameterString.match(/(?<=\d+:\s*_\w*\b)[\s\S]+/i)?.at(0) || null;
                if (description) {
                    const parameterTypesRegex = /\<(.*?)\>/i;
                    const whitespaceLineRegex = /^\s+$/gim;
                    // TODO: Test against KISKA_fnc_ambientAnim params
                    // this should not remove indents for sub bullets
                    const indentsRegex = /(?:\t| {4,})/gi;
                   
                    const newLinesInSentences = /(?<!\n)\n[\t ]*(?=\w)/gi;
                    description = description
                        .trim()
                        .replace(newLinesInSentences, "")
                        .replace(whitespaceLineRegex, "")
                        .replace(parameterTypesRegex, "*($1)*")
                        .replace(indentsRegex, "");
                }

                const parameter: SQFParameterConfig = {
                    name: parameterString.match(/(?<=\d+:\s*)_\w*\b/i)?.at(0) || null,
                    description,
                };
            });
            // TODO: parse parameters
        }

        return itemConfig;
    }

    getOutputFileName(): string {
        return "kiska.syntax";
    }
}
