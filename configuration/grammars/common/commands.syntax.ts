import { readFileSync } from "fs";
import path = require("path");
import { CompletionItem, CompletionItemKind, MarkupKind, MarkupContent } from "vscode-languageserver/node";

export enum SQFDocType {
    MarkdownFile = 1,
    string = 2,
    stringArray = 3,
}

export enum SQFGrammarType {
	Function = 1,
	ConrolStatement = 2,
	ConditionOperator = 3,
	ComparisonOperator = 4,
	ReservedLiteral = 5,
	NullLiteral = 6,
	PropertyAccessor = 7,
	Command = 8,
}

export interface SQFSyntax {
    label?: string;
    detail: string;
    labelDetails?: {
        detail: string;
        description: string;
    };
    documentation: {
        type: SQFDocType;
        value: string | string[];
    };
    kind: CompletionItemKind;
	grammarType: SQFGrammarType;
    data?: any;
}

export const sqfSyntaxes: { [key: string]: SQFSyntax } = {
    apply: {
        detail: "Applies the given code to each element of the given data structure and collects the results in an array.",
        documentation: {
            type: SQFDocType.stringArray,
            value: [
                "```sqf",
                "\n// will systemChat '1', '2', and '3'",
                "\n[1,2,3] apply {systemChat _x};",
                "\n```",
            ],
        },
        kind: CompletionItemKind.Method,
		grammarType: SQFGrammarType.Command,
    },
    forEach: {
		detail: "Executes the given command(s) on every item of an Array or a HashMap.",
        documentation: {
			type: SQFDocType.MarkdownFile,
            value: "foreach.md",
        },
		grammarType: SQFGrammarType.Command,
        kind: CompletionItemKind.Method,
    },
};


export const sqfCompletionItems: CompletionItem[] = [];
for (const [commandKey, sqfCommandInfo] of Object.entries(sqfSyntaxes)) {
	let label = commandKey
	if (sqfCommandInfo.label) {
		label = sqfCommandInfo.label;
	}

	let documentation: string | MarkupContent = "";
	if (sqfCommandInfo.documentation) {
		const sqfDoc = sqfCommandInfo.documentation;
		switch (sqfCommandInfo.documentation.type) {
			case SQFDocType.MarkdownFile: {
				const filePath = path.resolve(__dirname, `../docs/${sqfDoc.value}`);;
				const markdownAsString = readFileSync(filePath).toString();
				documentation = {
					kind: MarkupKind.Markdown,
					value: markdownAsString
				};
				break;
			}
			case SQFDocType.string: {
				documentation = sqfDoc.value as string
				break;
			}
			case SQFDocType.stringArray: {
				const value = sqfDoc.value as string[];
				documentation = {
					kind: MarkupKind.Markdown,
					value: value.join('')
				};
				break;
			}
			default: {
				console.log(`Unknown doc type used: ${sqfCommandInfo.documentation.type} on command with label: ${label}`);
				continue;
			}
		}
	}

	sqfCompletionItems.push({
		label: label,
		documentation: documentation,
		kind: sqfCommandInfo.kind,
		detail: sqfCommandInfo.detail,
	});
}
