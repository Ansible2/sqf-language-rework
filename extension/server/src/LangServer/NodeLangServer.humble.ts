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
import { ILangServer } from "./ILangServer";
import { sqfCompletionItems } from "../../../../configuration/grammars/common/commands.syntax";

export class NodeLangServer implements ILangServer {
    private static connection: _Connection;
    private static documents: TextDocuments<TextDocument>;
	private static _instance: NodeLangServer;

	public static getInstance(): NodeLangServer {
		return this._instance ?? (this._instance = new NodeLangServer());
	}

    private constructor() {
        NodeLangServer.connection = createConnection(ProposedFeatures.all);
        // Create a simple text document manager.
        NodeLangServer.documents = new TextDocuments(TextDocument);
		
        // Create a connection for the server, using Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        NodeLangServer.connection.onInitialize(this.initializeConnection);
        NodeLangServer.connection.onHover(this.onHover);
        NodeLangServer.connection.onCompletion(this.onCompletion);
		NodeLangServer.connection.onCompletionResolve(this.onCompletionResolve);

        // Make the text document manager listen on the connection
        /// for open, change and close text document events
		NodeLangServer.documents.listen(NodeLangServer.connection);
        // Listen on the connection
        NodeLangServer.connection.listen();
    }

    public initializeConnection(params: InitializeParams): InitializeResult {
        const init: InitializeResult = {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Incremental,
                hoverProvider: true,
                // Tell the client that this server supports code completion.
                completionProvider: {
                    resolveProvider: true,
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

    public onHover(params: HoverParams): Hover {
        const documentUri = params.textDocument.uri;
        if (!documentUri) return {} as Hover;

		const document = NodeLangServer.documents.get(documentUri);
		if (!document) return {} as Hover;

        const word = NodeLangServer.parseHoveredWord2(document, params.position);
        console.log("Found word:", word);

        // need to parse files into readable words and discern what words are at certain lines/columns
        return {
			// contents: "hello world",
            contents: sqfCompletionItems[0].documentation!,
        };
    }

    public onCompletion(params: CompletionParams): CompletionItem[] {
        return sqfCompletionItems;
    }

    // can be used to make further edits to a completion item once selected in the list
	// must be implemented
    public onCompletionResolve(item: CompletionItem): CompletionItem {
		return item;
	}
}
