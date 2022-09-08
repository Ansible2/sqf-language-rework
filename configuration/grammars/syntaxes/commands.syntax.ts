import { CompletionItemKind } from "vscode-languageserver/node";
import { SQFGrammarType, IJSON, PreCompiledSQFSyntax } from "../sqf.types";

// does not need to be alphabetical, however, you should still try to keep it as
export const sqfCommandSyntaxes: IJSON<PreCompiledSQFSyntax> = {
    apply: {
        syntaxes: [
			"<ARRAY<ANY>> = <ARRAY> apply <CODE>",
			"<ARRAY<ANY>> = <HASHMAP> apply <CODE>",
		],
        documentation: [
			"Applies the given code to each element of the given data structure and collects the results in an array.",
            "```sqf",
            "// will systemChat '1', '2', and '3'",
            "[1,2,3] apply {systemChat _x};",
            "```",
        ],
        kind: CompletionItemKind.Method,
        grammarType: SQFGrammarType.Command,
    },
    forEach: {
        syntaxes: [
			"<ARRAY<ANY>> = <ARRAY> apply <CODE>"
		],
        documentation: "foreach.md",
        grammarType: SQFGrammarType.Command,
        kind: CompletionItemKind.Method,
    },
	or: {
		syntaxes: [
			"<BOOLEAN> = <BOOLEAN> or <BOOLEAN>"
		],
		documentation: "or.md",
		grammarType: SQFGrammarType.ComparisonOperator,
		kind: CompletionItemKind.Operator
	}
};
