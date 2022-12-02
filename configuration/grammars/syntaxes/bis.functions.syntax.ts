import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
	SQFArray,
    SQFDataType,
	SQFEffect,
	SQFArgument,
    SQFArrayComparator,
} from "../sqf.namespace";

export const bisFunctionSyntaxes: IJSON<PreCompiledSQFItem> = {
    BIS_fnc_areEqual: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Any]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_swapVars: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_variableSpaceAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_variableSpaceRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setServerVariable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getServerVariable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Nothing,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_loadFunctions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_selectRandomWeighted: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Array,
                    SQFDataType.Number,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_findNestedElement: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_returnNestedElement: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setNestedElement: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeNestedElement: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_maxDiffArray: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeIndex: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Array,
                    SQFDataType.Number,
                    SQFDataType.Nothing,
                ]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Array,
                    SQFDataType.Number,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_randomIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayPush: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayPushStack: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayPop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayShift: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayUnShift: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayCompare: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayFindDeep: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_conditionalSelect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_subSelect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayInsert: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_classWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_classMagazine: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_returnConfigEntry: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Nothing,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_returnParents: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fps: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_relativeDirTo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_relPos: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Position,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_distance2D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Position2d,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_distance2Dsqr: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getLineDist: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_inv: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invCodeToArray: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invSlots: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invSlotsEmpty: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_invSlotType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_findSafePos: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position2d,
                SQFDataType.Position3d,
                SQFDataType.Object,
                SQFDataType.Nothing,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Location,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getFactions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Nothing,
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Side,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_inTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Location,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isPosBlacklisted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_listPlayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_posToGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_nearestPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Location,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_createMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_colorRGBtoHTML: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addEvidence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_threat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_commsMenuCreate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_commsMenuToggleVisibility: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_commsMenuToggleAvailability: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_version: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_randomNum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_randomInt: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arithmeticMean: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_geometricMean: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_cutDecimals: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_greatestNum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_lowestNum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_nearestNum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sortNum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_roundNum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_parseNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isInFrontOf: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setPitchBank: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getPitchBank: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_sceneGetParticipants: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Nothing,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneGetPositionByAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneSetPosFormation: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneSetAnimationsForGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneSetBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneCreateSceneTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Side,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_miscAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.Number,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneRotate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneSetObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneGetObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneMiscStuff: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_zzRotate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneCheckWeapons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneCreateSoundEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneAreaClearance: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sceneIntruderDetector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_transportService: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_supplydropService: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_supplydrop: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Nothing,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_crossProduct: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dotProduct: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_magnitude: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_magnitudeSqr: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_vectorMultiply: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_vectorDiff: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_vectorAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_vectorFromXToY: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_absSpeed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_returnGroupComposition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawnCrew: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Boolean,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_selectCrew: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskAttack: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_returnVehicleTurrets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectsMapper: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Position2d,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_findExtreme: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_configViewer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Config,
                SQFDataType.Boolean,
                SQFDataType.Code,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_AAN: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.StructuredText]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_infoText: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_halo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_music: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boundingBoxCorner: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boundingBoxMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boundingBoxDimensions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boundingCircle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitCapture: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitCaptureFiring: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitCaptureSimple: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitPlay: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Nothing,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitPlaySimple: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Group,
                SQFDataType.Namespace,
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitPlayFiring: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_FTLmanager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spotter: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_linearConversion: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_customGPSVideo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawnEnemy: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Side,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientBoats: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientHelicopters: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientPlanes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_ambientBlacklist: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientBlacklistAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientPostprocess: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_kbTell: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
                SQFDataType.Object,
                SQFDataType.Code,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_kbTellLocal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_kbMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbSentence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbTopicConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbPriority: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbCanSpeak: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbSkip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbCreateDummy: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_kbIsSpeaking: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_genericSentenceInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_dbSymbolClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbSymbolValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbIsClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbIsValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassId: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassSet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassCheck: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassReturn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbClassList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueId: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueSet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueCheck: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueReturn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbValueList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbImportConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbImportXML: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbConfigPath: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dbPrint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_errorMsg: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_functionsDebug: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GCinit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_shutdown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getIDD: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GUIeditor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GUIbackground: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Display,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GUIhint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GUIgrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GUIgridToProfile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GUInewsfeed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camFollow: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayControls: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayResize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayClouds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayMission: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Display,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_overviewTimeTrial: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_overviewMission: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_overviewAuthor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_overviewTerrain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_overviewDifficulty: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diaryHints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diaryMaps: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_HUDLimits: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Position,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_credits: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_titleText: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.StructuredText,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ctrlTextHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_shakeGauges: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_helicopterDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_helicopterCanFly: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_helicopterSeat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_helicopterSeatMove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_helicopterType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_helicopterGetHitpoints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_KMLimport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_noFlyZonesCreate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_noFlyZonesExport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_noFlyZone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_keypointsExport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_keypointsExportFromKML: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_worldArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_randomPos: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Location,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_randomPosTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Location,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_markerCreate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_markerParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_markerPath: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Waypoint,
                SQFDataType.Object,
                SQFDataType.Location,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_nearestHelipad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_onLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Code,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_onEnd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Code,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_counter: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isLocalized: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_roundDir: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_saveGame: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_position: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.String,
                SQFDataType.EdenEntity,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_assignPlayerRole: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_convertUnits: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moveIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_setHeight: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.Number,
                    SQFDataType.Position,
                    SQFDataType.String,
                ]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Number,
                    SQFDataType.String,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_playerName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_singleMissionName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_singleMissionConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_singleMissionKeys: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_MPexec: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_numberDigits: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_numberText: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_radioSetChannel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_radioSetPlaylist: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_radioSetTrack: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_secondsToString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_packStaticWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Nothing,
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unpackStaticWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientFlyby: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Side,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientAnimCombat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ambientAnimGetParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animalBehaviour: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sortBy: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Code,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arrayShuffle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_updatePlayerArray: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_consolidateArray: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_findInPairs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getFromPairs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Nothing,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addToPairs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Nothing,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeFromPairs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setToPairs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sortAlphabetically: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_briefingAnimate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_briefingInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_enemyTargets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_enemyDetected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_configPath: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Config,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_subClasses: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_uniqueClasses: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_loadClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_loadEntry: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitAddon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgIsClass: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Array,
                    SQFDataType.String,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgSubClasses: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgDataArray: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgDataObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgDataBool: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Boolean,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgData: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfgDataPool: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_functionMeta: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_cameraOld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isDemo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animViewer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_preload: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagAAR: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagAARrecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagHit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagRadio: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMissionWeapons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMissionPositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagPreview: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagPreviewVehicleCrew: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagPreviewCycle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Array,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagKeyTest: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagWiki: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagVehicleIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagLoop: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Code,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_locWeaponInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagKnownTargets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagKnownAsTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagBulletCam: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacros: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacrosVerify: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacrosMapSize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacrosNameSound: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacrosAuthor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagFindMissingAuthors: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportGroupFormations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgWeapons: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgMagazines: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgPatches: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgHints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_importImageLinks: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportFunctionsToWiki: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFired: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectKilled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectPlankton: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_effectFiredLongSmoke: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredRifle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Nothing,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_effectFiredArtillery: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredRocket: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredSmokeLauncher: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredSmokeLauncher_boat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredFlares: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredHeliRocket: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectKilledAirDestruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_effectKilledAirDestructionStage2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectKilledSecondaries: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_setPPeffectTemplate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_feedbackMain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bloodEffect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_damageChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_damagePulsing: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dirtEffect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_fatigueEffect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_feedbackInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_flamesEffect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_healing: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_incapacitatedEffect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_indicateBleeding: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_radialRed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_radialRedOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_relScaledDist: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_terrainGradAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isInsideArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_relPosObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_groupIndicator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_guiEffectTiles: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_cinemaBorder: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_textTiles: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.StructuredText,
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_titlecard: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedEffects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedSetSource: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedSetTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedTerminate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_establishingShot: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Position,
                SQFDataType.Group,
                SQFDataType.Nothing,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_ctrlFitToTextHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setIDCStreamFriendly: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Control,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_typeText: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_typeText2: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_ctrlSetScale: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_credits_movie: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_credits_movieConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_credits_movieSupport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showUnitInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_toUpperDisplayTexts: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_createLogRecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_quotations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showMarkers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isInZoom: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_advHintArg: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_advHintCall: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_advHintCredits: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_itemType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_basicBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_loadInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Config,
                SQFDataType.Array,
                SQFDataType.Namespace,
                SQFDataType.Group,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_markWaypoints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_markerToTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_triggerToMarker: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_exportMapToBiTXT: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_basicTask: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionTasks: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionTasksLocal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionConversations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionConversationsLocal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isCampaign: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionHandlers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_trackMissionTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_forceEnd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fadeEffect: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_findOverwatch: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Position,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position3d,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_onDiaryChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_colorRGBAtoHTML: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_rankParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_colorRGBAtoTexture: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_healthEffects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_textureMarker: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_textureVehicleIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_localize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_colorConfigToRGBA: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_keyCode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addScriptedEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.Boolean,
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.String,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_callScriptedEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.Boolean,
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_startLoadingScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_endLoadingScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_progressLoadingScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_groupVehicles: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_nearestRoad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_refreshCommMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_interpolateWeather: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_jukebox: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fixDate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isLeapYear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_monthDays: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_blackOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_blackIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_executeStackedEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initExpo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_enableSaving: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_disableSaving: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_earthquake: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_initModules: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleModules: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTriggers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleUnits: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleExecute: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initMultiplayer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_execFSM: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_execVM: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.ScriptHandle,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.ScriptHandle,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Any,
                    SQFDataType.String,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_execRemote: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addScore: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_setRespawnDelay: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_onPlayerConnected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Code,
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initPlayable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionTimeLeft: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_countdown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Nothing,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_filterString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_inString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ordinalNumber: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_romanNumeral: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_phoneticalWord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_teamColor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Color,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_alignTabs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_splitString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_trimString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addSupportLink: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_changeSupportRadioChannel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_limitSupport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeSupportLink: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getTurrets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Config,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_allSynchronizedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setRank: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawnObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.PositionASL,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectHeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_crewCount: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addClassOO: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_createObjectOO: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_validateParametersOO: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getParamValue: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFDataType.Number,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramDaytime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_paramWeather: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_paramCountdown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_paramRespawnTickets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramGuerFriendly: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_ORBATOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Display,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Display,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATAnimate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATTooltip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Array,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATSetGroupFade: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATSetGroupParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATGetGroupParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATAddGroupOverlay: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATRemoveGroupOverlay: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ORBATConfigPreview: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Config]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_strategicMapOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Display,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Code,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Config,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_strategicMapAnimate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_strategicMapMouseButtonClick: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setUnitInsignia: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_getUnitInsignia: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_selectRespawnTemplate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initRespawn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setRespawnInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Side,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getRespawnInventories: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Side,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getRespawnPositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Side,
                SQFDataType.Namespace,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getRespawnMarkers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionRespawnType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moveToRespawnPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.PositionAGL,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_respawnNone: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnSpectator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnInstant: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnBase: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnGroup: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnSide: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnEndMission: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Nothing,
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnSeagull: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnTimePenalty: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnWave: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnCounter: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnConfirm: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnMenuPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnMenuInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_enemySides: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Side,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_friendlySides: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_areFriendly: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sideID: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sideType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Side,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectSide: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Side,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                ]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Side,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.Boolean,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_playerSideFaction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_instructorFigure: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bleedTickets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setTaskLocal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskVar: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_deleteTask: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Side,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskChildren: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskCompleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskCreate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Side,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskCurrent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskDestination: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Position,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskExists: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskHint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskParent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskReal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Task,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_tasksUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskSetCurrent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskSetDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskSetDestination: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskSetState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_vehicleRoles: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missileLaunchPositionFix: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_scriptedWaypointType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpPatrol: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpRelax: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpArtillery: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpSuppress: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_prepareAO: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFiringDrill: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDCPIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDCPOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDCPClear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDStatsClear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDSkeetDestruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDFadeMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTimeTrial: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTTCPIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTTCPOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTTCPClear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTTCPTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTTStatsClear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTTCPTriggerBehind: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_saveInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Namespace,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_deleteInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Namespace,
                SQFDataType.Group,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_baseWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_arsenal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Boolean,
                SQFDataType.Object,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addVirtualItemCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeVirtualItemCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getVirtualItemCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addVirtualWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeVirtualWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getVirtualWeaponCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addVirtualMagazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeVirtualMagazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getVirtualMagazineCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addVirtualBackpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeVirtualBackpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getVirtualBackpackCargo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_traceBullets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getUnitByUID: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moveAction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_target: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.Position,
                SQFDataType.Boolean,
                SQFDataType.Display,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRDrawBorder: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRDrawGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VREffectKilled: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRFadeIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRFadeOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRSpawnEffect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRSpawnSelector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRTimer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_VRCourseTargetDesignation1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseTargetDesignation2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseTargetDesignation3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseLaunchers1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseLaunchers2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseLaunchers3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCoursePlaceables1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCoursePlaceables2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCoursePlaceables3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseBallistics1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseBallistics2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseBallistics3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseBallistics4: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingMovement1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingMovement2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingBehaviour1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingBehaviour2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingBehaviour3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingVehicles1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingVehicles2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingVehicles3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingActions1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingActions2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseCommandingActions3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animateTaskWaypoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEffectsEmitterCreator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCreateProjectile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEffectsPlankton: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEffectsBubbles: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEffectsShells: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEffectsSmoke: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEffectsFire: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleChat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_moduleDate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSaveGame: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Nothing,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleVolume: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleGenericRadio: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCombatGetIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleGroupID: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTaskCreate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTaskSetDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTaskSetDestination: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTaskSetState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCreateDiaryRecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHQ: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedModuleEffects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedModuleInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedModuleSetSource: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_liveFeedModuleSetTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleZoneRestriction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFriendlyFire: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTrident: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_tridentClient: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_tridentHandleDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_tridentSetRelationship: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_tridentGetRelationship: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_tridentExecute: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Code,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleUnlockObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleUnlockArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRespawnVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleAI: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleAmmo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleDoorOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFuel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_moduleHealth: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_modulePositioning: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRank: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRating: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleShowHide: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSkill: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSimulationManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animalSiteSpawn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_skirmishTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleStrategicMapOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleStrategicMapInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleStrategicMapMission: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleStrategicMapORBAT: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleStrategicMapImage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_modulePoster: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleBootcampStage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_modulePunishment: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleArsenal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleAnimals: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCAS: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCurator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddEditingArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetEditingAreaType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddEditingAreaPlayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddEditableObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetObjectCost: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetCostsVehicleClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetCostsSide: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetCostsDefault: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetCoefs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddPoints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddCameraArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorAddIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCuratorSetAttributes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_modulePostprocess: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSound: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSFX: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTracers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleProjectile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSkiptime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleWeather: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleDiary: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleEndMission: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMissionName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleLightning: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Nothing,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMine: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCoverMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_moduleRadioChannelCreate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRemoteControl: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleZoneProtection: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCountdown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRespawnTickets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleBleedTickets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjective: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveMove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveFind: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveSector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveGetIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRespawnPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleRespawnInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveRaceStart: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveRaceCP: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleObjectiveRaceFinish: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_forceCuratorInterface: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isForcedCuratorInterface: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorObjectRegistered: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Code,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorObjectRegisteredTable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_registerCuratorObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showCuratorFeedbackMessage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isCurator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeDestroyedCuratorEditableObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorPinged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorWaypointPlaced: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorObjectPlaced: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorObjectEdited: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorAttachObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorRespawn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_manageCuratorAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_listCuratorPlayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addCuratorAreaFromTrigger: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setCuratorVisionModes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorVisionModes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_toggleCuratorVisionMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_mirrorCuratorSettings: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_drawCuratorLocations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawCuratorRespawnMarkers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawCuratorDeaths: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addCuratorIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeCuratorIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isCuratorEditable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorAutomatic: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Side,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorAutomaticPositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setCuratorAttributes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorAttributes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showCuratorAttributes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initCuratorAttribute: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setCuratorCamera: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_shakeCuratorCamera: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorHint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Control,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorSayMessage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCuratorCostTable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addCuratorChallenge: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_finishCuratorChallenge: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_manageCuratorChallenges: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_formatCuratorChallengeObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_completedCuratorChallengesCount: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorChallengeFireWeapon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorChallengeGetInVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorChallengeDestroyVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorChallengeFindIntel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorChallengeSpawnLightning: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_curatorChallengeIlluminate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setOvercast: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setFog: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_setDate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_locationDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Position]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawAO: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawMinefields: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawRespawnPositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_activateAddons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_playEndMusic: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_neutralizeUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isLoading: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isUnitVirtual: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgGroups: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sayMessage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Side,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_playSound: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_playMusic: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setObjectTexture: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_estimatedTimeLeft: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initIntelObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initVirtualUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initRespawnBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnRounds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnMenuSpectator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMPTypeDefense: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMPTypeSeize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMPTypeSectorControl: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMPTypeGameMaster: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_genericSentence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Code,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_halt: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_functionPath: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_GC: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_PIP: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Position3d,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayColorSet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Display,
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayColorGet: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_displayLoading: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_posDegToWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_posUTMToDeg: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_customGPS: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_3Dcredits: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.StructuredText,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_dirIndicator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Code,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_playVideo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_sandstorm: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_crows: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_destroyCity: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    BIS_fnc_flies: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_selectRandom: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_help: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Display]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_recompile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dirTo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_locations: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFDataType.Array,
                    SQFDataType.Boolean,
                ]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Object,
                    SQFDataType.Location,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_rotateVector2D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawnGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Group,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Side,
                SQFDataType.Number,
                SQFDataType.Config,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawnVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Side,
                SQFDataType.Group,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskPatrol: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Position,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskDefend: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_rscLayer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Nothing,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagKeyLayout: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_error: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_customGPSvideo: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_logFormat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgVehicles: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Side,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showNotification: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_advHint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addCommMenuItem: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_removeCommMenuItem: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_loop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Code,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_runLater: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_buildingPositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isBuildingEnterable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addStackedEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_removeStackedEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_call: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Any,
                    SQFDataType.Code,
                ]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Any,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Code]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawn: {
        syntaxes: [
            {
                type: SQFSyntaxType.ScheduledFunction,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Any,
                    SQFDataType.Code,
                ]),
            },
            {
                type: SQFSyntaxType.ScheduledFunction,
                returnTypes: SQFDataType.Nothing,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.Code]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectVar: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_addRespawnInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Side,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_removeRespawnInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Side,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_addRespawnPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Side,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.PositionATL,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_removeRespawnPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Side,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_respawnTickets: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Number,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.Namespace,
                    SQFDataType.Side,
                    SQFDataType.Group,
                    SQFDataType.Object,
                    SQFDataType.Number,
                    SQFDataType.Boolean,
                ]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Number,
            },
        ],
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_sideName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setTask: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Side,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_param: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Any,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Nothing,
                SQFDataType.Namespace,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_log: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Any]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_codePerformance: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Number,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_missionFlow: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showMissionStatus: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_setMissionStatusSlot: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_configExtremes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Config,
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_didJIP: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_openFieldManual: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_unitHeadgear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_initVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_sideIsFriendly: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sideIsEnemy: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Side]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_netId: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectFromNetId: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_groupFromNetId: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Group,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportEditorPreviews: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Side,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskAlwaysVisible: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_sunriseSunsetTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportConfigHierarchy: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_endMissionServer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    BIS_fnc_ambientAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeScriptedEventHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.Boolean,
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animateFlag: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_setHitPointDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Location,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_admin: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animalRandomization: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_findAllNestedElements: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fireSupport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Position,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fireSupportCluster: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Nothing,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fireSupportVirtual: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_stalk: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.Boolean,
                SQFDataType.String,
                SQFDataType.Position,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_weaponsEntityType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_magazinesEntityType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCfg: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlConfigs: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showWelcomeScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_versionInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportGUIBaseClasses: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_advHintFormat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_limitAmmunition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_limitItems: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_limitWeaponItems: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_disableLoading: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_gridToPos: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_encodeFlags: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_decodeFlags: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_deleteCounter: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_deleteVehicleCrew: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setIdentity: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_setObjectRotation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_cargoTurretIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_storeParamsValues: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_paramReviveUnconsciousStateMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveDuration: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveRequiredTrait: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveRequiredItems: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveMedicSpeedMultiplier: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveBleedOutDuration: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramReviveForceRespawnDuration: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuDisableItemDraw: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuDisableItemCheck: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuHeader: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryDetails: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryItems: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryLimit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryLimitRefresh: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryLimitRespawn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryLoadout: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuInventoryMetadata: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionMapDraw: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionMapHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionMetadata: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showRespawnMenuPositionRefresh: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sideNameUnlocalized: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Side,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sharedObjectives: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_areEqualNotNil: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Any,
                SQFDataType.Nothing,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDBalloonAirDestruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleFDBalloonWaterDestruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRHitpart: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliBasics1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliBasics2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliBasics3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliSlingload1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliAdvanced1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliAdvanced2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliAdvanced3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliAdvanced4: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliAdvanced5: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliAdvanced6: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliWeapons1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliWeapons2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliWeapons3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseHeliWeapons4: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramViewDistance: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_synchronizedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ffvUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMPTypeGroundSupport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleMPTypeGroundSupportBase: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_baseVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_garage3DEN: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initVehicleCrew: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initVehicleKart: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_loadVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Namespace,
                SQFDataType.Group,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_saveVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Namespace,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setVehicleMass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_getVehicleCustomization: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingA1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingA2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingA3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingB1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingB2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingB3: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingC2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_VRCourseWeaponHandlingC1: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getIntersectionsUnderCursor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Object,
                SQFDataType.Boolean,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getObjectBBD: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getNetMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_lerp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getAngleDelta: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGObjectiveVisualizer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGObjectiveVisualizerDraw: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectator: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorCameraTick: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorCameraSetTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorCameraResetTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorCameraPrepareTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorDraw2D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorDraw3D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EGSpectatorGetUnitsToDraw: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dataTerminalAnimate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dataTerminalColor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENExportOldSQM: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENExportTerrainBuilder: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENVisionMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENToolbar: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENCamera: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENInterface: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENModuleDescription: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENDrawLocations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENListLocations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENMissionPreview: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENStatusBar: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENTutorial: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENEntityMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENControlsHint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENShowMessage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Display,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Code,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENFlashlight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENIntel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENDiagCreateList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENDiagFonts: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENDiagMouseControl: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENExportAttributes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initAmmoBox: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_highlightControl: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Control,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initListNBoxSorting: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01Init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01PosUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01EdenInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01EdenDelete: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01AnimateDeflectors: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_carrier01CatapultActionAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01CatapultActionRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01CatapultLockTo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01CatapultID: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01CrewPlayAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carrier01CrewInAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_aircraftTailhook: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_aircraftCatapultLaunch: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_aircraftSystemsInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_aircraftWingStateCheck: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_planeEjection: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_planeAiEject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_planeEjectionFX: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_ejectionSeatRelease: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_allTurrets: {
        syntaxes: [
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
            },
            {
                type: SQFSyntaxType.UnscheduledFunction,
                returnTypes: SQFDataType.Array,
                leftOperandTypes: SQFArray.ofExactly([
                    SQFDataType.String,
                    SQFDataType.Boolean,
                ]),
            },
        ],
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawArrow: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Control,
                SQFDataType.Display,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_fire: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_initLeaflet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getCloudletParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_createRuin: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showAANArticle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Display,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Display,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setObjectShotParents: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_firedBombDemine: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_carAlarm: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_smoothStep: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initInspectable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpDemine: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Group,
                SQFDataType.Position,
                SQFDataType.Any,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_compatibleItems: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_mapSize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_exportCfgVehiclesAssetDB: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Side,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectsGrabber: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initDisplay: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Display,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_holdActionAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.StructuredText,
                SQFDataType.Code,
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_nearestPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Position,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Position,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_posDegToUTM: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_HEXtoRGB: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_compareDateTimes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_calculateDateTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isDateTimeNewer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_setSkill: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_priorityQueue_Init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_priorityQueue_PushItem: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_priorityQueue_PopItem: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_priorityQueue_IsEmpty: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_priorityQueue_IsFull: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_priorityQueue_GetHighestPriority: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_priorityQueue_GetLowestPriority: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_debugProfile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_logFormatServer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_errorParamsType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Any,
                SQFDataType.Nothing,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_isDebugConsoleAllowed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_debugConsoleExec: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacrosSimpleObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagMacrosEditorPreview: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagObjectPerformance: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_diagJIRAlink: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_effectFiredCruiseMissile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initWorldScene: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_inventoryExists: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Group,
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_decodeFlags2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_decodeFlags4: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_encodeFlags4: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_decodeFlags8: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_encodeFlags8: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_encodeFlags2: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_synchronizedObjectsQueue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_paramTimeAcceleration: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_rotateVector3D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_multiplySquareMatrixByVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bezierLength: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_clamp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_clampVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_deltaTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_findLookAt: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isEqualVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_pulsate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_pow: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_keyHold: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.Boolean,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_timeline_deleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_cleanup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_finish: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getAlpha: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getCurrentTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getInterpMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getLength: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getPlayRate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getPlayFromStart: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getPlayTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getSimulatedCurves: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getStopTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_getTimeLeft: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_isLooping: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_isPlaying: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_play: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_isReverse: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setPlayRate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setPause: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_isFinished: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_isPaused: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_stop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setLoop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setReverse: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setLength: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_tick: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_setInterpMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_simulateCurves: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_zoomOnArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Control,
                SQFDataType.Nothing,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_showMarkerArray: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_hideMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_hideMarkerArray: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_cancelMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_getMarkerState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_colorMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_rotateMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_resizeMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_changeColorMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_moveMarker: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_blinkMarker: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_shakeMapEH: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_zoomUnlock: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_simpleMoveMarker: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_getMarkers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_shakeMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getBorderMarkers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_eventTimeline: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Code,
                SQFDataType.Nothing,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_zoomLock: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Position2d,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_missionSelector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Position2d,
                SQFDataType.String,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_createTooltip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Config,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_scaleAndTranslate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animatePicture: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_lookAtArray: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_lookAtArrayEH: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animatedScreen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_animatedBriefing: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_animatedOpening: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleVanguardObjective: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleVanguardScorePersistence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleVanguardFob: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSmoothText: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_WLVotingBarHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLVarsInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSyncTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLUpdateAO: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSubroutine_purchaseMenuSetAssetDetails: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSubroutine_purchaseMenuSetItemsList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSubroutine_purchaseMenuRefresh: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSubroutine_purchaseMenuHandleDLC: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSubroutine_purchaseMenuGetUIScale: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSubroutine_purchaseMenuAssetAvailability: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSideToFaction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSeizingBarHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSendResponseTeam: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorTaskHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLShowInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSoundMsg: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorsSetup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorSelectionStart: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorSelectionHandleServer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorsCommonInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorScanHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorIconUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorSelectionEnd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorListing: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorSelectionHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorPopulate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorFundsPayoff: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSectorHandleServer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRequestSectorScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRequestPurchase: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRequestFundsTransfer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRequestFastTravel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLReputation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRemovalHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRandomPosRect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRecalculateServices: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLPurchaseMenu: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLPlayersTrackingServer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLPlayersTracking: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLOutlineIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLOSD: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLMostVotedSector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLLoadoutApply: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLGarrisonRetreat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLInSectorArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLLoadoutGrab: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLDefenceSetup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLDebug: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLOpenArsenal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLDropPurchase: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLAircraftArrival: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLAISectorScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLCalculateSectorConnections: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLAICore: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLCalculateIncome: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLAIPathSegmentation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLFundsInfo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLNavalArrival: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLClientInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLAIPurchases: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLAirdrop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLRequestVotingReset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_randomPosIntersection: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCivilianPresenceSafeSpot: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCivilianPresenceUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleCivilianPresence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_laptopInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_laptopPlayVideo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_CPWaitUntil: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Code,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPSpawnGarrisonGrp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPSendReinforcements: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPSafeAzimuths: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPPickSafeDir: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPLog: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPDummy: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_aircraftTailhookAi: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_CPFindEmptyPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_aircraftFoldingWings: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_boatRack01AdjustZOffset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boatRack01ActionRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boatRack01CanProgressAction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boatRack01InitAdjustZOffsets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boatRack01CanExetuteAction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boatRack01ActionAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_boatRack01Init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01GetShipPart: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01AnimateHangarDoors: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01HandleDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01OperateHangarDoors: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01PlayHangarDoorSound: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01EdenDelete: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01EdenInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01PosUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01Init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_destroyer01InitHullNumbers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_updatePlayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_updateMilitaryEfficiency: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_updateIntel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_updateHostSettings: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_UISettingsManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_UIOverlayManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_UIMissionCountdown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_UIMissionManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_serverPing: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_onUnLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_UIMilitaryManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_playMissionVideo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_serverUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_loop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_launch: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_onLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_findHost: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_go: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_getHostSettings: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_UIProgressManager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_intro: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_clearVars: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_updatePlayerStatus: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_manager_getState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_manager_onPlayerRegistered: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_EXP_camp_addTickets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_manager_setState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_EXP_camp_lobby: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_playTimelineVideo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_EXP_camp_lobby_ctrlSetColor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_manager: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_lobby_getPlayerSquadName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_manager_triggerEvent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_getPlayersGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Group,
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_EXP_camp_initCharacter: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_EXP_camp_guidedProjectile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_EXP_camp_playerChecklist: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Code]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_initClasses: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_EXP_camp_getCinematicMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_hasMissionStarted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENAttributeDoorStates: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_IFF: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Array]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_EXP_camp_lobby_structuredText: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_setCinematicMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_checkpoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_balanceGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHvtInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHvtObjective: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHvtObjectives: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHvtObjectivesInstance: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_replaceVehicles: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
    BIS_fnc_EXP_camp_lobby_missionCountdown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveGet3dIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.StructuredText,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveGetActionIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.StructuredText,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveSecureUnit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_initDifficulty: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_reviveDamageReset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_reviveEhKilled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveEhRespawn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveOnForcingRespawn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveEhHandleHeal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveIconControl: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveDebug: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_disableRevive: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveIsValidSecure: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveOnStateJIP: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveAllowed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveOnBeingRevived: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Nothing,
                SQFDataType.Boolean,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveEhDammaged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reenableRevive: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveEhHandleDamage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveOnState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveIsValid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_reviveBleedOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSlingload: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSpawnAIOptions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSpawnAISectorTactic: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSpawnAIPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSpawnAI: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleTimeMultiplier: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingSlideDoorClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingSlideDoorOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingDoorTwoHandleClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingDoorTwoHandleOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingDoorOneHandleClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingDoorOneHandleOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingDoorNoHandleClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_twoWingDoorNoHandleOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_singleWingSlideDoorClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_singleWingSlideDoorOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_objectInventoryAnimatedClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_objectInventoryAnimatedOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_lockedDoorNoHandleOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_hatchOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_doorOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_lockedDoorOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_doorNoHandleClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_door: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_moduleGrenade: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSupportsInitProviderVirtual: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSimulationManager_grab: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_hatchClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSupportsInitRequester: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_doorClose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_moduleEditTerrainObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleHideTerrainObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSupportsInitProvider: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_mapAnimDone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_moduleSiteInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_mapAnimClear: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_mapAnimAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Position,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_doorNoHandleOpen: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_onMissionPreviewEnd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_onMissionLoad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_onMissionNew: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_onKeyDown: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_onKeyUp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_onSelectionChange: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3den_init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenUnregisteredFromWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenSelectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenReset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenRegisteredToWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenDeleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenConnectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_edenAttributesChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_tick: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_setVisionMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_setCinemaBordersEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_setCam: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_setHUDEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_getHUDEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_getFocus: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_getVisionMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_deleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_getCam: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_getCinemaBordersEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_getFOV: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_setFOV: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_camera_setFocus: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_edenUnregisteredFromWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_edenDragged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_edenAttributesChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_edenIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_edenConnectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenDragged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_getOwnerKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenUnregisteredFromWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_edenRegisteredToWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setInterpMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenRegisteredToWorld: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getLeaveControlPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenConnectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_computeOwnerKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_isArrive: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_computeTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_isFloat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getArriveTangent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setArriveTangentWeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenTick: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenBakeCurve3D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setLeaveTangent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getOwnerCurve: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_setKeys: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenMarkStateDirty: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setLeaveTangentWeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_reset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setArriveTangent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_compute: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenConnectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_isVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getOwnerTimeline: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenAreControlPointsLocked: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_isTimeInSeconds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getKeysAtTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getKeyFromIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenComputeNearestSegment: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getKeyTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_computeOwnerCurve: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getLookAtPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getFOV: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenDragged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getArriveControlPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getLeaveTangent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getTimeRange: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_computeCurveArcLength: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_edenInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getConfigTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getCurveValueVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_edenDeleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getCurvePoints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_edenAttributesChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenDrawCurve3D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_quinticOutVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getInterpMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getPreviousKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_quinticInOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_quinticInOutVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_computeOwnerTimeline: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_slerp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_quinticIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getCurveValueFloat: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_interpolateConstant: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_hermiteVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_easeInVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getSimulatedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenAttributesChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bounceInVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_easeOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getKeys: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_interpolateVectorConstant: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_interpolateVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_quinticInVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_interpolate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_easeInOutVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_compute: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bounceInOutVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_controlPoint_setIsArrive: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_setTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bounceOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getNextKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_edenIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_easeOutVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_keyframeAnimation_init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bezierInterpolateVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_quinticOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_computeKeys: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_edenDragged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getKeyIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_inverseLerp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_setOrientationMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_berp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_hermite: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_clerp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_lerpVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeline_edenConnectionChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_computeSimulatedObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_easeInOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getLeaveTangentWeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenIsSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bounceInOut: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bounceIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_edenDrawControlPoints3D: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_resetKeysEventState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getOrientationMode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_getArriveTangentWeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_berpVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_compute: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_keyframeAnimation_deltaTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getFirstKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bounceOutVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getLastKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_easeIn: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_getCurveLength: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bezierInterpolate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_richCurve_numKeys: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_key_edenAttributesChanged: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLVehicleHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_mapGridSize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Control]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_markerToString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_stringToMarker: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_stringToMarkerLocal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_vehicleCrewTurrets: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_turretConfig: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Config,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLSyncedTime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_respawnBackpack: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_compatibleMagazines: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENMissionStats: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setCustomSoundController: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLArsenalFilter: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_spawnOrdered: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Any,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_parseNumberSafe: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Side,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_WLParseAssetList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_hasItem: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENNotification: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_attachToRelative: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_bitflagsCheck: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitflagsFlip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_adjustSimpleObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitflagsSet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitflagsToArray: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitflagsUnset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitwiseAND: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitwiseNOT: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitwiseOR: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_bitwiseXOR: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_createSimpleObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.PositionASL,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_replaceWithSimpleObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Object,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_sideColor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Side,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_simpleObjectData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_switchLamp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_vectorDirAndUpRelative: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_weaponDirectionRelative: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_timeToString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIS_fnc_transformVectorDirAndUp: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_inAngleSector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpFormation: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpTransport: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpHover: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpSlingLoadDrop: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpRestricted: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpSteady: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpWinchLoad: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Object,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpCheckpoint: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Code]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpSlingLoadAttach: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Boolean,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpTimed: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Code,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpFastRope: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpAngle: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Array,
                SQFDataType.Code,
                SQFDataType.Boolean,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_returnChildren: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.Number,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_wpSlingLoadDetach: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_3DENExportSQF: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Array,
                SQFDataType.Position,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_SITREP: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_holdKey: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Display,
                SQFDataType.Number,
                SQFDataType.Code,
                SQFDataType.Boolean,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_initSliderValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_addLoadedEH: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_savingEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_credits: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_init: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_Module_initSmallValueSilder: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Control,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_EXEC: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_SectorGetSectors: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_BuildSectorsData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_HandleMapControls: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_ModuleQuest_destroyObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_ModuleQuest_defend: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_Epicentrum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleRestPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleMarket: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_saveGame: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_pause: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_skip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_camera: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_AS_ShowStaticText: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_drawBoundingBox: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Object,
                SQFDataType.Color,
                SQFDataType.ColorAlpha,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleSyndikatAgent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleSyndikatTeam: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_SentryDrone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleEconomy: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleRadio: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleSmartMarkers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleAwareness: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleActionQueue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleReputation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_escortAI: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_escortAIHoldAction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OMSetForecastLimit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OMWeatherUICalc: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OMWeatherManagerCore: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OMWeatherManagerMain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OMWeatherManagerRain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OMWeatherReport: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_addContact: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_addCall: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_core: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_incomingCall: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_removeCall: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_SMS: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_SMSSend: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_customSectionInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_customSectionShow: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_customSectionWeatherShow: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_getDiaryListIndexByName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_menuInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_phone_menuHandler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleCheckpoint_handleStates: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleCheckpoint_checkAngleToObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleCheckpoint_checkDistanceFromObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleCheckpoint_intersect: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleCheckpoint_navigateVehicleToCheck: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleCheckpoint_playAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleDepot: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_sellEquipment: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_infectedGroupHandle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_allInfectedDeadCode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_medicineDeliveredCode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_medicineRanOutCode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_warnCriticalCode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_warnMildCode: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleRandomConversation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_conversation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_createConversation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_OM_moduleFastTravel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_vectorDivide: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_removeAllScriptedEventHandlers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Namespace,
                SQFDataType.Object,
                SQFDataType.Group,
                SQFDataType.Location,
                SQFDataType.Boolean,
                SQFDataType.Control,
                SQFDataType.Display,
                SQFDataType.String,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_SOM_addSupportRequestFunc: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Command,
    },
    BIS_fnc_zoomLockEH: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Position]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIN_fnc_getIDWMapParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setIDWMapStaticDataLayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_getAllAreaObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getIDWMapStaticDataLayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_EXP_camp_dynamicAISkill: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIS_fnc_EXP_camp_playSubtitles: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.String,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_getIDC: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Number,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Config,
                SQFDataType.String,
                SQFDataType.Control,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dynamicGroups: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_garage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Any,
                SQFDataType.Boolean,
                SQFDataType.Object,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_isThrowable: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_holdActionRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Object,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_taskSetAlwaysVisible: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Boolean,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_showRespawnMenuDisableItem: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Control,
                SQFDataType.Number,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
    },
    BIS_fnc_taskTypeIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_showSubtitle: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.ScriptHandle,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_taskSetType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        argument: SQFArgument.GLOBAL,
    },
    BIS_fnc_weaponAddon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.String,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_weaponComponents: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_BoatRack01ActionCondition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_selectDiarySubject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.String]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_dynamicText: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.String,
                SQFDataType.Number,
                SQFDataType.Array,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
    },
    BIS_fnc_wpAerobatics: {
        syntaxes: {
            type: SQFSyntaxType.ScheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Boolean,
                SQFDataType.Code,
            ]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIS_fnc_setRain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
            leftOperandTypes: SQFArray.ofExactly([
                SQFDataType.Array,
                SQFDataType.Config,
            ]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.GLOBAL,
        server: true,
    },
};


const bisFunctionsFolder = "./BIS Functions";

const getBISWikiLink = (itemName: string): string => {
    return `https://community.bistudio.com/wiki/${itemName}`;
};

Object.keys(bisFunctionSyntaxes).forEach((command: string) => {
    const item = bisFunctionSyntaxes[command];
    if (!item.documentation) {
        item.documentation = bisFunctionsFolder;
    }
    if (!item.getDocLink) {
        item.getDocLink = getBISWikiLink;
    }
});
