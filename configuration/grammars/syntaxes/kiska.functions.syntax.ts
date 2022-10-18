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
				]
			}
		}
	},
	KISKA_fnc_arty: {
		grammarType: SQFGrammarType.Function,
		syntaxes: {
			type: SQFSyntaxType.ScheduledFunction,
			leftOperandTypes: {
				operation: SQFArrayComparator.Exact,
				types: [
					SQFDataType.Object,
					[SQFDataType.Object,SQFDataType.Position],
					SQFDataType.Number,
					SQFDataType.Number,
					SQFDataType.Number,
					[SQFDataType.MinMidMax,SQFDataType.Number],
				]
			}
		}
	},
	KISKA_fnc_attack: {
		grammarType: SQFGrammarType.Function,
		syntaxes: {
			type: SQFSyntaxType.UnscheduledFunction,
			leftOperandTypes: {
				operation: SQFArrayComparator.Exact,
				types: [
					[SQFDataType.Group,SQFDataType.Object],
					[SQFDataType.Object,SQFDataType.Location,SQFDataType.Group,SQFDataType.Array],
					SQFDataType.Number,
					SQFDataType.Behaviour,
					SQFDataType.CombatMode,
					SQFDataType.Boolean,
				]
			}
		}
	},
	KISKA_fnc_clearWaypoints: {
		grammarType: SQFGrammarType.Function,
		syntaxes: {
			type: SQFSyntaxType.UnscheduledFunction,
			leftOperandTypes: {
				operation: SQFArrayComparator.Exact,
				types: [
					[SQFDataType.Group,SQFDataType.Object],
					SQFDataType.Number,
					SQFDataType.Boolean,
				]
			}
		}
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
