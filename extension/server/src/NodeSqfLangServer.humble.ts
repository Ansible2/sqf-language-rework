import {
    CompletionItem,
    CompletionParams,
    createConnection,
    Hover,
    HoverParams,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
    _Connection,
} from "vscode-languageserver/node";
import { Position, Range, TextDocument } from "vscode-languageserver-textdocument";
import { sqfCompletionItems } from "../../../configuration/grammars/common/commands.syntax";

export class NodeSqfLangServer {
    private static connection: _Connection;
    private static documents: TextDocuments<TextDocument>;
	private static serverCreated: boolean = false;

	public static createServer(): void {
		if (this.serverCreated) return;
		
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
	}

    public static initializeConnection(params: InitializeParams): InitializeResult {
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

	private static parseHoveredWord2(document: TextDocument, positionOfHover: Position, allowedRegex?: string): string | null {
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
			}
		};
        const textOnLineHovered = document.getText(fullRangeOfLineBeingHovered);
		
        if (!allowedRegex) {
			allowedRegex = "[a-z0-9_]";
        }
		
		// TODO: figure out how to make this more readable
        const matchChar = new RegExp(allowedRegex, "i");
        const matchAll = new RegExp("(" + allowedRegex + "*)", "i");
		
		const hoverCharacterIndex: number = positionOfHover.character;
		let indexOfCurrentCharacter: number = hoverCharacterIndex;
		let currentCharacterIsNOTStartOfLine: boolean = indexOfCurrentCharacter > 0;
        while(currentCharacterIsNOTStartOfLine) {
			indexOfCurrentCharacter--;
            if (!matchChar.test(textOnLineHovered.substring(indexOfCurrentCharacter, indexOfCurrentCharacter + 1))) {
                indexOfCurrentCharacter++;
                break;
            }
			
			currentCharacterIsNOTStartOfLine = indexOfCurrentCharacter > 0;
        }

        const def = textOnLineHovered.substring(hoverCharacterIndex);
        let match: RegExpExecArray | null = null;

        if ((match = matchAll.exec(def))) {
            return match[1];
        }

        return null;
    }

    private static parseHoveredWord(document: TextDocument, positionOfHover: Position): string {
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
			}
		};
        const textOnLineHovered = document.getText(fullRangeOfLineBeingHovered);

		console.log("parseHoveredWord:textOnLineHovered:",textOnLineHovered);
		const hoveredLineWords = textOnLineHovered.match(/\w+/g);
		console.log("parseHoveredWord:hoveredLineWords:",hoveredLineWords);
		
		// textOnLineHovered.indexOf()

        const index = document.offsetAt(positionOfHover) - document.offsetAt(hoveredLineStartingPosition);
        const first = textOnLineHovered.lastIndexOf(" ", index);
        const last = textOnLineHovered.indexOf(" ", index);
        return textOnLineHovered.substring(
            first !== -1 ? first : 0,
            last !== -1 ? last : textOnLineHovered.length - 1
        );
    }

    public static onHover(params: HoverParams): Hover {
        const documentUri = params.textDocument.uri;
        if (!documentUri) return {} as Hover;

		const document = NodeSqfLangServer.documents.get(documentUri);
		if (!document) return {} as Hover;

        const word = NodeSqfLangServer.parseHoveredWord2(document, params.position);
        console.log("Found word:", word);

        // need to parse files into readable words and discern what words are at certain lines/columns
        return {
			// contents: "hello world",
            contents: sqfCompletionItems[0].documentation!,
        };
    }

    public static onCompletion(params: CompletionParams): CompletionItem[] {
        return sqfCompletionItems;
    }

    // can be used to make further edits to a completion item once selected in the list
	// must be implemented
    // public static onCompletionResolve(item: CompletionItem): CompletionItem {
	// 	return item;
	// }
}
