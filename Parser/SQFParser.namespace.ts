export enum SQFGrammarType {
    Function = "SQFGrammarType.Function",
    AccessModifier = "SQFGrammarType.AccessModifier",
    ManipulativeOperator = "SQFGrammarType.ManipulativeOperator",
    ConrolStatement = "SQFGrammarType.ConrolStatement",
    ConditionOperator = "SQFGrammarType.ConditionOperator",
    ComparisonOperator = "SQFGrammarType.ComparisonOperator",
    ReservedLiteral = "SQFGrammarType.ReservedLiteral",
    BooleanLiteral = "SQFGrammarType.BooleanLiteral",
    NullLiteral = "SQFGrammarType.NullLiteral",
    PropertyAccessor = "SQFGrammarType.PropertyAccessor",
    Command = "SQFGrammarType.Command",
}

export enum SQFDataType {
    Empty = "SQFDataType.Empty",
    Array = "SQFDataType.Array",
    Boolean = "SQFDataType.Boolean",
    Code = "SQFDataType.Code",
    Config = "SQFDataType.Config",
    Control = "SQFDataType.Control",
    DiaryRecord = "SQFDataType.DiaryRecord",
    Display = "SQFDataType.Display",
    Exception = "SQFDataType.Exception",
    EdenEntity = "SQFDataType.EdenEntity",
    EdenId = "SQFDataType.EdenId",
    EditorObject = "SQFDataType.EditorObject",
    Group = "SQFDataType.Group",
    HashMap = "SQFDataType.HashMap",
    Location = "SQFDataType.Location",
    Namespace = "SQFDataType.Namespace",
    Number = "SQFDataType.Number",
    NetObject = "SQFDataType.NetObject",
    Object = "SQFDataType.Object",
    ScriptHandle = "SQFDataType.ScriptHandle",
    Side = "SQFDataType.Side",
    String = "SQFDataType.String",
    StructuredText = "SQFDataType.StructuredText",
    Task = "SQFDataType.Task",
    Team = "SQFDataType.Team",
    TeamMember = "SQFDataType.TeamMember",
    NaN = "SQFDataType.NaN",
    Any = "SQFDataType.Any",
    Nothing = "SQFDataType.Nothing",
    Void = "SQFDataType.Void",
    Vector = "SQFDataType.Vector",
    Variable = "SQFDataType.Variable",
    IfType = "SQFDataType.IfType",
    SwitchType = "SQFDataType.SwitchType",
    WhileType = "SQFDataType.WhileType",
    WithType = "SQFDataType.WithType",
    ForType = "SQFDataType.ForType",
    HashMapKey = "SQFDataType.HashMapKey",
    Waypoint = "SQFDataType.Waypoint",
    Position = "SQFDataType.Position",
    Position3d = "SQFDataType.Position3d",
    Position2d = "SQFDataType.Position2d",
    PositionWorld = "SQFDataType.PositionWorld",
    PositionASL = "SQFDataType.PositionASL",
    PositionAGL = "SQFDataType.PositionAGL",
    PositionAGLS = "SQFDataType.PositionAGLS",
    PositionATL = "SQFDataType.PositionATL",
    PositionASLW = "SQFDataType.PositionASLW",
    PositionConfig = "SQFDataType.PositionConfig",
    PositionRelative = "SQFDataType.PositionRelative",
    ParticleArray = "SQFDataType.ParticleArray",
    Color = "SQFDataType.Color",
    ColorAlpha = "SQFDataType.ColorAlpha",
}

export enum SQFSyntaxType {
    UnscheduledFunction = "SQFSyntaxType.UnscheduledFunction",
    NularOperator = "SQFSyntaxType.NularOperator",
    UnaryOperator = "SQFSyntaxType.UnaryOperator",
    BinaryOperator = "SQFSyntaxType.BinaryOperator",
    ScheduledFunction = "SQFSyntaxType.ScheduledFunction",
	Empty = 'EMPTY',
}

export enum SQFEffect {
    LOCAL = "SQFEffect.LOCAL",
    GLOBAL = "SQFEffect.GLOBAL",
}

export enum SQFArgument {
    LOCAL = "SQFArgument.LOCAL",
    GLOBAL = "SQFArgument.GLOBAL",
}

export interface Parser {
    getPages: (any: any) => any[];
    parsePages: (pages: any[]) => string[];
    doWithParsedPages: (parsedPages: string[]) => any;
}

export enum SyntaxMatchDifference {
    leftArg,
    rightArg,
    NoMatch,
}

export interface IJSON<T> {
    [key: string]: T;
}
