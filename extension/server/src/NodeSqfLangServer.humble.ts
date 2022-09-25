import {
    CompletionItem,
    CompletionParams,
    createConnection,
    Hover,
    HoverParams,
    InitializeParams,
    InitializeResult,
    MarkupContent,
    MarkupKind,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
    _Connection,
} from "vscode-languageserver/node";
import {
    Position,
    Range,
    TextDocument,
} from "vscode-languageserver-textdocument";
import { getSqfItems } from "../../../configuration/grammars/sqf.syntax";
import {
    IJSON,
    CompiledSQFItem,
    SQFSyntax,
    SQFSyntaxType,
    SQFArray,
    SQFDataType,
    SQFCode,
    isSQFArray,
    SQFArrayComparator,
    isSqfDataType,
    isSQFCode,
    SQFGrammarType,
	SQFEffect,
	SQFArgument,
} from "../../../configuration/grammars/sqf.namespace";

enum DocumentationType {
    CompletionItem = 1,
    HoverItem = 2,
}
export class NodeSqfLangServer {
    private static connection: _Connection;
    private static documents: TextDocuments<TextDocument>;
    private static serverCreated: boolean = false;
    private static completionItems: CompletionItem[] = [];
    private static sqfItems: IJSON<CompiledSQFItem>;

    /* ----------------------------------------------------------------------------
		CreateServer
	---------------------------------------------------------------------------- */
    public static CreateServer(): void {
        if (NodeSqfLangServer.serverCreated) return;

        NodeSqfLangServer.loadSqfItems();
        NodeSqfLangServer.loadCompletionItems();

        NodeSqfLangServer.connection = createConnection(ProposedFeatures.all);
        // Create a simple text document manager.
        NodeSqfLangServer.documents = new TextDocuments(TextDocument);

        // Create a connection for the server, using Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        NodeSqfLangServer.connection.onInitialize(this.initializeConnection);
        NodeSqfLangServer.connection.onHover(this.onHover);
        NodeSqfLangServer.connection.onCompletion(this.onCompletion);
        // NodeSqfLangServer.connection.onCompletionResolve(this.onCompletionResolve);

        // Make the text document manager listen on the connection
        /// for open, change and close text document events
        NodeSqfLangServer.documents.listen(NodeSqfLangServer.connection);
        // Listen on the connection
        NodeSqfLangServer.connection.listen();
        NodeSqfLangServer.serverCreated = true;
    }

    /* ----------------------------------------------------------------------------
		initializeConnection
	---------------------------------------------------------------------------- */
    private static initializeConnection(
        params: InitializeParams
    ): InitializeResult {
        const init: InitializeResult = {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Incremental,
                hoverProvider: true,
                // Tell the client that this server supports code completion.
                completionProvider: {
                    resolveProvider: false,
                },
            },
        };

