import { configs as sqfCommandConfigs } from "./syntaxes/commands.syntax";

export enum SQFEffectLocality {
    LOCAL = "Local Effect",
    GLOBAL = "Global Effect",
}
export enum SQFArgumentLocality {
    LOCAL = "Local Argument",
    GLOBAL = "Global Argument",
}

export interface IJSON<T> {
    [key: string]: T;
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
    DiaryRecord = "DIARY-RECORD",
    Display = "DISPLAY",
    Exception = "EXCEPTION",
    EdenEntity = "EDEN-ENTITY",
    EdenId = "EDEN-ID",
    EditorObject = "EDITOR-OBJECT",
    Group = "GROUP",
    HashMap = "HASHMAP",
    Location = "LOCATION",
    Namespace = "NAMESPACE",
    Number = "NUMBER",
    NetObject = "NetObject",
    Object = "OBJECT",
    ScriptHandle = "SCRIPT-HANDLE",
    Side = "SIDE",
    String = "STRING",
    StructuredText = "STRUCTURED-TEXT",
    Task = "TASK",
    Team = "TEAM",
    TeamMember = "TEAM-MEMBER",
    Text = "TEXT",
    NaN = "NAN",
    Any = "ANYTHING",
    Nothing = "NOTHING",
    Void = "VOID",
    Marker = "(Marker) STRING",
    Vector = "(Vector) NUMBER[x,y,z]",
    Variable = "VARIABLE",
    IfType = "IF-TYPE",
    SwitchType = "SWITCH-TYPE",
    WhileType = "WHILE-TYPE",
    WithType = "WITH-TYPE",
    ForType = "FOR-TYPE",
    HashMapKey = "HASHMAP-KEY",
    Waypoint = "[GROUP,NUMBER]",
    Position = "(Position) NUMBER[x,y,z?]",
    Position3d = "(Position3D) NUMBER[x,y,z]",
    Position2d = "(Position2D) NUMBER[x,y]",
    PositionWorld = "(PositionWorld) NUMBER[x,y,z]",
    PositionASL = "(PositionASL) NUMBER[x,y,z]",
    PositionAGL = "(PositionAGL) NUMBER[x,y,z]",
    PositionAGLS = "(PositionAGLS) NUMBER[x,y,z]",
    PositionATL = "(PositionATL) NUMBER[x,y,z]",
    PositionASLW = "(PositionASLW) NUMBER[x,y,z]",
    PositionConfig = "(PositionConfig) NUMBER[x,z,y]",
    PositionRelative = "(PositionRelative) NUMBER[x,z,y]",
    ParticleArray = `(Particle) ARRAY`,
    Color = "(Color) NUMBER[R,G,B]",
    ColorAlpha = "(Color) NUMBER[R,G,B,A]",
    MinMidMax = "(Random) NUMBER[min,mid,max]",
    UnitLoadout = "(Unit-Loadout) ARRAY",
}

export enum SQFGrammarType {
    Function = "function",
    AccessModifier = "access-modifier",
    ManipulativeOperator = "manipulative-operator",
    ControlStatement = "control-statement",
    ConditionOperator = "condition-operator",
    ComparisonOperator = "comparison-operator",
    ReservedLiteral = "reserved-literal",
    BooleanLiteral = "boolean-literal",
    NullLiteral = "null-literal",
    PropertyAccessor = "property-accessor",
    Command = "command",
    StringCompiler = "string-compiler",
    FileCompiler = "file-compiler",
    FileExecutor = "file-executor",
    CodeExecutor = "code-executor",
    PreprocessorCommand = "preprocessor-command",
    NamespaceLiteral = "namespace",
}

export interface SQFParameterConfig {
    name: string | null;
    description: string | null;
}

export enum ExampleLanguage {
    CPP = "cpp",
    SQF = "sqf",
}

export interface ExampleConfig {
    /** A markdown formatted set of code example code */
    text: string;
    /** A optional inclusion of language if simple markdown formatting of a code block ```<lang>...``` is desired to be automatically added by the server */
    language?: ExampleLanguage | string;
}

export interface SQFSyntaxConfig {
    /** A markdown formatted example of the basic syntax (e.g. "`isNull` entity") */
    outline?: string;
    /** A list of parameters and their explanations for this syntax */
    parameters: SQFParameterConfig[];
    /** A description of what the given syntax will return in markdown format */
    returns?: string;
}

export interface SQFItemConfig {
    documentation: {
        /** An overview description of the item; should be formatted as markdown */
        description?: string;
        /** Examples that should be markdown formatted */
        examples?: ExampleConfig[];
        /** A guide to the particular syntaxes of item */
        syntaxes?: SQFSyntaxConfig[];
        /** https://community.bistudio.com/wiki/Multiplayer_Scripting#Definitions */
        argumentLocality?: SQFArgumentLocality | string;
        /** https://community.bistudio.com/wiki/Multiplayer_Scripting#Definitions */
        serverExecution?: boolean;
        /** https://community.bistudio.com/wiki/Multiplayer_Scripting#Definitions */
        effectLocality?: SQFEffectLocality | string;
        /** When the pop-up documentation for the item is opened, if present, this link will be provided to open a webpage to the original docs */
        documentationLink?: string;
    };
    configuration: {
        /** The text that will be used for auto complete */
        label: string;
        /** Whether the item should be marked as deprecated in the completion menu and documentation */
        deprecated?: boolean;
        /** The type of item (function, control statement, preprocessor command, etc.) */
        grammarType: SQFGrammarType | string;
    };
}

export function getSqfItemConfigs(): SQFItemConfig[] {
    return [
        // Place any new syntax imports here
        ...sqfCommandConfigs,
    ];
}
