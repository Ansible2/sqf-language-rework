import { CompletionItemKind } from "vscode-languageserver/node";
import { SQFGrammarType, IJSON, PreCompiledSQFSyntax } from "../sqf.types";

// does not need to be alphabetical, however, you should still try to keep it as
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
	or: {
		detail: "Returns true if one or both conditions are true. In case of the alternative syntax, lazy evaluation is used. That means that if left operand is true, evaluation of the right side is skipped completely.",
		documentation: `
	// without lazy evaluation, select would throw an error in the event of an empty array
	if ((count _array == 0) or { (_array select 0) != player }) then
	{
		hint "It works!";
	};
		`,
		grammarType: SQFGrammarType.ComparisonOperator,
		kind: CompletionItemKind.Operator
	}
};