        return init;
    }

    /* ----------------------------------------------------------------------------
		parseHoveredWord
	---------------------------------------------------------------------------- */
    private static parseHoveredWord(
        document: TextDocument,
        positionOfHover: Position,
        allowedRegex?: string
    ): string {
        const hoveredLineNumber: number = positionOfHover.line;
        // this will get the whole range from the first character of
        /// the line being hovered on to the first character (non-inclusive)
        /// of the next line down (hence hoveredLineNumber + 1)
        const hoveredLineStartingPosition: Position = {
            line: hoveredLineNumber,
            character: 0,
        };
        const fullRangeOfLineBeingHovered: Range = {
            start: hoveredLineStartingPosition,
            end: {
                line: hoveredLineNumber + 1,
                character: 0,
            },
        };
        const textOnLineHovered = document.getText(fullRangeOfLineBeingHovered);

        if (!allowedRegex) {
            allowedRegex = "[a-z0-9_]";
        }

        // TODO: figure out how to make this more readable
        const matchChar = new RegExp(allowedRegex, "i");
        const matchAll = new RegExp(`(${allowedRegex}*)`, "i");

        const hoverCharacterIndex: number = positionOfHover.character;
        let indexOfCurrentCharacter: number = hoverCharacterIndex;

        while (indexOfCurrentCharacter > 0) {
            indexOfCurrentCharacter--;
            let subStringToMatch = textOnLineHovered.substring(
                indexOfCurrentCharacter,
                indexOfCurrentCharacter + 1
            );

            if (!matchChar.test(subStringToMatch)) {
                indexOfCurrentCharacter++;
                break;
            }
        }

        if (indexOfCurrentCharacter < 0) indexOfCurrentCharacter = 0;
        const def = textOnLineHovered.substring(indexOfCurrentCharacter);

        let match: RegExpExecArray | null = null;
        if ((match = matchAll.exec(def))) {
            return match[1];
        }

        return "";
    }

    /* ----------------------------------------------------------------------------
		onHover
	---------------------------------------------------------------------------- */
    public static onHover(params: HoverParams): Hover {
        const documentUri = params.textDocument.uri;
        if (!documentUri) return {} as Hover;

        const document = NodeSqfLangServer.documents.get(documentUri);
        if (!document) return {} as Hover;

        const word = NodeSqfLangServer.parseHoveredWord(
            document,
            params.position
        );
        console.log("Found word:", word);

        const hoverItem = NodeSqfLangServer.getHoverItem(word);
        if (hoverItem) return hoverItem;

        return {} as Hover;
    }

    /* ----------------------------------------------------------------------------
		onCompletion
	---------------------------------------------------------------------------- */
    public static onCompletion(params: CompletionParams): CompletionItem[] {
        return NodeSqfLangServer.completionItems;
    }

    /* ----------------------------------------------------------------------------
		loadCompletionItems
	---------------------------------------------------------------------------- */
    private static loadCompletionItems(): void {
        NodeSqfLangServer.completionItems = Object.entries(
            NodeSqfLangServer.sqfItems
        ).map((item) => {
            const sqfItem = item[1];

            let docLink;
            if (sqfItem.getDocLink) {
                docLink = sqfItem.getDocLink(sqfItem.label);
            }
            const completionItem: CompletionItem = {
                ...sqfItem,
                documentation: NodeSqfLangServer.createFinalDocAppearance(
                    sqfItem.documentation,
                    NodeSqfLangServer.parseSQFSyntaxes(
                        sqfItem.grammarType,
                        sqfItem.label,
                        sqfItem.syntaxes
                    ),
                    DocumentationType.CompletionItem,
                    docLink,
					sqfItem.effect,
					sqfItem.argument,
                ),
            };

            return completionItem;
        });
    }

    /* ----------------------------------------------------------------------------
		getHoverItem
	---------------------------------------------------------------------------- */
    public static getHoverItem(syntaxItemName: string): Hover | undefined {
        const syntaxItem: CompiledSQFItem =
            NodeSqfLangServer.sqfItems[syntaxItemName.toLowerCase()];
        if (!syntaxItem) return;

        let docLink;
        if (syntaxItem.getDocLink) {
            docLink = syntaxItem.getDocLink(syntaxItemName);
        }

        const hoverItem: Hover = {
            contents: NodeSqfLangServer.createFinalDocAppearance(
                syntaxItem.documentation,
                NodeSqfLangServer.parseSQFSyntaxes(
                    syntaxItem.grammarType,
                    syntaxItem.label,
                    syntaxItem.syntaxes
                ),
                DocumentationType.HoverItem,
                docLink,
				syntaxItem.effect,
				syntaxItem.argument,
            ),
        };
        return hoverItem;
    }

    /* ----------------------------------------------------------------------------
		loadSqfItems
	---------------------------------------------------------------------------- */
    public static loadSqfItems() {
        NodeSqfLangServer.sqfItems = getSqfItems();
    }

    /* ----------------------------------------------------------------------------
		createFinalDocAppearance
	---------------------------------------------------------------------------- */
    private static createFinalDocAppearance(
        documentation: MarkupContent,
        syntaxes: string[],
        docType: DocumentationType,
        documentationLink?: string,
		effect?: SQFEffect,
		argument?: SQFArgument,
    ): MarkupContent {
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
			let effectAndArg: string = "";
			if (argument) {
				effectAndArg = `[${argument}]`;
			}
			if (effect) {
				if (effectAndArg) {
					effectAndArg += ` [${effect}]`;
				} else {
					effectAndArg = `[${effect}]`;
				}
			}

			if (effectAndArg) {
				docArray.unshift(`\n${effectAndArg}`);
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
    public static parseSQFSyntaxes(
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
                returnType = NodeSqfLangServer.parseSyntaxReturnOrOperands(
                    syntax.returnTypes
                );
			}
            const leftOperand: string =
                NodeSqfLangServer.parseSyntaxReturnOrOperands(
                    syntax.leftOperandTypes
                );
            const rightOperand: string =
                NodeSqfLangServer.parseSyntaxReturnOrOperands(
                    syntax.rightOperandTypes
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

    private static parseSyntaxReturnOrOperands(
        operator:
            | undefined
            | SQFDataType
            | SQFArray
            | SQFCode
            | Array<SQFDataType | SQFArray | SQFCode>,
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
                NodeSqfLangServer.parseSyntaxReturnOrOperands(
                    operatorInArray,
                    true
                )
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
					NodeSqfLangServer.parseSyntaxReturnOrOperands(
						type,
						true
					)
				);

			}

            switch (arrayOperation) {
                case SQFArrayComparator.Exact: {
					if (typesAsString.length == 0) {
						arrayAsString = NodeSqfLangServer.parseSyntaxReturnOrOperands(
							types,
							true
						)
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
                        operatorAsString =
                            NodeSqfLangServer.parseSyntaxReturnOrOperands(
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

            const paramsParsed = NodeSqfLangServer.parseSyntaxReturnOrOperands(
                operator.params,
                true
            );
            const returnParsed = NodeSqfLangServer.parseSyntaxReturnOrOperands(
                operator.returns,
                true
            );

            operatorAsString = `(${paramsParsed}) -> { ${returnParsed} }`;
            return operatorAsString;
        }

        return operatorAsString;
    }
}
