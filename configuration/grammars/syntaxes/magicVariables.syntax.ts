import { SQFGrammarType, SQFItemConfig } from "../sqf.namespace";

export const magicVariableSyntaxes: SQFItemConfig[] = [
    {
        documentation: {
            description:
                "Is used to make arguments of a script call (call, exec, execVM, spawn) visible and accessible to the script, also used in Event Handlers to pass appropriate params.",
            examples: [],
            documentationLink: "https://community.bistudio.com/wiki/Magic_Variables#this",
        },
        configuration: {
            label: "_this",
            grammarType: SQFGrammarType.ReservedLiteral,
        },
    },
    {
        documentation: {
            description:
                "Represents the current element during a loop with: `apply`, `count`, `configClasses`, `configProperties`, `findIf`, `forEach`, `select`.",
            examples: [],
            documentationLink: "https://community.bistudio.com/wiki/Magic_Variables#x",
        },
        configuration: {
            label: "_x",
            grammarType: SQFGrammarType.ReservedLiteral,
        },
    },
    {
        documentation: {
            description: "Represents the (zero-based) index of a `forEach` `_x` element.",
            examples: [],
            documentationLink: "https://community.bistudio.com/wiki/Magic_Variables#forEachIndex",
        },
        configuration: {
            label: "_forEachIndex",
            grammarType: SQFGrammarType.ReservedLiteral,
        },
    },
];
