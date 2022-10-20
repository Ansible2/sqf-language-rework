import {
    CompletionItemKind,
    CompletionItemTag,
} from "vscode-languageserver/node";
import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
    SQFArray,
} from "../sqf.namespace";

const kiskaFunctionSyntaxes: IJSON<PreCompiledSQFItem> = {
    KISKA_fnc_isMainMenu: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_ACE_deployFastRope: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Object,
                    {
                        operation: SQFArrayComparator.AnyOf,
                        types: SQFDataType.Object,
                    },
                    {
                        operation: SQFArrayComparator.AnyOf,
                        types: SQFDataType.PositionRelative,
                    },
                ],
            },
        },
    },
    KISKA_fnc_ACE_deployRopes: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: SQFDataType.Object,
            },
        },
    },
    KISKA_fnc_ACE_fastRope: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Object,
                    [SQFDataType.PositionASL, SQFDataType.Object],
                    [
                        {
                            operation: SQFArrayComparator.AnyOf,
                            types: SQFDataType.Object,
                        },
                        SQFDataType.Group,
                        SQFDataType.Object,
                    ],
                    [SQFDataType.String, SQFDataType.Code, SQFDataType.Array],
                    SQFDataType.Number,
                    SQFDataType.Array,
                ],
            },
        },
    },
    KISKA_fnc_ACE_setOnPrepareFastrope: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Object,
                    [
                        {
                            params: SQFDataType.Object,
                            returns: SQFDataType.Number,
                        },
                    ],
                    SQFDataType.Array,
                ],
            },
        },
    },
    KISKA_fnc_ACE_addSupportMenuAction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [SQFDataType.Object],
            },
        },
    },
    KISKA_fnc_ACE_unconsciousIsCaptive: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_ACEX_setHCTransfer: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    [SQFDataType.Object, SQFDataType.Group],
                    SQFDataType.Boolean,
                ],
            },
        },
    },
    KISKA_fnc_AAAZone: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Object,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ],
            },
        },
    },
    KISKA_fnc_arty: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Object,
                    [SQFDataType.Object, SQFDataType.Position],
                    SQFDataType.Number,
                    SQFDataType.Number,
                    SQFDataType.Number,
                    [SQFDataType.MinMidMax, SQFDataType.Number],
                ],
            },
        },
    },
    KISKA_fnc_attack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    [SQFDataType.Group, SQFDataType.Object],
                    [
                        SQFDataType.Object,
                        SQFDataType.Location,
                        SQFDataType.Group,
                        SQFDataType.Position,
                    ],
                    SQFDataType.Number,
                    SQFDataType.Behaviour,
                    SQFDataType.CombatMode,
                    SQFDataType.Boolean,
                ],
            },
        },
    },
    KISKA_fnc_clearWaypoints: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    [SQFDataType.Group, SQFDataType.Object],
                    SQFDataType.Number,
                    SQFDataType.Boolean,
                ],
            },
        },
    },
    KISKA_fnc_configureConvoy: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Group,
                    {
                        operation: SQFArrayComparator.OneOf,
                        types: SQFDataType.Object,
                    },
                ],
            },
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Side,
                    [
                        SQFDataType.Object,
                        {
                            operation: SQFArrayComparator.Exact,
                            types: [
                                [SQFDataType.Object, SQFDataType.PositionATL],
                                SQFDataType.Number,
                                SQFDataType.String,
                            ],
                        },
                    ],
                ],
            },
        },
    },
    KISKA_fnc_defend: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    [SQFDataType.Object, SQFDataType.Group],
                    [
                        SQFDataType.Object,
                        SQFDataType.Location,
                        SQFDataType.Group,
                        SQFDataType.Position3d,
                    ],
                    SQFDataType.Number,
                    SQFDataType.Number,
                    [SQFDataType.Number, SQFDataType.Boolean],
                    [SQFDataType.Number, SQFDataType.Boolean],
                ],
            },
        },
    },
    KISKA_fnc_driveTo: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    [
                        SQFDataType.Object,
                        SQFDataType.Group,
                        {
                            operation: SQFArrayComparator.OneOf,
                            types: SQFDataType.Object,
                        },
                    ],
                    SQFDataType.Object,
                    [SQFDataType.Object, SQFDataType.PositionATL],
                    SQFDataType.Number,
                    SQFDataType.SpeedMode,
                    [SQFDataType.Code, SQFDataType.Array, SQFDataType.String],
                ],
            },
        },
    },
    KISKA_fnc_dropOff: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: {
                operation: SQFArrayComparator.Exact,
                types: [
                    SQFDataType.Object,
                    [SQFDataType.Object, SQFDataType.PositionATL],
                    [
                        SQFDataType.Object,
                        SQFDataType.Group,
                        {
                            operation: SQFArrayComparator.OneOf,
                            types: SQFDataType.Object,
                        },
                    ],
                    SQFDataType.Number,
                    SQFDataType.SpeedMode,
                    [SQFDataType.Code, SQFDataType.Array, SQFDataType.String],
                ],
            },
        },
    },
    KISKA_fnc_engageHeliTurretsLoop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.of(SQFArrayComparator.Exact, [
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Boolean,
                {
                    operation: SQFArrayComparator.AnyOf,
                    types: [SQFDataType.Array, SQFDataType.Number],
                },
            ]),
        },
    },
};

Object.keys(kiskaFunctionSyntaxes).forEach((command: string) => {
    const item = kiskaFunctionSyntaxes[command];

    if (!item.documentation) {
        const kiskaFunctionsFolder = "./KISKA Functions";
        item.documentation = kiskaFunctionsFolder;
    }
});

export { kiskaFunctionSyntaxes };
