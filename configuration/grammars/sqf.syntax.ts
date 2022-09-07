import { readFileSync } from "fs-extra";
import path = require("path");
import { MarkupContent, MarkupKind } from "vscode-languageserver/node";
import { IJSON, CompiledSQFSyntax as CompiledSQFSyntax, PreCompiledSQFSyntax } from "./sqf.types";
import { sqfCommandSyntaxes } from "./syntaxes/commands.syntax";

const syntaxes: IJSON<PreCompiledSQFSyntax>[] = [
	sqfCommandSyntaxes
];

const compileDocumentation = (sqfSyntaxItem: PreCompiledSQFSyntax): CompiledSQFSyntax => {
	const documentation: MarkupContent = {
		kind: MarkupKind.Markdown,
		value: "",
	};
	
	const itemDocumentation = sqfSyntaxItem.documentation;
	if (!itemDocumentation) {
		return {
			...sqfSyntaxItem,
			documentation: documentation
		}
	};
	
	const docIsArray = Array.isArray(itemDocumentation);
	const itemDocIsMarkup: boolean = typeof itemDocumentation === 'object' && 
		!docIsArray &&
		'value' in itemDocumentation &&
		'kind' in itemDocumentation;
	if (itemDocIsMarkup) return sqfSyntaxItem as CompiledSQFSyntax;

	if (docIsArray) {
		const value = itemDocumentation as string[];
		documentation.value = value.join("\n");
		return {
			...sqfSyntaxItem,
			documentation: documentation
		}
	}

	// doc is string
	const docIsMarkdownFile = (
		itemDocumentation as string
	).endsWith(".md");
	if (docIsMarkdownFile) {
		try {
			const filePath = path.resolve(
				__dirname,
				`./docs/${itemDocumentation}`
			);
			const markdownAsString =
				readFileSync(filePath).toString();
			documentation.value = markdownAsString;

		} catch (error) {
			console.log(
				`Unable to retrieve markdown file for doc at ${__dirname}/docs/${itemDocumentation}`
			);
		}
		
		return {
			...sqfSyntaxItem,
			documentation: documentation
		}
	}
	
	documentation.value = itemDocumentation as string;
	return {
		...sqfSyntaxItem,
		documentation: documentation
	}
}

export const getSqfSyntaxItems = (): IJSON<CompiledSQFSyntax> => {
	let syntaxItems: IJSON<CompiledSQFSyntax> = {
	};

	syntaxes.forEach((preSyntaxObject: IJSON<PreCompiledSQFSyntax>) => {
		const compiledSyntaxObject: IJSON<CompiledSQFSyntax> = Object.fromEntries(
			Object.entries(preSyntaxObject).map(
				([syntaxItemName, syntaxItem]) => [syntaxItemName.toLowerCase(), compileDocumentation(syntaxItem)]
			)
		);

		syntaxItems = {
			...syntaxItems,
			...compiledSyntaxObject
		}
	})

    return syntaxItems;
};
