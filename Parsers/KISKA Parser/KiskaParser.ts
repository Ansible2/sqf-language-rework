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
		const filePath = path.join(folder,file.name);
		if (file.isDirectory()) {
			const files = getAllFilesInDirectory(filePath);
			filePaths.push(...files);

		} else if (file.name.endsWith('.sqf') && file.name.startsWith('fn_')) {
			filePaths.push(filePath)

		}
	});

	return filePaths;
}

export class KiskaParsers implements Parser {
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
    public parsePages(filePaths: string[]): string[] {
        const parsedPages: KiskaPage[] = filePaths.map(
            KiskaPageConverter.parseKiskaPage
        ).filter((page) => page) as KiskaPage[];
        // filter undefined or empty returns
        // return parsedPages.filter((page) => page);
		return [];
    }

    /* ----------------------------------------------------------------------------
		doWithParsedPages
	---------------------------------------------------------------------------- */
	public doWithParsedPages(parsedPages: string[]): void {
		// const outputFolder = './Parsers/.output';
		// if (!fs.existsSync(outputFolder)) {
		// 	fs.mkdirSync(outputFolder);
		// }
		
		// const kiskaOutputFolder = `${outputFolder}/Kiska Parser`
		// if (!fs.existsSync(kiskaOutputFolder)) {
		// 	fs.mkdirSync(kiskaOutputFolder);
		// }

		// fs.writeFileSync(
		// 	`${BikiOutputFolder}/output.ts`,
		// 	`import {SQFDataType, SQFEffect, SQFArgument, SQFGrammarType, SQFSyntaxType} from "../../../configuration/grammars/sqf.namespace";\nconst output = {${parsedPages.join(
		// 		""
		// 	)}\n}`
			
		// );
	}
}

interface KiskaPage {
    name: any;
	description?: any;
	parameters?: any[];
	return?: any;
	examples?: any[];

}

class KiskaPageConverter {
    public static parseKiskaPage(filePath: string): KiskaPage | null {
		const filename = path.basename(filePath);
		const fileAsString = fs.readFileSync(filePath).toString();
		const headerComment = fileAsString.match(/(?<=\/\* \-+\n)([\s\S]*?)(?=\n+\-+ \*\/\n)/i);
		console.log(headerComment);
		
		if (headerComment !== null) {
			console.log(headerComment);
		}

		return {
			name: filename.replace('fn_','KISKA_fnc'),
		}
	};
}