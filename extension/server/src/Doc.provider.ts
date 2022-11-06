import { DocumentationType, IDocProvider, ISQFServer } from "./server.types";
import { MarkupContent, MarkupKind } from "vscode-languageserver/node";

import {
    CompiledSQFItem,
    isSQFArray,
    isSQFCode,
    isSqfDataType,
    SQFArray,
    SQFArrayComparator,
    SQFCode,
    SQFDataType,
    SQFGrammarType,
    SQFSyntax,
    SQFSyntaxType,
    SQFSyntaxTypes,
} from "../../../configuration/grammars/sqf.namespace";

interface SQFTypeDoc {
    rightEnclose?: string;
    leftEnclose?: string;
    subDocs?: SQFTypeDoc[];
    raw: string;
    subLevel: number;
    isSubDoc: boolean;
    subDocSeperator?: string;
}

export class DocProvider implements IDocProvider {
    private readonly server: ISQFServer;
    private currentParse: string;
    constructor(server: ISQFServer) {
        this.server = server;
        this.currentParse = "";
    }

    /* ----------------------------------------------------------------------------
		createMarkupDoc
	---------------------------------------------------------------------------- */
    public createMarkupDoc(
        sqfItem: CompiledSQFItem,
        docType: DocumentationType
    ): MarkupContent {
        const documentation = sqfItem.documentation;
        const syntaxes = this.parseSQFSyntaxes(
            sqfItem.grammarType,
            sqfItem.label,
            sqfItem.syntaxes
        );

        let documentationLink;
        if (sqfItem.getDocLink) {
            documentationLink = sqfItem.getDocLink(sqfItem.label);
        }

        const argument = sqfItem.argument;
        const effect = sqfItem.effect;
        const serverExcuted = sqfItem.server;

        const markupKind: MarkupKind = documentation.kind;
        let docValue = "";
        let docLinkFormatted: string;
        let docArray: string[] = [];
        switch (docType) {
            case DocumentationType.CompletionItem: {
                if (markupKind === MarkupKind.PlainText) {
                    docArray = [...syntaxes, documentation.value];
                    docLinkFormatted = `Link To Documenation: ${documentationLink}`;
                } else {
                    docArray = [
                        ...syntaxes.map(
                            (syntaxString) => `\n\`${syntaxString}\`\n\n---\n`
                        ),
                        documentation.value,
                    ];
                    docLinkFormatted = `*[Open Documentation](${documentationLink})*`;
                }

                break;
            }
            case DocumentationType.HoverItem: {
                if (markupKind === MarkupKind.PlainText) {
                    const syntaxSections = syntaxes.join("\n ___ \n");
                    docArray = [syntaxSections, documentation.value];
                    docLinkFormatted = `Link To Documenation: ${documentationLink}`;
                } else {
                    // TODO: determine how types syntax should look
                    const syntaxesAsMarkdown: string[] = syntaxes.map(
                        (syntax: string) =>
                            ["```sqf", syntax, "```", "___"].join("\n")
                    );
                    docArray = [...syntaxesAsMarkdown, documentation.value];
                    docLinkFormatted = `*[Open Documentation](${documentationLink})*`;
                }
                break;
            }
            default:
                break;
        }

        if (docArray.length > 0) {
            let effectArgServerLine: string = "";
            if (argument) {
                effectArgServerLine = `[${argument}]`;
            }
            if (effect) {
                if (effectArgServerLine) {
                    effectArgServerLine += ` [${effect}]`;
                } else {
                    effectArgServerLine = `[${effect}]`;
                }
            }
            if (serverExcuted) {
                effectArgServerLine += ` [Server Executed]`;
            }

            if (effectArgServerLine) {
                docArray.unshift(`\n${effectArgServerLine}`);
            }

            if (documentationLink) {
                docArray.unshift(docLinkFormatted!);
            }
            docValue = docArray.join("\n");
        }

        return {
            kind: markupKind,
            value: docValue,
        };
    }

    /* ----------------------------------------------------------------------------
		parseSqfSyntax
	---------------------------------------------------------------------------- */
    private parseSQFSyntaxes(
        grammarType: SQFGrammarType,
        SQFItemName: string,
        syntaxes: SQFSyntax[] | SQFSyntax
    ): string[] {
        this.currentParse = SQFItemName;
        if (!Array.isArray(syntaxes)) {
            syntaxes = [syntaxes];
        }
        if (syntaxes.length < 1) return [];

        const parsedSyntaxes: string[] = syntaxes.map((syntax: SQFSyntax) => {
            let syntaxString: string = "";

            const type: SQFSyntaxType = syntax.type;
            let returnType: string = "";
            if (
                syntax.returnTypes &&
                syntax.returnTypes !== SQFDataType.Nothing
            ) {
                returnType = this.parseSyntaxReturnOrOperands(
                    syntax.returnTypes
                );
            }
            const leftOperand: string = this.parseSyntaxReturnOrOperands(
                (syntax as any).leftOperandTypes
            );
            const rightOperand: string = this.parseSyntaxReturnOrOperands(
                (syntax as any).rightOperandTypes
            );
            switch (type) {
                case SQFSyntaxType.UnscheduledFunction: {
                    syntaxString = `${leftOperand} call ${SQFItemName}`;
                    break;
                }
                case SQFSyntaxType.ScheduledFunction: {
                    syntaxString = `${leftOperand} spawn ${SQFItemName}`;
                    break;
                }
                case SQFSyntaxType.BinaryOperator: {
                    syntaxString = `${leftOperand} ${SQFItemName} ${rightOperand}`;
                    break;
                }
                case SQFSyntaxType.UnaryOperator: {
                    syntaxString = `${SQFItemName} ${rightOperand}`;
                    break;
                }
                case SQFSyntaxType.NularOperator: {
                    syntaxString = `${SQFItemName}`;
                    break;
                }
                default:
                    break;
            }

            if (returnType) {
                syntaxString = `${returnType} = ${syntaxString}`;
            }

            return `(${grammarType}) ${syntaxString}`;
        });

        return parsedSyntaxes;
    }

