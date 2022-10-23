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
    SQFCode,
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
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                [
                    SQFCode.returns(SQFDataType.Number).takes(
                        SQFDataType.Object
                    ),
                    SQFDataType.String,
                    SQFDataType.Array,
                ],
            ]),
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
            leftOperandTypes: SQFArray.ofExactlyThis([
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
    KISKA_fnc_heliLand: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                [SQFDataType.Object, SQFDataType.PositionATL],
                SQFDataType.String,
                SQFDataType.Boolean,
                [SQFDataType.Code, SQFDataType.String, SQFDataType.Array],
            ]),
        },
    },
    KISKA_fnc_heliPatrol: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFArray.ofAnyOfThese([
                    SQFDataType.Object,
                    SQFDataType.PositionAGL,
                ]),
                SQFDataType.SpeedMode,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_lookHere: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_patrolSpecific: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.Object, SQFDataType.Group],
                [
                    SQFDataType.Object,
                    SQFArray.of([SQFDataType.Object, SQFDataType.PositionAGL]),
                ],
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Behaviour,
                SQFDataType.SpeedMode,
                SQFDataType.CombatMode,
                SQFDataType.Formation,
            ]),
        },
    },
    KISKA_fnc_setCrew: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFArray.of(SQFDataType.Object),
                ],
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_slingLoad: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFArray.of(SQFDataType.Waypoint),
            ]),
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFDataType.Object,
                [
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.PositionASL,
                    SQFDataType.Location,
                ],
                [SQFDataType.Code, SQFDataType.String, SQFDataType.Array],
                SQFDataType.Boolean,
                SQFArray.ofAnyOfThese([
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.PositionASL,
                    SQFDataType.Location,
                ]),
            ]),
        },
    },
    KISKA_fnc_spawn: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Object),
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Number,
                SQFDataType.Number,
                SQFArray.of(SQFDataType.String),
                SQFArray.ofAnyOfThese([
                    SQFDataType.Position,
                    SQFDataType.Object,
                ]),
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.Side,
            ]),
        },
    },
    KISKA_fnc_spawnGroup: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Group),
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Number,
                SQFArray.of(SQFDataType.String),
                SQFDataType.Side,
                SQFArray.ofAnyOfThese([
                    SQFDataType.Position,
                    SQFDataType.Object,
                    SQFDataType.Group,
                ]),
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_spawnVehicle: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFArray.of(SQFDataType.Object),
                SQFDataType.Group,
            ]),
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.Object, SQFDataType.PositionATL],
                SQFDataType.Number,
                SQFDataType.String,
                [SQFDataType.Side, SQFDataType.Group],
                SQFDataType.Boolean,
                SQFArray.of([SQFDataType.Object, SQFDataType.String]),
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_stalk: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFArray.of(SQFDataType.Object),
                SQFDataType.Group,
            ]),
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.Object, SQFDataType.Group],
                [SQFDataType.Object, SQFDataType.Group],
                SQFDataType.Number,
                [
                    SQFDataType.Code,
                    SQFDataType.String,
                    SQFArray.ofExactlyThis([
                        SQFDataType.Array,
                        SQFDataType.Code,
                    ]),
                ],
                [
                    SQFCode.returns(SQFDataType.Boolean),
                    SQFDataType.String,
                    SQFArray.ofExactlyThis([
                        SQFDataType.Array,
                        SQFDataType.Code,
                    ]),
                ],
            ]),
        },
    },
    KISKA_fnc_vlsFireAt: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                [SQFDataType.Object, SQFDataType.PositionAGL],
            ]),
        },
    },
    KISKA_fnc_ambientAnim_createMapFromConfig: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.HashMap,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([SQFDataType.Config]),
        },
    },
    KISKA_fnc_ambientAnim_isAnimated: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([SQFDataType.Object]),
        },
    },
    KISKA_fnc_ambientAnim_play: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_ambientAnim_stop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_ambientAnim: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
                [SQFDataType.String, SQFArray.of(SQFDataType.String)],
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Number,
                [SQFDataType.String, SQFDataType.Code, SQFDataType.Array],
                [SQFDataType.HashMap, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_agents: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_infantry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_landVehicles: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_patrols: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_simples: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_turrets: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_getHashmap: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactlyThis([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_getInfantryClasses: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.String),
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFArray.of(SQFDataType.Config),
            ]),
        },
    },
    KISKA_fnc_bases_getSide: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Side,
            leftOperandTypes: SQFArray.ofExactlyThis([
                SQFArray.of(SQFDataType.Config),
            ]),
        },
    },
    KISKA_fnc_bases_setupReactivity: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactlyThis([
				SQFDataType.Group,
				[SQFDataType.Number,SQFDataType.String],
				SQFArray.of(SQFDataType.String),
				SQFDataType.Number,
				[SQFCode.returns(SQFDataType.Boolean),SQFDataType.String]
            ]),
        },
    },
    KISKA_fnc_bases_triggerReaction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactlyThis([
				SQFDataType.Group,
				SQFDataType.Behaviour,
				SQFDataType.Config,
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
