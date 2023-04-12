import {
    IRawGrammar,
    IRawRepository,
    IRawRule,
} from "vscode-textmate/release/rawGrammar";

const patterns: IRawRule[] = [
    { include: "#comments" },
    { include: "#arrayProperty" },
    { include: "#strings" },
    { include: "#numbers" },
    { include: "#classDefinition" },
];

const grammarRepo: IRawRepository = {
    $base: {},
    $self: {},

    /* ----------------------------------------------------------------------------
        classes
	---------------------------------------------------------------------------- */
    classDefinition: {
        match: "(?i)\\b(class)\\s+([a-z\\d]+)\\s*((:{1})\\s*([a-z\\d]+){1}){0,1}",
        captures: {
            "1": {
                name: "storage.type.class.ext",
            },
            "2": {
                name: "entity.name.class.ext",
            },
            "5": {
                name: "entity.name.class.inheirited.ext",
            },
        },
    },

    /* ----------------------------------------------------------------------------
		numbers
	---------------------------------------------------------------------------- */
    numbers: {
        match: "\\b((0(x|X)[0-9a-fA-F]([0-9a-fA-F']*[0-9a-fA-F])?)|(0(b|B)[01]([01']*[01])?)|(([0-9]([0-9']*[0-9])?\\.?[0-9]*([0-9']*[0-9])?)|(\\.[0-9]([0-9']*[0-9])?))((e|E)(\\+|-)?[0-9]([0-9']*[0-9])?)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b",
        name: "constant.numeric.ext",
    },

    /* ----------------------------------------------------------------------------
		arrays
	---------------------------------------------------------------------------- */
    arrayProperty: {
        begin: "([a-zA-Z\\d]+)(\\[\\])\\s*=\\s*{",
        beginCaptures: {
            "1": {
                name: "variable.other.property.array.ext",
            },
            "2": {
                name: "variable.other.property.array.marker.ext",
            },
        },
        end: "}\\s*;",
        patterns: [
            {
                name: "variable.other.property.array.item.ext",
                patterns: [
                    { include: "#strings" },
                    { include: "#numbers" },
                ]
            }
        ]
    },

    /* ----------------------------------------------------------------------------
		Comments
	---------------------------------------------------------------------------- */
    comments: {
        patterns: [
            {
                begin: "/\\*",
                end: "\\*/",
                name: "comment.block.sqf",
            },
            {
                match: "(?<=^.*)(\\/\\/).*\\n?",
                name: "comment.line.sqf",
            },
        ],
    },

    /* ----------------------------------------------------------------------------
		String
	---------------------------------------------------------------------------- */
    strings: {
        name: "string.ext",
        patterns: [
            { include: "#qstring-single" },
            { include: "#qstring-double" },
            { include: "#qstring-triple" },
        ],
    },
    "qstring-triple": {
        begin: '"""',
        end: '"""',
        name: "string.triple.sqf",
    },
    "qstring-double": {
        begin: '"',
        end: '"',
        name: "string.double.sqf",
    },
    "qstring-single": {
        begin: "'",
        end: "'",
        name: "string.single.sqf",
    },
    "reserved-literal": {
        match: "\\s*(?i)(class|#include|#define|#if|#endif|#ifdef|#ifndef|#else|#endif|__LINE__|__FILE__|__has_include|__DATE_ARR__|__DATE_STR__|__DATE_STR_ISO8601__|__TIME__|__TIME_UTC__|__COUNTER__|__TIMESTAMP_UTC__|__COUNTER_RESET__|__RAND_INT8__|__RAND_INT16__|__RAND_INT32__|__RAND_INT64__|__RAND_UINT8__|__RAND_UINT16__|__RAND_UINT32__|__RAND_UINT64__|__GAME_VER__|__GAME_VER_MAJ__|__GAME_VER_MIN__|__GAME_BUILD__|__ARMA__|__ARMA3__|__A3_DEBUG__|__EXEC|__EVAL)\\b",
        name: "variable.language.reserved.ext",
    },
};

export const extGrammar: IRawGrammar = {
    scopeName: "source.ext",
    fileTypes: ["ext", "hpp", "h", "cpp", "c", "sqm", "arma.cfg"],
    name: "arma-config",
    patterns: patterns,
    repository: grammarRepo,
};
