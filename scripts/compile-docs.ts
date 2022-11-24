import * as fs from "fs";
import * as fse from "fs-extra";
import * as path from "path";
const bigJSON = require("big-json");
import { IJSON } from "../Parsers/SQFParser.namespace";

const filesParsed: IJSON<string> = {};
async function main() {
    const docsDirectory = path.resolve("configuration/grammars/docs");
    console.log("docs directory:", docsDirectory);

    const absoluteFilePaths: string[] | null =
        getFilePathsFromDirectory(docsDirectory);
    if (absoluteFilePaths === null) return;

    const promises: Promise<void>[] = [];
    for (const filePath of absoluteFilePaths) {
        const promise = parseFile(filePath, docsDirectory);
        promises.push(promise);
    }

    console.log("parsing docs...");
    await Promise.all(promises);

    console.log("writing to file...");

	// docs are written to .js instead of .ts primarily to avoid overloading the ts language server
    const filePath = `${docsDirectory}/docs-json.js`;
	const filesParsedAsString = await bigJSON.stringify({
        body: filesParsed,
    });
    
	fs.writeFileSync(filePath,`const docsAsJson = ${filesParsedAsString};\n\nmodule.exports = {docsAsJson: docsAsJson};`);
	console.log("completed docs transpile!");
}

const parseFile = async (
    absoluteFilePath: string,
    docsDirectory: string
): Promise<void> => {
    const relativePath = path.relative(docsDirectory, absoluteFilePath);
    const fileAsString = fse.readFileSync(absoluteFilePath).toString();
    filesParsed[relativePath] = fileAsString;
};

function getFilePathsFromDirectory(directoy: string): string[] | null {
    if (!fs.existsSync(directoy)) {
        console.error(`[ERROR] Directoy: ${directoy} was not found`);
        return null;
    }

    let allFilePaths: string[] = [];
    const files = fs.readdirSync(directoy);
    for (const file of files) {
        const filePath = path.resolve(directoy, file);

        let pathsInDirectory: string[] | null | undefined;
        const stat = fs.lstatSync(filePath);
        if (stat.isDirectory()) {
            pathsInDirectory = getFilePathsFromDirectory(filePath);
        } else if (stat.isFile()) {
            pathsInDirectory = [filePath];
        }

        if (pathsInDirectory !== null && pathsInDirectory !== undefined) {
            allFilePaths = [...allFilePaths, ...pathsInDirectory];
        }
    }

    return allFilePaths;
}

main();
