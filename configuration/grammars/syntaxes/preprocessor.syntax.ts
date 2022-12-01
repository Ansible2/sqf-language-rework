import {
    SQFGrammarType,
    IJSON,
    PreCompiledSQFItem,
    SQFSyntaxType,
    SQFDataType,
    SQFArrayComparator,
    SQFArgument,
    SQFEffect,
    SQFCode,
    SQFArray,
} from "../sqf.namespace";

export const preprocessorSyntaxes: IJSON<PreCompiledSQFItem> = {
    "#define": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Variable,
        },
    },
    "#include": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.String,
        },
    },
    "#undef": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Variable,
        },
    },
    "#if": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Number,
        },
    },
    "#ifdef": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Variable,
        },
    },
    "#ifndef": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Variable,
        },
    },
    "#else": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
        },
    },
    "#endif": {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
        },
    },
    __LINE__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __FILE__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Text,
        },
    },
    __has_include: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.String,
            returnTypes: SQFDataType.Number,
        },
    },
    __DATE_ARR__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFArray.of(SQFDataType.Number),
        },
    },
    __DATE_STR__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
    },
    __DATE_STR_ISO8601__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.String,
        },
    },
    __TIME__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Text,
        },
    },
    __TIME_UTC__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Text,
        },
    },
    __COUNTER__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
        },
    },
    __TIMESTAMP_UTC__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __COUNTER_RESET__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
        },
    },
    __RAND_INT8__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_UINT8__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_INT16__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_UINT16__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_INT32__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_UINT32__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_INT64__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __RAND_UINT64__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __GAME_VER__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Text,
        },
    },
    __GAME_VER_MAJ__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Text,
        },
    },
    __GAME_VER_MIN__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Text,
        },
    },
    __GAME_BUILD__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __ARMA__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __ARMA3__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
    __A3_DEBUG__: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
	// TODO: These should only apply to config
    // __EXEC: {
    //     grammarType: SQFGrammarType.PreprocessorCommand,
    //     syntaxes: {
    //         type: SQFSyntaxType.UnaryOperator,
    //         rightOperandTypes: SQFDataType.Code,
    //     },
    // },
    // __EVAL: {
    //     grammarType: SQFGrammarType.PreprocessorCommand,
    //     syntaxes: {
    //         type: SQFSyntaxType.UnaryOperator,
    //         rightOperandTypes: SQFDataType.Code,
    //         returnTypes: [
    //             SQFDataType.Array,
    //             SQFDataType.Number,
    //             SQFDataType.String,
    //         ],
    //     },
    // },
};

Object.keys(preprocessorSyntaxes).forEach((command: string) => {
    const item = preprocessorSyntaxes[command];

    if (!item.documentation) {
        const docFolder = "./Preprocessor Commands";
        item.documentation = docFolder;
    }
});