    /* ----------------------------------------------------------------------------
		parseSyntaxReturnOrOperands
	---------------------------------------------------------------------------- */
    private parseSyntaxReturnOrOperands(
        operator: undefined | SQFSyntaxTypes,
        isInBlock: boolean = false
    ): string {
        // const debug = this.currentParse.toLowerCase() === "kiska_fnc_notify";
        const debug =
            this.currentParse.toLowerCase() === "getdir" ||
            this.currentParse.toLowerCase() ===
                "KISKA_fnc_ACEX_setHCTransfer".toLowerCase() ||
            this.currentParse.toLowerCase() === "test_fnc_test".toLowerCase() ||
            this.currentParse.toLowerCase() === "KISKA_fnc_spawn".toLowerCase();
        if (!operator || !debug) return "";

        // convert to typedoc
        // convert typedoc to string
        // format typedoc(?)
        let operatorAsString: string = "";
        const doc = DocProvider.convertToSQFTypeDoc(operator);
        const docAsString = DocProvider.converySQFTypeDocToString(doc);
        return docAsString;

        // return '';
        // can return a single datatype
        /*
        if (isSqfDataType(operator)) {
            if (isInBlock) {
                operatorAsString = `${operator}`;
            } else {
                operatorAsString = `<${operator}>`;
            }

            return operatorAsString;
        }

        if (Array.isArray(operator)) {
            const syntaxStrings: string[] = operator.map((operatorInArray) =>
                this.parseSyntaxReturnOrOperands(operatorInArray, true)
            );

            let syntaxesCombined: string = syntaxStrings.join(" | ");
            if (!isInBlock) {
                syntaxesCombined = `(${syntaxesCombined})`;
            }

            return syntaxesCombined;
        }

        if (isSQFArray(operator)) {
            return this.parseSQFArray(operator);
        }

        if (isSQFCode(operator)) {
            return this.parseSQFCode(operator);
        }

        return this.formatSyntaxOperator(operatorAsString);
		*/
    }

    /* ----------------------------------------------------------------------------
		parseSQFArray
	---------------------------------------------------------------------------- */
    private parseSQFArray(sqfArray: SQFArray): string {
        const arrayOperation = sqfArray.operation;
        const types = sqfArray.types;

        let typesAsString: string[] = [];
        const typesIsArray = Array.isArray(types);
        if (typesIsArray) {
            typesAsString = types.map((type) =>
                this.parseSyntaxReturnOrOperands(type, true)
            );
        }

        let arrayAsString = "";
        let parsedArray = "";
        switch (arrayOperation) {
            case SQFArrayComparator.Exact: {
                if (typesAsString.length === 0) {
                    arrayAsString = this.parseSyntaxReturnOrOperands(
                        types,
                        true
                    );
                } else {
                    arrayAsString = typesAsString!.join(",\n");
                }

                parsedArray = `[\n${arrayAsString}\n]`;
                break;
            }
            case SQFArrayComparator.OneOf:
            case SQFArrayComparator.AnyOf: {
                if (typesIsArray) {
                    if (arrayOperation === SQFArrayComparator.AnyOf) {
                        arrayAsString = typesAsString!.join(",\n");
                        parsedArray = `<${arrayAsString}>[]`;
                    } else if (arrayOperation === SQFArrayComparator.OneOf) {
                        const typesAsArrays = typesAsString!.map(
                            (type) => `${type}[]`
                        );
                        arrayAsString = typesAsArrays.join(", ");
                        parsedArray = `(${arrayAsString})`;
                    }
                } else if (isSqfDataType(types)) {
                    parsedArray = `${types}[]`;
                } else if (isSQFArray(types) || isSQFCode(types)) {
                    // TODO: means of representing an array of an array here

                    parsedArray = this.parseSyntaxReturnOrOperands(types, true);
                    parsedArray = `<${parsedArray}>[]`; // decent for anyof
                }

                break;
            }
            default:
                break;
        }

        // TODO: limit length of output with formatting
        return parsedArray;
    }

