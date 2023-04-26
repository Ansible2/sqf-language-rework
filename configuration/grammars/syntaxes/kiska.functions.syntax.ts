import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
    SQFArray,
    SQFCode,
    SQFEffect,
    SQFCompletionItemTag,
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
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
                SQFDataType.Boolean,
            ]),
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
                [
                    SQFDataType.HashMap,
                    SQFDataType.String,
                    SQFArray.of(SQFDataType.String),
                    SQFArray.ofAnyOfThese([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ],
                SQFDataType.Boolean,
                SQFDataType.String,
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
                SQFDataType.Object,
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
                SQFArray.ofOneOfThese([
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ]),
                SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFArray.of(SQFDataType.String),
                ]),
                SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFArray.of(SQFDataType.String),
                ]),
                SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFArray.of(SQFDataType.String),
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
            type: SQFSyntaxType.UnscheduledFunction,
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
        tags: [SQFCompletionItemTag.Deprecated],
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
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_startTimeline: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(kiskaTimelineEventType),
                kiskaCallbackType,
            ]),
        },
    },
    KISKA_fnc_stopTimeline: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                kiskaCallbackType,
            ]),
        },
    },
    KISKA_fnc_addArsenal: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
            ]),
        },
    },
    KISKA_fnc_addKiskaDiaryEntry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.DiaryRecord,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    [
                        SQFDataType.String,
                        SQFArray.ofExactly([
                            SQFDataType.String,
                            SQFDataType.String,
                            SQFDataType.String,
                        ]),
                    ],
                    SQFDataType.Task,
                    SQFDataType.String,
                    SQFDataType.Boolean,
                ],
            ]),
        },
    },
    KISKA_fnc_addMagRepack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_addProximityPlayerAction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.Object,
                    SQFDataType.Position2d,
                    SQFDataType.PositionAGL,
                ],
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_addTeleportAction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                [SQFDataType.PositionWorld, SQFDataType.Object],
                [SQFDataType.String, SQFDataType.StructuredText],
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_alivePlayers: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Object),
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
    },
    KISKA_fnc_balanceHeadless: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_callBack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.Any),
                kiskaCallbackType,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_classTurretsWithGuns: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
    },
    KISKA_fnc_clearCargoGlobal: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
    },
    KISKA_fnc_countdown: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_datalinkMsg: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                        [SQFDataType.Color, SQFDataType.ColorAlpha],
                    ]),
                ],
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_deleteAtArray_interface: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                [
                    SQFDataType.Namespace,
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.Location,
                    SQFDataType.Control,
                    SQFDataType.Display,
                ],
            ]),
        },
    },
    KISKA_fnc_deleteAtArray: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                [
                    SQFDataType.Namespace,
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFDataType.Location,
                    SQFDataType.Control,
                    SQFDataType.Display,
                ],
            ]),
        },
    },
    KISKA_fnc_deleteRandomIndex: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
    },
    KISKA_fnc_doMagRepack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_errorNotification: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                        [SQFDataType.Color, SQFDataType.ColorAlpha],
                    ]),
                    SQFArray.of(
                        SQFArray.of([
                            [
                                SQFDataType.String,
                                SQFDataType.Number,
                                [SQFDataType.Color, SQFDataType.ColorAlpha],
                            ],
                        ])
                    ),
                ],
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_exportSpawnPositions: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Number, SQFDataType.String],
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_findConfigAny: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.String),
            ]),
        },
    },
    KISKA_fnc_findIfBool: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFCode.returns(SQFDataType.Boolean),
                SQFArray.of(SQFDataType.Any),
            ]),
        },
    },
    KISKA_fnc_getContainerCargo: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
    },
    KISKA_fnc_getCurrentWaypoint: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Waypoint,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
            ]),
        },
    },
    KISKA_fnc_getFromNetId: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: [SQFDataType.Object, SQFDataType.Group],
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_getMissionLayerObjects: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Object),
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.String, SQFDataType.Number],
            ]),
        },
    },
    KISKA_fnc_getMostSpecificCfgValue: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: [
                SQFDataType.Nothing,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.String,
            ],
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFArray.of(SQFDataType.Config),
                SQFArray.ofAnyOfThese([
                    SQFDataType.Array,
                    SQFDataType.Number,
                    SQFDataType.String,
                ]),
                SQFArray.ofAnyOfThese([
                    SQFDataType.Array,
                    SQFDataType.Number,
                    SQFDataType.String,
                ]),
            ]),
        },
    },
    KISKA_fnc_getNearestIncriment: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_getRelativeVectorAndPos: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.ofExactly([
                SQFDataType.PositionRelative,
                SQFDataType.Vector,
                SQFDataType.Vector,
            ]),
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Object,
            ]),
        },
    },
    KISKA_fnc_getVariableTarget_sendBack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.Namespace,
                    SQFDataType.Object,
                    SQFDataType.String,
                    SQFDataType.Group,
                    SQFDataType.Control,
                    SQFDataType.Location,
                ],
                SQFDataType.String,
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Any,
            ]),
        },
    },
    KISKA_fnc_getVariableTarget: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                [
                    SQFDataType.Namespace,
                    SQFDataType.Object,
                    SQFDataType.String,
                    SQFDataType.Group,
                    SQFDataType.Control,
                    SQFDataType.Location,
                ],
                SQFDataType.Any,
                [SQFDataType.Number, SQFDataType.Object, SQFDataType.String],
            ]),
        },
    },
    KISKA_fnc_getVectorToTarget: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.ofExactly([
                SQFDataType.Vector,
                SQFDataType.Vector,
            ]),
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.PositionASL],
                [SQFDataType.Object, SQFDataType.PositionASL],
            ]),
        },
    },
    KISKA_fnc_hintDiary: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.DiaryRecord,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_idCounter: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
    },
    KISKA_fnc_isAdminOrHost: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_isGroupAlive: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Group, SQFDataType.Object],
            ]),
        },
    },
    KISKA_fnc_isMainMenu: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_isPatchLoaded: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
    },
    KISKA_fnc_log: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Any,
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_markBorder: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Object),
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.PositionASL, SQFDataType.Object],
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_markPositions: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.ofOneOfThese([
                SQFDataType.Object,
                SQFDataType.EdenEntity,
            ]),
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.Position),
            ]),
        },
    },
    KISKA_fnc_monitorFPS: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_netId: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Group],
            ]),
        },
    },
    KISKA_fnc_notification: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                        [SQFDataType.Color, SQFDataType.ColorAlpha],
                    ]),
                    SQFArray.of(
                        SQFArray.ofExactly([
                            SQFDataType.String,
                            SQFDataType.Number,
                            [SQFDataType.Color, SQFDataType.ColorAlpha],
                        ])
                    ),
                ],
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.ColorAlpha,
            ]),
        },
    },
    KISKA_fnc_notify: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.String,
                    SQFDataType.StructuredText,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                        [SQFDataType.Color, SQFDataType.ColorAlpha],
                    ]),
                    SQFArray.of(
                        SQFArray.ofExactly([
                            SQFDataType.String,
                            SQFDataType.Number,
                            [SQFDataType.Color, SQFDataType.ColorAlpha],
                        ])
                    ),
                ],
                [
                    SQFDataType.String,
                    SQFDataType.StructuredText,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                        [SQFDataType.Color, SQFDataType.ColorAlpha],
                    ]),
                    SQFArray.of(
                        SQFArray.ofExactly([
                            SQFDataType.String,
                            SQFDataType.Number,
                            [SQFDataType.Color, SQFDataType.ColorAlpha],
                        ]),
                        SQFArrayComparator.OneOf
                    ),
                ],
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_playDrivePath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                [
                    SQFArray.ofAnyOfThese([
                        SQFDataType.PositionATL,
                        SQFArray.ofExactly([
                            SQFDataType.Number,
                            SQFDataType.Number,
                            SQFDataType.Number,
                            SQFDataType.Number,
                        ]),
                    ]),
                ],
            ]),
        },
    },
    KISKA_fnc_recordDrivePath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_pushBackToArray_interface: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                [
                    SQFDataType.Namespace,
                    SQFDataType.Group,
                    SQFDataType.Object,
                    SQFDataType.Location,
                    SQFDataType.Control,
                    SQFDataType.Display,
                ],
            ]),
        },
    },
    KISKA_fnc_pushBackToArray: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                [
                    SQFDataType.Namespace,
                    SQFDataType.Group,
                    SQFDataType.Object,
                    SQFDataType.Location,
                    SQFDataType.Control,
                    SQFDataType.Display,
                ],
            ]),
        },
    },
    KISKA_fnc_randomIndex: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
    },
    KISKA_fnc_reassignCurator: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Array, SQFDataType.String],
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_remoteReturn_receive: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_remoteReturn_send: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                [SQFDataType.Number, SQFDataType.Object, SQFDataType.String],
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_removeArsenal: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
            ]),
        },
    },
    KISKA_fnc_removeBISArsenalAction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
    },
    KISKA_fnc_removeMagRepack: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_removeProximityPlayerAction: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
    },
    KISKA_fnc_selectRandom: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFArray.ofExactly([SQFDataType.Any, SQFDataType.Number]),
                    SQFArray.of(SQFDataType.Any),
                ],
                SQFDataType.Any,
            ]),
        },
    },
    KISKA_fnc_setContainerCargo: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                [SQFDataType.Object, SQFDataType.Array],
            ]),
        },
    },
    KISKA_fnc_setRelativeVectorAndPos: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Object,
                SQFArray.ofExactly([
                    SQFDataType.PositionRelative,
                    SQFDataType.Vector,
                    SQFDataType.Vector,
                ]),
            ]),
        },
    },
    KISKA_fnc_setupMultiKillEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.Object),
                kiskaCallbackType,
                SQFDataType.Number,
                kiskaCallbackType,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_showHide: {
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
                SQFDataType.Boolean,
                SQFDataType.Boolean,
            ]),
        },
        server: true,
    },
    KISKA_fnc_staticLine_eject: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_staticLine: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                [
                    SQFDataType.Object,
                    SQFDataType.Group,
                    SQFArray.ofAnyOfThese([
                        SQFDataType.Object,
                        SQFDataType.Group,
                    ]),
                ],
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_str: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Any]),
        },
    },
    KISKA_fnc_vehicleFactory: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                [SQFDataType.Object, SQFDataType.PositionASL],
                [SQFDataType.String, SQFArray.of(SQFDataType.String)],
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
    },
    KISKA_fnc_waitUntil: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                kiskaCallbackType,
                kiskaCallbackType,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_GCH_addDiaryEntry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_GCH_addGroupEventhandlers: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Group]),
        },
    },
    KISKA_fnc_GCH_addMissionEvents: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_GCH_assignTeam: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
    },
    KISKA_fnc_GCH_getPlayerSide: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Side,
        },
    },
    KISKA_fnc_GCH_getSelectedGroup: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Group,
        },
    },
    KISKA_fnc_GCH_getSideGroups: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFArray.of(SQFDataType.Group),
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
    },
    KISKA_fnc_GCH_groupDeleteQuery: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Boolean,
            ]),
        },
        server: true,
    },
    KISKA_fnc_GCH_isAllowedToEdit: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Group, SQFDataType.Object],
            ]),
        },
    },
    KISKA_fnc_GCH_isGroupExcluded: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: [SQFDataType.Boolean, SQFDataType.Nothing],
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_GCH_isOpen: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_GCH_openDialog: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_GCH_setGroupExcluded: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Boolean,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_GCH_setLeaderRemote: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Object,
            ]),
        },
        server: true,
    },
    KISKA_fnc_GCH_updateCurrentGroupSection: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.Boolean,
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_GCH_updateSideGroupsList: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
    },
    KISKA_fnc_GCHOnLoad_assignTeamCombo: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_canBeDeletedCombo: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_canRallyCombo: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_closeButton: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_joinGroupButton: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_leaveGroupButton: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_setGroupIdButton: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_setLeaderButton: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_showAiCheckbox: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad_sideGroupsList: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
    },
    KISKA_fnc_GCHOnLoad: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
    },
    KISKA_fnc_supportManager_addDiaryEntry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_supportManager_addToPool_global: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ],
            ]),
        },
        effect: SQFEffect.GLOBAL,
    },
    KISKA_fnc_supportManager_addToPool: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [
                    SQFDataType.String,
                    SQFArray.ofExactly([
                        SQFDataType.String,
                        SQFDataType.Number,
                    ]),
                ],
                SQFDataType.Boolean,
            ]),
        },
        effect: SQFEffect.LOCAL,
    },
    KISKA_fnc_supportManager_onLoad: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
    },
    KISKA_fnc_supportManager_openDialog: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_supportManager_removeFromPool_global: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        effect: SQFEffect.GLOBAL,
    },
    KISKA_fnc_supportManager_removeFromPool: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        effect: SQFEffect.LOCAL,
    },
    KISKA_fnc_supportManager_store_buttonClickEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_supportManager_take_buttonClickEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_supportManager_updateCurrentList: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_supportManager_updatePoolList: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_traitManager_addDiaryEntry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_traitManager_addToPool_global: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        effect: SQFEffect.GLOBAL,
    },
    KISKA_fnc_traitManager_addToPool: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        effect: SQFEffect.LOCAL,
    },
    KISKA_fnc_traitManager_onLoad_traitPool: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
    },
    KISKA_fnc_traitManager_onLoad: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
    },
    KISKA_fnc_traitManager_openDialog: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_traitManager_removeFromPool_global: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        effect: SQFEffect.GLOBAL,
    },
    KISKA_fnc_traitManager_removeFromPool: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        effect: SQFEffect.LOCAL,
    },
    KISKA_fnc_traitManager_store_buttonClickEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_traitManager_take_buttonClickEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_traitManager_updateCurrentList: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_traitManager_updatePoolList: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_VDL_addOpenGuiDiaryEntry: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_VDL_controlsGroup_onLoad: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.String,
            ]),
        },
    },
    KISKA_fnc_VDL_onLoad: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
    },
    KISKA_fnc_VDL_openDialog: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_viewDistanceLimiter: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
                SQFDataType.Number,
            ]),
        },
        effect: SQFEffect.LOCAL,
    },
    KISKA_fnc_exportLoadouts: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFArray.of(SQFDataType.Object)],
                SQFDataType.Boolean,
            ]),
        },
    },
    KISKA_fnc_ambientAnim_getAttachToLogicGroup: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Group]),
        },
    },
    KISKA_fnc_ambientAnim_getAttachLogicGroupsMap: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.HashMap,
        },
    },
    KISKA_fnc_ambientAnim_getNearestAttachLogicGroup: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Object, SQFDataType.Position2d],
            ]),
            returnTypes: SQFDataType.Group,
        },
    },
    KISKA_fnc_ambientAnim_setStoredLoadout: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.UnitLoadout,
            ]),
        },
    },
    KISKA_fnc_bases_initReinforceFromClass: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([
                [SQFDataType.Group, SQFArray.of(SQFDataType.Group)],
                SQFDataType.Config,
            ]),
        },
    },
    KISKA_fnc_GCH_doesGroupHaveAnotherPlayer: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Group]),
            returnTypes: SQFDataType.Boolean,
        },
    },
    KISKA_fnc_GCH_dontExcludePlayerGroupDefault: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_initDynamicSimConfig: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_resetMove: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_addVehicle: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Number,
            ]),
            returnTypes: SQFDataType.Number,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_addVehicleKilledEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_clearVehicleDebugFollowedPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_clearVehicleDebugFollowPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_create: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFArray.of(SQFDataType.Object),
                SQFDataType.Boolean,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_delete: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.HashMap]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getBumperPosition: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
            returnTypes: SQFDataType.PositionWorld,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getConvoyHashMapFromVehicle: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.HashMap,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getConvoyLeader: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.HashMap]),
            returnTypes: SQFDataType.Object,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getConvoyStatemachine: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.HashMap]),
            returnTypes: SQFDataType.Location,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getConvoyVehicles: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Number,
            ]),
            returnTypes: SQFArray.of(SQFDataType.Object),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getDefaultSeperation: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.HashMap]),
            returnTypes: SQFDataType.Number,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getPointBuffer: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.HashMap]),
            returnTypes: SQFDataType.Number,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleAtIndex: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
                SQFDataType.Number,
            ]),
            returnTypes: SQFDataType.Object,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleDebugFollowedPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFArray.of(SQFDataType.Object),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleDebugFollowPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFArray.of(SQFDataType.Object),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleDebugMarkerType_followedPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.String,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleDebugMarkerType_followPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.String,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleDrivePath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFArray.of(SQFDataType.PositionATL),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleIndex: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.Number,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleKilledEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.Code,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleLastAddedPoint: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: [SQFDataType.PositionATL, SQFDataType.Nothing],
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_getVehicleSeperation: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.Number,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_handleDeadDriver_default: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.HashMap,
                SQFDataType.Object,
                SQFDataType.Object,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_handleUnconsciousDriver_default: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.HashMap,
                SQFDataType.Object,
                SQFDataType.Object,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_handleVehicleCantMove_default: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.HashMap,
                SQFDataType.Object,
                SQFDataType.Object,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_handleVehicleKilled_default: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.HashMap,
                SQFDataType.Object,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_isVehicleInDebug: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_modifyVehicleDrivePath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFArray.of(SQFDataType.PositionATL),
            ]),
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_onEachFrame: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFDataType.Object,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_removeVehicle: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_removeVehicleKilledEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setDefaultSeperation: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setPointBuffer: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setVehicleDebug: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setVehicleDebugMarkerType_followedPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setVehicleDebugMarkerType_followPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setVehicleDriveOnPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setVehicleKilledEvent: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFCode.returns(SQFDataType.Nothing).takes(
                    SQFArray.ofExactly([
                        SQFDataType.Object,
                        SQFDataType.Object,
                        SQFDataType.Object,
                    ])
                ),
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_setVehicleSeperation: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_shouldVehicleDriveOnPath: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
            ]),
            returnTypes: SQFDataType.Boolean,
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_stopVehicle: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
        },
    },
    KISKA_fnc_convoy_syncLatestDrivePoint: {
        grammarType: SQFGrammarType.Function,
        syntaxes: {
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.HashMap,
            ]),
            type: SQFSyntaxType.UnscheduledFunction,
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
