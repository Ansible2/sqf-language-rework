import { IRawGrammar } from "vscode-textmate";
import { SQFGrammarType, SQFItemConfig } from "./sqf.namespace";
import { getSqfItemConfigs } from "./config";

const accessModifiers: string[] = [];
const manipulativeOperators: string[] = [];
const functions: string[] = [];
const controlStatements: string[] = [];
const conditionOperators: string[] = [];
const comparisonOperators: string[] = [];
const reservedLiterals: string[] = [];
const booleanLiterals: string[] = [];
const nullLiterals: string[] = [];
const propertyAccessors: string[] = [];
const commands: string[] = [];
const stringCompilerWords: string[] = [];
const fileExecutors: string[] = [];
const codeExecutors: string[] = [];
const fileCompilers: string[] = [];
const preprocessorCommands: string[] = [];
const namespaceLiterals: string[] = [];

getSqfItemConfigs().forEach((itemConfig: SQFItemConfig) => {
    // format things like (!, #, +, |, etc...) as literals
    const itemName = itemConfig.configuration.label.replace(/(\W)/g, "\\$1");

    switch (itemConfig.configuration.grammarType) {
        case SQFGrammarType.AccessModifier: {
            accessModifiers.push(itemName);
            break;
        }
        case SQFGrammarType.FileExecutor: {
            fileExecutors.push(itemName);
            break;
        }
        case SQFGrammarType.CodeExecutor: {
            codeExecutors.push(itemName);
            break;
        }
        case SQFGrammarType.StringCompiler: {
            stringCompilerWords.push(itemName);
            break;
        }
        case SQFGrammarType.FileCompiler: {
            fileCompilers.push(itemName);
            break;
        }
        case SQFGrammarType.ManipulativeOperator: {
            manipulativeOperators.push(itemName);
            break;
        }
        case SQFGrammarType.Function: {
            functions.push(itemName);
            break;
        }
        case SQFGrammarType.ControlStatement: {
            controlStatements.push(itemName);
            break;
        }
        case SQFGrammarType.ConditionOperator: {
            conditionOperators.push(itemName);
            break;
        }
        case SQFGrammarType.ComparisonOperator: {
            comparisonOperators.push(itemName);
            break;
        }
        case SQFGrammarType.ReservedLiteral: {
            reservedLiterals.push(itemName);
            break;
        }
        case SQFGrammarType.BooleanLiteral: {
            booleanLiterals.push(itemName);
            break;
        }
        case SQFGrammarType.NullLiteral: {
            nullLiterals.push(itemName);
            break;
        }
        case SQFGrammarType.PropertyAccessor: {
            propertyAccessors.push(itemName);
            break;
        }
        case SQFGrammarType.Command: {
            commands.push(itemName);
            break;
        }
        case SQFGrammarType.NamespaceLiteral: {
            namespaceLiterals.push(itemName);
            break;
        }
        case SQFGrammarType.PreprocessorCommand: {
            preprocessorCommands.push(itemName);
            break;
        }
        default:
            break;
    }
});

function getSingleWordRegex(words: string | string[]): string {
    if (Array.isArray(words)) {
        words = words.join("|");
    }

    // return `(?<=\\s+|^)(?i)(${words})\\b`;
    return `(?i)\\b(${words})\\b`;
}
function getSingleWordRegexSpecialStart(words: string | string[]): string {
    if (Array.isArray(words)) {
        words = words.join("|");
    }

    return `(?i)(?<=(\\s+|^))(${words})\\b`;
}

