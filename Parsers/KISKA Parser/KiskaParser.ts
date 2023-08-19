import { Parser } from "../SQFParser.namespace";
import * as fs from "fs";
import * as path from "path";

// select header comment
// /(?<=\/\* \-+\n)([\s\S]*?)(?=\n+\-+ \*\/\n)/i

// select Function name
// /(?<=function:\s*)\b.*/gi

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

interface ParsedKiskaPage {
    text: string;
    filename: string;
}

export class KiskaParser implements Parser {
    /* ----------------------------------------------------------------------------
		getPages
	---------------------------------------------------------------------------- */
    public getPages(kiskaFunctionsFolder: string) {
        const filePaths = getAllFilesInDirectory(kiskaFunctionsFolder);
        // take folder
        // recursively search for all function files in all folders
        // parse header comment from valid file
        // add to return array
        return filePaths;
    }

    /* ----------------------------------------------------------------------------
		parsePages
	---------------------------------------------------------------------------- */
    public parsePages(filePaths: string[]): ParsedKiskaPage[] {
        const parsedPages: KiskaPage[] = filePaths
            .map(KiskaPageConverter.parseKiskaPage)
            .filter((page) => page) as KiskaPage[];

        const parsedKiskaPages = parsedPages.map((kiskaPage) => {
            const pageArray = [
                "#### Description:\n",
                kiskaPage.description?.trim(),
                "\n\n",
            ];

            if (kiskaPage.parameters) {
                pageArray.push("#### Parameters:\n");
                const parameters = kiskaPage.parameters.join("\n\n").trim();
                pageArray.push(parameters);
                pageArray.push("\n\n");
            }
            if (kiskaPage.return) {
                pageArray.push("#### Returns:\n");
                pageArray.push(kiskaPage.return.trim());
                pageArray.push("\n\n");
            }
            if (kiskaPage.examples) {
                pageArray.push("#### Examples:\n");
                const examples = kiskaPage.examples
                    .map((example) => `\`\`\`sqf\n${example}\`\`\``)
                    .join("\n")
                    .trim();
                pageArray.push(examples);
                pageArray.push("\n\n");
            }

            const pageParsed = pageArray.join("");
            return {
                filename: kiskaPage.name,
                text: pageParsed,
            };
        });

        return parsedKiskaPages;
    }

    /* ----------------------------------------------------------------------------
		doWithParsedPages
	---------------------------------------------------------------------------- */
    public doWithParsedPages(parsedPages: ParsedKiskaPage[]): void {
        const outputFolder = "./Parsers/.output";
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }

        const kiskaOutputFolder = `${outputFolder}/Kiska Parser`;
        if (!fs.existsSync(kiskaOutputFolder)) {
            fs.mkdirSync(kiskaOutputFolder);
        }
        const kiskaDocsFolder = `${kiskaOutputFolder}/docs`;
        if (!fs.existsSync(kiskaDocsFolder)) {
            fs.mkdirSync(kiskaDocsFolder);
        }

        parsedPages.forEach((parsedPage) => {
            fs.writeFileSync(
                `${kiskaDocsFolder}/${parsedPage.filename.replace(
                    ".sqf",
                    ".md"
                )}`,
                parsedPage.text
            );
        });
    }
}

interface KiskaPage {
    name: string;
    description?: string;
    parameters?: string[];
    return?: string;
    examples?: string[];
}

class KiskaPageConverter {
    public static parseKiskaPage(filePath: string): KiskaPage | null {
        const filename = path.basename(filePath);
        const fileAsString = fs.readFileSync(filePath, "utf-8").trim();
        const headerRegexMatch = fileAsString.match(
            /(?<=\/\* \-+\r*\n+)([\s\S]*?)(?=\r*\n+\-+ \*\/\r*\n+)/i
        );

        const functionName = filename.replace("fn_", "KISKA_fnc_");
        const kiskaPage: KiskaPage = {
            name: functionName,
        };

        if (!headerRegexMatch) {
            console.log(functionName, "does not have a header comment");
            return null;
        }

        const headerComment = headerRegexMatch[0];

        const descriptionMatch = headerComment.match(
            /(?<=description:\r*\n*)([\s\S]*?)(?=Parameters:)/i
        );
        if (descriptionMatch) {
            // ([\n\r\t]+| {2,}) decent replace regex but still leaves double spaces
            // should seperate the ( {2,}) into one afterthe first replace(?)

            // console.log(descriptionMatch[0]);
            kiskaPage.description = descriptionMatch[0].replace(
                /[\n\r\t]+/gi,
                " "
            );
            kiskaPage.description = kiskaPage.description.replace(
                / {2,}/gi,
                " "
            );
            // console.log(kiskaPage.description);
        }

        const returnMatch = headerComment.match(
            /(?<=Returns:\r*\n*)([\s\S]*?)(?=(author[\w\W]*?:|examples:))/i
        );
        if (returnMatch) {
            kiskaPage.return = returnMatch[0];
            kiskaPage.return = kiskaPage.return
                .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                .replace(/(\<)(.*?)(\>)/gi, "*($2)*")
                .replace(/(?<=\d+:\s*)(_\w*\b)/gi, "**$1**");
        }

        const parametersMatch = headerComment.match(
            /(?<=parameters:\r*\n*)([\s\S]*?)(?=(Examples:|returns:))/i
        );
        if (parametersMatch) {
            const parametersFull = parametersMatch[0].concat("<END>");
            const individualParametersMatch = parametersFull.match(
                /(?<=^(\t| {0,4}))(\d:)([\s\S]*?)(?=(^(\t| {0,4}))(\d:)|<END>)/gim
            );

            kiskaPage.parameters = [];
            if (
                !individualParametersMatch ||
                individualParametersMatch.length < 1
            ) {
                kiskaPage.parameters.push("NONE");
            } else {
                individualParametersMatch?.forEach((parameter) => {
                    const parameterFormatted = parameter
                        .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                        .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                        .replace(/\n{1}(?!( {4,}|\t+|\n))/gi, "")
                        .replace(/(?<=\d+:\s*)(_\w*\b)/gi, "**$1**")
                        .replace(/(\<)(.*?)(\>)/gi, "*($2)*");

                    kiskaPage.parameters?.push(parameterFormatted);
                });
            }
        }

        const examplesMatch = headerComment.match(
            /(?<=Example\w*:\r*\n*)([\s\S]*?)(?=(author[\w\W]*?:|returns:))/i
        );
        if (examplesMatch) {
            const examplesFull = examplesMatch[0];
            kiskaPage.examples = [];
            const individualExamplesMatch = examplesFull.match(
                /(?<=\(begin example\)\r*\n+)([\s\S]*?)(?=\(end\))/gi
            );
            individualExamplesMatch?.forEach((example) => {
                kiskaPage.examples?.push(
                    example
                        .replace(/(\t{1}| {4}?(?!( {4}|\t{1})))/gi, "")
                        .replace(
                            // examples are indented twice
                            /(\t{1}| {4}?(?!( {4}|\t{1})))/gi,
                            ""
                        )
                );
            });
        }

        return kiskaPage;
    }
}
