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
    SQFMarkupContent,
    SQFSyntax,
    SQFSyntaxType,
    SQFSyntaxTypes,
} from "../../../../configuration/grammars/sqf.namespace";
import {
    IDocProvider,
    DocumentationType,
    SqfMarkupKind,
} from "../types/providers.types";
import { ISQFServer } from "../types/server.types";

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
    constructor(server: ISQFServer) {
        this.server = server;
    }

    /* ----------------------------------------------------------------------------
		createMarkupDoc
	---------------------------------------------------------------------------- */
    public createMarkupDoc(
        sqfItem: CompiledSQFItem,
        docType: DocumentationType
    ): SQFMarkupContent {
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
        const markupKind: SqfMarkupKind = documentation.kind as SqfMarkupKind;
        let docValue = "";
        let docLinkFormatted: string;
        let docArray: string[] = [];
        switch (docType) {
            case DocumentationType.CompletionItem: {
                if (markupKind === SqfMarkupKind.PlainText) {
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
                if (markupKind === SqfMarkupKind.PlainText) {
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
        operator: undefined | SQFSyntaxTypes
    ): string {
        if (!operator) return "";
        // TODO: add formatting
        const doc = DocProvider.convertToSQFTypeDoc(operator);
        const docAsString = DocProvider.converySQFTypeDocToString(doc);
        return docAsString;
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
            doc.subDocs = type.map((subType) =>
                DocProvider.convertToSQFTypeDoc(subType, currentLevel)
            );
            doc.subDocSeperator = " | ";
            doc.rightEnclose = ")";
            doc.leftEnclose = "(";

            return doc;
        }

        if (isSQFArray(type)) {
            doc = DocProvider.convertSQFArrayToDoc(type, currentLevel);
        }

        if (isSQFCode(type)) {
            doc = DocProvider.convertSQFCodeToDoc(type, currentLevel);
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

        if (doc.rightEnclose !== undefined && doc.leftEnclose !== undefined) {
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
            isSubDoc: currentLevel > 0,
        };

        const typesIsArray = Array.isArray(types);
        let rawDoc: string;
        if (typesIsArray) {
            doc.subDocs = types.map((type) =>
                DocProvider.convertToSQFTypeDoc(type, currentLevel)
            );
            rawDoc = DocProvider.converySQFTypeDocToString(doc);
        } else {
            const singleSubDoc = DocProvider.convertToSQFTypeDoc(
                types,
                currentLevel
            );
            rawDoc = DocProvider.converySQFTypeDocToString(singleSubDoc);
        }

        doc.raw = rawDoc;

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
    private static convertSQFCodeToDoc(
        sqfCode: SQFCode,
        currentLevel: number = -1
    ): SQFTypeDoc {
        const mainDoc: SQFTypeDoc = {
            raw: "",
            subLevel: currentLevel,
            isSubDoc: currentLevel > 0,
            subDocSeperator: " -> ",
            subDocs: [],
        };

        if (sqfCode.params) {
            const paramsDoc = DocProvider.convertToSQFTypeDoc(
                sqfCode.params,
                currentLevel
            );
            paramsDoc.raw = DocProvider.converySQFTypeDocToString(paramsDoc);
            paramsDoc.leftEnclose = "(";
            paramsDoc.rightEnclose = ")";
            mainDoc.subDocs?.push(paramsDoc);
        }

        const returnsDoc = DocProvider.convertToSQFTypeDoc(
            sqfCode.codeReturnTypes,
            currentLevel
        );
        returnsDoc.raw = DocProvider.converySQFTypeDocToString(returnsDoc);
        returnsDoc.leftEnclose = "{";
        returnsDoc.rightEnclose = "}";
        mainDoc.subDocs?.push(returnsDoc);

        return mainDoc;
    }
}