type IRawRepository = IRawGrammar["repository"];
const grammarRepo: IRawRepository = {
    $base: {},
    $self: {},

    "assignment-operator": {
        match: "=",
        name: "keyword.operator.assignment.sqf",
    },

    /* ----------------------------------------------------------------------------
		expression
	---------------------------------------------------------------------------- */
    expression: {
        name: "meta.expression.sqf",
        patterns: [
            { include: "#comment" },
            { include: "#string" },
            { include: "#preprocessor-commands" },
            { include: "#literal" },
            { include: "#paren-expression" },
            { include: "#other" },
            { include: "#block" },
            { include: "#comparison-operator" },
            { include: "#condition-operator" },
            { include: "#assignment-operator" },
            { include: "#control-statement" },
            { include: "#file-compiler" },
            { include: "#string-compiler" },
            { include: "#fnc-file-execution" },
            { include: "#declaration" },
            { include: "#statements" },
        ],
    },
    block: {
        begin: "\\{",
        beginCaptures: {
            "0": {
                name: "meta.brace.curly.sqf",
            },
        },
        end: "\\}",
        endCaptures: {
            "0": {
                name: "meta.brace.curly.sqf",
            },
        },
        name: "meta.block.sqf",
        patterns: [{ include: "#expression" }],
    },
    "paren-expression": {
        begin: "\\(",
        beginCaptures: { "0": { name: "meta.brace.paren.sqf" } },
        end: "\\)",
        endCaptures: { "0": { name: "meta.brace.paren.sqf" } },
        patterns: [{ include: "#expression" }],
    },
    "fnc-file-execution": {
        match: getSingleWordRegex(fileExecutors),
        name: "keyword.control.call.string",
    },
    "comparison-operator": {
        match: `${comparisonOperators.join("|")}`,
        name: "keyword.operator.comparison.sqf",
    },
    "condition-operator": {
        match: getSingleWordRegex(conditionOperators),
        name: "keyword.operator.condition.sqf",
    },
    "control-statement": {
        match: getSingleWordRegex(controlStatements),
        name: "keyword.control.sqf",
    },
    "file-compiler": {
        match: getSingleWordRegex(fileCompilers),
        name: "keyword.control.fileCompiler.sqf",
    },
    "string-compiler": {
        match: getSingleWordRegex(stringCompilerWords),
        name: "keyword.control.compileString.sqf",
    },
    /* ------------------------------------
		comment
	------------------------------------ */
    comment: {
        name: "comment.sqf",
        patterns: [{ include: "#comment-block" }, { include: "#comment-line" }],
    },
    "comment-block": {
        begin: "/\\*",
        end: "\\*/",
        name: "comment.block.sqf",
    },
    "comment-line": {
        match: "(?<=^.*)(\\/\\/).*\\n?",
        name: "comment.line.sqf",
    },
    /* ------------------------------------
		literal
	------------------------------------ */
    literal: {
        name: "literal.sqf",
        patterns: [
            { include: "#array-literal" },
            { include: "#null-literal" },
            { include: "#boolean-literal" },
            { include: "#numeric-literal" },
            { include: "#namespace-literal" },
            { include: "#reserved-literal" },
        ],
    },
    "array-literal": {
        begin: "\\[",
        beginCaptures: {
            "0": {
                name: "meta.brace.square.sqf",
            },
        },
        end: "\\]",
        endCaptures: {
            "0": {
                name: "meta.brace.square.sqf",
            },
        },
        name: "meta.array.literal.sqf",
        patterns: [{ include: "#expression" }],
    },
    "boolean-literal": {
        match: getSingleWordRegex(booleanLiterals),
        name: "constant.language.boolean.sqf",
    },
    "namespace-literal": {
        match: getSingleWordRegex(namespaceLiterals),
        name: "constant.language.namespace.sqf",
    },
    "null-literal": {
        match: getSingleWordRegex(nullLiterals),
        name: "constant.language.null.sqf",
    },
    "numeric-literal": {
        // TODO seperate if possible
        match: "(?i)(?<![a-zA-Z.]\\d*)((\\d+.{0,1})?(\\d+e[+-]{0,1}?\\d+)(?!\\d*\\.\\d*)|(\\d+\\.{0,1}\\d*|\\.\\d+)(?!\\d*[a-zA-Z])|((\\$|0x)[0-9a-fA-F]+))",
        name: "constant.numeric.sqf",
    },
    "reserved-literal": {
        match: getSingleWordRegex(reservedLiterals),
        name: "constant.language.reserved.sqf",
    },

    /* ----------------------------------------------------------------------------
		preprocessor
	---------------------------------------------------------------------------- */
    "preprocessor-commands": {
        name: "meta.expression.sqf",
        patterns: [{ include: "#basic-preprocess" }],
    },
    "basic-preprocess": {
        match: getSingleWordRegexSpecialStart(preprocessorCommands),
        name: "keyword.control.preprocessor",
    },

    /* ----------------------------------------------------------------------------
		Statements
	---------------------------------------------------------------------------- */
    statements: {
        name: "meta.expression.sqf",
        patterns: [
            { include: "#commands" },
            { include: "#functions" },
            { include: "#var-local" },
            { include: "#var-global" },
        ],
    },
    "var-local": {
        match: getSingleWordRegex("\\b(_+\\w+)"),
        name: "variable.other.local",
    },
    "var-global": {
        match: getSingleWordRegex("\\b([a-z]\\w*)"),
        name: "variable.other.global",
    },
    functions: {
        match: getSingleWordRegex(functions),
        name: "variable.language.knownFunction.sqf",
    },
    commands: {
        match: getSingleWordRegex(commands),
        name: "entity.name.function.sqf",
    },

    /* ----------------------------------------------------------------------------
		Other
	---------------------------------------------------------------------------- */
    other: {
        name: "meta.expression.sqf",
        patterns: [{ include: "#access-modifier" }, { include: "#property-accessor" }],
    },
    // "#" may need extra backslashes to be literal (\\#)
    "property-accessor": {
        match: getSingleWordRegex(propertyAccessors),
        name: "storage.type.property.sqf",
    },
    "access-modifier": {
        match: getSingleWordRegex(accessModifiers),
        name: "storage.modifier.sqf",
    },

    /* ----------------------------------------------------------------------------
		declaration
	---------------------------------------------------------------------------- */
    declaration: {
        name: "meta.declaration.sqf",
        patterns: [
            { include: "#fnc-execute" },
            { include: "#fnc-declaration" },
            { include: "#var-declaration-local" },
            { include: "#var-declaration-global" },
        ],
    },
    "var-declaration-global": {
        begin: "(?i)\\b([a-z]\\w+)(\\s*)(=)",
        beginCaptures: {
            "1": { name: "variable.other.global.declaration.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
        },
        end: " |;|{|}|\t|=|(|)|[|]", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } }, // TODO: check if needed
        name: "meta.declaration.variable.global.sqf",
    },
    "var-declaration-local": {
        begin: "(?i)\\b(_+\\w+)(\\s*)(=)",
        beginCaptures: {
            "1": { name: "variable.other.local.declaration.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
        },
        end: " |;|{|}|\t|=|(|)|[|]", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } }, // TODO: check if needed
        name: "meta.declaration.variable.local.sqf",
    },
    "fnc-declaration": {
        begin: `(?i)\\b(\\w+)(\\s*)(=)(\\s*)(${stringCompilerWords.concat("{").join("|")})`,
        beginCaptures: {
            // TODO: the lack of concretes here (regex without *)
            // seems to be causing w* to be used over other things
            "1": { name: "support.function.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
            "5": { name: "keyword.control.compileString.sqf" },
        },
        end: " |;|{|}|\t", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
        name: "meta.declaration.function.sqf",
    },
    "fnc-execute": {
        begin: `(\\s*)(${codeExecutors.join("|")})(\\s+)(\\w+|{)`, // TODO: check if s+ is needed
        beginCaptures: {
            "2": { name: "keyword.control.executeCode.sqf" },
            "4": { name: "support.function.sqf" },
        },
        end: " |;|{|}|(|)",
        endCaptures: { "1": { name: "keyword.operator.sqf" } },
        name: "meta.declaration.function.execute.sqf",
    },

    /* ----------------------------------------------------------------------------
		String
	---------------------------------------------------------------------------- */
    string: {
        name: "string.sqf",
        patterns: [
            { include: "#qstring-single" },
            { include: "#qstring-double" },
            { include: "#qstring-triple" },
        ],
    },
    "qstring-triple": {
        begin: '"""',
        end: '"""',
        name: "string.triple.sqf",
    },
    "qstring-double": {
        begin: '"',
        end: '"',
        name: "string.double.sqf",
    },
    "qstring-single": {
        begin: "'",
        end: "'",
        name: "string.single.sqf",
    },
};

export const sqfGrammar: IRawGrammar = {
    scopeName: "source.sqf",
    fileTypes: ["sqf"],
    name: "sqf",
    patterns: [{ include: "#expression" }],
    repository: grammarRepo,
};
