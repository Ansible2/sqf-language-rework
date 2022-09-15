import { CompletionItemKind } from "vscode-languageserver/node";
import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
} from "../sqf.namespace";

const getBISWikiLink = (itemName: string): string => {
    return `https://community.bistudio.com/wiki/${itemName}`;
};

// TODO:  create a function to convert an SQFGrammarType to a
/// "kind" during compilation so that you do not have to add in a kind for precompiled syntax

// does not need to be alphabetical, however, you should still try to keep it as
const sqfCommandSyntaxes: IJSON<PreCompiledSQFItem> = {
    apply: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                // either an array of type any or a hashmap
                SQFDataType.Array,
                SQFDataType.HashMap,
            ],
            rightOperandTypes: SQFDataType.Code,
        },
        kind: CompletionItemKind.Method,
        grammarType: SQFGrammarType.ConrolStatement,
    },
    forEach: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.HashMap],
            leftOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ConrolStatement,
        kind: CompletionItemKind.Method,
    },
    or: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            rightOperandTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Boolean,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.ConditionOperator,
        kind: CompletionItemKind.Operator,
    },
    private: {
        grammarType: SQFGrammarType.AccessModifier,
        kind: CompletionItemKind.Keyword,
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                rightOperandTypes: SQFDataType.String,
                returnTypes: SQFDataType.Nothing,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                rightOperandTypes: SQFDataType.Variable,
                returnTypes: SQFDataType.Nothing,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                rightOperandTypes: {
                    types: SQFDataType.String,
                    operation: SQFArrayComparator.AnyOf,
                },
                returnTypes: SQFDataType.Nothing,
            },
        ],
    },
    ["%"]: {
        documentation: [
            "Remainder of *a* divided by *b*.",
            "```sqf",
            "4.5 % 3 // result is 1.5",
            "```",
        ],
        getDocLink: () => getBISWikiLink("a_%25_b"),
        grammarType: SQFGrammarType.ManipulativeOperator,
        kind: CompletionItemKind.Operator,
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            rightOperandTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            returnTypes: SQFDataType.Number,
        },
    },
    ["=="]: {
        getDocLink: () => getBISWikiLink("a_%3D%3D_b"),
        grammarType: SQFGrammarType.ComparisonOperator,
        kind: CompletionItemKind.Operator,
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            rightOperandTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Any,
            returnTypes: SQFDataType.Boolean,
        },
    },
    ["!"]: {
        documentation: "Returns the negation of a Boolean expression. This means `true` becomes `false` and vice versa.",
        getDocLink: () => getBISWikiLink("!_a"),
        grammarType: SQFGrammarType.ConditionOperator,
        kind: CompletionItemKind.Operator,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Boolean,
            returnTypes: SQFDataType.Boolean,
        },
    },
    not: {
        documentation: "Returns the negation of a Boolean expression. This means `true` becomes `false` and vice versa. (`not a` is exactly the same as `!a`.)",
        grammarType: SQFGrammarType.ConditionOperator,
        kind: CompletionItemKind.Operator,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Boolean,
            returnTypes: SQFDataType.Boolean,
        },
    },
    _this: {
        documentation:
            "Is used to make arguments of a script call (call, exec, execVM, spawn) visible and accessible to the script, also used in Event Handlers to pass appropriate params.",
        getDocLink: () => getBISWikiLink("Magic_Variables#this"),
        grammarType: SQFGrammarType.ReservedLiteral,
        kind: CompletionItemKind.Keyword,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Any,
        },
    },
    true: {
        documentation: "Always true",
        grammarType: SQFGrammarType.BooleanLiteral,
        kind: CompletionItemKind.Constant,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
    },
    configNull: {
        grammarType: SQFGrammarType.NullLiteral,
        kind: CompletionItemKind.Constant,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Config,
        },
    },
    select: {
        grammarType: SQFGrammarType.PropertyAccessor,
        kind: CompletionItemKind.Method,
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Number,
                returnTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Boolean,
                returnTypes: SQFDataType.Any,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.Config,
                rightOperandTypes: SQFDataType.Number,
                returnTypes: SQFDataType.Config,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: {
                    types: [SQFDataType.Number, SQFDataType.Number],
                    operation: SQFArrayComparator.Exact,
                },
                returnTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: {
                    types: [SQFDataType.Number, SQFDataType.Number],
                    operation: SQFArrayComparator.Exact,
                },
                returnTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: {
                    params: SQFDataType.Any,
                    returns: [SQFDataType.Boolean, SQFDataType.Nothing],
                },
                returnTypes: SQFDataType.Array,
            },
        ],
    },
    in: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Any,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Object,
                leftOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: [
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
                rightOperandTypes: SQFDataType.Location,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                // rightOperandTypes: SQFDataType.HashMapKey,
                leftOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.Number,
                    SQFDataType.String,
                    SQFDataType.Boolean,
                    SQFDataType.Code,
                    SQFDataType.Side,
                    SQFDataType.Config,
                    SQFDataType.Namespace,
                    SQFDataType.NaN,
                ],
                rightOperandTypes: SQFDataType.HashMap,
            },
        ],
        grammarType: SQFGrammarType.Command,
        kind: CompletionItemKind.Method,
    },
    params: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: {
                    types: [SQFDataType.Array, SQFDataType.String],
                    operation: SQFArrayComparator.AnyOf,
                },
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: {
                    types: [SQFDataType.Array, SQFDataType.String],
                    operation: SQFArrayComparator.AnyOf,
                },
                leftOperandTypes: SQFDataType.Any,
            },
        ],
        grammarType: SQFGrammarType.Command,
        kind: CompletionItemKind.Constructor,
    },
    getOrDefault: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.HashMap,
            rightOperandTypes: {
                types: [
                    SQFDataType.HashMapKey,
                    SQFDataType.Any,
                    SQFDataType.Boolean,
                ],
                operation: SQFArrayComparator.Exact,
            },
        },
        grammarType: SQFGrammarType.PropertyAccessor,
        kind: CompletionItemKind.Method,
    },
	fleeing: {
		syntaxes: {
			type: SQFSyntaxType.UnaryOperator,
			returnTypes: SQFDataType.Boolean,
			rightOperandTypes: SQFDataType.Object,
		},
		grammarType: SQFGrammarType.Command,
		kind: CompletionItemKind.Method,
	},
	allowFleeing: {
		syntaxes: {
			type: SQFSyntaxType.BinaryOperator,
			returnTypes: SQFDataType.Nothing,
			leftOperandTypes: [SQFDataType.Object,SQFDataType.Group],
			rightOperandTypes: SQFDataType.Number,
		},
		grammarType: SQFGrammarType.Command,
		kind: CompletionItemKind.Method,
	},
};


Object.keys(sqfCommandSyntaxes).forEach((command: string) => {
	const item = sqfCommandSyntaxes[command];
	if (!item.getDocLink) {
		item.getDocLink = getBISWikiLink;
	}

	if (!item.documentation) {
		const bisCommandsFolder = "./commands";
		item.documentation = bisCommandsFolder;
	}
});

export {sqfCommandSyntaxes};