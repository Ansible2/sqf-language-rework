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
    private connection: _Connection;
    private documents: TextDocuments<TextDocument>;

    constructor() {
        this.connection = createConnection(ProposedFeatures.all);
        // Create a simple text document manager.
        this.documents = new TextDocuments(TextDocument);

        // Create a connection for the server, using Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        this.connection.onInitialize(this.initializeConnection);
        this.connection.onHover(this.onHover);
        this.connection.onCompletion(this.onCompletion);

        // Make the text document manager listen on the connection
        /// for open, change and close text document events
        this.documents.listen(this.connection);

        // Listen on the connection
        this.connection.listen();
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

    private parseHoveredWord(position: Position, documentUri: string): string {
        const document = this.documents.get(documentUri);
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

        const word = this.parseHoveredWord(params.position, documentUri);
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
    // public onCompletionResolve(params: CompletionItem): CompletionItem {}
}
