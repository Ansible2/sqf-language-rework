import {
    CompletionItem,
    CompletionParams,
    createConnection,
    Hover,
    HoverParams,
    InitializeParams,
    InitializeResult,
    MarkupContent,
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
import { getSqfSyntaxItems } from "../../../configuration/grammars/sqf.syntax";
import path = require("path");
import {
    IJSON,
    CompiledSQFSyntax,
} from "../../../configuration/grammars/sqf.types";

export class NodeSqfLangServer {
    private static connection: _Connection;
    private static documents: TextDocuments<TextDocument>;
    private static serverCreated: boolean = false;
    private static completionItems: CompletionItem[] = [];
    private static sqfSyntaxItems: IJSON<CompiledSQFSyntax>;

    /* ----------------------------------------------------------------------------
		CreateServer
	---------------------------------------------------------------------------- */
    public static CreateServer(): void {
        if (NodeSqfLangServer.serverCreated) return;

        NodeSqfLangServer.loadSqfSyntaxItems();
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
            NodeSqfLangServer.sqfSyntaxItems
        ).map((item) => {
            const [nameOfSqfItem, sqfSyntaxItem] = item;
            const completionItem = {
                label: nameOfSqfItem,
                documentation: sqfSyntaxItem.documentation,
                kind: sqfSyntaxItem.kind,
                detail: sqfSyntaxItem.detail,
            };

            return completionItem;
        });
    }

    /* ----------------------------------------------------------------------------
		getHoverItem
	---------------------------------------------------------------------------- */
    public static getHoverItem(syntaxItemName: string): Hover | undefined {
        const syntaxItem: CompiledSQFSyntax = NodeSqfLangServer.sqfSyntaxItems[syntaxItemName];
        if (!syntaxItem) return;
		
        const hoverItem: Hover = {
            contents: {
				...syntaxItem.documentation,
				value: [
					syntaxItem.detail,
					"", // little space
					'___', // Shows as a separating line in hover window
					syntaxItem.documentation.value
				].join('\n')
			},
        };
        return hoverItem;
    }

    /* ----------------------------------------------------------------------------
		getHoverItem
	---------------------------------------------------------------------------- */
    public static loadSqfSyntaxItems() {
        NodeSqfLangServer.sqfSyntaxItems = getSqfSyntaxItems();
    }
    // can be used to make further edits to a completion item once selected in the list
    // must be implemented
    // public static onCompletionResolve(item: CompletionItem): CompletionItem {
    // 	return item;
    // }
}