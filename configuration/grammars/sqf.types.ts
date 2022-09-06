import { CompletionItemKind, MarkupContent } from "vscode-languageserver/node";

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

interface SQFSyntax {
	detail: string;
    labelDetails?: {
        detail: string;
        description: string;
    };
    kind: CompletionItemKind;
    grammarType: SQFGrammarType;
    data?: any;
}

export interface CompiledSQFSyntax extends SQFSyntax {
    documentation: MarkupContent;
}

export interface PreCompiledSQFSyntax extends SQFSyntax{
    documentation: string | string[] | MarkupContent;
}

export interface IJSON<T> {
    [key: string]: T;
}
