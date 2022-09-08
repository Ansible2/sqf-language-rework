import { CompletionItemKind } from "vscode-languageserver/node";
import { SQFGrammarType, IJSON, PreCompiledSQFItem, SQFSyntaxType, SQFDataType } from "../sqf.namespace";

// does not need to be alphabetical, however, you should still try to keep it as
export const sqfCommandSyntaxes: IJSON<PreCompiledSQFItem> = {
    apply: {
        syntaxes: [
			{
				// TODO: Can represent a sepecific array syntax
				/// e.g. [ANY,STRING,ARRAY<ANY>] in that order for the array
				// TODO: Be able to represent array of single type
				/// e.g. ARRAY<STRING> = array of strings
				type: SQFSyntaxType.BinaryOperator,
				returnTypes: [SQFDataType.Any],
				leftOperandTypes: [[SQFDataType.Any], SQFDataType.HashMap],
				rightOperandTypes: SQFDataType.Code,
			},
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
