import { readFileSync } from "fs-extra";
import path = require("path");
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
import { bisFunctionSyntaxes } from "./syntaxes/bis.functions.syntax";
import { sqfCommandSyntaxes } from "./syntaxes/commands.syntax";
import { kiskaFunctionSyntaxes } from "./syntaxes/kiska.functions.syntax";

const syntaxes: IJSON<PreCompiledSQFItem>[] = [
    sqfCommandSyntaxes,
    bisFunctionSyntaxes,
    kiskaFunctionSyntaxes,
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
            const filePath = path.resolve(
                __dirname,
                `./docs`,
                (preCompiledDoc as string).substring(2), // get rid of leading './'
                `${itemName}.md`
            );
            console.log("Filepath", filePath);

            const markdownAsString = readFileSync(filePath).toString();
            compiledDocumentation.value = markdownAsString;
        } catch (error) {
            console.log(
                `Unable to retrieve markdown file for ${itemName} doc at ${__dirname}/docs/${preCompiledDoc}`
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
        case SQFGrammarType.AccessModifier: {
            return CompletionItemKind.Keyword;
        }
        case SQFGrammarType.Command: {
            return CompletionItemKind.Method;
        }
        case SQFGrammarType.ComparisonOperator: {
            return CompletionItemKind.Operator;
        }
        case SQFGrammarType.ConditionOperator: {
            return CompletionItemKind.Operator;
        }
        case SQFGrammarType.ControlStatement: {
            return CompletionItemKind.Keyword;
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
        default: {
            return CompletionItemKind.Method;
        }
    }
};

const compileSQFItem = (
    syntaxItemName: string,
    sqfItem: PreCompiledSQFItem
): CompiledSQFItem => {
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

export const getSqfItems = (): IJSON<CompiledSQFItem> => {
    let syntaxItems: IJSON<CompiledSQFItem> = {};

    syntaxes.forEach((preSyntaxObject: IJSON<PreCompiledSQFItem>) => {
        const compiledSyntaxObject: IJSON<CompiledSQFItem> = Object.fromEntries(
            Object.entries(preSyntaxObject).map(
                ([syntaxItemName, syntaxItem]) => [
                    syntaxItemName.toLowerCase(),
                    compileSQFItem(syntaxItemName, syntaxItem),
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
