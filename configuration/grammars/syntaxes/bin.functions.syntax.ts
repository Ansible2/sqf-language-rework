import {
    SQFSyntaxType,
    SQFGrammarType,
    SQFDataType,
    SQFArray,
    SQFEffect,
    SQFArgument,
    PreCompiledSQFItem,
    IJSON,
} from "../sqf.namespace";

export const binFunctionSyntaxes: IJSON<PreCompiledSQFItem> = {
    BIN_fnc_ProbingBeam_sendData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_ProbingBeam_fired: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_ProbingArm_fired: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addFaradayCage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addRecordedSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_allowAntennaReveal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_allowedAntennaReveal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_assignAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_assignedAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bakeAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteFaradayCage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_addAllSpectrumAnalyzers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_logAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_revealAllAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_showLinkBudgetMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaCanReveal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaFrequency: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaFrequencyClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaGain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaPower: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaRevealValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaScans: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaScanPolygon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaScanSignals: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaSensitivity: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaSignalHistory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAntennaType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getCurrentSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getLinkBudget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getLinkDir: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getLinkedAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getLinkStrength: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getObjectAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getRecordedSignals: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getSignalAge: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getSignalTypeClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getSignalTypes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_hasAntennaSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAntennaBaked: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAntennaBroadcasting: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAntennaJammed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAntennaRevealed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAntennaSelected: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaCanReveal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaClass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaFrequency: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaFrequencyFromList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaGain: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaName: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaPower: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaRevealValue: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaScans: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaSensitivity: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntennaType: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showAntennaIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deconShowerAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deconShowerAnimLarge: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deconShowerAnimStop: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deconShowerCollision: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deconShowerDelete: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deconShowerMove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_cargoPlatform_01_adjust: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_cargoPlatform_01_update: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_cargoPlatform_01_destruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNHoseInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Object]),
        },
        grammarType: SQFGrammarType.Function,
        effect: SQFEffect.LOCAL,
        argument: SQFArgument.LOCAL,
    },
    BIN_fnc_showSpectrumAnalyzer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updateSpectrumAnalyzerInput: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_frequencyToString: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_reactRadio: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_reactRadio_Squad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_reactRadio_Base: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_reactRadio_Player: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initAI: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initAIBase: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initAISquad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_joinAISquad: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isAIBase: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAllAISquads: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_sendPing: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_sendRadioSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteLoopedRadioSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getFollowingSignals: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isRadioHandshake: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setRadioHandshake: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setRadioConversation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getRadioConversation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_inRadioConversation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_inRadioConversationWith: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setRadioSilence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isRadioSilence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAISquadID: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAISquadID: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAISquadPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getPatrolRoutes: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveAI: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveAIReinforcements: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_playPatrolAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_playPatrolAnimDone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_attachChemlight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_wpPatrol: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_wpMoveFast: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initAIDrone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_hackAIDrone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initUAV: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initUGV: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initTurret: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_behaviorInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setBehavior: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setBehaviorCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getBehaviorCoef: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_breatheInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setBreathe: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_findSafePositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_findTargetWeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setTargetWeight: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_debugDraw: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_debugDrawMapInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_debugText: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_selectDiaryCategory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_selectDiaryTask: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_selectDiaryRecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setDiaryRecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteDiaryRecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initInspectableDiaryRecord: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawSpectrum: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawProbeMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawTooltip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawIconFixed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_handDrawEllipse: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_handDrawBezier: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_switchMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showMapOptions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_preInitEM: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updateEM: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updateSignalDurations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updatePlayerAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updatePlayerSpectrumAnalyzer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updatePlayerSpectrumAnalyzerSounds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updatePlayerInput: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_calculateLinkBudget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_recordSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setCurrentSignal: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setSpectrumAnalyzer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteSpectrumAnalyzer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showSpectrumAnalyzerGUI: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showSpectrumAnalyzerPiP: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showSpectrumAnalyzerMuzzle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showPlayerSpectrumAnalyzer: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showAntennaIcons: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_calculateSpectrumAnalyzerValues: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setPlayerSelectedBand: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_revealAntenna: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_revealFrequency: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_matrixMultiply: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_matrixTranspose: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_vectorToEuler: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_eulerToVector: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addButtonEvents: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_callButtonEvent: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showSimpleNotification: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showCurrentTask: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showHorizontalCompass: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setIDWMapParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getIDWMapSaveData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_saveIDWMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_loadIDWMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updateIDWMapDrawData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addIDWMapMeasurementPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_allIDWMapMeasurementPoints: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setIDWMapDrawPatternIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getIDWMapDrawPatternIndex: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setIDWMapDrawColorSet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getIDWMapDrawColorSet: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawIDWMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_clearIDWMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_preInitIDWMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_IDWMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_TXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_preInitTXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_saveTXScanState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_loadTXScanState: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_drawTXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_clearTXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanSaveData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updateTXScanDrawData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanDrawData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_scanTX: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_cropTXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_createTXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteTXScan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setTXScanPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setTXScanAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setTXScanPrecision: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanPosition: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanAngle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanPrecision: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAllTXScans: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanPolygonDetails: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanPolygon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setTXScanPolygon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setTXScanWorldBounds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTXScanWorldBounds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_markFreeAreaPositions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addEntitiesToArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addObjectsToArea: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_crearAllData: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_drawAllAreaObjectsBounds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_diag_getAllAreaEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getAllAreas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getEntityBoundingBarrel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getObjectBoundingBarrel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getTerrainObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bezier: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bezierVelocity: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bezierBoundingBox: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bezierNormalize: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bezierAverage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_bezierEditor: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_scanObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_scan: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setRagdoll: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_colorHSLtoRGB: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Array,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Number]),
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getFormattedControl: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleTravel: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleDangerZone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_markDangerZone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getRoleIcon: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_enableSaving: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Nothing,
            leftOperandTypes: SQFArray.ofExactly([SQFDataType.Boolean]),
        },
        grammarType: SQFGrammarType.Function,
        server: true,
    },
    BIN_fnc_savingEnabled: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: SQFDataType.Boolean,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_tvSaveExpanded: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getGroupSeed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addTravelPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteTravelPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addDangerZone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_deleteDangerZone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_inDangerZone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_animateSmooth: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isExtensionError: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_distanceToAreaBorder: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setPointOfInterest: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleSimpleObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleGravityAnomaly: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleFaradayCage: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_modulePointOfInterest: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isPaused: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isPausedInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_findPath: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setObjectGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getGridMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getGridPath: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getGridCollisions: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_findNearestGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveTo: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_editMoveProperties: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setMoveProperties: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveObject: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addTranslation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addRotation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getRotation: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_translationDone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveToModelSpace: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveToOnArc: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveModule: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_curatorInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moveInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleMovementGrid: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setGravityPulse: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_updateGravityPulse: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initPuzzle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_resetPuzzle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_terminatePuzzle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isPuzzleReset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isPuzzleTerminated: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_onPuzzleProgress: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_onPuzzleStepCompleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_onPuzzleCompleted: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_onPuzzleReset: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_onPuzzleTerminated: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_puzzle_mole: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_puzzle_outlier: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_showVision: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_createScriptedSoundSource: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_createScriptedSoundSourceVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_playAlternatingSound: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_soundDrone: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setCustomSoundController: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getCharacterSounds: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_wpAddScript: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_wpDroneMove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeAnim: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeDelete: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeHitpoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeVeinHitpoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeCoreInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeCoreUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeCoreDelete: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeCoreLegsDestroyed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_probeCoreEffects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_gravityBurst: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_lightBurst: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_grenadeThrowback: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_gravityCannon_01_ai: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_prototypeCannon_01_slaved: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_prototypeCannon_01_player: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_prototypeCannon_01_ai: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_missileDeflection: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_missileSwarm: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_circleSmokeMissile: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initDroneModule: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleChargeSequence: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_droneDestructionFX: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setDroneModuleParams: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setDroneModuleTarget: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setModuleSpeed: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_dockModule: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_droneModuleDestruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_matterballDestruction: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_matterballEffects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_matterCollectionFX: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initMothershipLights: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_moduleCBRN: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNCharacterAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNInContaminant: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNGearUpdate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNGearActivate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNGearDeactivate: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNContaminantAdd: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_CBRNContaminantRemove: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_persistentVariables: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initConstants: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_preInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_postInit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exit: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_playMission: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_isNull: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initTasks: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitTasks: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_taskAdded: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_taskActive: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initQuests: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitQuests: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_debugQuests: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initDiary: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitDiary: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initSites: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitSites: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_setSite: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_addSiteEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_getSiteLayerEntities: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initPersistentObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitPersistentObjects: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initRevive: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitGroup: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initHub: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initAcctime: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initActors: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initSideColors: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initLocations: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_exitAntennas: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initProbeMap: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initInventory: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initMiniUGV: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_initCutLayers: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_travelToPoint: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_skip: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_empVehicle: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_list: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
    BIN_fnc_inList: {
        syntaxes: {
            type: SQFSyntaxType.UnscheduledFunction,
            returnTypes: undefined,
        },
        grammarType: SQFGrammarType.Function,
    },
};



const getBISWikiLink = (itemName: string): string => {
	return `https://community.bistudio.com/wiki/${itemName}`;
};

const binFunctionsFolder = "./BIN Functions";
Object.keys(binFunctionSyntaxes).forEach((command: string) => {
    const item = binFunctionSyntaxes[command];
    if (!item.documentation) {
        item.documentation = binFunctionsFolder;
    }
    if (!item.getDocLink) {
        item.getDocLink = getBISWikiLink;
    }
});