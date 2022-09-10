import { CompletionItemKind } from "vscode-languageserver/node";
import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
} from "../sqf.namespace";

// does not need to be alphabetical, however, you should still try to keep it as
export const sqfCommandSyntaxes: IJSON<PreCompiledSQFItem> = {
    apply: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    // either an array of type any or a hashmap
                    SQFDataType.Array,
                    SQFDataType.HashMap,
                ],
                rightOperandTypes: SQFDataType.Code,
            },
			// verbose version
			// {
            //     type: SQFSyntaxType.BinaryOperator,
            //     returnTypes: {
            //         types: SQFDataType.Any,
            //         operation: SQFArrayComparator.AnyOf,
            //     },
            //     leftOperandTypes: [
            //         {
            //             types: SQFDataType.Any,
            //             operation: SQFArrayComparator.AnyOf,
            //         },
            //         SQFDataType.HashMap,
            //     ], 
            //     rightOperandTypes: {
			// 		returns: SQFDataType.Any
			// 	},
            // },
            // "<ARRAY<ANY>> = <ARRAY> apply <CODE>",
            // "<ARRAY<ANY>> = <HASHMAP> apply <CODE>",
        ],
        documentation: [
            "Applies the given code to each element of the given data structure and collects the results in an array.",
            "```sqf",
            "// will systemChat '1', '2', and '3'",
            "['1','2','3'] apply {systemChat _x};",
            "```",
        ],
        kind: CompletionItemKind.Method,
        grammarType: SQFGrammarType.Command,
    },
    forEach: {
        syntaxes: [
			{
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.HashMap,
                ],
                leftOperandTypes: SQFDataType.Code,
            },
            // "<ARRAY<ANY>> = <ARRAY> apply <CODE>"
        ],
        documentation: "foreach.md",
        grammarType: SQFGrammarType.Command,
        kind: CompletionItemKind.Method,
    },
    or: {
        syntaxes: [
			{
				type: SQFSyntaxType.BinaryOperator,
				rightOperandTypes: SQFDataType.Boolean,
				leftOperandTypes: SQFDataType.Boolean,
				returnTypes: SQFDataType.Boolean
			}
        ],
        documentation: "or.md",
        grammarType: SQFGrammarType.ComparisonOperator,
        kind: CompletionItemKind.Operator,
    },
};
