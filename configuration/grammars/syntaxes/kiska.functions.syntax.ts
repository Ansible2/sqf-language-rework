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

const kiskaCallbackType = [
    SQFDataType.Code,
    SQFDataType.String,
    SQFArray.ofExactly([
        SQFDataType.Array,
        [SQFDataType.Code, SQFDataType.String],
    ]),
];

const kiskaTimelineEventType = [
    kiskaCallbackType,
    [SQFDataType.Number, kiskaCallbackType],
    SQFDataType.Number,
];

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
                    kiskaCallbackType,
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
            leftOperandTypes: SQFArray.ofExactly([
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
                    kiskaCallbackType,
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
                    kiskaCallbackType,
                ],
            },
        },
    },
    KISKA_fnc_engageHeliTurretsLoop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
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
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                [SQFDataType.Object, SQFDataType.PositionATL],
                SQFDataType.String,
                SQFDataType.Boolean,
                kiskaCallbackType,
            ]),
        },
    },
    KISKA_fnc_heliPatrol: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
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
            leftOperandTypes: SQFArray.ofExactly([
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
            leftOperandTypes: SQFArray.ofExactly([
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
            leftOperandTypes: SQFArray.ofExactly([
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
            returnTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFArray.of(SQFDataType.Waypoint),
            ]),
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Object,
                [
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.PositionASL,
                    SQFDataType.Location,
                ],
                kiskaCallbackType,
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
            leftOperandTypes: SQFArray.ofExactly([
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
            leftOperandTypes: SQFArray.ofExactly([
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
            returnTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFArray.of(SQFDataType.Object),
                SQFDataType.Group,
            ]),
            leftOperandTypes: SQFArray.ofExactly([
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
            returnTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFArray.of(SQFDataType.Object),
                SQFDataType.Group,
            ]),
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
                [SQFDataType.Object, SQFDataType.Group],
                SQFDataType.Number,
                kiskaCallbackType,
                kiskaCallbackType,
            ]),
        },
    },
    KISKA_fnc_vlsFireAt: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
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
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
    },
    KISKA_fnc_ambientAnim_isAnimated: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
    },
    KISKA_fnc_ambientAnim_play: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_ambientAnim_stop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_ambientAnim: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
                [SQFDataType.String, SQFArray.of(SQFDataType.String)],
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Number,
                kiskaCallbackType,
                [SQFDataType.HashMap, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_agents: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_infantry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_landVehicles: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_patrols: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_simples: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig_turrets: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_createFromConfig: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_getHashmap: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_bases_getInfantryClasses: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.String),
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.Config),
            ]),
        },
    },
    KISKA_fnc_bases_getSide: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Side,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.Config),
            ]),
        },
    },
    KISKA_fnc_bases_setupReactivity: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                [SQFDataType.Number, SQFDataType.String],
                SQFArray.of(SQFDataType.String),
                SQFDataType.Number,
                [SQFCode.returns(SQFDataType.Boolean), SQFDataType.String],
            ]),
        },
    },
    KISKA_fnc_bases_triggerReaction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Behaviour,
                SQFDataType.Config,
            ]),
        },
    },
    KISKA_fnc_ciwsAlarm: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
    },
    KISKA_fnc_ciwsSiren: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
    },
    KISKA_fnc_ciwsInit: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFArray.of([
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Boolean,
                    ]),
                ]),
            ]),
        },
    },
    KISKA_fnc_eventHandler_addFromConfig: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Any,
                SQFDataType.Config,
                [SQFDataType.Code, SQFDataType.String],
            ]),
        },
    },
    KISKA_fnc_eventHandler_createCBAStateMachine: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Location,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
    },
    KISKA_fnc_eventHandler_remove: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Any,
                SQFDataType.Config,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_hashmap_deleteAt: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Any,
            ]),
        },
    },
    KISKA_fnc_hashmap_get: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Any,
                SQFDataType.Any,
            ]),
        },
    },
    KISKA_fnc_hashmap_in: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Any,
            ]),
        },
    },
    KISKA_fnc_hashmap_set: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Any,
                SQFDataType.Any,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_assignUnitLoadout: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
            ]),
        },
    },
    KISKA_fnc_randomGear: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFArray.ofOneOfThese([
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ]),
                SQFArray.ofOneOfThese([
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ]),
                SQFArray.ofOneOfThese([
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ]),
                SQFArray.ofOneOfThese([
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ]),
            ]),
        },
    },
    KISKA_fnc_randomLoadout: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Object),
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFArray.of(SQFDataType.Object),
                ],
                SQFArray.of(SQFDataType.UnitLoadout),
            ]),
        },
    },
    KISKA_fnc_savePlayerLoadout: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_randomMusic_getCurrentTrack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
    },
    KISKA_fnc_randomMusic_getTrackInterval: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: [
                SQFArray.ofExactly([SQFDataType.Number]),
                SQFDataType.MinMidMax,
                SQFDataType.String,
            ],
        },
        server: true,
    },
    KISKA_fnc_randomMusic_getUnusedTracks: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.String),
        },
        server: true,
    },
    KISKA_fnc_randomMusic_getUsedTracks: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.String),
        },
        server: true,
    },
    KISKA_fnc_randomMusic_getVolume: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
        },
        server: true,
    },
    KISKA_fnc_randomMusic_isSystemRunning: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        server: true,
    },
    KISKA_fnc_randomMusic_setCurrentTrack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            returnTypes: SQFDataType.Boolean,
        },
        server: true,
    },
    KISKA_fnc_randomMusic_setSystemRunning: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        server: true,
    },
    KISKA_fnc_randomMusic_setTrackInterval: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.Number,
                    SQFDataType.MinMidMax,
                    SQFArray.ofExactly([SQFDataType.Number]),
                ],
            ]),
            returnTypes: SQFDataType.Boolean,
        },
        server: true,
    },
    KISKA_fnc_randomMusic_setUnusedTracks: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.String),
            ]),
        },
        server: true,
    },
    KISKA_fnc_randomMusic_setUsedTracks: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.String),
            ]),
        },
        server: true,
    },
    KISKA_fnc_randomMusic_setVolume: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        server: true,
    },
    KISKA_fnc_randomMusic_stopClient: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_randomMusic_stopServer: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
            returnTypes: SQFDataType.Boolean,
        },
        server: true,
    },
    KISKA_fnc_randomMusic: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFArray.of(SQFDataType.String),
                [
                    SQFDataType.MinMidMax,
                    SQFDataType.Number,
                    SQFArray.ofExactly([SQFDataType.Number]),
                ],
                SQFArray.of(SQFDataType.String),
            ]),
        },
        server: true,
    },
    KISKA_fnc_getLatestPlayedMusicID: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_getMusicDuration: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_getMusicFromClass: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            returnTypes: SQFArray.of(SQFDataType.String),
        },
    },
    KISKA_fnc_getPlayingMusic: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            returnTypes: SQFDataType.String,
        },
    },
    KISKA_fnc_isMusicPlaying: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_musicEventHandlers: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_musicStartEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
    },
    KISKA_fnc_musicStopEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
    },
    KISKA_fnc_playMusic: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([SQFDataType.Number, SQFDataType.Number]),
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_stopMusic: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_addRallyPointDiaryEntry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
        },
    },
    KISKA_fnc_allowGroupRally: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
            ]),
        },
        server: true,
    },
    KISKA_fnc_disallowGroupRally: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
                SQFDataType.Boolean,
            ]),
        },
        server: true,
    },
    KISKA_fnc_isGroupRallyAllowed: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
            ]),
        },
    },
    KISKA_fnc_updateRallyPointNotification: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_updateRespawnMarker: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Marker,
                SQFDataType.String,
            ]),
        },
        server: true,
    },
    KISKA_fnc_updateRespawnMarkerQuery: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_keepInGroup: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
        },
    },
    KISKA_fnc_ambientNewsRadio: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionASL],
                SQFDataType.Number,
                [SQFDataType.Number, SQFDataType.MinMidMax],
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_battleSound: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionASL],
                [SQFDataType.Number, SQFDataType.MinMidMax],
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_playRandom3dSoundLoop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionASL],
                [
                    SQFDataType.String,
                    SQFDataType.Config,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ],
                [SQFDataType.Number, SQFDataType.MinMidMax],
                SQFArray.ofExactly([
                    SQFDataType.Number,
                    SQFDataType.Number,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                ]),
                kiskaCallbackType,
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_playSound2D: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                [SQFDataType.Object, SQFDataType.Position],
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_playSound3D: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
                [SQFDataType.Object, SQFDataType.PositionASL],
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_radioChatter: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                [
                    SQFArray.ofExactly([
                        SQFDataType.Object,
                        SQFDataType.Number,
                        SQFDataType.PositionRelative,
                    ]),
                    SQFArray.ofExactly([
                        [SQFDataType.Object, SQFDataType.PositionASL],
                        SQFDataType.Number,
                        SQFDataType.Number,
                    ]),
                ],
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_stopBattleSound: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_stopRadioChatter: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_stopRandom3dSoundLoop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_addCommMenuItem: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Any,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_buildCommandMenu: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFDataType.Number,
                    SQFDataType.Any,
                ]),
            ]),
            returnTypes: SQFDataType.Number,
        },
    },
    KISKA_fnc_callingForArsenalSupplyDrop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.PositionAGLS,
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ]),
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_callingForArty: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.PositionAGLS,
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ]),
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_callingForCAS: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.PositionAGLS,
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ]),
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_callingForHelicopterCAS: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.PositionAGLS,
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ]),
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_callingForSupplyDrop_aircraft: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.PositionAGLS,
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ]),
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_callingForSupportMaster: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.PositionAGLS,
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                    SQFDataType.Number,
                    SQFDataType.Number,
                ]),
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_commandMenuTree: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                kiskaCallbackType,
                kiskaCallbackType,
            ]),
        },
    },
    KISKA_fnc_detectControlKeys: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_getAmmoClassFromId: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
            returnTypes: SQFDataType.String,
        },
    },
    KISKA_fnc_getAmmoTitleFromId: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
            returnTypes: SQFDataType.String,
        },
    },
    KISKA_fnc_getCasTitleFromId: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
            returnTypes: SQFDataType.String,
        },
    },
    KISKA_fnc_getSupportVehicleClasses: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Number,
            ]),
            returnTypes: SQFArray.of(SQFDataType.String),
        },
    },
    KISKA_fnc_supportNotification: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_supportRadio: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                [
                    SQFDataType.Number,
                    SQFDataType.Object,
                    SQFDataType.String,
                    SQFDataType.Group,
                    SQFDataType.Side,
                    SQFArray.of(SQFDataType.Number),
                ],
            ]),
        },
    },
    KISKA_fnc_updateFlareEffects: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Object,
            ]),
        },
    },
    KISKA_fnc_arsenalSupplyDrop: {
        grammarType: SQFGrammarType.Function,
        tags: [CompletionItemTag.Deprecated],
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Position],
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Side,
            ]),
        },
    },
    KISKA_fnc_CAS: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionASL],
                [
                    SQFDataType.Number,
                    SQFArray.ofExactly([
                        SQFDataType.Number,
                        SQFDataType.String,
                    ]),
                ],
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Side,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_CASAttack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Object,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.PositionASL,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_cruiseMissileStrike: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionASL],
                SQFDataType.Side,
                [SQFDataType.Object, SQFDataType.PositionASL],
            ]),
        },
    },
    KISKA_fnc_helicopterGunner: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionAGL],
                SQFDataType.Number,
                [SQFDataType.Object, SQFDataType.String],
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Side,
                kiskaCallbackType,
            ]),
            returnTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFArray.of(SQFDataType.Object),
                SQFDataType.Group,
            ]),
        },
    },
    KISKA_fnc_paratroopers: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionATL],
                SQFArray.of(SQFDataType.Object),
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Side,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_supplyDrop_aircraft: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Position],
                SQFDataType.String,
                SQFArray.of(SQFDataType.String),
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Side,
            ]),
        },
    },
    KISKA_fnc_supplyDrop: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.String),
                SQFDataType.Number,
                [
                    SQFDataType.Object,
                    SQFDataType.PositionATL,
                    SQFDataType.Group,
                    SQFDataType.Location,
                    SQFDataType.Task,
                ],
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_virtualArty: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.Marker,
                    SQFDataType.Object,
                    SQFDataType.PositionATL,
                ],
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_createTaskFromConfig: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Config],
                [
                    SQFDataType.Boolean,
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.Side,
                    SQFArray.ofAnyOfThese([
                        SQFDataType.Boolean,
                        SQFDataType.Object,
                        SQFDataType.Group,
                        SQFDataType.Side,
                    ]),
                ],
                [SQFDataType.String, SQFDataType.Config, SQFDataType.Boolean],
                [
                    SQFDataType.Object,
                    SQFDataType.Config,
                    SQFArray.ofExactly([
                        SQFDataType.Object,
                        SQFDataType.Boolean,
                    ]),
                    SQFDataType.Position,
                ],
                [SQFDataType.String, SQFDataType.Config],
                [SQFDataType.Boolean, SQFDataType.Config],
                [SQFDataType.Boolean, SQFDataType.Config],
            ]),
        },
    },
    KISKA_fnc_endTask: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
                [
                    SQFDataType.Boolean,
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.Side,
                    SQFArray.ofAnyOfThese([
                        SQFDataType.Boolean,
                        SQFDataType.Object,
                        SQFDataType.Group,
                        SQFDataType.Side,
                    ]),
                ],
            ]),
        },
    },
    KISKA_fnc_executeTimelineEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(kiskaTimelineEventType),
                SQFDataType.Number,
                SQFDataType.HashMap,
                SQFDataType.Any,
            ]),
        },
    },
    KISKA_fnc_getOverallTimelineMap: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
        },
    },
    KISKA_fnc_getTimelineMap: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
            returnTypes: SQFDataType.HashMap,
        },
    },
    KISKA_fnc_isTimelineRunning: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number,SQFDataType.Boolean]),
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_startTimeline: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(kiskaTimelineEventType),
				kiskaCallbackType
            ]),
        },
    },
    KISKA_fnc_stopTimeline: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
				SQFDataType.Number,
				kiskaCallbackType
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