    /* ----------------------------------------------------------------------------
		parseSQFCode
	---------------------------------------------------------------------------- */
    private parseSQFCode(sqfCode: SQFCode): string {
        const paramsParsed = this.parseSyntaxReturnOrOperands(
            sqfCode.params,
            true
        );
        const returnParsed = this.parseSyntaxReturnOrOperands(
            sqfCode.codeReturnTypes,
            true
        );

        return `(${paramsParsed}) -> { ${returnParsed} }`;
    }

    /* ----------------------------------------------------------------------------
		formatSyntaxOperator
	---------------------------------------------------------------------------- */
    private formatSyntaxOperator(syntaxOperator: string): string {
        return syntaxOperator;
    }

    /* ----------------------------------------------------------------------------
		convertTypeToDocType
	---------------------------------------------------------------------------- */
    private static convertToSQFTypeDoc(
        type: SQFSyntaxTypes,
        parentLevel: number = -1
    ): SQFTypeDoc {
        const isSubDoc = parentLevel > -1;
        const currentLevel = ++parentLevel;
        let doc: SQFTypeDoc = {
            raw: type.toString(),
            subLevel: currentLevel,
            isSubDoc: isSubDoc,
        };

        // can return a single datatype
        if (isSqfDataType(type)) {
            if (!isSubDoc) {
                doc.rightEnclose = ">";
                doc.leftEnclose = "<";
            }

            return doc;
        }

        // can return a array of datatypes
        if (Array.isArray(type)) {
            doc.subDocs = type.map((subType) => DocProvider.convertToSQFTypeDoc(subType,currentLevel));
            doc.subDocSeperator = " | ";
            doc.rightEnclose = ")";
            doc.leftEnclose = "(";

            return doc;
        }

        if (isSQFArray(type)) {
            doc = DocProvider.convertSQFArrayToDoc(type, currentLevel);
        }

        if (isSQFCode(type)) {
        	doc = DocProvider.convertSQFCodeToDoc(type,currentLevel);
        }

        return doc;
    }

    /* ----------------------------------------------------------------------------
		converySQFTypeDocToString
	---------------------------------------------------------------------------- */
    private static converySQFTypeDocToString(doc: SQFTypeDoc): string {
        let convertedSubs: string | undefined;
        if (doc.subDocs) {
            convertedSubs = doc.subDocs
                .map((subDoc) => {
                    return DocProvider.converySQFTypeDocToString(subDoc);
                })
                .join(doc.subDocSeperator); // maybe SQFTypeDoc needs a param for sub doc seperator ('|', ',', etc...)
        }

        let convertedDoc: string = doc.raw;
        if (convertedSubs) {
            convertedDoc = convertedSubs;
        }

        if (doc.rightEnclose && doc.leftEnclose) {
            convertedDoc = `${doc.leftEnclose}${convertedDoc}${doc.rightEnclose}`;
        }

        return convertedDoc;
    }

    /* ----------------------------------------------------------------------------
		convertSQFArrayToDoc
	---------------------------------------------------------------------------- */
    private static convertSQFArrayToDoc(
        sqfArray: SQFArray,
        currentLevel: number = -1
    ): SQFTypeDoc {
        const arrayOperation = sqfArray.operation;
        const types = sqfArray.types;
        const doc: SQFTypeDoc = {
            raw: "",
            subLevel: currentLevel,
            isSubDoc: false,
        };

        const typesIsArray = Array.isArray(types);
        if (typesIsArray) {
            doc.subDocs = types.map((type) => DocProvider.convertToSQFTypeDoc(type,currentLevel));
            console.log("subDocs:", doc.subDocs);

            doc.raw = sqfArray.toString();
        } else {
            const singleSubDoc = DocProvider.convertToSQFTypeDoc(
                types,
                currentLevel
            );
            doc.raw = DocProvider.converySQFTypeDocToString(singleSubDoc);
        }

        switch (arrayOperation) {
            case SQFArrayComparator.Exact: {
                doc.rightEnclose = "]";
                doc.leftEnclose = "[";
                doc.subDocSeperator = ", ";
                break;
            }

            case SQFArrayComparator.OneOf: {
                doc.rightEnclose = ">[]";
                doc.leftEnclose = "<";
                doc.subDocSeperator = " | ";
            }

            case SQFArrayComparator.AnyOf: {
                doc.rightEnclose = ">[]";
                doc.leftEnclose = "<";
                doc.subDocSeperator = ", ";
            }

            default:
                break;
        }

        return doc;
    }

    /* ----------------------------------------------------------------------------
		convertSQFCodeToDoc
	---------------------------------------------------------------------------- */
    private static convertSQFCodeToDoc(sqfCode: SQFCode, currentLevel: number = -1): SQFTypeDoc {
    	// IDEA: can have a sub doc for both param side and return side
    	// `(${paramsParsed}) -> { ${returnParsed} }`;

		const doc: SQFTypeDoc = {
            raw: "",
            subLevel: currentLevel,
            isSubDoc: false,
        };

		return doc;
    }
}
