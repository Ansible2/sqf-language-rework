import { IRawGrammar } from "vscode-textmate/release/types";
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
Object.entries(sqfItems).forEach(item => {
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


export const sqfGrammar: IRawGrammar = {
    scopeName: "source.sqf",
    fileTypes: ["sqf"],
    name: "sqf",
    patterns: [{ include: "#expression" }],
    repository: {
        $base: {},
        $self: {},
        "access-modifier": {
            match: `\\s*(?i)(${accessModifiers.join('|')})\\b`,
            name: "storage.modifier.sqf",
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
        "assignment-operator": {
            match: "=",
            name: "keyword.operator.assignment.sqf",
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
            patterns: [
                { include: "#expression" },
            ],
        },
        "boolean-literal": {
            match: `(\\s*)(${booleanLiterals.join('|')})\\b`,
            name: "constant.language.boolean.sqf",
        },
        comment: {
            name: "comment.sqf",
            patterns: [
                { include: "#comment-block" },
                { include: "#comment-line" },
            ],
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
        "comparison-operator": {
            match: `${comparisonOperators.join('|')}`,
            name: "keyword.operator.comparison.sqf",
        },
        "condition-operator": {
            // match: "!|&&|\\|\\||:|([^A-Za-z0-9]|\\b)and([^A-Za-z0-9]|\\b)|([^A-Za-z0-9])or([^A-Za-z0-9])",
			match: `${conditionOperators.join('|')}`,
            name: "keyword.operator.condition.sqf",
        },
        "control-statement": {
            match: `\\s*(?i)(${controlStatements.join('|')})\\b`,
            name: "keyword.control.sqf",
        },
        "decl-block": {
            begin: "\\{",
            beginCaptures: { "0": { name: "meta.brace.curly.sqf" } },
            end: "\\}",
            endCaptures: { "0": { name: "meta.brace.curly.sqf" } },
            name: "meta.decl.block.sqf",
            patterns: [{ include: "#expression" }],
        },
        // "vObject-statements": {
        //     match: "\\s*(?i)(player|cursorTarget|cursorObject)\\b",
        //     name: "variable.language.vobject.sqf",
        // },
        functions: {
            match: `\\s*(?i)(${functions.join('|')})\\b`,
            name: "variable.language.vobject.sqf",
        },
        commands: {
            match: `\\s*(?i)(${commands.join('|')})\\b`,
            name: "support.function.sqf",
        },
        other: {
            name: "meta.expression.sqf",
            patterns: [
                { include: "#access-modifier" },
                { include: "#property-accessor" },
            ],
        },
        expression: {
            name: "meta.expression.sqf",
            patterns: [
                { include: "#string" },
                { include: "#comment" },
                { include: "#literal" },
                { include: "#paren-expression" },
                { include: "#block" },
                { include: "#comparison-operator" },
                { include: "#condition-operator" },
                { include: "#manipulative-operator" },
                { include: "#assignment-operator" },
                { include: "#control-statement" },
                // { include: "#code-managers" },
                { include: "#statements" },
                { include: "#other" },
                { include: "#declaration" },
            ],
        },

        statements: {
            name: "meta.expression.sqf",
            patterns: [
                // { include: "#vObject-statements" },
                // { include: "#OFP" },
                // { include: "#ARMA" },
                // { include: "#ARMA2" },
                // { include: "#ARMA3" },
				{ include: "#commands" },
				{ include: "#functions" },
            ],
        },
        declaration: {
            name: "meta.declaration.sqf",
            patterns: [
                { include: "#fnc-call" },
                { include: "#fnc-declaration" },
                { include: "#fnc-declaration-compile" },
                { include: "#var-declaration-priv" },
                { include: "#var-declaration" },
                { include: "#var-call-priv" },
                { include: "#var-call" },
            ],
        },
        "var-declaration": {
            begin: "([_\\w]+)(\\s*)(=+)",
            beginCaptures: {
                "1": { name: "variable.other.sqf" },
                "3": { name: "keyword.operator.assignment.sqf" },
            },
            end: " |;|{|}|\t|=|(|)|[|]",
            endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
            name: "meta.declaration.object.sqf",
        },
        "var-declaration-priv": {
            begin: "(_+)([_\\w]+)(\\s*)(=+)",
            beginCaptures: {
                "1": { name: "variable.other.private.sqf" },
                "2": { name: "variable.other.private.sqf" },
                "4": { name: "keyword.operator.assignment.sqf" },
            },
            end: " |;|{|}|\t|=|(|)|[|]",
            endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
            name: "meta.declaration.object.sqf",
        },
        "fnc-declaration": {
            begin: "(\\s*)([_\\w]+)(\\s*)(=)(\\s*)({)",
            beginCaptures: {
                "2": { name: "support.function.sqf" },
                "4": { name: "keyword.operator.assignment.sqf" },
                "6": { name: "meta.brace.curly.sqf" },
            },
            end: " |;|{|}|\t",
            endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
            name: "meta.declaration.object.sqf",
        },
        "fnc-declaration-compile": {
            begin: `(\\s*)(_\\w+)(\\s*)(=)(\\s*)(${stringCompiler.join('|')})((\\"([\\s\\S]*)\\")|(\\'([\\s\\S]*)\\'))`,
            beginCaptures: {
                "2": { name: "support.function.sqf" },
                "4": { name: "keyword.operator.assignment.sqf" },
                "6": { name: "meta.function-call.sqf" },
                "10": { name: "meta.brace.curly.sqf" },
            },
            end: " |;|{|}|\t",
            endCaptures: { "1": { name: "meta.brace.curly.sqf" } },
            name: "meta.declaration.object.sqf",
        },
        // "code-managers": {
        //     match: "(\\s*)(compile|compileFinal|exec|execFSM|execVM|callExtension)\\b",
        //     name: "meta.function-call.sqf",
        // },
        "fnc-call": {
            begin: "(\\s*)(call|spawn)(\\s+)(\\w+|{|\\()",
            beginCaptures: {
                "2": { name: "keyword.control.sqf" },
                "4": { name: "support.function.sqf" },
            },
            end: " |;|{|}|(|)",
            endCaptures: { "1": { name: "keyword.operator.sqf" } },
            name: "support.function.sqf",
        },
        "var-call": {
            begin: "(\\s*)(\\w+)([^\\w]|\\s+)",
            beginCaptures: { "2": { name: "variable.other.sqf" } },
            end: " |;|{|}|(|)|[|]",
            endCaptures: { "1": { name: "keyword.operator.sqf" } },
            name: "meta.declaration.object.sqf",
        },
        "var-call-priv": {
            match: "(\\s*)(_+\\w+)",
            name: "variable.other.private.sqf",
        },
        "indexer-parameter": {
            captures: { "1": { name: "variable.parameter.sqf" } },
            match: "([a-zA-Z_$][\\w$]*)(?=\\:)",
            name: "meta.indexer.parameter.sqf",
        },
        literal: {
            name: "literal.sqf",
            patterns: [
                { include: "#numeric-literal" },
                { include: "#boolean-literal" },
                { include: "#null-literal" },
                { include: "#array-literal" },
                { include: "#reserved-literal" },
            ],
        },
        "manipulative-operator": {
            match: `${manipulativeOperators.join('|')}`,
            name: "keyword.operator.manipulative.sqf",
        },
        "null-literal": {
            // match: "\\b(nil|controlNull|displayNull|diaryRecordNull|grpNull|locationNull|netObjNull|objNull|scriptNull|taskNull|teamMemberNull|configNull)\\b",
            match: `\\b(${nullLiterals.join('|')})\\b`,
            name: "constant.language.null.sqf",
        },
        "numeric-literal": {
            match: "\\s*(?<=[^$])((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b",
            name: "constant.numeric.sqf",
        },
        "paren-expression": {
            begin: "\\(",
            beginCaptures: { "0": { name: "meta.brace.paren.sqf" } },
            end: "\\)",
            endCaptures: { "0": { name: "meta.brace.paren.sqf" } },
            patterns: [{ include: "#expression" }],
        },
        "property-accessor": {
            // match: "\\s*(?i)(get|set|select|getOrDefault|#|insert)\\b",
            match: `\\s*(?i)(${propertyAccessors.join('|')})\\b`,
            name: "storage.type.property.sqf",
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
        string: {
            name: "string.sqf",
            patterns: [
                { include: "#qstring-single" },
                { include: "#qstring-double" },
            ],
        },
        "reserved-literal": {
            // match: `\\s*(?i)(this|_this|_x|_y|_forEachIndex|_exception|_thisScript|_thisFSM|thisList|thisTrigger|west|east|resistance|civilian|independent|blufor|opfor)\\b`,
            match: `\\s*(?i)(${reservedLiterals.join('|')})\\b`,
            name: "variable.language.reserved.sqf",
        },
    },
};
