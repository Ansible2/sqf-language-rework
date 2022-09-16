import { CompletionItemKind, CompletionItemTag, MarkupContent } from "vscode-languageserver/node";

export enum SQFGrammarType {
    Function = "function",
	AccessModifier = "access modifier",
	ManipulativeOperator = "manipulative operator",
    ConrolStatement = "control statement",
    ConditionOperator = "condition operator",
    ComparisonOperator = "comparison operator",
    ReservedLiteral = "reserved literal",
	BooleanLiteral = "boolean literal",
    NullLiteral = "null literal",
    PropertyAccessor = "property accessor",
    Command = "command",
}
export enum SQFDataType {
    Empty = "EMPTY",
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
    Variable = "VARIABLE",
    IfType = "IF TYPE",
    SwitchType = "SWITCH TYPE",
    WhileType = "WHILE TYPE",
    WithType = "WITH TYPE",
    ForType = "FOR TYPE",
	Position2d = "POS_2D",
	Position3d = "POS_3D",
	HashMapKey = "HASHMAP_KEY"
}

export enum SQFSyntaxType {
    Function = 0,
    NularOperator = 1,
    UnaryOperator = 2,
    BinaryOperator = 3,
}

export function isSQFArray(object: unknown): object is SQFArray {
    return (
        Object.prototype.hasOwnProperty.call(object, "types") &&
        Object.prototype.hasOwnProperty.call(object, "operation")
    );
}
export function isSQFCode(object: unknown): object is SQFCode {
    return Object.prototype.hasOwnProperty.call(object, "returns");
}

export function isSqfDataType(object: unknown): object is string {
    const dataTypes: SQFDataType[] = Object.values(SQFDataType);
    return dataTypes.includes(object as SQFDataType);
}

export enum SQFArrayComparator {
    Exact = "EXACT",
    OneOf = "ONE OF",
    AnyOf = "ANY",
}
export interface SQFArray {
    types:
        | SQFDataType
        | SQFArray
        | SQFCode
        | Array<SQFDataType | SQFArray | SQFCode>;
    operation: SQFArrayComparator;
}
export interface SQFCode {
    params?:
        | SQFDataType
        | SQFArray
        | SQFCode
        | Array<SQFDataType | SQFArray | SQFCode>;
    returns:
        | SQFDataType
        | SQFArray
        | SQFCode
        | Array<SQFDataType | SQFArray | SQFCode>;
}

export interface SQFSyntax {
    type: SQFSyntaxType;
    returnTypes:
        | SQFDataType
        | SQFArray
        | SQFCode
        | Array<SQFDataType | SQFArray | SQFCode>;
    leftOperandTypes?:
        | SQFDataType
        | SQFArray
        | SQFCode
        | Array<SQFDataType | SQFArray | SQFCode>;
    rightOperandTypes?:
        | SQFDataType
        | SQFArray
        | SQFCode
        | Array<SQFDataType | SQFArray | SQFCode>;
}

export enum SQFEffect {
	LOCAL = "Local Effect",
	GLOBAL = "Global Effect",
}
export enum SQFArgument {
	LOCAL = "Local Argument",
	GLOBAL = "Global Argument",
}

interface SQFItem {
    labelDetails?: {
        detail: string;
        description: string;
    };
    grammarType: SQFGrammarType;
    data?: any;
	tags?: CompletionItemTag[];
    syntaxes: SQFSyntax[] | SQFSyntax;
    kind?: CompletionItemKind;
	effect?: SQFEffect,
	argument?: SQFArgument, 
	getDocLink?: (itemName: string) => string;
}

export interface CompiledSQFItem extends SQFItem {
    // in order to search without case sensetivity
    // but still display properly cased names in menus
    // a label is created when compiled so that the key can
    // be made lowercase
    label: string;
    documentation: MarkupContent;
    detail?: string; // detail should probably be avoided
	kind: CompletionItemKind;
}

export interface PreCompiledSQFItem extends SQFItem {
    // label?: string;
    documentation?: string | string[] | MarkupContent;
    detail?: string; // detail should probably be avoided
}

export interface IJSON<T> {
    [key: string]: T;
}
