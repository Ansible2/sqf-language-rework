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
import { Position, TextDocument } from "vscode-languageserver-textdocument";
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

    private static parseHoveredWord(document: TextDocument, position: Position): string {
        
        const start = {
            line: position.line,
            character: 0,
        };
        const end = {
            line: position.line + 1,
            character: 0,
        };
        const text = document!.getText({ start, end });
        const index = document!.offsetAt(position) - document!.offsetAt(start);

        const first = text.lastIndexOf(" ", index);
        const last = text.indexOf(" ", index);
        return text.substring(
            first !== -1 ? first : 0,
            last !== -1 ? last : text.length - 1
        );
    }

    public onHover(params: HoverParams): Hover {
        const documentUri = params.textDocument.uri;
        if (!documentUri) return {} as Hover;

		const document = NodeLangServer.documents.get(documentUri);
		if (!document) return {} as Hover;

        const word = NodeLangServer.parseHoveredWord(document, params.position);
        console.log("Found word:", word);

        // need to parse files into readable words and discern what words are at certain lines/columns
        return {
            contents: "hello world",
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
