import {
    SQFGrammarType,
    IJSON,
    SQFDataType,
    SQFItemConfig,
    ExampleLanguage,
} from "../sqf.namespace";

export const scriptPreprocessorCommands: SQFItemConfig[] = [
    {
        documentation: {
            description:
                "This macro is only set when the [-debug parameter](https://community.bistudio.com/wiki/Arma_3_Startup_Parameters) was provided. It can be used to switch mods or scripts to debug mode dynamically.",
            examples: [
                {
                    text: "__A3_DEBUG__ // 1 (If -debug was enabled)",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#A3_DEBUG",
        },
        configuration: {
            label: "__A3_DEBUG__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            examples: [
                {
                    text: "__ARMA__ // 1",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#ARMA",
        },
        configuration: {
            label: "__ARMA__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            examples: [
                {
                    text: "__ARMA3__ // 1",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#ARMA3",
        },
        configuration: {
            label: "__ARMA3__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Counts 1 up everytime it is defined.",
            examples: [
                {
                    text: [
                        "__COUNTER__ // 0",
                        "__COUNTER__ // 1",
                        "__COUNTER__ // 2",
                        "__COUNTER__ // 3",
                        "__COUNTER_RESET__",
                        "__COUNTER__ // 0",
                        "__COUNTER__ // 1",
                        "__COUNTER__ // 2",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#COUNTER",
        },
        configuration: {
            label: "__COUNTER__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Resets `__COUNTER__` command's count.",
            examples: [
                {
                    text: [
                        "__COUNTER__ // 0",
                        "__COUNTER__ // 1",
                        "__COUNTER__ // 2",
                        "__COUNTER__ // 3",
                        "__COUNTER_RESET__",
                        "__COUNTER__ // 0",
                        "__COUNTER__ // 1",
                        "__COUNTER__ // 2",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#COUNTER_RESET",
        },
        configuration: {
            label: "__COUNTER_RESET__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Is replaced for current date in format array.",
            examples: [
                {
                    text: "__DATE_ARR__ // 2020,10,28,15,17,42",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#DATE_ARR",
        },
        configuration: {
            label: "__DATE_ARR__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Is replaced for current date in format string.",
            examples: [
                {
                    text: '__DATE_STR__  // "2020/10/28, 15:17:42"',
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#DATE_STR",
        },
        configuration: {
            label: "__DATE_STR__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description:
                "Is replaced for current date in format string. The date is presented in ISO8601 standard.",
            examples: [
                {
                    text: '__DATE_STR_ISO8601__ // "2020-10-28T14:17:42Z"',
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#DATE_STR_ISO8601",
        },
        configuration: {
            label: "__DATE_STR_ISO8601__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "This keyword gets replaced with the CURRENT file being processed.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#FILE",
        },
        configuration: {
            label: "__FILE__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by the build number.",
            examples: [
                {
                    text: "__GAME_BUILD__ // 146790",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#GAME_BUILD",
        },
        configuration: {
            label: "__GAME_BUILD__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by the game version.",
            examples: [
                {
                    text: "__GAME_VER__ // 02.00.146790",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#GAME_VER",
        },
        configuration: {
            label: "__GAME_VER__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by the major game version.",
            examples: [
                {
                    text: "__GAME_VER_MAJ__ // 02",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#GAME_VER_MAJ",
        },
        configuration: {
            label: "__GAME_VER_MAJ__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by the minor game version.",
            examples: [
                {
                    text: "__GAME_VER_MIN__ // 00",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#GAME_VER_MIN",
        },
        configuration: {
            label: "__GAME_VER_MIN__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: [
                "Checks if given file exists. Returns 1 if it does, 0 if it does not exist.",
                "#### CAUTION:",
                "- The file path must start with the backslash `\\` otherwise it would fail silently (returns 0 so does nothing unless you put something in `#else`)!",
                "If you wanted to make an addon that can change its config dynamically depending on mods that loaded along, do not binarize the `config.cpp`!",
                "",
                "#### NOTE:",
                "- To validate that the file exists in your game (in script files), you can use `fileExists` command to check.",
                "```sqf",
                'fileExists "\\a3\\data_f\\config.bin"; // returns true',
                'fileExists "\\z\\ace\\addons\\main\\script_component.hpp"; // returns true if ACE is loaded, false otherwise',
                "```",
            ].join("\n"),
            examples: [
                {
                    text: [
                        '#if __has_include("\\z\\ace\\addons\\main\\script_component.hpp")',
                        "// File exists! Do something with it",
                        "#else",
                        "// File does not exist",
                        "#endif",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#has_include",
        },
        configuration: {
            label: "__has_include",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description:
                "This keyword gets replaced with the line number in the file where it is found. For example, if `__LINE__` is found on the 10th line of a file, the word `__LINE__` will be replaced with the number 10.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#LINE",
        },
        configuration: {
            label: "__LINE__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random 8 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_INTN",
        },
        configuration: {
            label: "__RAND_INT8__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random 16 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_INTN",
        },
        configuration: {
            label: "__RAND_INT16__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random 32 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_INTN",
        },
        configuration: {
            label: "__RAND_INT32__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random 64 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_INTN",
        },
        configuration: {
            label: "__RAND_INT64__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },

    {
        documentation: {
            description: "Gets replaced by a random *unsigned* 8 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_UINTN",
        },
        configuration: {
            label: "__RAND_UINT8__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random *unsigned* 16 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_UINTN",
        },
        configuration: {
            label: "__RAND_UINT16__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random *unsigned* 32 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_UINTN",
        },
        configuration: {
            label: "__RAND_UINT32__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Gets replaced by a random *unsigned* 64 bit integer.",
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#RAND_UINTN",
        },
        configuration: {
            label: "__RAND_UINT64__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Is replaced for current time.",
            examples: [
                {
                    text: "__TIME__ // 15:17:42",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#TIME",
        },
        configuration: {
            label: "__TIME__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Is replaced for UTC time.",
            examples: [
                {
                    text: "__TIME_UTC__ // 14:17:42",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#TIME_UTC",
        },
        configuration: {
            label: "__TIME_UTC__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Is replaced for UTC time.",
            examples: [
                {
                    text: "__TIME_UTC__ // 14:17:42",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#TIME_UTC",
        },
        configuration: {
            label: "__TIME_UTC__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Is replaced to the current timestamp in UNIX timestamp.",
            examples: [
                {
                    text: "__TIMESTAMP_UTC__ // 1622639059",
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#TIMESTAMP_UTC",
        },
        configuration: {
            label: "__TIMESTAMP_UTC__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: [
                "#### Basic Usage:",
                "Using the `#define` instruction, it is possible to define a keyword and assign a definition to it. The keyword may contain any letter, digit or underscore in arbitrary order, as long as it does not start with a digit (RegEx: `[a-zA-Z_][0-9a-zA-Z_]*`). ",
                "As an example:",
                "",
                "```cpp",
                "#define true 1",
                "```",
                "",
                "The above means that whenever true is used in a config, the parser will replace this with the value 1.",
                "",
                "The define-statement does swallow all spaces in between the macro-keyword and any non-space-character in the body (Note that tabs are not spaces! They don't get removed)",
                "",
                "```cpp",
                "#define MACRO                     test",
                "MACRO // preprocesses to test (without any spaces)",
                "",
                "#define MACRO	test // There's a tab between MACRO and test",
                `MACRO // preprocesses to "	test" (without quotes - they are only used to show that the tab character didn't get removed)`,
                "```",
                "",
                "The space between the macro-keyword and the body is also fully optional (though very useful to tell the preprocessor where the macro name ends and where the body begins):",
                "",
                "```cpp",
                "#define MACRO#test",
                'MACRO // preprocesses to "test"',
                "```",
                "",
                "#### Arguments:",
                "Arguments can be added to more complex macros, by including them between brackets after the keyword. For the name of the arguments the same rule as for the macro-keyword (see above) apply.",
                "",
                "```cpp",
                "#define CAR(NAME) displayName = NAME;",
                "```",
                "",
                'If CAR("Mini") is used, it will be replaced with displayName = "Mini";. Multiple arguments can also be used:',
                "",
                "```sqf",
                "#define BLASTOFF(UNIT,RATE) UNIT setVelocity [0,0,RATE];",
                "```",
                "",
                "Macro arguments may be composed of any characters, as long as they do not contain a comma (because commas are used as argument-delimiters). If quotes are being used, they have to be balanced. The same applies to single-quotes This is because String detection is working in macro arguments - Therefore commas can even get passed in as a macro argument as long as they are part of a String (This only works with Strings wrapped in double-quotes though). Note however that although the macro gets resolved properly, the comma gets removed from the String (probably a bug).",
                "",
                "```cpp",
                "#define MACRO(arg) arg",
                `MACRO("Some, content") // preprocesses to "Some content" (note the missing comma)`,
                "```",
                "",
                "Quote escaping is also not supported in this context (neither with double- nor with single-quotes)",
                "",
                "```cpp",
                "#define MACRO(arg) arg",
                `MACRO("Some ""content""") // preprocesses to "Some ""content"""`,
                "```",
                "",
                'Passing arrays with more than one element `[el1,el2,...]` as arguments into macros as well as any argument containing comas "some, sentence", will need a small workaround:',
                "",
                "```sqf",
                '#define HINTARG(ARG) hint ("Passed argument: " + str ARG)',
                "```",
                "",
                "**Incorrect usage:**",
                "",
                "```cpp",
                "HINTARG([1,2,3,4,5,6,7,8,9,0]); // ERROR, won't even compile",
                "```",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ].join("\n"),
            examples: [],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#.23define",
        },
        configuration: {
            label: "__TIMESTAMP_UTC__",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
];

export const preprocessorSyntaxes: IJSON<SQFItemConfig> = {
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
};

Object.keys(preprocessorSyntaxes).forEach((command: string) => {
    const item = preprocessorSyntaxes[command];

    if (!item.documentation) {
        const docFolder = "./Preprocessor Commands";
        item.documentation = docFolder;
    }
});

export const configPreprocessorSyntaxes: IJSON<PreCompiledSQFItem> = {
    ...preprocessorSyntaxes,
    __EXEC: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Code,
        },
    },
    __EVAL: {
        grammarType: SQFGrammarType.PreprocessorCommand,
        syntaxes: {
            type: SQFSyntaxType.UnaryOperator,
            rightOperandTypes: SQFDataType.Code,
            returnTypes: [SQFDataType.Array, SQFDataType.Number, SQFDataType.String],
        },
    },
};

Object.keys(configPreprocessorSyntaxes).forEach((command: string) => {
    const item = configPreprocessorSyntaxes[command];

    if (!item.documentation) {
        const docFolder = "./Preprocessor Commands";
        item.documentation = docFolder;
    }
});
