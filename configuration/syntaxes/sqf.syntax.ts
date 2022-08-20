import { IRawGrammar } from "vscode-textmate/release/types";

export const sqfGrammar: IRawGrammar = {
    scopeName: "source.sqf",
    fileTypes: ["sqf"],
	name: "sqf",
    patterns: [{ "include": "#expression" }],
    repository: {
        $base: {},
        $self: {},
        "access-modifier": {
            match: "\\s*(?i)(private)\\b",
            name: "storage.modifier.sqf",
        },
        "array-literal": {
            begin: "\\[",
            beginCaptures: {
                "0": {
                    name: "meta.brace.square.sqf",
                },
            },
            end: "\\]",
            endCaptures: {
                "0": {
                    name: "meta.brace.square.sqf",
                },
            },
            name: "meta.array.literal.sqf",
            patterns: [{ include: "#expression" }],
        },
        "assignment-operator": {
            match: "=",
            name: "keyword.operator.assignment.sqf",
        },
        block: {
            begin: "\\{",
            beginCaptures: {
                "0": {
                    name: "meta.brace.curly.sqf",
                },
            },
            end: "\\}",
            endCaptures: {
                "0": {
                    name: "meta.brace.curly.sqf",
                },
            },
            name: "meta.block.sqf",
            patterns: [
                { include: "#expression" },
                { include: "#object-member" },
            ],
        },
        "boolean-literal": {
            match: "(\\s*)(false|true)\\b",
            name: "constant.language.boolean.sqf",
        },
        comment: {
            name: "comment.sqf",
            patterns: [
                { include: "#comment-block" },
                { include: "#comment-line" },
            ],
        },
        "comment-block": {
            begin: "/\\*",
            end: "\\*/",
            name: "comment.block.sqf",
        },
        "comment-line": {
            match: "(//).*$\\n?",
            name: "comment.line.sqf",
        },
        "comparison-operator": {
            match: "==|!=|>|<|greater|greater=|less|less=|not",
            name: "keyword.operator.comparison.sqf",
        },
        "condition-operator": {
            match: "!|&&|\\|\\||:|([^A-Za-z0-9]|\\b)and([^A-Za-z0-9]|\\b)|([^A-Za-z0-9])or([^A-Za-z0-9])",
            name: "keyword.operator.condition.sqf",
        },
    },
};
