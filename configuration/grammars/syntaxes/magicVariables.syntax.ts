import {
    SQFGrammarType,
    SQFSyntaxType,
    SQFDataType,
    IJSON,
    PreCompiledSQFItem,
} from "../sqf.namespace";

const getBISWikiLink = (itemName: string): string => {
    const convertUrlMap: IJSON<string> = {
        _this: "Magic_Variables#this",
        _x: "Magic_Variables#x",
        _y: "Magic_Variables#y",
        _exception: "Magic_Variables#exception",
        _forEachIndex: "Magic_Variables#forEachIndex",
        _thisArgs: "Magic_Variables#thisArgs",
    };

    if (itemName in Object.keys(convertUrlMap)) {
        itemName = convertUrlMap[itemName];
    }

    return `https://community.bistudio.com/wiki/${itemName}`;
};

const magicVariableSyntaxes: IJSON<PreCompiledSQFItem> = {
    _this: {
        documentation:
            "Is used to make arguments of a script call (call, exec, execVM, spawn) visible and accessible to the script, also used in Event Handlers to pass appropriate params.",
        grammarType: SQFGrammarType.ReservedLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Any,
        },
    },
    _x: {
        documentation:
            "Represents the current element during a loop with: `apply`, `count`, `configClasses`, `configProperties`, `findIf`, `forEach`, `select`.",
        grammarType: SQFGrammarType.ReservedLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Any,
        },
    },
    _y: {
        documentation:
            "Iterating over a HashMap with `forEach` will return the key as `_x` and the value as `_y`.",
        grammarType: SQFGrammarType.ReservedLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.HashMapKey,
        },
    },
    _forEachIndex: {
        documentation:
            "Represents the (zero-based) index of a `forEach` `_x` element.",
        grammarType: SQFGrammarType.ReservedLiteral,
        syntaxes: {
            type: SQFSyntaxType.NularOperator,
            returnTypes: SQFDataType.Number,
        },
    },
};

Object.keys(magicVariableSyntaxes).forEach((command: string) => {
    const item = magicVariableSyntaxes[command];
    if (!item.getDocLink) {
        item.getDocLink = getBISWikiLink;
    }

    if (!item.documentation) {
        const magicVariableDocsFolder = "./Magic Variables";
        item.documentation = magicVariableDocsFolder;
    }
});

export { magicVariableSyntaxes };
