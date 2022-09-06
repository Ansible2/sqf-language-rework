import { readFileSync } from "fs";
import * as path from "path";
import {
    CompletionItem,
    CompletionItemKind,
    MarkupKind,
    MarkupContent,
} from "vscode-languageserver/node";

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
    detail: string;
    labelDetails?: {
        detail: string;
        description: string;
    };
    documentation: string | string[];
    kind: CompletionItemKind;
    grammarType: SQFGrammarType;
    data?: any;
}

export const sqfSyntaxes: { [key: string]: SQFSyntax } = {
    apply: {
        detail: "Applies the given code to each element of the given data structure and collects the results in an array.",
        documentation: [
            "```sqf",
            "\n// will systemChat '1', '2', and '3'",
            "\n[1,2,3] apply {systemChat _x};",
            "\n```",
        ],
        kind: CompletionItemKind.Method,
        grammarType: SQFGrammarType.Command,
    },
    forEach: {
        detail: "Executes the given command(s) on every item of an Array or a HashMap.",
        documentation: "foreach.md",
        grammarType: SQFGrammarType.Command,
        kind: CompletionItemKind.Method,
    },
};

export const sqfCompletionItems: CompletionItem[] = [];
for (const [commandKey, sqfCommandInfo] of Object.entries(sqfSyntaxes)) {
    const documentation: MarkupContent = {
        kind: MarkupKind.Markdown,
        value: "",
    };

    if (sqfCommandInfo.documentation) {
        const entriesDocumentation = sqfCommandInfo.documentation;
        const docIsString: boolean = typeof entriesDocumentation === typeof "";
        if (docIsString) {
            const docIsMarkdownFile = (entriesDocumentation as string).endsWith(
                ".md"
            );
            if (docIsMarkdownFile) {
                try {
                    const filePath = path.resolve(
                        __dirname,
                        `../docs/${entriesDocumentation}`
                    );
                    const markdownAsString = readFileSync(filePath).toString();
                    documentation.value = markdownAsString;
                } catch (error) {
                    console.log(
                        `Unable to retrieve markdown file for docs at ../docs/${entriesDocumentation}`
                    );
                }
				
            } else {
                documentation.value = entriesDocumentation as string;
            }

        } else {
            const value = entriesDocumentation as string[];
            documentation.value = value.join("");
        }
    }

    sqfCompletionItems.push({
        label: commandKey,
        documentation: documentation,
        kind: sqfCommandInfo.kind,
        detail: sqfCommandInfo.detail,
    });
}
