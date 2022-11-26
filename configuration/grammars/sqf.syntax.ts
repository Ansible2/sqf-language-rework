import {
    MarkupContent,
    MarkupKind,
    CompletionItemKind,
} from "vscode-languageserver/node";
import {
    IJSON,
    CompiledSQFItem,
    PreCompiledSQFItem,
    SQFGrammarType,
} from "./sqf.namespace";
import { binFunctionSyntaxes } from "./syntaxes/bin.functions.syntax";
import { bisFunctionSyntaxes } from "./syntaxes/bis.functions.syntax";
import { sqfCommandSyntaxes } from "./syntaxes/commands.syntax";
import { kiskaFunctionSyntaxes } from "./syntaxes/kiska.functions.syntax";
import { preprocessorSyntaxes } from "./syntaxes/preprocessor.syntax";
import { docsAsJson } from "./docs/docs-json";
import path = require("path");

const syntaxes: IJSON<PreCompiledSQFItem>[] = [
    sqfCommandSyntaxes,
    bisFunctionSyntaxes,
    binFunctionSyntaxes,
    kiskaFunctionSyntaxes,
    preprocessorSyntaxes,
];

const compileDocumentation = (
    itemName: string,
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
    if (preCompiledDocIsMarkup) return preCompiledDoc as MarkupContent;

    if (preCompiledDocIsArray) {
        preCompiledDoc = preCompiledDoc as string[];
        const compiledDoc = preCompiledDoc.join("\n");
        compiledDocumentation.value = compiledDoc;

        return compiledDocumentation;
    }

    const docIsMarkdownFile: boolean = (preCompiledDoc as string).startsWith(
        "./"
    );
    if (docIsMarkdownFile) {
        try {
			const definedPath = (preCompiledDoc as string).replace(/^\.\//,""); // get rid of leading './';
			let relativeToDocsFolderPath: string = definedPath;

			const isFullFilePath = (preCompiledDoc as string).endsWith(".md");
			if (!isFullFilePath) {
				relativeToDocsFolderPath = path.normalize(`${definedPath}/${itemName}.md`);
			}
			
            const markdownAsString = (docsAsJson as IJSON<string>)[relativeToDocsFolderPath];
			if (!markdownAsString) {
				console.log(`sqf.syntax: item: [${itemName}] did not have docs in docsAsJson with key: [${relativeToDocsFolderPath}]`);
				throw "";
			}

            compiledDocumentation.value = markdownAsString;
        } catch (error) {
            console.log(
                `sqf.syntax: Unable to retrieve markdown file for [${itemName}] doc at [${__dirname}/docs/${preCompiledDoc}]`
            );
        }

        return compiledDocumentation;
    }

    preCompiledDoc = preCompiledDoc as string;
    compiledDocumentation.value = preCompiledDoc;
    return compiledDocumentation;
};

// TODO make into static hashmap possibly
const getCompletionItemKind = (
    grammarType: SQFGrammarType
): CompletionItemKind => {
    switch (grammarType) {
        case SQFGrammarType.ReservedLiteral:
        case SQFGrammarType.ControlStatement:
        case SQFGrammarType.AccessModifier: {
            return CompletionItemKind.Keyword;
        }
        case SQFGrammarType.ComparisonOperator: {
            return CompletionItemKind.Operator;
        }
        case SQFGrammarType.ConditionOperator: {
            return CompletionItemKind.Operator;
        }
        case SQFGrammarType.Function: {
            return CompletionItemKind.Function;
        }
        case SQFGrammarType.ManipulativeOperator: {
            return CompletionItemKind.Operator;
        }
        case SQFGrammarType.BooleanLiteral:
        case SQFGrammarType.NullLiteral: {
            return CompletionItemKind.Constant;
        }
        case SQFGrammarType.PropertyAccessor: {
            return CompletionItemKind.Property;
        }
        case SQFGrammarType.Command:
        default: {
            return CompletionItemKind.Method;
        }
    }
};

const compileSQFItem = (
    syntaxItemName: string,
    sqfItem: PreCompiledSQFItem
): CompiledSQFItem => {
    if (sqfItem.label) {
        syntaxItemName = sqfItem.label;
    }

    const compiledDocumentation = compileDocumentation(
        syntaxItemName,
        sqfItem.documentation
    );
    const compiledItem = {
        label: syntaxItemName,
        ...sqfItem,
        documentation: compiledDocumentation,
    };

    if (!compiledItem.kind) {
        compiledItem.kind = getCompletionItemKind(sqfItem.grammarType);
    }

    return compiledItem as CompiledSQFItem;
};

export const getSqfItems = (): Map<string, CompiledSQFItem> => {
    const syntaxItems: Map<string, CompiledSQFItem> = new Map();

    syntaxes.forEach((preCompiledSyntaxList: IJSON<PreCompiledSQFItem>) => {
        Object.entries(preCompiledSyntaxList).forEach(
            ([syntaxItemName, syntaxItem]) => {
                if (syntaxItem.label) {
                    syntaxItemName = syntaxItem.label;
                }

                const compiledItem = compileSQFItem(syntaxItemName, syntaxItem);
                syntaxItems.set(syntaxItemName.toLowerCase(), compiledItem);
            }
        );
    });

    return syntaxItems;
};
