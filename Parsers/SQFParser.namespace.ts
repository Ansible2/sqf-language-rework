export enum SQFGrammarType {
    Function = "SQFGrammarType.Function",
    AccessModifier = "SQFGrammarType.AccessModifier",
    ManipulativeOperator = "SQFGrammarType.ManipulativeOperator",
    ConrolStatement = "SQFGrammarType.ControlStatement",
    ConditionOperator = "SQFGrammarType.ConditionOperator",
    ComparisonOperator = "SQFGrammarType.ComparisonOperator",
    ReservedLiteral = "SQFGrammarType.ReservedLiteral",
    BooleanLiteral = "SQFGrammarType.BooleanLiteral",
    NullLiteral = "SQFGrammarType.NullLiteral",
    PropertyAccessor = "SQFGrammarType.PropertyAccessor",
    Command = "SQFGrammarType.Command",
    StringCompiler = "SQFGrammarType.StringCompiler",
    FileCompiler = "SQFGrammarType.FileCompiler",
    FileExecutor = "SQFGrammarType.FileExecutor",
    CodeExecutor = "SQFGrammarType.CodeExecutor",
}

export enum SQFEffectLocality {
    LOCAL = "SQFEffect.LOCAL",
    GLOBAL = "SQFEffect.GLOBAL",
}

export enum SQFArgumentLocality {
    LOCAL = "SQFArgument.LOCAL",
    GLOBAL = "SQFArgument.GLOBAL",
}

export interface Parser {
    getPages: (any: any) => any[];
    parsePages: (pages: any[]) => any[];
    doWithParsedPages: (parsedPages: any[]) => any;
}

export enum SyntaxMatchDifference {
    leftArg,
    rightArg,
    NoMatch,
}

export interface IJSON<T> {
    [key: string]: T;
}

export interface UnparsedPage {
    text: string;
}

export interface ParsedParameter {
    name: string;
    description: string;
}

export interface ParsedSyntax {
    outline?: string;
    parameters: ParsedParameter[];
    returns?: string;
}

export interface ParsedPage {
    name: string;
    description: string;
    examples: string[];
    syntaxes: ParsedSyntax[];
    argumentLocality?: SQFArgumentLocality;
    effectLocality?: SQFEffectLocality;
    serverExecution?: boolean;
    grammarType: SQFGrammarType;
}

export interface DocParser {
    getPages(): Promise<UnparsedPage[]>;
    parsePages(pages: UnparsedPage[]): Promise<ParsedPage[]>;
    getOutputFolderName(): string;
}
