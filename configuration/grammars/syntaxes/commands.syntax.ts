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
    _this: {
        documentation:
            "Is used to make arguments of a script call (call, exec, execVM, spawn) visible and accessible to the script, also used in Event Handlers to pass appropriate params.",
        grammarType: SQFGrammarType.ReservedLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Any,
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
    "#": {
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

    numberOfEnginesRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctHeaderControls: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctHeaderCount: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctFindRowHeader: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctRowCount: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctClear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctCurSel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctFindHeaderRows: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctAddRow: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctSetCurSel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctSetRowTemplate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctAddHeader: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctRemoveRows: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctRemoveHeaders: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctRowControls: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctSetHeaderTemplate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctSetData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isMultiplayerSolo: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    modelToWorldVisual: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetPictureColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetPictureRightColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    addRating: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    backpackContainer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    attachObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },

    attachedTo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    camPrepareDive: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addUniform: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camPrepareFocus: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    buldozer_isEnabledRoadDiag: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    airplaneThrottle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    allSimpleObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    camConstuctionSetParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    camPrepareBank: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addPrimaryWeaponItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    addWeaponTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    addItemPool: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    camDestroy: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ammo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    attachedObject: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    ASLToATL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.PositionASL,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignAsGunner: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addBackpackGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camSetTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    allowDamage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    camPrepareFovRange: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    blufor: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    addSecondaryWeaponItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    allMissionObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    addOwnedMine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    addBackpackCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    boundingCenter: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    addScoreSide: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    addGoggles: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    animationState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    cameraEffect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    allSites: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    admin: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    agent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMagazines: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addItemToBackpack: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addWeaponItem: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    allGroups: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    actionKeysNames: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    allowSprint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    callExtension: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    boundingBox: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    camCommand: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    addTeamMember: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    camPreload: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addHeadgear: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    attackEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    cameraEffectEnableHUD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedDriver: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    aimedAtTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    acos: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ATLToASL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionATL],
        },
        grammarType: SQFGrammarType.Command,
    },
    assignCurator: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    camCreate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    addWeaponGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camSetDive: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    camUseNVG: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    addTorque: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    add3DENLayer: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    buildingExit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    camSetFovRange: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    addHandgunItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    addItemCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addGroupIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    assignToAirport: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
    },
    addVest: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camPreloaded: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    actionParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    allDisplays: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    camSetRelPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    boundingBoxReal: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    animateSource: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    backpackItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    addWeaponPool: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropeDetach: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    apply: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.HashMap],
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    backpackSpaceFor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMagazineAmmoCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    animationNames: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    allTurrets: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    camSetFocus: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    binocular: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    armoryPoints: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addSwitchableUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMagazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    addMagazineCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    AISFinishHeal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    aimPos: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    assignItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addScore: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    allMines: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropeDestroy: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    backpackMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    breakTo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    allow3DMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    allowCuratorLogicIgnoreAreas: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    bezierInterpolation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position3d],
        },
        grammarType: SQFGrammarType.Command,
    },
    actionKeysImages: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.StructuredText,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.StructuredText,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    addWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    addCuratorPoints: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    behaviour: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    assignedCommander: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    UAVControl: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    addForce: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    allowFleeing: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    agents: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    cadetMode: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    camSetFov: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    addPlayerScores: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    addEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Code, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    asin: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    animate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addLiveStats: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    camSetBank: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    attachTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    allUnitsUAV: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    addBackpack: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    airDensityCurveRTD: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMagazineTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    addMenu: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    addToRemainsCollector: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    assignAsCargoIndex: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    allDead: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    airDensityRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    allControls: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Display, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    accTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    camCommitted: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    HUDMovementLevels: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    camPrepareDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    camCommit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    allowDammage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    camPrepareRelPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    buttonAction: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    airportSide: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Side,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
    },
    allowCrewInImmobile: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    addWeaponCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camSetPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    addWeaponWithAttachmentsCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addPublicVariableEventHandler: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Code,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Code,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    animationSourcePhase: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    addItemToUniform: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    add3DENConnection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.EdenEntity,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    buildingPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    buttonSetAction: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    addMPEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    calculatePlayerVisibilityByFriendly: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteSite: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    allActiveTitleEffects: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    camPrepareFov: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    allCutLayers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    activateAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    briefingName: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    addItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camCommitPrepared: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    assignAsTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignAsCommander: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camPrepareTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Position, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
    },
    backpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    and: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.ConditionOperator,
    },
    atan2: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMusicEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Number,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    assignedItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    all3DENEntities: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    addCamShake: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    allAirports: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    activatedAddons: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedGunner: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    camTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    alive: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    benchmark: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addCuratorCameraArea: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    cameraInterest: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    activateKey: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isFlashlightOn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    collectiveRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    abs: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    actionKeysNamesArray: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    addBackpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    atg: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addMenuItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    loadAbs: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    allUnits: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    createSite: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Position,
        },
        grammarType: SQFGrammarType.Command,
    },
    animatePylon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMagazinePool: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignAsCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    animateDoor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    allowFileOperations: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    allowGetIn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    customChat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    allVariables: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.TeamMember,
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Task,
                SQFDataType.Location,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    action: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    addWeapon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    breakOut: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFDataType.Any,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ASLToAGL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.PositionAGL,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
    },
    handgunItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    camSetDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    WFSideText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Side,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    linkItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    camPreparePos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    allDeadMen: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    addonFiles: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    atan: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    AGLToASL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.PositionASL,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
    },
    addWeaponWithAttachmentsCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    addVehicle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    cameraOn: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedTeam: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    addEditorObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableAutoTrimRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    animationPhase: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    backpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    goggles: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    assignTeam: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    objectFromNetId: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    addItemToVest: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    animateBay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    assignAsDriver: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    attachedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    addResources: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    removeHeadgear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    addItemCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    addCuratorEditingArea: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    addMagazine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    addCuratorAddons: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    uniform: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    assignedVehicleRole: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ammoOnPylon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    addCuratorEditableObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    allAddonsInfo: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    rainbow: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    stance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    allMapMarkers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    velocityModelSpace: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearItemCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setRainbow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    removeGoggles: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    primaryWeaponItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    freeLook: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    headgear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setParticleClass: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setActualCollectiveRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCompassOscillation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    getBleedingRemaining: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLightFlareSize: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    loadBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    uniformItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPosASLW: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    shownArtilleryComputer: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setRotorBrakeRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeItems: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    removeVest: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    currentMagazineDetail: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    opfor: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    removeAllMusicEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointName: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Waypoint,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    particlesQuality: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    debriefingText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vest: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    profileName: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlModel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontHeightH2: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getFatigue: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlTextHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlHTMLLoaded: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    createDiaryLink: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getArtilleryETA: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlSetText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    cheatsEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    createSoundSource: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    ctrlSetFontHeightH6: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    countSide: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Group,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setLightnings: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponLowered: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    swimInDepth: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetPositionX: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCustomWeightRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontHeight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    groupFromNetId: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    clear3DENInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.EdenEntity],
        },
        grammarType: SQFGrammarType.Command,
    },
    getDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlVisible: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    independent: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    ctrlSetFontHeightH4: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    createGroup: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Group,
                rightOperandTypes: SQFDataType.Side,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Group,
                leftOperandTypes: SQFDataType.Side,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    clearBackpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearWeaponCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    synchronizedWaypoints: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    canSlingLoad: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    buldozer_reloadOperMap: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    createMenu: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    sendAUMessage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllActions: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    createMissionDisplay: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Display,
                leftOperandTypes: SQFDataType.Display,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Display,
                leftOperandTypes: SQFDataType.Display,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapScreenToWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    simulWeatherSync: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    configHierarchy: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    campaignConfigFile: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    createLocation: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Location,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Location,
                rightOperandTypes: SQFDataType.Location,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    className: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    configFile: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlParentControlsGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetAngle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctrlChecked: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Control,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ctrlIDC: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlParent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlTextColor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontSecondary: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlSetFontH3B: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFont: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    cbChecked: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    canAddItemToBackpack: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlFade: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    vestItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapAnimCommit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    closeOverlay: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLightDayLight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setLightFlareMaxDistance: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    compileFinal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.StringCompiler,
    },
    ctrlSetAutoScrollSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    createMarkerLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    drawIcon3D: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    canAddItemToUniform: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapAnimDone: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    saveJoysticks: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH4: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableCollisionWith: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getArtilleryComputerSettings: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableCaustics: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    handgunMagazine: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlSetTextColorSecondary: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAmmo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    createDiaryRecord: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.DiaryRecord,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.DiaryRecord,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctrlSetAutoScrollDelay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    cos: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    countType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setWaves: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    nameSound: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    createVehicle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.String,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    itemCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    removeAllContainers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    ctrlSetFontHeightH3: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlAutoScrollSpeed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlAnimationPhaseModel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    configName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    cancelSimpleTaskDestination: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    inRangeOfArtillery: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Position,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setSystemOfUnits: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlMapCursor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH4B: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH1B: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isSteamMission: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getFuelCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    cameraView: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    simulInClouds: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Position,
        },
        grammarType: SQFGrammarType.Command,
    },
    getConnectedUAV: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    checkVisibility: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
    },
    canUnloadInCombat: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    createTeam: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.TeamMember,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isUAVConnected: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    curatorCameraAreaCeiling: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    createMarker: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    magazinesDetail: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    compile: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.StringCompiler,
    },
    loadVest: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLocalWindParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetTextSelection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeHandgunItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    removeAllMissionEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setMusicEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setObjectMaterial: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    getArtilleryAmmo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isBleeding: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDebriefingText: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontHeightSecondary: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlSetTooltipColorText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setHorizonParallaxCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetBackgroundColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    setSpeaker: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    commandChat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Side],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    ctrlMapWorldToScreen: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    controlNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    connectTerminalToUAV: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    disableDebriefingStats: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandStop: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    curatorAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearAllItemsFromBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    createMPCampaignDisplay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    completedFSM: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlIDD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponsItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFocus: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandFSM: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setObjectViewDistance: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlShow: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setWindForce: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlAutoScrollDelay: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponAccessories: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isIRLaserOn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH6B: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH5: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    collect3DENHistory: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Code,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Code,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetActiveColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    tvExpand: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctrlAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    createSimpleTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Task,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    canSuspend: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    isLocalized: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isTutHintsEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMass: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    canTriggerDynamicSimulation: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearBackpackCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    enableCollisionWith: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    createAgent: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    ctrlCommit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvClear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    createGuardedPoint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeItemFromBackpack: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    hideObjectGlobal: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    removeAllAssignedItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    nearSupplies: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.PositionAGL,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.PositionAGL,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    tvValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    commandGetOut: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    crew: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setShadowDistance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlSetForegroundColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    itemsWithMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    windDir: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    everyBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    configClasses: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH2B: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    create3DENEntity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.EdenEntity,
            leftOperandTypes: [SQFDataType.String, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH2: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    difficulty: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontHeightH1: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    clearOverlay: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    createCenter: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    ctrlCommitted: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    load: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    uniformContainer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    commitOverlay: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    fogParams: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH3: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetTooltip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointTimeoutCurrent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDetailMapBlendPars: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setDefaultCamera: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    netId: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetPixelPrecision: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    curatorCameraArea: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetTooltip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    simulCloudOcclusion: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Position,
            rightOperandTypes: SQFDataType.Position,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlScrollValues: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    removePrimaryWeaponItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    gusts: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ppEffectForceInNVG: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    comment: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllCuratorEditingAreas: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    ctrlSetPositionY: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapAnimClear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    clearGroupIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    simulCloudDensity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Position,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointLoiterRadius: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Waypoint,
        },
        grammarType: SQFGrammarType.Command,
    },
    getBurningValue: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    canAdd: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    civilian: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    ctrlSetAutoScrollRewind: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetTextColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllCuratorAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    collapseObjectTree: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    clear3DENAttribute: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.EdenEntity,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    resetSubgroupDirection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlScale: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlClassName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWantedRPMRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlTextSecondary: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setNameSound: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    channelEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFade: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeCuratorAddons: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    removeAllHandgunItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    createMine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetModelDirAndUp: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapMouseOver: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    createDialog: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Display,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlDelete: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    skillFinal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlRemoveAllEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetScale: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearRadio: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    shownCuratorCompass: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH6: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlEnable: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    curatorSelected: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setSimulWeatherLayers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    uniformMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontPB: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getRepairCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlTextSelection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    create3DENComposition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Config,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    commandRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Side],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    ctValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlCreate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Control,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    incapacitatedState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearMagazinePool: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetTextSecondary: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCuratorCoef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    setVehicleAmmoDef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    actionName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlTextWidth: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    confirmSensorTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    clientOwner: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandWatch: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Object,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getDLCs: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    copyWaypoints: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandingMenu: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlActivate: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    createGearDialog: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandFollow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    controlsGroupCtrl: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Control,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontP: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    clearMagazineCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    curatorCamera: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    configProperties: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetModelScale: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    showUAVFeed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointLoiterType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Waypoint,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUserActionText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.StructuredText],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    commander: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlShown: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownUAVFeed: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentMagazineDetailTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetModel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    createVehicleCrew: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlAnimateModel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointLoiterRadius: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Waypoint,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    closeDialog: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctrlSetStructuredText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.StructuredText,
        },
        grammarType: SQFGrammarType.Command,
    },
    canStand: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    cbSetChecked: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearMagazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    createSimpleObject: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    countUnknown: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    clearItemCargoGlobal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    canMove: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    createTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Task,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    captive: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    combatMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Group, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    forceWeaponFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    createDisplay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Display,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectWeaponTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontH1: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlAddEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    unassignCurator: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    mineActive: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lightnings: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    createUnit: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: SQFDataType.Group,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    ctrlRemoveEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMusicEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    createVehicleLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    enableDebriefingStats: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    curatorEditingArea: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isTouchingGround: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlModelDirAndUp: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    everyContainer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setObjectTextureGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    canFire: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlSetPositionH: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    timeMultiplier: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandSuppressiveFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionASL,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    clearWeaponPool: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    lockCameraTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    removeAllCuratorCameraAreas: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    weaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    catch: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Exception,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    curatorEditingAreaType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ceil: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    countFriendly: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getPosWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    tvData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    copyFromClipboard: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    case: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.SwitchType,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    ctrlSetTooltipColorBox: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    getOxygenRemaining: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetFontHeightH5: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearItemPool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetTooltipColorShade: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazinesDetailVest: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    checkAIFeature: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    visibleGPS: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    curatorEditableObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    count: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.String,
                    SQFDataType.Config,
                    SQFDataType.HashMap,
                ],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: [SQFDataType.Code, SQFDataType.Boolean],
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    commandTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    enableDiagLegend: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapScale: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    copyToClipboard: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    getAssignedCuratorLogic: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    createDiarySubject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctrlSetFontH5B: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    countEnemy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ctrlText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlAutoScrollRewind: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setParticleFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    composeText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.StructuredText,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.StructuredText,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    closeDisplay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    synchronizedTriggers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Waypoint,
        },
        grammarType: SQFGrammarType.Command,
    },
    getHit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    drawLine3D: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    captiveNum: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    canVehicleCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlModelScale: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteVehicleCrew: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    reverse: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetPositionW: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLightAttenuation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    ctSetValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetScrollValues: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    commandMove: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    forceRespawn: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    firstBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapAnimAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    waves: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeWeaponGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setCuratorEditingAreaType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    vectorFromTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorMagnitudeSqr: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponsItemsCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteRange: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    hmd: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getPosVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    vectorAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    canAddItemToVest: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    tvText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetCurSel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    setCollisionLight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isLightOn: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ropeUnwind: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getShadowDistance: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllPrimaryWeaponItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setLightUseFlare: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    getAmmoCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ropeEndPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    curatorWaypointCost: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPosASLW: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    magazinesDetailBackpack: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    isUAVConnectable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    objectCurators: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteAt: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFDataType.HashMap,
                rightOperandTypes: SQFDataType.HashMapKey,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    vestContainer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isCollisionLightOn: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setWindStr: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    allCurators: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    netObjNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    tvDelete: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    enginesTorqueRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isAbleToBreathe: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableSatNormalOnDetail: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorCrossProduct: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isUniformAllowed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    vectorNormalized: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    playableSlotsNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUnloadInCombat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setTimeMultiplier: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    currentWeaponTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    curatorCoef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownChat: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteCollection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    fogForecast: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    findEmptyPositionReady: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPilotLight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isAutonomous: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    effectiveCommander: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    doTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    evalObjectArgument: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    queryItemsPool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorDistanceSqr: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isWeaponRested: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    doFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getPersonUsedDLCs: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    displayRemoveEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    slingLoadAssistantShown: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    doorPhase: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectDLC: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setLightIntensity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    fire: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    flyInHeight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    deleteMarker: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    serverCommandExecutable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMass: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    displayNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    removeBackpackGlobal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    humidity: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    else: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    enableAutoStartUpRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    showCuratorCompass: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableMimics: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableEnvironment: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    magazinesAmmoFull: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    enginesIsOnRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    getItemCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    forceWeatherChange: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    diag_tickTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    distance2D: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ropeAttachedTo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteEditorObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    debugLog: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawLine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    detectedMines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteMarkerLocal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    cutRsc: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.String, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    estimatedEndServerTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    edit3DENMissionAttributes: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeWeaponTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    enableAudioFeature: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableMapIndicators: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    fadeSound: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setSpeech: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableSimulationGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    diag_frameNo: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_fpsMin: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    current3DENOperation: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeItemFromUniform: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    enginesRpmRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableRemoteSensors: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    execVM: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.ScriptHandle,
                leftOperandTypes: SQFDataType.Any,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.ScriptHandle,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.FileExecutor,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    delete3DENEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.EdenEntity],
        },
        grammarType: SQFGrammarType.Command,
    },
    dialog: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setMagazineTurretAmmo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    fadeRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ropeCut: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    dynamicSimulationDistance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    didJIPOwner: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    findCover: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    doStop: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    drawLocation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvCollapse: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    underwater: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    worldToModelVisual: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    directSay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    removeAllItemsWithMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableSimulation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    curatorPoints: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    east: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    removeCuratorEditableObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    do3DENAction: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    displayParent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_activeSQFScripts: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    fleeing: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    flag: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    enableDynamicSimulationSystem: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPosASLVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    findEmptyPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    echo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorMultiply: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setBleedingRemaining: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    configSourceMod: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    displayAddEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawTriangle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentThrowable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    allPlayers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    cutText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.String, SQFDataType.Number],
            rightOperandTypes: [
                SQFDataType.Boolean,
                SQFDataType.StructuredText,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    curatorMouseOver: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    doMove: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isCopilotEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isStreamFriendlyUIEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    failMission: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorDotProduct: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    cutObj: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: [SQFDataType.String, SQFDataType.Number],
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    doSuppressiveFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionASL,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getPosATLVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    currentTasks: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    enablePersonTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableSaving: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    enableStamina: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    eyePos: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    default: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    removeUniform: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    finite: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceAddUniform: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    isObjectHidden: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    dissolveTeam: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    direction: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Location],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    leaderboardGetRows: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropeAttachEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCuratorWaypointCost: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    lbSetPictureColorSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    enableUAVConnectability: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    isBurning: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    floor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    flagOwner: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    enableDynamicSimulation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    enginesPowerRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getCargoIndex: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    eyeDirection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    detach: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    roleDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableTeamSwitch: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableReload: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    displayRemoveAllEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropeAttachedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeCuratorCameraArea: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    unlinkItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    flagAnimationPhase: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    buldozer_loadNewRoads: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    face: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableCopilot: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    exportJIPMessages: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setGroupOwner: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    enableRadio: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ctrlSetChecked: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    endMission: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    deleteTeam: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    unitAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    distanceSqr: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Position],
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    getDirVisual: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
                rightOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    fillWeaponsFromPool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isEqualTypeArray: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMissionConfigValue: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Any,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    emptyPositions: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    do: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: [
                SQFDataType.WhileType,
                SQFDataType.WithType,
                SQFDataType.ForType,
                SQFDataType.SwitchType,
            ],
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    turretOwner: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    get3DENGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawRectangle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazinesDetailUniform: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    groupOwner: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    groupId: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isEqualTypeAny: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    fadeMusic: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    expectedDestination: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    diag_activeScripts: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableAI: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    visibleWatch: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    exit: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    disableNVGEquipment: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    findIf: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.Command,
    },
    showChat: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    findNearestEnemy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    setStaminaScheme: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    for: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.ForType,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.ForType,
                leftOperandTypes: SQFDataType.Code,
                rightOperandTypes: SQFDataType.Code,
            },
        ],
        grammarType: SQFGrammarType.ControlStatement,
    },
    setSlingLoad: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    displayCtrl: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Control,
                leftOperandTypes: SQFDataType.Display,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    difficultyEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    editorSetEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    customRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    ropeLength: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setGusts: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setHitIndex: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    diag_log: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    findDisplay: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableUAVConnectability: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setStamina: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    arrayIntersect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectRandom: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_deltaTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointsEnabledUAV: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawEllipse: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentWeaponMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isWeaponDeployed: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setObjectMaterialGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    lineIntersectsObjs: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isEqualType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    find: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Any,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    deleteIdentity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    displaySetEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    finishMissionInit: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    driver: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    remove3DENConnection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.EdenEntity,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENMouseOver: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_scope: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableSerialization: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    fadeSpeech: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    isEqualTypeAll: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    difficultyEnabledRTD: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    doGetOut: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    splitString: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorDistance: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Position3d, SQFDataType.Position2d],
            rightOperandTypes: [SQFDataType.Position3d, SQFDataType.Position2d],
        },
        grammarType: SQFGrammarType.Command,
    },
    vestMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableConversation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    is3DEN: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    dynamicSimulationEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
    },
    currentMagazineTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    objectParent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENLinesVisible: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentVisionMode: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    cursorTarget: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENEntityID: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.EdenEntity,
        },
        grammarType: SQFGrammarType.Command,
    },
    getHitIndex: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setHUDMovementLevels: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    date: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    playSound3D: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    set3DENGrid: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_codePerformance: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    exp: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawLink: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENEntity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.EdenEntity,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableAIFeature: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.String, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    configSourceModList: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableUserInput: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    enableIRLasers: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    diag_fps: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENMissionAttribute: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    doFSM: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    wingsForcesRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableVehicleSensor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    difficultyOption: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteCenter: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    getObjectType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    customWaypointPosition: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteLocation: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableCamShake: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    fog: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableVehicleCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    move3DENCamera: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Position,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableSentences: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    forEachMember: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    setGroupIdGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    set3DENAttribute: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.EdenEntity,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteStatus: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setCuratorCameraAreaCeiling: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    engineOn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    execEditorScript: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAssignedCuratorUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentCommand: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    flagSide: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    enableRopeAttach: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    currentTask: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ppEffectEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    estimatedTimeLeft: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    enableAimPrecision: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    environmentEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    pitch: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentZeroing: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    diag_activeMissionFSMs: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    deg: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropeAttachTo: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    exec: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.FileExecutor,
    },
    dateToNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    pixelGrid: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addMissionEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    editObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    linearConversion: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    primaryWeaponMagazine: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    diarySubjectExists: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    append: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableInfoPanelComponent: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    deleteWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    enableEngineArtillery: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    curatorRegisteredObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    doFollow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setRandomLip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    drop: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.ParticleArray,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    removeItemFromVest: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    getObjectMaterials: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    findEditorObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetPictureColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    deleteGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    dynamicSimulationSystemEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    isFilePatchingEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    debugFSM: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    distributionRegion: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    isInRemainsCollector: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    currentPilot: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    profileNameSteam: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    decayGraphValues: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    cursorObject: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteGroupWhenEmpty: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setFatigue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    currentMuzzle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawArrow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getSlingLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    inPolygon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Position3d],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position3d],
        },
        grammarType: SQFGrammarType.Command,
    },
    execFSM: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Any,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.FileExecutor,
    },
    currentMagazine: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    damage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    flagTexture: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    endLoadingScreen: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    set3DENMissionAttributes: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    forEach: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: [SQFDataType.String, SQFDataType.Code],
                rightOperandTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFDataType.Code,
                rightOperandTypes: SQFDataType.HashMap,
            },
        ],
        grammarType: SQFGrammarType.ControlStatement,
    },
    vehicleCargoEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    fireAtTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorDiff: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENLayer: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.EdenEntity,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    endl: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectViewDistance: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    doWatch: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Object,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isObjectRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    handgunWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    tvSetPictureRightColorDisabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    disableAI: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    sideAmbientLife: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveInAny: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    serverName: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    moonPhase: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteResources: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    tvSetPictureColorDisabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    disableTIEquipment: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    openYoutubeVideo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableEndDialog: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    faction: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    enableAttack: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    cutFadeOut: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    deActivateKey: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUnitLoadout: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Config,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    dynamicSimulationDistanceCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    exitWith: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.IfType,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.Command,
    },
    didJIP: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    distance: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.PositionAGL,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.PositionAGL,
                    SQFDataType.Position2d,
                ],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: [
                    SQFDataType.Location,
                    SQFDataType.Array,
                    SQFDataType.Position,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: [
                    SQFDataType.Location,
                    SQFDataType.Array,
                    SQFDataType.Position,
                    SQFDataType.Position2d,
                ],
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    soldierMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPosWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    get3DENCamera: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableFatigue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    ropes: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownScoretable: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableStressDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    getPlayerChannel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    missionDifficulty: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_activeSQSScripts: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    remoteExecCall: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointForceBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Waypoint,
                SQFDataType.Group,
                SQFDataType.Number,
            ],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    save3DENInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.EdenEntity],
        },
        grammarType: SQFGrammarType.Command,
    },
    missionVersion: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENAttributes: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.EdenEntity],
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setSimpleTaskAlwaysVisible: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setWindDir: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.Position2d],
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    tvTooltip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    tvCount: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    configSourceAddonList: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllSoundControllers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetPictureRightColorSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorDirVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    param: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Any],
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    isEqualTypeParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPlayerScores: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEnvSoundController: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Position,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    taskAlwaysVisible: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENLinesVisible: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazinesAmmoCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSort: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawPolygon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
        },
        grammarType: SQFGrammarType.Command,
    },
    turretLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setSimpleTaskCustomData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isVehicleCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableUAVWaypoints: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllHitPointsDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getCenterOfMass: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbSetPictureColorDisabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorUpVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setStatValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownHUD: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectTextures: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    menuChecked: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    forcedMap: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    leaderboardInit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    pixelW: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointLoiterType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Waypoint,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCustomAimCoef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    get3DENActionState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setShotParents: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    getUnitTrait: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    menuSetCheck: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAnimSpeedCoef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    remoteExec: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: [SQFDataType.Any, SQFDataType.StructuredText],
                rightOperandTypes: [
                    SQFDataType.Boolean,
                    SQFDataType.String,
                    SQFDataType.Number,
                    SQFDataType.Object,
                    SQFDataType.Group,
                ],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: [
                    SQFDataType.Boolean,
                    SQFDataType.String,
                    SQFDataType.Object,
                    SQFDataType.Group,
                ],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    menuPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuAction: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    menuExpand: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectMin: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    windStr: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setApertureNew: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    getRelDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    flyInHeightASL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    squadParams: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    joinString: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllEnvSoundControllers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Position,
        },
        grammarType: SQFGrammarType.Command,
    },
    setSimpleTaskType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    sort: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    remove3DENLayer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    showScoretable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    isRemoteExecuted: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetSelectColorRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    isGroupDeletedWhenEmpty: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllOwnedMines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuURL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    language: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    openCuratorInterface: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    pushBack: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENModelsVisible: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMissionDLCs: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getStamina: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setFlagAnimationPhase: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    menuEnable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleReportOwnPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Waypoint,
        },
        grammarType: SQFGrammarType.Command,
    },
    getWeaponSway: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    unitIsUAV: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setOxygenRemaining: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeOwnedMine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    rotorsForcesRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectionNames: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getSoundController: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMagazineGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    selectMax: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.EdenEntity],
        },
        grammarType: SQFGrammarType.Command,
    },
    tvCollapseAll: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    getSoundControllerResult: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    pixelH: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleReceiveRemoteTargets: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDynamicSimulationDistance: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    loadUniform: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuShortcutText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    simulSetHumidity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPylonsPriority: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    screenshot: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCurrentChannel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    forceFlagTexture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    getStatValue: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerDynamicSimulation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleReportRemoteTargets: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    unitAimPositionVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    logEntities: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getForcedFlagTexture: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTerrainGrid: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    remove3DENEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVelocityModelSpace: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isUIContext: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    unassignItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    taskCustomData: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorWorldToModel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazineTurretAmmo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuEnabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isVehicleSensorEnabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAll3DENEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setFeatureType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    vectorWorldToModelVisual: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvExpandAll: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setUnitTrait: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isRemoteExecutedJIP: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    isVehicleRadarOn: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazinesAllTurrets: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    vehicleReceiveRemoteTargets: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    showWaypoints: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    visibleScoretable: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENMissionAttribute: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAmmoOnPylon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    taskType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectRandomWeighted: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Any,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getMissionLayerEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    infoPanels: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getMissionConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getCameraViewDirection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    secondaryWeaponItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setConvoySeparation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    listRemoteTargets: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorModelToWorldVisual: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetPictureRightColorDisabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    getDLCAssetsUsage: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isLaserOn: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isSprintAllowed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getUserMFDText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDynamicSimulationDistanceCoef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeWeaponAttachmentCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isDLCAvailable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    infoPanel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    infoPanelComponentEnabled: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    configNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    leaderboardsRequestUploadScore: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPilotCameraRotation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    hideSelection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    menuClear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    getAimingCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDriveOnPath: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    useAIOperMapObstructionTest: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    missileTargetPos: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    hasPilotCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getCustomSoundController: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSize: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAudioOptionVolumes: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    lockIdentity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getWingsPositionRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMissileTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUserMFDText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    modParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Boolean,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    getCompatiblePylonMagazines: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.String],
            rightOperandTypes: [SQFDataType.Number, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    getPosWorldVisual: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getMousePosition: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeSecondaryWeaponItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    removeFromRemainsCollector: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    triggerTimeoutCurrent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    infoPanelComponents: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    removeAllOwnedMines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvCurSel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setUserMFDValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    leaderboardRequestRowsFriends: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isStaminaEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    weaponInertia: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setBehaviourStrong: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getCustomAimCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getDiverState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getCustomSoundControllerCount: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAnimAimPrecision: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMissionEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    tvSetPictureColorSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    getUnitLoadout: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.String,
                    SQFDataType.Config,
                ],
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Config,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    setDiaryRecordText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vehicleMoveInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    connectToServer: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    roadAt: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isAutotest: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetPictureRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getSubtitleOptions: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    set3DENObjectType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Object],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isActionMenuVisible: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setSuppression: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    weightRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    namedProperties: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    is3DENMultiplayer: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuShortcut: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isGameFocused: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetPictureRightColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
        },
        grammarType: SQFGrammarType.Command,
    },
    menuHover: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    forceAtPositionRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetSelectColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    diaryRecordNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.DiaryRecord,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    visibleCompass: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getFieldManualStartPage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_allMissionEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    getWingsOrientationRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    pixelGridBase: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getSuppression: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    getLightingAt: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPilotCameraRotation: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    setWaypointLoiterAltitude: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getUserMFDValue: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isGamePaused: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    parseSimpleArray: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isAimPrecisionEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getShotParents: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    magazinesAmmo: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getVehicleCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    ctrlMousePosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceGeneratorRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    surfaceTexture: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    localNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    modelToWorldWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setVehicleRadar: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetPictureColorSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
        },
        grammarType: SQFGrammarType.Command,
    },
    windRTD: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuCollapse: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTrimOffsetRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    periscopeElevation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    toUpperANSI: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getLoadedModsInfo: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    remoteExecutedOwner: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENAttribute: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.EdenEntity,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetURL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAttackTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    targets: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    toLowerANSI: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    leaderboardState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    listVehicleSensors: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    openDLCPage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    toFixed: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getSteamFriendsServers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPilotCameraDirection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    setPylonLoadout: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    markAsFinishedOnSteam: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    reportRemoteTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    menuValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getRelPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isTurnedOut: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCustomSoundController: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetTooltip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    sideEmpty: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    configOf: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    set3DENIconsVisible: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENIconsVisible: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetAction: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    get3DENConnections: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.EdenEntity,
        },
        grammarType: SQFGrammarType.Command,
    },
    terrainIntersectAtASL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
    },
    worldSize: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetPictureColor: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getCursorObjectParams: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeBinocularItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getRotorBrakeRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetPictureRightColorSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    systemTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getCalculatePlayerVisibilityByFriendly: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    forgetTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    logNetworkTerminate: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    clearForcesRTD: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPilotCameraTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    menuDelete: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeDiarySubject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setPlayerVoNVolume: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    hostMission: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Command,
    },
    getBackpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    fromEditor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMusicPlayedTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    logNetwork: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    taskMarkerOffset: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAnimSpeedCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    groupSelectedUnits: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getGraphValues: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcAllGroups: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPilotCameraTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    gearSlotData: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    isArray: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    from: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.ForType,
            leftOperandTypes: SQFDataType.ForType,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    lnbSetPictureColorSelectedRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectArgument: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetPictureColorRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lineIntersectsSurfaces: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    vehicleReportRemoteTargets: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setInfoPanel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbColorRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMarkerType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isStressDamageEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    waypointForceBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [
                SQFDataType.Waypoint,
                SQFDataType.Group,
                SQFDataType.Number,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    getMissionPath: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorCos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAirplaneThrottle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    importance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceFollowRoad: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPosASL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    hasInterface: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMarkerPos: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    modelToWorldVisualWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    grpNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    formation: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    leaderboardRequestRowsGlobalAroundUser: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getGroupIconParams: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    getHideFrom: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    formatText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.StructuredText,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Any, SQFDataType.StructuredText],
        },
        grammarType: SQFGrammarType.Command,
    },
    getModelInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getDLCAssetsUsageByName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isAutoStartUpEnabledRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcRemoveAllGroups: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getRemoteSensorsDisabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    groupIconsVisible: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getClientStateNumber: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPlateNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEditorObjectScope: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    leaderboardDeInit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getRoadInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPilotCameraPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    glanceAt: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
    },
    hintSilent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.StructuredText],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    is3DENPreview: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAutonomous: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetSelectColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getGroupIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getDir: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
                rightOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    htmlLoad: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    vectorLinearConversion: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    gunner: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isDamageAllowed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    isAutoHoverOn: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllUnitTraits: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    inflamed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    set3DENLogicType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Object],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPylonMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWingForceScaleRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    hintCadet: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    formationPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Position,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    formLeader: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    hint: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.StructuredText],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    intersect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getPosATL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    mineDetectedBy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    formationMembers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectChildren: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    gearSlotAmmoCount: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    matrixMultiply: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getGroupIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    waypointLoiterAltitude: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    getTerrainHeightASL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    image: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.StructuredText,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMissileTargetPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionATL],
        },
        grammarType: SQFGrammarType.Command,
    },
    scriptNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.ScriptHandle,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    userInputDisabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    currentChannel: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    inheritsFrom: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    fullCrew: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    leaderboardsRequestUploadScoreKeepBest: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    pushBackUnique: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectFOV: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    elevatePeriscope: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getClientState: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceMap: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setPilotCameraDirection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    enableWeaponDisassembly: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    getPlayerVoNVolume: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    ropeUnwound: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetDisabledColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Color,
        },
        grammarType: SQFGrammarType.Command,
    },
    groupRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    rotorsRpmRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerInterval: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getAssetDLCInfo: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: [SQFDataType.Object, SQFDataType.String],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Config,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    hideObject: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    vectorModelToWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    leaderboardRequestRowsGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    radioChannelInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getFSMVariable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: [
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Nothing,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    groupChat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    forceEnd: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setForceGeneratorRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    useAISteeringComponent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    lockInventory: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    getTotalDLCUsageTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    groupIconSelectable: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    vehicleReportOwnPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTextWidth: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getLighting: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeDiaryRecord: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.DiaryRecord,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    tvSetColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableChannel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    weaponAccessoriesCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    addForceGeneratorRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEditorMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    isSensorTargetConfirmed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvPictureRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getVariable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: [
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Display,
                SQFDataType.Control,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.Task,
                SQFDataType.TeamMember,
            ],
            rightOperandTypes: [SQFDataType.String, SQFDataType.Any],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    removeCuratorEditingArea: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    lockedInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    insertEditorObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMagazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    unitAimPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    unitTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcLeader: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    initAmbientLife: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    hcRemoveGroup: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    getVehicleTIPars: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getWPPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    systemTimeUTC: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    targetKnowledge: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    inflame: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    vectorMagnitude: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    pixelGridNoUIScale: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    globalRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    speaker: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPos: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: [SQFDataType.Object, SQFDataType.Location],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setEffectiveCommander: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    globalChat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    lnbPictureRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerAmmo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    isAutoTrimOnRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    revealMine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    matrixTranspose: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPlateNumber: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    hcGroupParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuSetShortcut: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    formationTask: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbTextRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getHitPointDamage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    groupSelectUnit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcShownBar: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    calculatePath: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    stopEngineRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTriggerInterval: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    formationLeader: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcSelectGroup: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
    },
    getMarkerSize: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    importAllGroups: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    inputAction: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isEqualTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    hcShowBar: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    formationDirection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    inGameUISetEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    gearIDCAmmoCount: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    fuel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getFriend: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setTaskMarkerOffset: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    openSteamApp: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getDammage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    group: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    hcSetGroup: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setEngineRpmRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    forEachMemberAgent: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    getDLCUsageTime: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    hideBody: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setCustomMissionData: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEditorCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPlayerUID: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    halt: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    goto: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    getArray: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    isAgent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    hasWeapon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    if: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.IfType,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    getResolution: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    getObjectProxy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    handsHit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    hintC: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: [
                    SQFDataType.String,
                    SQFDataType.StructuredText,
                    SQFDataType.Array,
                ],
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    forceWalk: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    getMarkerColor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getElevationOffset: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetColorRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getContainerMaxLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    forEachMemberTeam: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Code,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    format: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    getMissionLayers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isSimpleObject: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    missileTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbAddRow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isHidden: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbSetTextRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    max: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSize: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lifeState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    mapAnimDone: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    loadStatus: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    locationPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    keyName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    lockWP: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isRealTime: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    kbAddTopic: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Code, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    locationNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    kbWasSaid: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    kbHasTopic: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    lbAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lbSetColorRight: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.Color,
                    SQFDataType.ColorAlpha,
                ],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isNil: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetPictureRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lightAttachObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    isEngineOn: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    loadIdentity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetCurSelRow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    isMultiplayer: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lnbColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    kbTell: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.String,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    markerText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    keyImage: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.StructuredText,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    leader: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isOnRoad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    mapAnimAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    lineIntersects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbColorRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lbSetData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    list: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    loadFile: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.FileCompiler,
    },
    lbSetValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lineBreak: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.StructuredText,
        },
        grammarType: SQFGrammarType.Command,
    },
    markerBrush: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    landResult: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    items: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbCurSel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    isKeyActive: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lookAtPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbDelete: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isShowing3DIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    locked: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lnbText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    landAt: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    joinAs: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    lbSelection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    libraryDisclaimers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    markerDir: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lnbCurSelRow: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    lockCargo: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    lockedTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    isManualFire: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    markerAlpha: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isServer: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetColumnsPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    local: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            },
            {
                type: SQFSyntaxType.NularOperator,
                returnTypes: SQFDataType.Nothing,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    limitSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    isKindOf: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: [SQFDataType.Object, SQFDataType.String],
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Config,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    isPlayer: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lnbDeleteColumn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    loadOverlay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    lockedDriver: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbPictureRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    log: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    kbAddDatabase: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isForcedWalk: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    mapAnimClear: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isFlatEmpty: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isDedicated: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    listObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    isMarkedForCollection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    isFormationLeader: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ln: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSetPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    kbRemoveTopic: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    markerType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lnbGetColumnsPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lnbAddColumn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Control, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lnbData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    mapAnimCommit: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lbClear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    join: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Group, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    lbData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    kbReact: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Code,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    lbIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lightDetachObject: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    lightIsOn: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    markerShape: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    markerColor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    members: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    isText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    mapGridPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    land: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    laserTarget: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbSetColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [SQFDataType.Color, SQFDataType.ColorAlpha],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lnbSetPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    libraryCredits: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbDeleteRow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lockedCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    knowsAbout: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Side,
            ],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    lbTextRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lbSortByValue: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Control, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    leaveVehicle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    markerSize: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    magazines: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    lnbPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    kbAddDatabaseTargets: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lock: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    markerPos: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    magazinesTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lockDriver: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    isNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    lockTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    lnbAddArray: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    joinAsSilent: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    lbSetCurSel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbClear: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    localize: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    isWalking: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lbValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lbSort: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: [SQFDataType.Control, SQFDataType.Number],
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    lookAt: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Array],
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
    },
    lineIntersectsWith: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    mapCenterOnCamera: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Control,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    isInstructorFigureEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSize: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Control, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    isClass: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    isNull: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.Task,
                SQFDataType.ScriptHandle,
                SQFDataType.Config,
                SQFDataType.DiaryRecord,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    joinSilent: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    loadGame: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMagazines: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    missionName: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    onBriefingTeamSwitch: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    overcastForecast: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeDrawIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    progressPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    onShowNewObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ppEffectEnable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
            ],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    primaryWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    playMoveNow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    playAction: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    or: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.ConditionOperator,
    },
    putWeaponPool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    random: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    productVersion: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    overcast: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMPEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    min: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllMPEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    missionStart: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    posScreenToWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    preloadCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    processDiaryLink: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    openMap: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    playMove: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    removeSimpleTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    modelToWorld: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionRelative,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    owner: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    name: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Location],
        },
        grammarType: SQFGrammarType.Command,
    },
    queryWeaponPool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    nMenuItems: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    rad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    precision: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    onBriefingPlan: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveOut: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    pickWeaponPool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    radioChannelSetCallSign: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    nearEntities: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.PositionAGL,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.PositionAGL,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    nextMenuItemIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    onDoubleClick: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    onBriefingGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    progressSetPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    playActionNow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    rankId: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    removeEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMagazine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    objStatus: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    radioChannelSetLabel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    parseNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    pi: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMagazineTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    positionCameraToWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.PositionRelative,
        },
        grammarType: SQFGrammarType.Command,
    },
    progressLoadingScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    ppEffectCreate: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    moveTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionATL],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    rank: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    priority: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    posWorldToScreen: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    rectangular: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeSwitchableUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    publicVariableServer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    registeredTasks: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    nearestObject: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Array,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: [
                    SQFDataType.Position3d,
                    SQFDataType.Position2d,
                ],
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.Position2d,
                    SQFDataType.Position3d,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    onGroupIconOverEnter: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    playableUnits: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    reload: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    onPreloadStarted: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    ppEffectCommitted: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
    },
    preprocessFileLineNumbers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.FileCompiler,
    },
    objNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    rating: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    player: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    publicVariableClient: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    onCommandModeChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Code, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    reloadEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveObjectToEnd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMagazinesTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    playMission: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    preloadSound: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveInGunner: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    mod: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    numberToDate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    onEachFrame: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    nearObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Position,
                SQFDataType.Position2d,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    onBriefingNotes: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    needReload: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    morale: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    orderGetIn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    moonIntensity: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAction: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    playersNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    playerSide: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    radioChannelCreate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    moveInDriver: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    remoteControl: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    onPlayerConnected: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ],
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    onPlayerDisconnected: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Number,
            ],
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    preloadObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    missionNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveToCompleted: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    position: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Location],
        },
        grammarType: SQFGrammarType.Command,
    },
    playGesture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveToFailed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    preloadTitleObj: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    playerRespawnTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    parsingNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    ppEffectCommit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    nearestLocations: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
                SQFDataType.Object,
            ],
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
                SQFDataType.Object,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    nearestBuilding: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.PositionAGL,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    moveInTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    moveInCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    nil: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    preloadTitleRsc: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    nextWeatherChange: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    preprocessFile: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.FileCompiler,
    },
    radioChannelRemove: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ppEffectAdjust: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.String, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    nearestLocationWithDubbing: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Location,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    removeDrawLinks: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    not: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.ConditionOperator,
    },
    onPreloadFinished: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    onHCGroupSelectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    onGroupIconOverLeave: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    musicVolume: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    profileNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    rain: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllWeapons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    onMapSingleClick: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: [
                    SQFDataType.String,
                    SQFDataType.Code,
                    SQFDataType.Array,
                    SQFDataType.Boolean,
                ],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Any,
                rightOperandTypes: [
                    SQFDataType.String,
                    SQFDataType.Code,
                    SQFDataType.Array,
                    SQFDataType.Boolean,
                ],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    removeGroupIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    publicVariable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    moveTime: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    radioVolume: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    onTeamSwitch: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    nearObjectsReady: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    missionConfigFile: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeMenuItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    parseText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.StructuredText,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    newOverlay: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    queryMagazinePool: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    playScriptedMission: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    playSound: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Object,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    move: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: [
                SQFDataType.Position2d,
                SQFDataType.PositionATL,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    onGroupIconClick: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    registerTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    playMusic: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    moveInCommander: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    ppEffectDestroy: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
    },
    radioChannelAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    removeTeamMember: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    nearRoads: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    nearestLocation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Location,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setIdentity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    say3D: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    scoreSide: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setOvercast: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    savingEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    reversedMouseY: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    sendTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Task,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    runInitScript: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setOwner: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
        server: true,
    },
    setFriend: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Side,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    setFormDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    safeZoneY: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setEditorMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLightBrightness: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    screenToWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    safeZoneX: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerDirLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    selectEditorObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerAlphaLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setMarkerBrush: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    serverCommand: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    saveIdentity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDropInterval: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    scopeName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCamUseTI: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setEditorObjectScope: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMusicEffect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Waypoint,
            ],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    sendSimpleCommand: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCurrentTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCaptive: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    resistance: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    setGroupIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setName: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: [SQFDataType.Object, SQFDataType.Location],
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Location,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    roadsConnectedTo: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    setDestination: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    restartEditorCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerSizeLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    selectNoPlayer: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    requiredVersion: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPlayable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAttributes: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.StructuredText,
            leftOperandTypes: [SQFDataType.String, SQFDataType.StructuredText],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    respawnVehicle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setGroupIconsSelectable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCurrentWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    setDirection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setEffectCondition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Waypoint,
                SQFDataType.Array,
            ],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectBestPlaces: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Position3d,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    sendTaskResult: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setArmoryPoints: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDammage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setAccTime: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setAirportSide: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    saveOverlay: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setParticleRandom: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setObjectTexture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    safeZoneXAbs: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setGroupIconsVisible: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    say: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setMarkerType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    resize: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Any],
        },
        grammarType: SQFGrammarType.Command,
    },
    saveStatus: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    scriptDone: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.ScriptHandle,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerShape: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    removeWeapon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setFSMVariable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerAlpha: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setFlagTexture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    scriptName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    saveGame: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    setGroupId: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setPiPEffect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    round: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    say2D: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setCamShakeDefParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setHit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setCameraInterest: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectLeader: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setMarkerPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.PositionAGL,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setPitch: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    serverTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setParticleCircle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setObjectProxy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLightAmbient: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Color],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setFlagOwner: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setDrawIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    safeZoneH: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerPosLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.PositionAGL,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setFormation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setCamShakeParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setLeader: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setFromEditor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    resetCamShake: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setFlagSide: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    serverCommandAvailable: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setFace: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    score: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerSize: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    selectWeapon: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setMimic: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    saveProfileNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    set: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Any,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFDataType.HashMap,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.PropertyAccessor,
    },
    selectedEditorObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setFaceAnimation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setFuel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setAmmoCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setMarkerTextLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setHideBehind: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setBrakesRTD: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    reveal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setFog: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    setDamage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setMarkerText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setObjectArguments: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    resources: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    secondaryWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    scudState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    safeZoneWAbs: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    saveVar: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerColorLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setFormationTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerTypeLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setDate: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    safeZoneW: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setFuelCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setParticleParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.ParticleArray],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setLightColor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setHitPointDamage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setMousePosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    selectionPosition: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setPlayerRespawnTime: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setMarkerBrushLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setPosASL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    selectPlayer: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    selectDiarySubject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setMarkerShapeLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setImportance: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setAperture: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setCombatMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    sendUDPMessage: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    secondaryWeaponMagazine: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    systemChat: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointFormation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    setVelocityTransformation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    side: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Side,
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Location,
            ],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    setUnitAbility: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTriggerText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    shownWarrant: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUnitRank: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    textLog: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUnitPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    skipTime: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    switchMove: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    skill: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    switchGesture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTaskState: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    taskChildren: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    showCompass: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    teamMemberNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    setSide: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    simulationEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    sliderPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    switchAction: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    taskDestination: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    setSpeedMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setWaypointCompletionRadius: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointStatements: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    switchableUnits: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setTriggerStatements: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setUnconscious: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    sideChat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Side],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setVehicleLock: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    sunOrMoon: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    synchronizeObjectsRemove: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    synchronizeTrigger: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleTIPars: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    surfaceNormal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    str: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    teamMember: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setRain: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.Config],
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    setWPPos: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: [SQFDataType.Number, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
    },
    setVectorDirAndUp: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setViewDistance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    switchCamera: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Object,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    setPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    showWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Waypoint,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPosASL2: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    sin: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    spawn: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.CodeExecutor,
    },
    taskNull: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.NullLiteral,
    },
    setSimpleTaskTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    step: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.ForType,
            leftOperandTypes: SQFDataType.ForType,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    shownGPS: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    teamName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointTimeout: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    suppressFor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    sleep: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    sqrt: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setRank: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    taskHint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    supportInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    showGPS: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setRepairCargo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    taskCompleted: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    soundVolume: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    showNewEditorObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setPosATL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionATL],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    setVariable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Namespace,
            rightOperandTypes: [
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.StructuredText,
                SQFDataType.Code,
                SQFDataType.Nothing,
                SQFDataType.HashMap,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setSoundEffect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Waypoint,
            ],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownCompass: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    tg: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    showWarrant: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    synchronizeWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Waypoint,
                SQFDataType.Array,
            ],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleId: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    sliderSpeed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    setSize: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTriggerArea: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setTriggerActivation: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    showSubtitles: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    targetsAggregate: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Object,
                SQFDataType.Side,
                SQFDataType.String,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    setTerrainGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    show3DIcons: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    showHUD: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    tan: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTargetAge: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    sizeOf: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    sideFriendly: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    systemOfUnits: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTriggerType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    taskResult: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    teamSwitch: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    startLoadingScreen: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownWatch: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    sideEnemy: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    switchLight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setUnitRecoilCoefficient: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTitleEffect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Waypoint,
            ],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVisibleIfTreeCollapsed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleArmor: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    showLegend: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    sideRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Side],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    shownPad: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWeaponReloadingTime: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    sliderRange: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Control],
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointCombatMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    stop: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    switch: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.SwitchType,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    teamSwitchEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setSkill: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setSimpleTaskDestination: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Position],
        },
        grammarType: SQFGrammarType.Command,
    },
    showRadio: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWind: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    synchronizedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    someAmmo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVectorUp: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Vector],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    then: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.IfType,
            rightOperandTypes: [
                SQFDataType.Code,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ],
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    setUnitPosWeak: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setSimpleTaskDescription: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setRectangular: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Location,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTaskResult: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    sliderSetSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointVisible: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    setVehicleAmmo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    text: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.StructuredText,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Location,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    shownRadio: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    sideLogic: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointHousePosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownMap: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    stopped: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    simpleTasks: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    showPad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    taskState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    speedMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
    },
    teamType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.TeamMember,
        },
        grammarType: SQFGrammarType.Command,
    },
    teams: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    surfaceIsWater: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    taskParent: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Task,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    targetsQuery: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    textLogFormat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTriggerTimeout: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    size: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Location,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVelocity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setVectorDir: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    terrainIntersectASL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
        },
        grammarType: SQFGrammarType.Command,
    },
    showCinemaBorder: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    speed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    sliderSetRange: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    sideUnknown: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.Command,
    },
    setVehicleVarName: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setWaypointScript: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    terminate: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.ScriptHandle,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    setWaypointBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Waypoint,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    terrainIntersect: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
    },
    setRadioMsg: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    showMap: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    showWatch: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointDescription: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointType: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setWaypointSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    showCommandingMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    surfaceType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    taskDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    synchronizeObjectsAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    waypointType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    west: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Side,
        },
        grammarType: SQFGrammarType.ReservedLiteral,
    },
    vectorUp: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    titleRsc: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    unassignVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    waitUntil: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: [SQFDataType.Code, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
    },
    uiSleep: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    waypointStatements: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponDirection: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    uiNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerAttachVehicle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    true: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.BooleanLiteral,
    },
    false: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.BooleanLiteral,
    },
    throw: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Nothing,
                rightOperandTypes: SQFDataType.Any,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: [SQFDataType.IfType, SQFDataType.Boolean],
                rightOperandTypes: SQFDataType.Any,
            },
        ],
        grammarType: SQFGrammarType.ControlStatement,
    },
    titleFadeOut: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    toLower: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    units: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Side,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    weapons: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    vehicles: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    waypointCombatMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    vehicleRadio: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    waypointAttachedObject: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    verifySignature: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointHousePosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerAttachObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerTimeout: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    wind: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointScript: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    visibleMap: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerArea: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    visiblePosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.PositionAGLS,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointSpeed: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    updateObjectTree: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    titleText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Boolean,
                SQFDataType.StructuredText,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    waypointPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [SQFDataType.Group, SQFDataType.Object],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerActivated: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    triggerType: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    titleCut: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    type: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Location, SQFDataType.Task],
        },
        grammarType: SQFGrammarType.Command,
    },
    velocity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    toArray: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: [SQFDataType.String, SQFDataType.HashMap],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.HashMap,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    triggerActivation: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    triggerAttachedVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    waypointVisible: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    worldToModel: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponsTurret: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    vehicleChat: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    waypoints: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Group, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    turretUnit: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    viewDistance: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    vehicleVarName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    try: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Exception,
                rightOperandTypes: SQFDataType.Code,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Exception,
                leftOperandTypes: SQFDataType.Any,
                rightOperandTypes: SQFDataType.Code,
            },
        ],
        grammarType: SQFGrammarType.ControlStatement,
    },
    vectorDir: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    waypointBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    toUpper: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    with: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.WithType,
            rightOperandTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    triggerText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    unitBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponState: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    useAudioTimeForMoves: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    titleObj: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointAttachedVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    worldToScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.PositionAGL],
        },
        grammarType: SQFGrammarType.Command,
    },
    triggerStatements: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    waypointFormation: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    unitPos: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    vehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    unitReady: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    unlockAchievement: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    unitsBelowHeight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Group,
            ],
            rightOperandTypes: [SQFDataType.Number, SQFDataType.PositionATL],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    waypointShow: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointTimeout: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    time: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    typeOf: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    unregisterTask: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.TeamMember,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    visiblePositionASL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    updateDrawIcon: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    to: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.ForType,
            leftOperandTypes: SQFDataType.ForType,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    worldName: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    updateMenuItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    typeName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    unassignTeam: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    unitRecoilCoefficient: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointCompletionRadius: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointAttachVehicle: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Waypoint,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    while: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.WhileType,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    addMagazineGlobal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    taskName: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Task,
        },
        grammarType: SQFGrammarType.Command,
    },
    speechVolume: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    "!": {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    "!=": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [
                SQFDataType.Number,
                SQFDataType.Side,
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.StructuredText,
                SQFDataType.Config,
                SQFDataType.Display,
                SQFDataType.Control,
                SQFDataType.Location,
                SQFDataType.DiaryRecord,
                SQFDataType.Namespace,
                SQFDataType.Boolean,
            ],
            rightOperandTypes: [
                SQFDataType.Number,
                SQFDataType.Side,
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.StructuredText,
                SQFDataType.Config,
                SQFDataType.Display,
                SQFDataType.Control,
                SQFDataType.Location,
                SQFDataType.DiaryRecord,
                SQFDataType.Namespace,
                SQFDataType.Boolean,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    environmentVolume: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCombatBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Object, SQFDataType.Group],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    combatBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.Group],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    "%": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    "<=": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ">": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    "^": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllBinocularItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    flatten: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    removeAllSecondaryWeaponItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    fileExists: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    addBinocularItem: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    binocularMagazine: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    binocularItems: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    trim: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    ctrlURL: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerPolylineLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    markerPolyline: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    keys: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.HashMap,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlFontHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlStyle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    markerChannel: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getPlayerID: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setUnitCombatMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceCadetDifficulty: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    insert: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Boolean,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.HashMap,
                rightOperandTypes: [SQFDataType.Array, SQFDataType.Boolean],
            },
        ],
        grammarType: SQFGrammarType.PropertyAccessor,
    },
    setMarkerPolyline: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    missionNameSource: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlTooltip: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    compileScript: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Code,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.FileCompiler,
    },
    tvIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetMousePosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSelection: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    get: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.HashMap,
            rightOperandTypes: SQFDataType.HashMapKey,
        },
        grammarType: SQFGrammarType.PropertyAccessor,
    },
    createHashMapFromArray: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.HashMap,
                leftOperandTypes: SQFDataType.HashMapKey,
                rightOperandTypes: SQFDataType.Any,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.HashMap,
                leftOperandTypes: [SQFDataType.Array, SQFDataType.HashMapKey],
                rightOperandTypes: [SQFDataType.Array, SQFDataType.Nothing],
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    unitCombatMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isNotEqualTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    createHashMap: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.HashMap,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetURL: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllPylonsInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setObjectScale: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    continueWith: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    forceUnicode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    continue: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    break: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    breakWith: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTextRaw: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    merge: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.HashMap,
            rightOperandTypes: [SQFDataType.HashMap, SQFDataType.Boolean],
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectScale: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSortAll: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSortByValueAll: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_localized: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableTraffic: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTrafficDensity: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTrafficDistance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTrafficGap: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTrafficSpeed: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    isPiPEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    openGPS: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    sliderSetPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEngineTargetRPMRTD: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    dayTime: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_setLightNew: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_lightNewLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    nearTargets: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setDiarySubjectPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    markerShadow: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    focusedCtrl: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Command,
    },
    allDiarySubjects: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    diag_dumpTerrainSynth: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    fadeEnvironment: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setMarkerShadowLocal: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setWeaponZeroing: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropeSegments: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMarkerShadow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
    },
    apertureParams: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    lnbSortBy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Control, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbSortBy: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Control, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    radioEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    sentencesEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    shownSubtitles: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    conversationDisabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCruiseControl: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    get3DENLayerEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    allLODs: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [SQFDataType.Object, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
    },
    regexFind: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    regexMatch: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    regexReplace: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    "&&": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.Boolean, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    setTowParent: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    diag_recordTurretLimits: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_getTerrainGrid: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_captureFrame: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_dumpScriptAssembly: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_enable: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_enabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_list: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_mergeConfigFile: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_toggle: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_dynamicSimulationEnd: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    diag_dynamicSimulationStart: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    diag_exportConfig: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_exportTerrainSVG: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_getTerrainHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Position2d, SQFDataType.Position3d],
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_getTerrainSegmentOffset: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_resetShapes: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_drawMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_setTerrainHeight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Position],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_dumpCalltraceToLog: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_captureFrameToFile: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    diag_captureSlowFrame: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    isFinal: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Code],
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapSetPosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetPosition: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Control,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    getCruiseControl: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    "/": {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Config,
                leftOperandTypes: SQFDataType.Config,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    setLightIR: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    getSensorTargets: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    getSensorThreats: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    values: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.HashMap,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTextureInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lbTooltip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    "*": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    moveTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    createTarget: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    deleteTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    hierarchyObjectsCount: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    exportLandscapeXYZ: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    "=": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    ">>": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ":": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.SwitchType,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.Command,
    },
    "<": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    add3DENEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Code,
        },
        grammarType: SQFGrammarType.Command,
    },
    buldozer_enableRoadDiag: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    setLightConePars: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    setLightVolumeShape: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lnbSortByValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSort: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    addUserActionEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: [SQFDataType.Code, SQFDataType.String],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    removeUserActionEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    removeAllUserActionEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    "==": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [
                SQFDataType.Number,
                SQFDataType.Side,
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.StructuredText,
                SQFDataType.Config,
                SQFDataType.Display,
                SQFDataType.Control,
                SQFDataType.Location,
                SQFDataType.DiaryRecord,
                SQFDataType.Namespace,
                SQFDataType.Boolean,
            ],
            rightOperandTypes: [
                SQFDataType.Number,
                SQFDataType.Side,
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.StructuredText,
                SQFDataType.Config,
                SQFDataType.Display,
                SQFDataType.Control,
                SQFDataType.Location,
                SQFDataType.DiaryRecord,
                SQFDataType.Namespace,
                SQFDataType.Boolean,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    ">=": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    "||": {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    "+": {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.String,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Array,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.HashMap,
                rightOperandTypes: SQFDataType.HashMap,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    "-": {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    weaponReloadingTime: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetTooltipMaxWidth: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    displayChild: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Display,
            rightOperandTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Command,
    },
    serverNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    selectionVectorDirAndUp: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.String, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    gestureState: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    uniqueUnitItems: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.HashMap,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.HashMap,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    diag_stacktrace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    allUsers: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    getUserInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    canDeployWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    directionStabilizationEnabled: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    enableDirectionStabilization: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    hashValue: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Boolean,
                SQFDataType.Code,
                SQFDataType.Config,
                SQFDataType.Group,
                SQFDataType.Namespace,
                SQFDataType.NaN,
                SQFDataType.Number,
                SQFDataType.Object,
                SQFDataType.Side,
                SQFDataType.String,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    ambientTemperature: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    missionEnd: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getDebriefingText: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    createTrigger: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlForegroundColor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlBackgroundColor: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    drawLaser: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    maxLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    setMaxLoad: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        server: true,
    },
    getConnectedUAVUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlMapPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    getAllEnv3DSoundControllers: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEnv3DSoundController: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    allEnv3DSoundSources: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    rainParams: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    setHumidity: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    awake: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    isAwake: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    isSaving: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    isAllowedCrewInImmobile: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    collisionDisabledWith: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    inputController: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    inputMouse: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Boolean,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    pose: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    disableBrakes: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    brakesDisabled: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.GLOBAL,
    },
    lockedCameraTo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Array, SQFDataType.Number],
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    setPiPViewDistance: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Nothing,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    getPiPViewDistance: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    setUnitFreefallHeight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    getUnitFreefallInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    findAny: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    ropesAttachedTo: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getObjectID: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    loadConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Config,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    missionProfileNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Namespace,
        },
        grammarType: SQFGrammarType.Command,
    },
    saveMissionProfileNamespace: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    isMissionProfileNamespaceLoaded: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getOpticsMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    setOpticsMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    actionKeysEx: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    weaponsInfo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    activeTitleEffectParams: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    nearestMines: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    compatibleItems: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    compatibleMagazines: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFDataType.String,
                rightOperandTypes: SQFDataType.String,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    allObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    playSoundUI: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
    },
    inArea: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
                SQFDataType.PositionAGL,
            ],
            rightOperandTypes: [
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Location,
                SQFDataType.Number,
            ],
        },
        grammarType: SQFGrammarType.Command,
    },
    inAreaArray: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.Object,
                    SQFDataType.Position,
                ],
                rightOperandTypes: [
                    SQFDataType.Object,
                    SQFDataType.Location,
                    SQFDataType.String,
                ],
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [
                    SQFDataType.Array,
                    SQFDataType.Object,
                    SQFDataType.Position,
                    SQFDataType.PositionAGL,
                ],
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    entities: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Array,
                rightOperandTypes: SQFDataType.String,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: [SQFDataType.Array, SQFDataType.String],
                rightOperandTypes: SQFDataType.Boolean,
            },
        ],
        grammarType: SQFGrammarType.Command,
    },
    nearestTerrainObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    nearestObjects: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Position2d,
            ],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetTextRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    lnbSetText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    lnbSetValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    waypointAttachObject: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.Waypoint],
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Object],
        },
        grammarType: SQFGrammarType.Command,
    },
    commandArtilleryFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    doArtilleryFire: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    loadMagazine: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    menuAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    setCenterOfMass: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: [SQFDataType.Number, SQFDataType.Array],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    setGroupIconParams: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Group,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ],
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    setVehiclePosition: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    tvAdd: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetData: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    tvSetPicture: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetPictureRight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetText: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSetTooltip: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    tvSetValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Number, SQFDataType.Control],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    tvSort: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Control, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    tvSortByValue: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Control, SQFDataType.Number],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    assert: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.ControlStatement,
    },
    setTurretOpticsMode: {
        syntaxes: [
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Number,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    getTurretOpticsMode: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnaryOperator,
                returnTypes: SQFDataType.Number,
                rightOperandTypes: SQFDataType.Object,
            },
            {
                type: SQFSyntaxType.BinaryOperator,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFDataType.Object,
                rightOperandTypes: SQFDataType.Array,
            },
        ],
        grammarType: SQFGrammarType.Command,
        argument: SQFArgument.LOCAL,
    },
    allDiaryRecords: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    getTerrainInfo: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTerrainHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: [SQFDataType.Position2d, SQFDataType.Position3d],
        },
        grammarType: SQFGrammarType.Command,
    },
    setTerrainHeight: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: [SQFDataType.Array, SQFDataType.PositionASL],
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    ctrlSetURLOverlayMode: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlURLOverlayMode: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    isSteamOverlayEnabled: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Command,
    },
    getEventHandlerInfo: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: [
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.String,
            ],
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlSetShadow: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.Control,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    ctrlShadow: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Number,
            rightOperandTypes: SQFDataType.Control,
        },
        grammarType: SQFGrammarType.Command,
    },
    freeExtension: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Boolean,
            rightOperandTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
    },
    getTIParameters: {
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.HashMap,
        },
        grammarType: SQFGrammarType.Command,
    },
    setTIParameter: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFDataType.String,
            rightOperandTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedVehicles: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Array,
            rightOperandTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Command,
    },
    assignedGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Group,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    isEqualRef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    isNotEqualRef: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFDataType.Any,
            rightOperandTypes: SQFDataType.Any,
        },
        grammarType: SQFGrammarType.Command,
    },
    getCorpse: {
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            returnTypes: SQFDataType.Object,
            rightOperandTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Command,
    },
    getOrDefaultCall: {
        syntaxes: {
            type: SQFSyntaxType.BinaryOperator,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFDataType.HashMap,
            rightOperandTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.PropertyAccessor,
    },
	ArmatoString: {
		label: "toString",
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: [
                SQFDataType.Array,
                SQFDataType.Code,
            ],
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Command,
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

export { sqfCommandSyntaxes };
