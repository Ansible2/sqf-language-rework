import { IRawGrammar, IRawRepository } from "vscode-textmate/release/types";
import { CompiledSQFItem, IJSON, SQFGrammarType } from "./sqf.namespace";
import { getSqfItems } from "./sqf.syntax";

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
const stringCompiler: string[] = [];

const sqfItems: IJSON<CompiledSQFItem> = getSqfItems();
Object.entries(sqfItems).forEach((item) => {
    const [itemName, sqfItem] = item;

    switch (sqfItem.grammarType) {
        case SQFGrammarType.AccessModifier: {
            accessModifiers.push(itemName);
            break;
        }
        case SQFGrammarType.StringCompiler: {
            stringCompiler.push(itemName);
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
        case SQFGrammarType.ConrolStatement: {
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
        default:
            break;
    }
});

function getKeywordRegex(keywords: string | string[]): string {
    let words: string = "";
    if (Array.isArray(keywords)) {
        words = keywords.join("|");
    }

    return `(?<=\\s+|^)(?i)(${words})\\b`;
}

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
            { include: "#assignment-operator" },
            { include: "#block" },
            { include: "#comment" },
            { include: "#declaration" },
            { include: "#literal" },
            { include: "#comparison-operator" },
            { include: "#condition-operator" },
            { include: "#control-statement" },
            { include: "#other" },
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
    "comparison-operator": {
        match: `${comparisonOperators.join("|")}`,
        name: "keyword.operator.comparison.sqf",
    },
    "condition-operator": {
        match: getKeywordRegex(conditionOperators),
        name: "keyword.operator.condition.sqf",
    },
    "control-statement": {
        match: getKeywordRegex(controlStatements),
        name: "keyword.control.sqf",
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
            { include: "#boolean-literal" },
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
        match: getKeywordRegex(booleanLiterals),
        name: "constant.language.boolean.sqf",
    },

    /* ----------------------------------------------------------------------------
		Statements
	---------------------------------------------------------------------------- */
    statements: {
        name: "meta.expression.sqf",
        patterns: [{ include: "#commands" }, { include: "#functions" }],
    },
    functions: {
        match: getKeywordRegex(functions),
        name: "variable.language.vobject.sqf",
    },
    commands: {
        match: getKeywordRegex(commands),
        name: "support.function.sqf",
    },

    /* ----------------------------------------------------------------------------
		Other
	---------------------------------------------------------------------------- */
    other: {
        name: "meta.expression.sqf",
        patterns: [
            { include: "#access-modifier" },
            { include: "#property-accessor" },
        ],
    },
    // "#" may need extra backslashes to be literal (\\#)
    "property-accessor": {
        match: getKeywordRegex(propertyAccessors),
        name: "storage.type.property.sqf",
    },
    "access-modifier": {
        match: getKeywordRegex(accessModifiers),
        name: "storage.modifier.sqf",
    },

    /* ----------------------------------------------------------------------------
		declaration
	---------------------------------------------------------------------------- */
    declaration: {
        name: "meta.declaration.sqf",
        patterns: [
            { include: "#fnc-declaration" },
            { include: "#var-declaration-local" },
            { include: "#var-declaration-global" },
        ],
    },
    "var-declaration-global": {
        // begin: "(?i)\\b([a-z][a-z0-9]+)( +)(=)",
        begin: "(?i)\\b([a-z]\\w+)(\\s*)(=)",
        beginCaptures: {
            "1": { name: "variable.other.global.declaration.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
        },
        end: " |;|{|}|\t|=|(|)|[|]", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } }, // TODO: check if needed
        name: "meta.declaration.object.sqf",
    },
    "var-declaration-local": {
        begin: "(?i)\\b(_+\\w+)(\\s*)(=)",
        beginCaptures: {
            "1": { name: "variable.other.local.declaration.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
        },
        end: " |;|{|}|\t|=|(|)|[|]", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } }, // TODO: check if needed
        name: "meta.declaration.object.sqf",
    },
    "fnc-declaration": {
        begin: `(?i)\\b(\\w+)(\\s*)(=)(\\s*)(${stringCompiler.concat('{').join("|")})`,
        beginCaptures: {
            "1": { name: "support.function.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
            // "6": { name: "meta.brace.curly.sqf" },
        },
        end: " |;|{|}|\t", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
        name: "meta.declaration.object.sqf",
    },

    /* ----------------------------------------------------------------------------
		Misc Definitions
	---------------------------------------------------------------------------- */
    // "decl-block": {
    // 	begin: "\\{",
    // 	beginCaptures: { "0": { name: "meta.brace.curly.sqf" } },
    // 	end: "\\}",
    // 	endCaptures: { "0": { name: "meta.brace.curly.sqf" } },
    // 	name: "meta.decl.block.sqf",
    // 	patterns: [{ include: "#expression" }],
    // },
};

export const sqfGrammar: IRawGrammar = {
    scopeName: "source.sqf",
    fileTypes: ["sqf"],
    name: "sqf",
    patterns: [{ include: "#expression" }],
    repository: grammarRepo,
};
