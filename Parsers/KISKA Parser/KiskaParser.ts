import { DocParser, ParsedItem, SQFGrammarType, UnparsedItem } from "../SQFParser.namespace";
import * as fs from "fs";
import * as path from "path";

// select header comment
// /(?<=\/\* \-+\n)([\s\S]*?)(?=\n+\-+ \*\/\n)/i

// select Function name
// /(?<=function:\s*)\b.*/i
// (?<=function:)([\s\S]*?)(?=\r*\n+)

// select description
// /(?<=description:\n*)([\s\S]*)(?=Parameters:)/i

// select parameters
// /(?<=parameters:\n*)([\s\S]*)(?=Returns:)/i
// select indiviual parameters (Requires that "<END>" be place at the end of the parameters string)
// /(?<=^(\t| {0,4}))(\d:)([\s\S]*?)(?=(^(\t| {0,4}))(\d:)|<END>)/gim

// select returns
// /(?<=Returns:\n*)([\s\S]*)(?=Examples:)/i

// select examples
// /(?<=Example\w*:\n*)([\s\S]*)(?=author[\w\W]*?:)/i
// select individual examples
// /(?<=\(begin example\)\n)([\s\S]*?)(?=\(end\))/gi

function getAllFilesInDirectory(folder: string): string[] {
    const filePaths: string[] = [];
    const files = fs.readdirSync(folder, { withFileTypes: true });
    files.forEach((file) => {
        const filePath = path.join(folder, file.name);
        if (file.isDirectory()) {
            const files = getAllFilesInDirectory(filePath);
            filePaths.push(...files);
        } else if (file.name.endsWith(".sqf") && file.name.startsWith("fn_")) {
            filePaths.push(filePath);
        }
    });

    return filePaths;
}
// TODO: refactor for new parsed page syntax
export class KiskaParser implements DocParser {
    /* ----------------------------------------------------------------------------
        getPages
    ---------------------------------------------------------------------------- */
    public async getPages(): Promise<UnparsedItem[]> {
        const kiskaFunctionsFolder = path.resolve(
            "S:/Arma Working Folder/My Mods/Functional Mods/Function Library/No PBO/KISKA Function Library/addons"
        );
        const filePaths = getAllFilesInDirectory(kiskaFunctionsFolder);
        return filePaths.map((filePath) => {
            return { text: fs.readFileSync(filePath, "utf-8").trim() };
        });
    }

    /* ----------------------------------------------------------------------------
        parsePages
    ---------------------------------------------------------------------------- */
    public async parsePages(pages: UnparsedItem[]): Promise<ParsedItem[]> {
        const parsedPages: ParsedItem[] = [];
        pages.forEach((page) => {
            const parsedPage = this.parseKiskaPage(page.text);
            if (parsedPage) {
                parsedPages.push(parsedPage);
            }
        });

        return parsedPages;
    }

    public parseKiskaPage(page: string): ParsedItem | null {
        const headerRegexMatch = page.match(
            /(?<=\/\* \-+\r*\n+)([\s\S]*?)(?=\r*\n+\-+ \*\/\r*\n+)/i
        );

        if (!headerRegexMatch) {
            console.warn("Could not find header comment");
            return null;
        }

        const headerComment = headerRegexMatch[0];

        const functionName = headerComment.match(/(?<=function:\s*)\b.*/i)?.at(0);
        const parsedPage: ParsedItem = {
            name: functionName || "",
            syntaxes: [],
            description: "",
            examples: [],
            grammarType: SQFGrammarType.Function,
        };

        const descriptionMatch = headerComment.match(
            /(?<=description:\r*\n*)([\s\S]*?)(?=Parameters:)/i
        );
        if (descriptionMatch) {
            // ([\n\r\t]+| {2,}) decent replace regex but still leaves double spaces
            // should seperate the ( {2,}) into one afterthe first replace(?)
            parsedPage.description = descriptionMatch[0].replace(/[\n\r\t]+/gi, " ");
            parsedPage.description = parsedPage.description.replace(/ {2,}/gi, " ");
        }

        const parametersMatch = headerComment.match(
            /(?<=parameters:\r*\n*)([\s\S]*?)(?=(Examples:|returns:))/i
        );
        if (parametersMatch) {
            const parametersFull = parametersMatch[0].concat("<END>");
            const individualParametersMatch = parametersFull.match(
                /(?<=^(\t| {0,4}))(\d:)([\s\S]*?)(?=(^(\t| {0,4}))(\d:)|<END>)/gim
            );
            let parametersDescription = `#### Parameters:\n`;
            if (!individualParametersMatch || individualParametersMatch.length < 1) {
                parametersDescription += "NONE";
            } else {
                individualParametersMatch?.forEach((parameter) => {
                    const parameterFormatted = parameter
                        .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                        .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                        .replace(/\n{1}(?!( {4,}|\t+|\n))/gi, "")
                        .replace(/(?<=\d+:\s*)(_\w*\b)/gi, "**$1**")
                        .replace(/(\<)(.*?)(\>)/gi, "*($2)*");

                    parametersDescription += `${parameterFormatted}\n\n`;
                });
            }
            parsedPage.description = `${parsedPage.description}\n\n${parametersDescription}`;
        }

        const returnMatch = headerComment.match(
            /(?<=Returns:\r*\n*)([\s\S]*?)(?=(author[\w\W]*?:|examples:))/i
        );
        if (returnMatch) {
            const returnDescription = returnMatch[0]
                .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                .replace(/(\<)(.*?)(\>)/gi, "*($2)*")
                .replace(/(?<=\d+:\s*)(_\w*\b)/gi, "**$1**")
                .trim();
            parsedPage.description = `${parsedPage.description}\n\n#### Returns:\n${returnDescription}`;
        }

        const examplesMatch = headerComment.match(
            /(?<=Example\w*:\r*\n*)([\s\S]*?)(?=(author[\w\W]*?:|returns:))/i
        );
        if (examplesMatch) {
            const examplesFull = examplesMatch[0];
            const individualExamplesMatch = examplesFull.match(
                /(?<=\(begin example\)\r*\n+)([\s\S]*?)(?=\(end\))/gi
            );
            individualExamplesMatch?.forEach((example) => {
                // examples are indented twice
                const exampleText = example.replace(/(\t{2}| {8}?(?!( {8}|\t{2})))/gi, "");
                parsedPage.examples.push(["```sqf", exampleText, "```"].join("\n"));
            });
        }

        return parsedPage;
    }

    getOutputFolderName(): string {
        return "KISKA-Parser";
    }
}
