import {
    CompletionItemKind,
    CompletionItemTag,
    MarkupContent,
} from "vscode-languageserver/node";

export enum SQFGrammarType {
    Function = "function",
    AccessModifier = "access modifier",
    ManipulativeOperator = "manipulative operator",
    ControlStatement = "control statement",
    ConditionOperator = "condition operator",
    ComparisonOperator = "comparison operator",
    ReservedLiteral = "reserved literal",
    BooleanLiteral = "boolean literal",
    NullLiteral = "null literal",
    PropertyAccessor = "property accessor",
    Command = "command",
    StringCompiler = "string compiler",
    FileCompiler = "file compiler",
    FileExecutor = "file executor",
    CodeExecutor = "code executor",
}

export enum SQFDataType {
    Empty = "EMPTY",
    Array = "ARRAY",
    Boolean = "BOOLEAN",
    Behaviour = "(Behaviour) STRING",
    CombatMode = "(Combat Mode) STRING",
    SpeedMode = "(Speed Mode) STRING",
    Formation = "(Formation) STRING",
    Code = "CODE",
    Config = "CONFIG",
    Control = "CONTROL",
    DiaryRecord = "DIARY RECORD",
    Display = "DISPLAY",
    Exception = "EXCEPTION",
    EdenEntity = "EDEN ENTITY",
    EdenId = "EDEN ID",
    EditorObject = "EDITOR OBJECT",
    Group = "GROUP",
    HashMap = "HASHMAP",
    Location = "LOCATION",
    Namespace = "NAMESPACE",
    Number = "NUMBER",
    NetObject = "NetObject",
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
    Marker = "(Marker) STRING",
    Vector = "(Vector) NUMBER[x,y,z]",
    Variable = "VARIABLE",
    IfType = "IF TYPE",
    SwitchType = "SWITCH TYPE",
    WhileType = "WHILE TYPE",
    WithType = "WITH TYPE",
    ForType = "FOR TYPE",
    HashMapKey = "HASHMAP_KEY",
    Waypoint = "[GROUP,NUMBER]",
    Position = "NUMBER[x,y,z?]",
    Position3d = "(Position 3D) NUMBER[x,y,z]",
    Position2d = "(Position 2D) NUMBER[x,y]",
    PositionWorld = "(Position World) NUMBER[x,y,z]",
    PositionASL = "(Position ASL) NUMBER[x,y,z]",
    PositionAGL = "(Position AGL) NUMBER[x,y,z]",
    PositionAGLS = "(Position AGLS) NUMBER[x,y,z]",
    PositionATL = "(Position ATL) NUMBER[x,y,z]",
    PositionASLW = "(Position ASLW) NUMBER[x,y,z]",
    PositionConfig = "(Position Config) NUMBER[x,z,y]",
    PositionRelative = "(Position Relative) NUMBER[x,z,y]",
    ParticleArray = `(Particle) ARRAY`,
    Color = "(Color) NUMBER[R,G,B]",
    ColorAlpha = "(Color) NUMBER[R,G,B,A]",
    MinMidMax = "(Min/Mid/Max) NUMBER[min,mid,max]",
    UnitLoadout = "(Unit Loadout) ARRAY",
}

export interface SQFArray {
    types: SQFSyntaxTypes;
    operation: SQFArrayComparator;
}

export namespace SQFArray {
    export function of(
        types: SQFSyntaxTypes,
        operation?: SQFArrayComparator
    ): SQFArray {
        if (!operation) {
			if (!Array.isArray(types)) {
				return SQFArray.ofOneOfThese(types);
			}

			return SQFArray.ofAnyOfThese(types);
		}

		return {
            operation: operation,
            types: types,
        };
    }
    export function ofOneOfThese(types: SQFSyntaxTypes): SQFArray {
        return {
            operation: SQFArrayComparator.OneOf,
            types: types,
        };
    }
    export function ofAnyOfThese(types: SQFSyntaxTypes): SQFArray {
        return {
            operation: SQFArrayComparator.AnyOf,
            types: types,
        };
    }
    export function ofExactly(types: SQFSyntaxTypes[]): SQFArray {
        return {
            operation: SQFArrayComparator.Exact,
            types: types,
        };
    }
}

export interface SQFCode {
    codeReturnTypes: SQFSyntaxTypes;
    params?: SQFSyntaxTypes;
}
export class SQFCode {
	private constructor(returnTypes: SQFSyntaxTypes) {
		this.codeReturnTypes = returnTypes;
	}

	public static returns(returnTypes: SQFSyntaxTypes): SQFCode {
		return new SQFCode(returnTypes);
	}

	public takes(params: SQFSyntaxTypes): SQFCode {
		this.params = params;
		return this;
	}

}
// export namespace SQFCode {
//     function returns(
//         returnTypes: SQFSyntaxTypes
//     ): SQFCode {
//         return new SQFCode(returnTypes);
//     }
//     function takes(
//         returnTypes: SQFSyntaxTypes
//     ): SQFCode {
//         return new SQFCode(returnTypes);
//     }

	
//     // function takes(
//     //     params: SQFSyntaxTypes
//     // ): SQFCode {
// 	// 	if (!this) { }
//     //     return {
// 	// 		,
//     //         params: params,
//     //     };
//     // }
// }

export enum SQFSyntaxType {
    UnscheduledFunction = 0,
    NularOperator = 1,
    UnaryOperator = 2,
    BinaryOperator = 3,
    ScheduledFunction = 4,
}

export function isSQFArray(object: unknown): object is SQFArray {
    return (
        Object.prototype.hasOwnProperty.call(object, "types") &&
        Object.prototype.hasOwnProperty.call(object, "operation")
    );
}
export function isSQFCode(object: unknown): object is SQFCode {
    return Object.prototype.hasOwnProperty.call(object, "codeReturnTypes");
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

export type SQFSyntaxTypes =
    | SQFDataType
    | SQFArray
    | SQFCode
    | Array<SQFSyntaxTypes>;

type BinarySyntax = {
    type: SQFSyntaxType.BinaryOperator;
    returnTypes?: SQFSyntaxTypes;
    leftOperandTypes: SQFSyntaxTypes;
    rightOperandTypes: SQFSyntaxTypes;
};

type FunctionSyntax = {
    type: SQFSyntaxType.ScheduledFunction | SQFSyntaxType.UnscheduledFunction;
    returnTypes?: SQFSyntaxTypes;
    leftOperandTypes?: SQFSyntaxTypes;
};

type UnarySyntax = {
    type: SQFSyntaxType.UnaryOperator;
    returnTypes?: SQFSyntaxTypes;
    rightOperandTypes: SQFSyntaxTypes;
};

type NularSyntax = {
    type: SQFSyntaxType.NularOperator;
    returnTypes?: SQFSyntaxTypes;
};

export type SQFSyntax =
    | FunctionSyntax
    | NularSyntax
    | UnarySyntax
    | BinarySyntax;

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
    effect?: SQFEffect;
    argument?: SQFArgument;
    server?: boolean;
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
    label?: string;
    documentation?: string | string[] | MarkupContent;
    detail?: string; // detail should probably be avoided
}

export interface IJSON<T> {
    [key: string]: T;
}
