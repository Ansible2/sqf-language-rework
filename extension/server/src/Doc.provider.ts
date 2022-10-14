import { DocumentationType, IDocProvider, ISQFServer } from "./server.types";
import {
    MarkupContent,
    MarkupKind,
} from "vscode-languageserver/node";

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

export class DocProvider implements IDocProvider {
	private readonly server: ISQFServer;
	constructor(server: ISQFServer) {
		this.server = server;
	}

    /* ----------------------------------------------------------------------------
		createMarkupDoc
	---------------------------------------------------------------------------- */
    public createMarkupDoc(sqfItem: CompiledSQFItem, docType: DocumentationType,): MarkupContent {
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
        if (!Array.isArray(syntaxes)) {
            syntaxes = [syntaxes];
        }
        if (syntaxes.length < 1) return [];

        const parsedSyntaxes: string[] = syntaxes.map((syntax: SQFSyntax) => {
            let syntaxString: string = "";

            const type: SQFSyntaxType = syntax.type;
            let returnType: string = "";
            if (syntax.returnTypes !== SQFDataType.Nothing) {
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
        if (!operator) return "";
        let operatorAsString: string = "";

        // can return a single datatype
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
            console.log("syntaxesCombined:", syntaxesCombined);

            return syntaxesCombined;
        }

        if (isSQFArray(operator)) {
            operator = operator as SQFArray;
            const arrayOperation = operator.operation;
            let arrayAsString = "";
            const types = operator.types;
            let typesAsString: string[] = [];
            const typesIsArray = Array.isArray(types);
            if (typesIsArray) {
                typesAsString = types.map((type) =>
                    this.parseSyntaxReturnOrOperands(type, true)
                );
            }

            switch (arrayOperation) {
                case SQFArrayComparator.Exact: {
                    if (typesAsString.length === 0) {
                        arrayAsString = this.parseSyntaxReturnOrOperands(
                            types,
                            true
                        );
                    } else {
                        arrayAsString = typesAsString!.join(", ");
                    }

                    operatorAsString = `[${arrayAsString}]`;
                    break;
                }
                case SQFArrayComparator.OneOf:
                case SQFArrayComparator.AnyOf: {
                    if (typesIsArray) {
                        if (arrayOperation === SQFArrayComparator.AnyOf) {
                            arrayAsString = typesAsString!.join(", ");
                            operatorAsString = `<${arrayAsString}>[]`;
                        } else if (
                            arrayOperation === SQFArrayComparator.OneOf
                        ) {
                            const typesAsArrays = typesAsString!.map(
                                (type) => `${type}[]`
                            );
                            arrayAsString = typesAsArrays.join(", ");
                            operatorAsString = `(${arrayAsString})`;
                        }
                    } else if (isSqfDataType(types)) {
                        operatorAsString = `${types}[]`;
                    } else if (isSQFArray(types) || isSQFCode(types)) {
                        operatorAsString = this.parseSyntaxReturnOrOperands(
                            types,
                            true
                        );
                    }

                    break;
                }
                default:
                    break;
            }

            return operatorAsString;
        }

        if (isSQFCode(operator)) {
            operator = operator as SQFCode;

            const paramsParsed = this.parseSyntaxReturnOrOperands(
                operator.params,
                true
            );
            const returnParsed = this.parseSyntaxReturnOrOperands(
                operator.returns,
                true
            );

            operatorAsString = `(${paramsParsed}) -> { ${returnParsed} }`;
            return operatorAsString;
        }

        return operatorAsString;
    }
}
