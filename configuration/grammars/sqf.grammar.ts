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
const stringCompilerWords: string[] = [];
const fileExecutors: string[] = [];
const codeExecutors: string[] = [];

const sqfItems: IJSON<CompiledSQFItem> = getSqfItems();
Object.entries(sqfItems).forEach((item) => {
    const [itemName, sqfItem] = item;

    switch (sqfItem.grammarType) {
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
        default:
            break;
    }
});

function getSingleWordRegex(words: string | string[]): string {
    if (Array.isArray(words)) {
        words = words.join("|");
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
			{ include: "#comment" },
            { include: "#string" },
            { include: "#literal" },
            { include: "#paren-expression" },
            { include: "#other" },
            { include: "#block" },
            { include: "#comparison-operator" },
            { include: "#condition-operator" },
            { include: "#assignment-operator" },
            { include: "#control-statement" },
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
	// TODO: add fileExecutors to uncomment
    // "fnc-file-execution": {
    //     match: getKeywordRegex(fileExecutors),
    //     name: "keyword.control.call.string",
    // },
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
            { include: "#numeric-literal" },
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
	"numeric-literal": {
		match: "\\b\\d+\\b",
		name: "constant.numeric.sqf",
	},
	"reserved-literal": {
		match: getSingleWordRegex(reservedLiterals),
		name: "variable.language.reserved.sqf",
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
		name: "variable.other.local"
	},
	"var-global": {
		match: getSingleWordRegex("\\b([a-z]\\w+)"),
		name: "variable.other.global"
	},
    functions: {
        match: getSingleWordRegex(functions),
        name: "variable.language.knownFunction.sqf",
    },
    commands: {
        match: getSingleWordRegex(commands),
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
        begin: `(?i)\\b(\\w+)(\\s*)(=)(\\s*)(${stringCompilerWords
            .concat("{")
            .join("|")})`,
        beginCaptures: {
            "1": { name: "support.function.sqf" },
            "3": { name: "keyword.operator.assignment.sqf" },
            "5": { name: "keyword.control.compileString.sqf" },
        },
        end: " |;|{|}|\t", // TODO: check if needed
        endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
        name: "meta.declaration.object.sqf",
    },
    "fnc-execute": {
        begin: `(\\s*)(${codeExecutors.join('|')})(\\s+)(\\w+|{)`, // TODO: check if s+ is needed
        beginCaptures: {
            "2": { name: "keyword.control.executeCode.sqf" },
            "4": { name: "support.function.sqf" },
        },
        end: " |;|{|}|(|)",
        endCaptures: { "1": { name: "keyword.operator.sqf" } },
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
		begin: '\"\"\"',
		end: '\"\"\"',
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
