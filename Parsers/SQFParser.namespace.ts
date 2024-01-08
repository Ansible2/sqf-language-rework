import {
    SQFEffectLocality,
    SQFArgumentLocality,
    SQFGrammarType,
} from "../configuration/grammars/sqf.namespace";

// export enum SQFGrammarType {
//     Function = "SQFGrammarType.Function",
//     AccessModifier = "SQFGrammarType.AccessModifier",
//     ManipulativeOperator = "SQFGrammarType.ManipulativeOperator",
//     ConrolStatement = "SQFGrammarType.ControlStatement",
//     ConditionOperator = "SQFGrammarType.ConditionOperator",
//     ComparisonOperator = "SQFGrammarType.ComparisonOperator",
//     ReservedLiteral = "SQFGrammarType.ReservedLiteral",
//     BooleanLiteral = "SQFGrammarType.BooleanLiteral",
//     NullLiteral = "SQFGrammarType.NullLiteral",
//     PropertyAccessor = "SQFGrammarType.PropertyAccessor",
//     Command = "SQFGrammarType.Command",
//     StringCompiler = "SQFGrammarType.StringCompiler",
//     FileCompiler = "SQFGrammarType.FileCompiler",
//     FileExecutor = "SQFGrammarType.FileExecutor",
//     CodeExecutor = "SQFGrammarType.CodeExecutor",
// }

export interface Parser {
    getPages: (any: any) => any[];
    parsePages: (pages: any[]) => any[];
    doWithParsedPages: (parsedPages: any[]) => any;
}

export interface IJSON<T> {
    [key: string]: T;
}

export interface UnparsedItem {
    text: string;
}

export interface ParsedParameter {
    name: string | null;
    description: string | null;
}

export interface ParsedSyntax {
    /** A markdown formatted example of the basic syntax (e.g. "`isNull` entity") */
    outline?: string;
    /** A list of parameters and their explanations for this syntax */
    parameters: ParsedParameter[];
    /** A description of what the given syntax will return in markdown format */
    returns?: string;
}

export interface ParsedItem {
    documentation: {
        /** Primarily the name of the documentation file that will be generated (`${name}.md`) */
        name: string;
        /** An overview description of the item; should be formatted as markdown */
        description: string;
        /** SQF examples that should be markdown formatted */
        examples: string[];
        /** A guide to the particular syntaxes of item */
        syntaxes: ParsedSyntax[];
        /** https://community.bistudio.com/wiki/Multiplayer_Scripting#Definitions */
        argumentLocality?: SQFArgumentLocality;
        /** https://community.bistudio.com/wiki/Multiplayer_Scripting#Definitions */
        serverExecution?: boolean;
        /** https://community.bistudio.com/wiki/Multiplayer_Scripting#Definitions */
        effectLocality?: SQFEffectLocality;
        /** When the pop-up documentation for the item is opened, if present, this link will be provided to open a webpage to the original docs */
        documentationLink?: string;
    };
    configuration: {
        /** The text that will be used for auto complete */
        label: string;
        /** Whether the item should be marked as deprecated in the completion menu and documentation */
        deprecated?: boolean;
        /** The type of item (function, control statement, preprocessor command, etc.) */
        grammarType: SQFGrammarType;
    };
}

export interface DocParser {
    getPages(): Promise<UnparsedItem[]>;
    parsePages(pages: UnparsedItem[]): Promise<ParsedItem[]>;
    getOutputFolderName(): string;
}
