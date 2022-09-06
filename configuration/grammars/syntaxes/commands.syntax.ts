import { CompletionItemKind } from "vscode-languageserver/node";
import { SQFGrammarType, IJSON, PreCompiledSQFSyntax } from "../sqf.types";

export const sqfCommandSyntaxes: IJSON<PreCompiledSQFSyntax> = {
    apply: {
        detail: "Applies the given code to each element of the given data structure and collects the results in an array.",
        documentation: [
            "```sqf",
            "// will systemChat '1', '2', and '3'",
            "[1,2,3] apply {systemChat _x};",
            "```",
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
