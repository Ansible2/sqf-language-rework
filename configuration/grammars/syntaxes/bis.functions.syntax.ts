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

const bisFunctionsFolder = "./BIS Functions";

const getBISWikiLink = (itemName: string): string => {
    return `https://community.bistudio.com/wiki/${itemName}`;
};

export const bisFunctionSyntaxes: IJSON<PreCompiledSQFItem> = {
	BIS_fnc_pow: {
        documentation: bisFunctionsFolder,
        getDocLink: getBISWikiLink,
        grammarType: SQFGrammarType.Function,
        kind: CompletionItemKind.Function,
        tags: [CompletionItemTag.Deprecated],
        syntaxes: {
            returnTypes: SQFDataType.Number,
            leftOperandTypes: {
                types: [SQFDataType.Number, SQFDataType.Number],
                operation: SQFArrayComparator.Exact,
            },
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
};