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
export enum SQFDataType {
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Code = "CODE",
    Config = "CONFIG",
    Control = "CONTROL",
    DiaryRecord = "DIARY RECORD",
    Display = "DISPLAY",
    EdenEntity = "EDEN ENTITY",
    EdenId = "EDEN ID",
    EditorObject = "EDITOR OBJECT",
    Group = "GROUP",
    HashMap = "HASHMAP",
    Location = "LOCATION",
    Namespace = "NAMESPACE",
    Number = "NUMBER",
    Object = "OBJECT",
    ScriptHandle = "SCRIPT HANDLE",
    Side = "SIDE",
    String = "STRING",
    StructuredText = "STRUCTURED TEXT",
    Task = "TASK",
    Team = "TEAM",
    TeamMember = "TEAM MEMBER",
    NaN = "NAN",
    Any = "ANYTHING",
    Nothing = "NOTHING",
    Void = "VOID",
    IfType = "IF TYPE",
    SwitchType = "SWITCH TYPE",
    WhileType = "WHILE TYPE",
    WithType = "WITH TYPE",
    ForType = "FOR TYPE",
}

export enum SQFSyntaxType {
    Function = 0,
    NularOperator = 1,
    UnaryOperator = 2,
    BinaryOperator = 3,
}

export interface SQFSyntax {
    type: SQFSyntaxType;
    returnTypes: SQFDataType | Array<SQFDataType[] | SQFDataType>;
    leftOperandTypes?: SQFDataType | Array<SQFDataType[] | SQFDataType>;
    rightOperandTypes?: SQFDataType | Array<SQFDataType[] | SQFDataType>;
}

interface SQFItem {
    labelDetails?: {
        detail: string;
        description: string;
    };
    kind: CompletionItemKind;
    grammarType: SQFGrammarType;
    data?: any;
	syntaxes: SQFSyntax[] | SQFSyntax;
}

export interface CompiledSQFItem extends SQFItem {
    // in order to search without case sensetivity
    // but still display properly cased names in menus
    // a label is created when compiled so that the key can
    // be made lowercase
    label: string;
    documentation: MarkupContent;
    detail?: string; // detail should probably be avoided
}

export interface PreCompiledSQFItem extends SQFItem {
    // label?: string;
    documentation: string | string[] | MarkupContent;
    detail?: string; // detail should probably be avoided
}

export interface IJSON<T> {
    [key: string]: T;
}
