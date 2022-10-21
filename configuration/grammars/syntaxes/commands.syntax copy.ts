import { CompletionItemKind } from "vscode-languageserver/node";
import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
    SQFArgument,
    SQFEffect,
} from "../sqf.namespace";
// ("{2,})([a-z0-9\s]*)("{2,})
// TODO: adjust documentation to just be a string url
// this function can jusut be called at paring time instead of compile time
const getBISWikiLink = (itemName: string): string => {
    const convertUrlMap: IJSON<string> = {
        "||": "a_or_b",
        "!": "!_a",
        "!=": "a_!=_b",
        "#": "a_hash_b",
        "%": "a_%25_b",
        "&&": "a_&&_b",
        "*": "a_*_b",
        "/": "a_/_b",
        ":": "a_:_b",
        "<": "a_less_b",
        ">": "a_greater_b",
        "<=": "a_less=_b",
        ">=": "a_greater=_b",
        "==": "a_==_b",
        ">>": "config_greater_greater_name",
        "^": "a_^_b",
        _this: "Magic_Variables#this",
    };

    if (itemName in Object.keys(convertUrlMap)) {
        itemName = convertUrlMap[itemName];
    }

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
        grammarType: SQFGrammarType.ControlStatement,
    },
    forEach: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.HashMap],
            leftOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    or: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            rightOperandTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Boolean,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.ConditionOperator,
    },
    private: {
        grammarType: SQFGrammarType.AccessModifier,
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
        grammarType: SQFGrammarType.ManipulativeOperator,
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            rightOperandTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            returnTypes: SQFDataType.Number,
        },
    },
    ["=="]: {
        grammarType: SQFGrammarType.ComparisonOperator,
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            rightOperandTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Any,
            returnTypes: SQFDataType.Boolean,
        },
    },
    ["!"]: {
        documentation:
            "Returns the negation of a Boolean expression. This means `true` becomes `false` and vice versa.",
        grammarType: SQFGrammarType.ConditionOperator,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Boolean,
            returnTypes: SQFDataType.Boolean,
        },
    },
    not: {
        documentation:
            "Returns the negation of a Boolean expression. This means `true` becomes `false` and vice versa. (`not a` is exactly the same as `!a`.)",
        grammarType: SQFGrammarType.ConditionOperator,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Boolean,
            returnTypes: SQFDataType.Boolean,
        },
    },
    _this: {
        documentation:
            "Is used to make arguments of a script call (call, exec, execVM, spawn) visible and accessible to the script, also used in Event Handlers to pass appropriate params.",
        grammarType: SQFGrammarType.ReservedLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Any,
        },
    },
    true: {
        documentation: "Always true",
        grammarType: SQFGrammarType.BooleanLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
    },
    configNull: {
        grammarType: SQFGrammarType.NullLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Config,
        },
    },
    select: {
        grammarType: SQFGrammarType.PropertyAccessor,
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
                    codeReturnTypes: [SQFDataType.Boolean, SQFDataType.Nothing],
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
    },
    fleeing: {
        argument: SQFArgument.GLOBAL,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    allowFleeing: {
        argument: SQFArgument.LOCAL,
        effect: SQFEffect.GLOBAL,
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ["#"]: {
        documentation: [
            "Selects an element from an array, same as select command for arrays, but has higher precedence",
            "**NOTE:** # has higher precedence than all binary operators, but it has lower precedence than unary operators",
            "```sqf",
            "[1,2,3,4] # 2;	// result is 3",
            "```",
        ],
        grammarType: SQFGrammarType.PropertyAccessor,
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
            returnTypes: SQFDataType.Any,
        },
    },
    abs: {
        grammarType: SQFGrammarType.Command,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Number,
            returnTypes: SQFDataType.Number,
        },
    },
    accTime: {
        grammarType: SQFGrammarType.Command,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Number,
            returnTypes: SQFDataType.Number,
        },
    },
    acos: {
        grammarType: SQFGrammarType.Command,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Number,
            returnTypes: SQFDataType.Number,
        },
    },
    action: {
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
                returnTypes: SQFDataType.Nothing,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                rightOperandTypes: SQFDataType.Array,
                returnTypes: SQFDataType.Nothing,
            },
        ],
    },
    actionIDs: {
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Object,
            returnTypes: {
                types: SQFDataType.Number,
                operation: SQFArrayComparator.AnyOf,
            },
        },
    },
    actionKeys: {
        grammarType: SQFGrammarType.Command,
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: {
                    operation: SQFArrayComparator.AnyOf,
                    types: SQFDataType.Number,
                },
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: {
                    operation: SQFArrayComparator.AnyOf,
                    types: SQFDataType.String,
                },
                rightOperandTypes: {
                    operation: SQFArrayComparator.Exact,
                    types: SQFDataType.String,
                },
            },
        ],
    },
    compile: {
        grammarType: SQFGrammarType.StringCompiler,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.String,
        },
    },
    call: {
        grammarType: SQFGrammarType.CodeExecutor,
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Any,
                rightOperandTypes: SQFDataType.Code,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                rightOperandTypes: SQFDataType.Code,
                leftOperandTypes: SQFDataType.Any,
            },
        ],
    },
	execVM: {
		grammarType: SQFGrammarType.FileExecutor,
		syntaxes: [
			{
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.ScriptHandle,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.ScriptHandle,
                rightOperandTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.Any,
            },
		]
	}
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

export { sqfCommandSyntaxes };
