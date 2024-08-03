import { ExampleLanguage, SQFGrammarType, SQFItemConfig } from "../sqf.namespace";

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
                "The argument replacement is performed before the expansion of the macro body. That means one doesn't have to worry about name-conflicts between argument-names of the current macro and already defined macros:",
                "",
                "```cpp",
                "#define ONE foo",
                "#define TWO(ONE) ONE",
                "TWO(bar) // will preprocess to bar",
                "```",
                "",
                "#### Multi-line:",
                "```cpp",
                "#define DRAWBUTTON(NAME)\\",
                "	__EXEC(idcNav = idcNav + 4) \\",
                "	...",
                "```",
                "",
                "***NOTE:** The backslash must be the last character in a line when defining a multi-line macro. Any character (including spaces) after the backslash will cause issues.",
            ].join("\n"),
            examples: [],
            documentationLink:
                "https://community.bistudio.com/wiki/PreProcessor_Commands#.23define",
        },
        configuration: {
            label: "#define",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Provides alternative code to `#if`, `#ifdef`, `#ifndef` checks.",
            examples: [
                {
                    text: [
                        "#ifndef NAME",
                        `\t// ...text that will be used if "NAME" is -not- defined...`,
                        "#else",
                        `\t// ...text that will be used if "NAME" -is- defined...`,
                        "#endif",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##else",
        },
        configuration: {
            label: "#else",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description:
                "This ends a conditional block as shown in the descriptions of `#ifdef` and `#ifndef` above.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##endif",
        },
        configuration: {
            label: "#endif",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Undefine (delete) a macro previously set by the use of #define.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##undef",
            examples: [{ text: "#undef NAME", language: ExampleLanguage.CPP }],
        },
        configuration: {
            label: "#undef",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description:
                "Checks condition and processes content if condition returns 1. Skips content if it returns 0.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##if",
            examples: [
                {
                    text: [
                        "#if __A3_DEBUG__ // Check if game is started in debug mode",
                        `#include "debug.hpp" // Include some file if debug mode is enabled`,
                        "#endif",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
        },
        configuration: {
            label: "#if",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description:
                "A simple if-then construction to check whether a certain set of definitions has already been made. IFDEFs cannot be nested. The preprocessor will generate errors for all inner definitions if the outer definition doesn't exist.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##ifdef",
            examples: [
                {
                    text: [
                        "#ifdef NAME",
                        `\t// ...text that will be used if "NAME" is defined...`,
                        "#endif",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
        },
        configuration: {
            label: "#ifdef",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: "Same as `#ifdef`, but checks for absence of definition instead.",
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##ifndef",
            examples: [
                {
                    text: [
                        "#ifndef NAME",
                        `\t// ...text that will be used if "NAME" isn't defined...`,
                        "#endif",
                    ].join("\n"),
                    language: ExampleLanguage.CPP,
                },
            ],
        },
        configuration: {
            label: "#ifndef",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: [
                "Copies the code from a target file and pastes it where #include directive is.",
                ``,
                "```cpp",
                `#include "file.hpp"`,
                `// Brackets are equivalent to quotation marks and may be used in their place.`,
                `#include <file.txt>`,
                "```",
                ``,
                `Source directory is:`,
                `- For any file without starting the include path with \\ - the file's current directory`,
                "- When starting with \\ - the internal filesystem root (see Addon Development) or the Game's working directory (only with `-filePatching` enabled)",
                ``,
                `#### Path Definitions:`,
                `A path beginning can be defined as follow:`,
                ``,
                `- drive (only with -filePatching enabled):`,
                "```cpp",
                `#include "D:\\file.txt"`,
                "```",
                ``,
                "- PBO (keep in mind that in this case, if the PBO's file name will be changed, all `#include` referencing it will need to be updated):",
                "```cpp",
                `// Arma 3\\@myMod\\addons\\myAddon.pbo\\file.txt;`,
                `#include "\\myMod\\myAddon\\file.txt"`,
                "```",
                ``,
                "To move to parent directory use `..` (two dots) (Supported since Arma 3 1.50)",
                "```cpp",
                '#include "..\\file.sqf"',
                "```",
                "",
                "Preprocessor does not support the use of macros for pre-defined file names.",
                "```cpp",
                '#define path "codestrip.txt"',
                "#include path // this will cause an error",
                "```",
            ].join("\n"),
            examples: [],
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands##include",
        },
        configuration: {
            label: "#include",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
];

export const configPreprocessorSyntaxes: SQFItemConfig[] = [
    ...scriptPreprocessorCommands,
    {
        documentation: {
            description: [
                "With this Config Parser macro expressions can be evaluated, including previously assigned internal variables. Unlike `__EXEC`, `__EVAL` supports multiple parentheses:",
                "",
                "```cpp",
                "w = __EVAL(safeZoneW - (5 * ((1 / (getResolution select 2)) * 1.25 * 4)));",
                "```",
                "",
                '`__EVAL` macros must be assigned to a config property and the expression must be terminated with `;`. `__EVAL` can only return `Number` or `String`: . Any other type is represented as `String`, even Boolean type, which will result in either `"true"` or `"false"`.',
                "",
                "#### WARNING:",
                "`__EVAL` does not like curly brackets `{}`; if code is needed in the expression, use `compile` `String` instead:",
                "",
                "```sqf",
                "result = __EVAL(call { 123 }); // ERROR",
                "```",
                "",
                "```sqf",
                'result = __EVAL(call compile "123"); // OK',
                "```",
                "",
                "#### CAUTION:",
                "`__EXEC` and `__EVAL` macros are not suitable for SQF/SQS scripts but can be used in configs, including `description.ext`. Both global and local variables set in `__EXEC` are available in `__EVAL`",
            ].join("\n"),
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#__EVAL",
        },
        configuration: {
            label: "__EVAL",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
    {
        documentation: {
            description: [
                "This Config Parser macro allows to assign values to internal variables or just execute arbitrary code. The code inside `__EXEC` macros runs in `parsingNamespace` and variables defined in it will also be created in `parsingNamespace`. ",
                "",
                "The variables can then be used to create more complex macros:",
                "```sqf",
                "__EXEC(cat = 5 + 1;)",
                "__EXEC(lev = cat - 2;)",
                '_cat = parsingNamespace getVariable "cat"; // 6',
                '_lev = parsingNamespace getVariable "lev"; // 4',
                "```",
                "",
                "#### CAUTION:",
                "Config Parser keywords cannot be used in preprocessor Macros, e.g `#if`!",
                "",
                "#### WARING:",
                "`__EXEC` doesn't like round brackets `()` inside expressions. If grouping is needed, perhaps values could be calculated inside the brackets separately and assigned to local variables:",
                "```cpp",
                "__EXEC(a = (1+2);) // ERROR",
                "```",
                "",
                "```cpp",
                "__EXEC(_expr = 1+2;)",
                "__EXEC(a = _expr;) // OK",
                "```",
            ].join("\n"),
            documentationLink: "https://community.bistudio.com/wiki/PreProcessor_Commands#__EXEC",
        },
        configuration: {
            label: "__EXEC",
            grammarType: SQFGrammarType.PreprocessorCommand,
        },
    },
];
