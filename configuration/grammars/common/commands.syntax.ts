import { readFileSync } from "fs";
import { CompletionItem, CompletionItemKind } from "vscode-languageserver/node";

export enum SQFDocType {
    MarkdownFile = 1,
    string = 2,
    stringArray = 3,
}

export interface SQFCommand {
    label?: string;
    detail: string;
    labelDetails: {
        detail: string;
        description: string;
    };
    documentation: {
        type: SQFDocType;
        value: string | string[];
    };
    kind: CompletionItemKind;
    data?: any;
}

export const commands: { [key: string]: SQFCommand } = {
    apply: {
        label: "apply",
        detail: "Applies the given code to each element of the given data structure and collects the results in an array.",
        labelDetails: {
            detail: "",
            description: "",
        },
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
        data: {},
    },
    forEach: {
        label: "",
        detail: "Executes the given command(s) on every item of an Array or a HashMap.",
        labelDetails: {
            detail: "",
            description: "",
        },
        documentation: {
            type: SQFDocType.MarkdownFile,
            value: "foreach.md",
        },
        kind: CompletionItemKind.Method,
        data: {},
    },
};


export const commandsAsCompletionItems: CompletionItem[] = [];
for (const [commandKey, sqfCommandInfo] of Object.entries(commands)) {
	
	let label = commandKey
	if (sqfCommandInfo.label) {
		label = sqfCommandInfo.label;
	}

	let documentation = "";
	if (sqfCommandInfo.documentation) {
		const sqfDoc = sqfCommandInfo.documentation;
		switch (sqfCommandInfo.documentation.type) {
			case SQFDocType.MarkdownFile: {
				const filePath = `../../../configuration/grammars/docs/${sqfDoc.value}`;
				const markdownAsString = readFileSync(filePath).toString();
				documentation = markdownAsString;
				break;
			}
			case SQFDocType.string: {
				documentation = sqfDoc.value as string
				break;
			}
			case SQFDocType.stringArray: {
				documentation = sqfDoc.value.toString()
				break;
			}
			default: {
				console.log(`Unknown doc type used: ${sqfCommandInfo.documentation.type} on command with label: ${label}`);
				continue;
			}
		}
	}

	commandsAsCompletionItems.push({
		label: label,
		documentation: documentation,
		kind: sqfCommandInfo.kind,
		detail: sqfCommandInfo.detail,
	});
}
