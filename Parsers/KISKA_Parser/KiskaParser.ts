import {
    ExampleConfig,
    SQFGrammarType,
    SQFItemConfig,
    SQFParameterConfig,
    SQFSyntaxConfig,
} from "../../configuration/grammars/sqf.namespace";
import {
    DocParser,
    getParserSecrets,
    IGithubBlobResponse,
    IGithubTreeEntry,
    IGithubTreeResponse,
    UnparsedItem,
} from "../SQFParser.namespace";
import path from "path";
import fs from "fs-extra";

export interface UnparsedKiskaPage extends UnparsedItem {
    fileName: string;
    documentationLink: string;
}

const TYPES_REGEX = /\<(.*?)\>/gi;
const WHITESPACE_LINE_REGEX = /^\s+$/gim;
// for sub bulleted lists like in KISKA_fnc_ambientAnim
// remove one layer of indentation
const INDENTS_REGEX = /^(?:\t| {4})/gim;
// added the [ ]{0,1} just in case of errant extra spaces
const NEW_LINES_IN_SENTENCES_REGEX = /(?<=[\w.,]) *\n +(?=\w)/gi;
const WHITESPACE_BEFORE_NEW_LINE_REGEX = /[ \t]+(?=\n)/gi;
const HEADER_REGEX = /(?<=\/\* \-+\r*\n+)([\s\S]*?)(?=\r*\n+\-+ \*\/\r*\n+)/i;
const FUNCTION_NAME_REGEX = /(?<=function:\s*)\b.*/i;
const DESCRIPTION_SECTION_REGEX = /(?<=description:\r*\n*)([\s\S]*?)(?=^Parameters:)/im;
const RETURNS_SECTION_REGEX = /(?<=Returns:\r*\n*)([\s\S]*?)(?=(author[\w\W]*?:|examples:))/i;
const PARAMETERS_SECTION_REGEX = /(?<=parameters:\r*\n*)([\s\S]*?)(?=(Examples:|returns:))/i;
const INDIVIDUAL_PARAMETERS_REGEX =
    /(?<=^(\t| {0,4}))(\d:)([\s\S]*?)(?=(^(\t| {0,4}))(\d:)|<END>)/gim;
const INDIVIDUAL_PARAMETER_DESCRIPTION_REGEX = /(?<=\d+:\s*_\w*\b)[\s\S]+/i;
const INDIVIDUAL_PARAMETER_NAME_REGEX = /(?<=\d+:\s*)_\w*\b/i;
const EXAMPLES_SECTION_REGEX = /(?<=Example\w*:\r*\n*)([\s\S]*?)(?=(author[\w\W]*?:|returns:))/i;
const INDIVIDUAL_SQF_EXAMPLE_REGEX = /([\t ]*\(begin example\)\r*\n+)([\s\S]*?)(\(end\))/gi;
const INDIVIDUAL_CONFIG_EXAMPLE_REGEX =
    /([\t ]*\(begin config example\)\r*\n+)([\s\S]*?)(\(end\))/gi;
const CONFIG_CODE_REPLACEMENT_TOKEN = "(ConfigCodeToReplace)";
const SQF_CODE_REPLACEMENT_TOKEN = "(SQFCodeToReplace)";

const SCHEDULED_FUNCTION_TEXT = "if (!canSuspend) exitWith".toLowerCase();

const REPO_TREE_URL =
    "https://api.github.com/repos/Ansible2/Kiska-Function-Library/git/trees/master?recursive=1";

export class KiskaParser implements DocParser {
    public readonly SEED_FILE_NAME: string = "KiskaFunctionLibrary.json";
    private readonly MAX_NUMBER_OF_CONCURRENT_REQUESTS = 20;
    // private debug = false;

    constructor() {}

    private getDocumentationLink(entry: IGithubTreeEntry): string {
        return `https://github.com/Ansible2/Kiska-Function-Library/blob/master/${entry.path}`;
    }

