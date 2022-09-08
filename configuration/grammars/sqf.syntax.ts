import { readFileSync } from "fs-extra";
import path = require("path");
import { MarkupContent, MarkupKind } from "vscode-languageserver/node";
import { IJSON, CompiledSQFItem, PreCompiledSQFItem } from "./sqf.types";
import { sqfCommandSyntaxes } from "./syntaxes/commands.syntax";

const syntaxes: IJSON<PreCompiledSQFItem>[] = [sqfCommandSyntaxes];

const compileDocumentation = (
    preCompiledDoc: string | string[] | MarkupContent | undefined
): MarkupContent => {
    const compiledDocumentation: MarkupContent = {
        kind: MarkupKind.Markdown,
        value: "",
    };

    if (!preCompiledDoc) return compiledDocumentation;

    const preCompiledDocIsArray: boolean = Array.isArray(preCompiledDoc);
    const preCompiledDocIsMarkup: boolean =
        typeof preCompiledDoc === "object" &&
        !preCompiledDocIsArray &&
        "value" in preCompiledDoc &&
        "kind" in preCompiledDoc;
    if (preCompiledDocIsMarkup) return (preCompiledDoc as MarkupContent);

    if (preCompiledDocIsArray) {
        preCompiledDoc = preCompiledDoc as string[];
        const compiledDoc = preCompiledDoc.join("\n");
		compiledDocumentation.value = compiledDoc;

        return compiledDocumentation;
    }

    const docIsMarkdownFile: boolean = (preCompiledDoc as string).endsWith(".md");
    if (docIsMarkdownFile) {
        try {
            const filePath = path.resolve(
                __dirname,
                `./docs/${preCompiledDoc}`
            );
            const markdownAsString = readFileSync(filePath).toString();
			compiledDocumentation.value = markdownAsString;

        } catch (error) {
            console.log(
                `Unable to retrieve markdown file for doc at ${__dirname}/docs/${preCompiledDoc}`
            );
        }

		return compiledDocumentation;
    }

	preCompiledDoc = preCompiledDoc as string;
	compiledDocumentation.value = preCompiledDoc;
	return compiledDocumentation;
};


const compileSQFItems = (
    syntaxItemName: string,
    sqfItem: PreCompiledSQFItem
): CompiledSQFItem => {
    const compiledDocumentation = compileDocumentation(sqfItem.documentation);
    return {
        label: syntaxItemName,
        ...sqfItem,
        documentation: compiledDocumentation,
    };
};

export const getSqfItems = (): IJSON<CompiledSQFItem> => {
    let syntaxItems: IJSON<CompiledSQFItem> = {};

    syntaxes.forEach((preSyntaxObject: IJSON<PreCompiledSQFItem>) => {
        const compiledSyntaxObject: IJSON<CompiledSQFItem> =
            Object.fromEntries(
                Object.entries(preSyntaxObject).map(
                    ([syntaxItemName, syntaxItem]) => [
                        syntaxItemName.toLowerCase(),
                        compileSQFItems(syntaxItemName, syntaxItem),
                    ]
                )
            );

        syntaxItems = {
            ...syntaxItems,
            ...compiledSyntaxObject,
        };
    });

    return syntaxItems;
};
