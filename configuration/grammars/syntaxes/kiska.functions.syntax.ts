import {
    CompletionItemKind,
    CompletionItemTag,
} from "vscode-languageserver/node";
import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
} from "../sqf.namespace";

const kiskaFunctionsFolder = "./KISKA Functions";

export const kiskaFunctionSyntaxes: IJSON<PreCompiledSQFItem> = {
	KISKA_fnc_isMainMenu: {
        documentation: kiskaFunctionsFolder,
        grammarType: SQFGrammarType.Function,
        kind: CompletionItemKind.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
};