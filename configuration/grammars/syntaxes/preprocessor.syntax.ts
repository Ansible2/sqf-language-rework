import { CompletionItemKind } from "vscode-languageserver/node";
import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
    SQFArgument,
    SQFEffect,
    SQFCode,
    SQFArray,
} from "../sqf.namespace";

export const preprocessorSyntaxes: IJSON<PreCompiledSQFItem> = {
    "#define": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Variable,
        },
    },
};

Object.keys(preprocessorSyntaxes).forEach((command: string) => {
    const item = preprocessorSyntaxes[command];

    if (!item.documentation) {
        const docFolder = "./Preprocessor Commands";
        item.documentation = docFolder;
    }
});
