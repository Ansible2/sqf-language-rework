import {
    CompletionItemLabelDetails,
    createConnection,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    TextDocuments,
    TextDocumentSyncKind,
    _Connection,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { getSqfItems } from "../../../configuration/grammars/sqf.syntax";
import {
    IJSON,
    CompiledSQFItem,
} from "../../../configuration/grammars/sqf.namespace";
import {
    ICompletionProvider,
    IDocProvider,
    IHoverProvider,
    ISQFServer,
} from "./server.types";
import { HoverProvider } from "./Hover.provider";
import { DocProvider } from "./Doc.provider";
import { CompletionProvider } from "./Completion.provider";

export class NodeSQFServer implements ISQFServer {
    public readonly hoverProvider: IHoverProvider;
    public readonly docProvider: IDocProvider;
    public readonly completionProvider: ICompletionProvider;
    public readonly textDocuments: TextDocuments<TextDocument>;

    private readonly sqfItems: IJSON<CompiledSQFItem>;
    private readonly connection: _Connection;

    /* ----------------------------------------------------------------------------
		constructor
	---------------------------------------------------------------------------- */
    constructor() {
        this.connection = createConnection(ProposedFeatures.all);

        this.textDocuments = new TextDocuments(TextDocument);
        this.hoverProvider = new HoverProvider(this);
        this.docProvider = new DocProvider(this);
        this.completionProvider = new CompletionProvider(this);

        this.sqfItems = getSqfItems();

        // Create a connection for the server, using Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        this.connection.onInitialize(this.initializeConnection);
        this.connection.onHover(this.hoverProvider.onHover);
        this.connection.onCompletion(this.completionProvider.onCompletion);
        const completionResolver = this.completionProvider.onCompletionResolve;
        if (completionResolver) {
            this.connection.onCompletionResolve(completionResolver);
        }

        // Make the text document manager listen on the connection
        /// for open, change and close text document events
        this.textDocuments.listen(this.connection);
        // Listen on the connection
        this.connection.listen();
    }

    /* ----------------------------------------------------------------------------
		initializeConnection
	---------------------------------------------------------------------------- */
    public initializeConnection(params: InitializeParams): InitializeResult {
        CompletionItemLabelDetails;
        const init: InitializeResult = {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Incremental,
                hoverProvider: true,
                // Tell the client that this server supports code completion.
                completionProvider: {
                    resolveProvider:
                        !!this.completionProvider.onCompletionResolve,
                },
            },
        };

        return init;
    }

    /* ----------------------------------------------------------------------------
		getSQFItemMap
	---------------------------------------------------------------------------- */
    public getSQFItemMap(): IJSON<CompiledSQFItem> {
        return this.sqfItems;
    }
}
