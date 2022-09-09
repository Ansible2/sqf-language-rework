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
            const completionItem: CompletionItem = {
                ...sqfItem,
                documentation: NodeSqfLangServer.createFinalDocAppearance(
                    sqfItem.documentation,
                    sqfItem.syntaxes,
                    DocumentationType.CompletionItem
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

        console.log("doc value:", syntaxItem.documentation.value);

        const hoverItem: Hover = {
            contents: NodeSqfLangServer.createFinalDocAppearance(
                syntaxItem.documentation,
                syntaxItem.syntaxes,
                DocumentationType.HoverItem
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
        docType: DocumentationType
    ): MarkupContent {
        const markupKind: MarkupKind = documentation.kind;
        let docValue = "";

        switch (docType) {
            case DocumentationType.CompletionItem: {
                if (markupKind === MarkupKind.PlainText) {
                    docValue = [...syntaxes, documentation.value].join("\n");
                } else {
                    docValue = [
                        "```sqf",
                        ...syntaxes,
                        "```",
                        documentation.value,
                    ].join("\n");
                }

                break;
            }
            case DocumentationType.HoverItem: {
                if (markupKind === MarkupKind.PlainText) {
                    const syntaxSections = syntaxes.join("\n ___ \n");
                    docValue = [syntaxSections, documentation.value].join("\n");
                } else {
                    const syntaxesAsMarkdown: string[] = syntaxes.map(
                        (syntax: string) => {
                            return ["```sqf", syntax, "```", "___"].join("\n");
                        }
                    );
                    docValue = [
                        ...syntaxesAsMarkdown,
                        documentation.value,
                    ].join("\n");
                }
                break;
            }
            default:
                break;
        }

        return {
            kind: markupKind,
            value: docValue,
        };
    }

    /* ----------------------------------------------------------------------------
		parseSqfSyntax
	---------------------------------------------------------------------------- */
    public static parseSQFSyntax(syntaxes: SQFSyntax[]): string[] {
        if (syntaxes.length < 1) return [];

        const parsedSyntaxes: string[] = syntaxes.map((syntax: SQFSyntax) => {
            const type: SQFSyntaxType = syntax.type;
            switch (type) {
                case SQFSyntaxType.BinaryOperator: {
                    ``;
                    break;
                }
                case SQFSyntaxType.UnaryOperator: {
                    break;
                }
                case SQFSyntaxType.NularOperator: {
                    break;
                }
                default:
                    break;
            }
        });
        return parsedSyntaxes;
    }

    private static parseSyntaxEntry(
        syntax:
            | SQFDataType
            | SQFArray
            | SQFCode
            | Array<SQFDataType | SQFArray | SQFCode>
    ): string {
        const dataTypes: SQFDataType[] = Object.values(SQFDataType);
        const isSqfDataType: boolean = dataTypes.includes(syntax as SQFDataType);
        if (isSqfDataType) {
            return `${syntax}`;
        }

		if (isSQFArray(syntax)) {
			const seperator = 
		}
    }
}
