import { CompletionItemKind, MarkupContent } from "vscode-languageserver/node";

export enum SQFGrammarType {
    Function = "function",
    ConrolStatement = "control statement",
    ConditionOperator = "condition operator",
    ComparisonOperator = "comparison operator",
    ReservedLiteral = "reserved literal",
    NullLiteral = "null literal",
    PropertyAccessor = "property accessor",
    Command = "command",
}

interface SQFSyntax {
    labelDetails?: {
        detail: string;
        description: string;
    };
    kind: CompletionItemKind;
    grammarType: SQFGrammarType;
	syntaxes: string[];
    data?: any;
}

export interface CompiledSQFSyntax extends SQFSyntax {
    // in order to search without case sensetivity
    // but still display properly cased names in menus
    // a label is created when compiled so that the key can
    // be made lowercase
    label: string;
    documentation: MarkupContent;
    detail?: string; // detail should probably be avoided
}

export interface PreCompiledSQFSyntax extends SQFSyntax {
    // label?: string;
    documentation: string | string[] | MarkupContent;
	detail?: string; // detail should probably be avoided
}

export interface IJSON<T> {
    [key: string]: T;
}