    async getLatestSeedFile(): Promise<string> {
        const secrets = await getParserSecrets();
        const REQUEST_OPTIONS = Object.freeze({
            headers: { Authorization: `Bearer ${secrets.KiskaToken}` },
        });

        console.log("Fetching git tree...");
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
        const headerComment = this.matchFirst(page, HEADER_REGEX);
        if (!headerComment) {
            throw new Error("Could not find header comment");
        }

        const functionName = this.matchFirst(headerComment, FUNCTION_NAME_REGEX);
        if (!functionName) {
            throw new Error("Could not find function name");
        }

        const itemConfig: SQFItemConfig = {
            documentation: {
                documentationLink: encodeURI(unparsedPage.documentationLink),
                syntaxes: [],
                examples: [],
            },
            configuration: {
                label: functionName,
                grammarType: SQFGrammarType.Function,
            },
        };

        const functionDescription = this.matchFirst(headerComment, DESCRIPTION_SECTION_REGEX);
        if (functionDescription) {
            itemConfig.documentation.description = this.convertText(functionDescription);
        }

        const isScheduled = page.toLowerCase().includes(SCHEDULED_FUNCTION_TEXT);
        const executorText = isScheduled ? "spawn" : "call";
        const syntax: SQFSyntaxConfig = {
            outline: `${executorText} \`${functionName}\``,
            parameters: [],
        };
        itemConfig.documentation.syntaxes?.push(syntax);

        let fullParameterSection = this.matchFirst(headerComment, PARAMETERS_SECTION_REGEX);
        if (fullParameterSection) {
            fullParameterSection += "<END>";

            const individualParametersMatch = fullParameterSection.match(
                INDIVIDUAL_PARAMETERS_REGEX
            );
            const parameterNames: string[] = [];
            individualParametersMatch?.forEach((parameterString) => {
                let parameterDescription = this.matchFirst(
                    parameterString,
                    INDIVIDUAL_PARAMETER_DESCRIPTION_REGEX
                );
                if (parameterDescription) {
                    parameterDescription = this.convertText(parameterDescription);
                }

                const parameterName = this.matchFirst(
                    parameterString,
                    INDIVIDUAL_PARAMETER_NAME_REGEX
                );
                if (!parameterName) {
                    throw new Error(`null parameter name! ${parameterString}`);
                }

                parameterNames.push(parameterName);
                const parameterConfig: SQFParameterConfig = {
                    name: parameterName,
                    description: parameterDescription,
                };
                syntax.parameters.push(parameterConfig);
            });

            if (parameterNames.length) {
                syntax.outline = `[${parameterNames.join(", ")}] ${syntax.outline}`;
            }
        } else if (isScheduled) {
            // scheduled functions always need an array of args
            syntax.outline = `[] ${syntax.outline}`;
        }

        const returnsSection = this.matchFirst(headerComment, RETURNS_SECTION_REGEX);
        if (returnsSection) {
            syntax.returns = this.convertText(returnsSection);
        }

        const examplesSection = this.matchFirst(headerComment, EXAMPLES_SECTION_REGEX);
        if (examplesSection) {
            const parsedExamples: ExampleConfig[] = [];
            const individualExamplesMatch = examplesSection.match(INDIVIDUAL_SQF_EXAMPLE_REGEX);
            individualExamplesMatch?.forEach((example) => {
                const exampleConfig: ExampleConfig = {
                    text: this.convertText(example),
                };
                parsedExamples.push(exampleConfig);
            });
            itemConfig.documentation.examples = parsedExamples;
        }

        return itemConfig;
    }

    private convertText(text: string): string {
        let convertedText = text;
        // code blocks are seperated to ensure that any code formatting is not overwritten
        // during formatting
        const sqfCodeBlockMatches = convertedText.matchAll(INDIVIDUAL_SQF_EXAMPLE_REGEX);
        const sqfCodeExamples: string[] = [];
        if (sqfCodeBlockMatches) {
            for (const match of sqfCodeBlockMatches) {
                if (!match) continue;
                const exampleText = match[2];
                sqfCodeExamples.push(exampleText);
                const completeString = match[0];
                convertedText = convertedText.replace(completeString, SQF_CODE_REPLACEMENT_TOKEN);
            }
        }
        const configCodeBlockMatches = convertedText.matchAll(INDIVIDUAL_CONFIG_EXAMPLE_REGEX);
        const configCodeExamples: string[] = [];
        if (configCodeBlockMatches) {
            for (const match of configCodeBlockMatches) {
                if (!match) continue;
                const exampleText = match[2];
                configCodeExamples.push(exampleText);
                const completeString = match[0];
                convertedText = convertedText.replace(
                    completeString,
                    CONFIG_CODE_REPLACEMENT_TOKEN
                );
            }
        }

        convertedText = convertedText
            .replace(NEW_LINES_IN_SENTENCES_REGEX, " ")
            .replace(WHITESPACE_LINE_REGEX, "")
            .replace(TYPES_REGEX, "*($1)*");

        for (const exampleCodeText of sqfCodeExamples) {
            convertedText = convertedText.replace(
                SQF_CODE_REPLACEMENT_TOKEN,
                ["\n```sqf", exampleCodeText.trim().replace(INDENTS_REGEX, ""), "```\n"].join("\n")
            );
        }

        for (const exampleCodeText of configCodeExamples) {
            convertedText = convertedText.replace(
                CONFIG_CODE_REPLACEMENT_TOKEN,
                ["\n```cpp", exampleCodeText.trim().replace(INDENTS_REGEX, ""), "```\n"].join("\n")
            );
        }

        return convertedText
            .trim()
            .replace(INDENTS_REGEX, "")
            .replace(WHITESPACE_BEFORE_NEW_LINE_REGEX, "");
    }

    private matchFirst(text: string, regex: RegExp): string | null {
        return text.match(regex)?.at(0) || null;
    }

    getOutputFileName(): string {
        return "kiska.syntax";
    }
}
