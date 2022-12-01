import {
    CompletionItem,
    CompletionList,
    CompletionParams,
    createConnection,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    RequestHandler,
    ServerRequestHandler,
    TextDocuments,
    TextDocumentSyncKind,
    _Connection,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { getSqfItems } from "../../../configuration/grammars/sqf.syntax";
import { CompiledSQFItem } from "../../../configuration/grammars/sqf.namespace";
import { HoverProvider } from "./providers/Hover.provider";
import { DocProvider } from "./providers/Doc.provider";
import { CompletionProvider } from "./providers/Completion.provider";
import { ITextDocuments } from "./types/textDocument.types";
import { ISQFServer } from "./types/server.types";
import {
    IHoverProvider,
    IDocProvider,
    ICompletionProvider,
} from "./types/providers.types";

export class NodeSQFServer implements ISQFServer {
    public readonly hoverProvider: IHoverProvider;
    public readonly docProvider: IDocProvider;
    public readonly completionProvider: ICompletionProvider;

    private readonly textDocuments: TextDocuments<TextDocument>;
    private readonly sqfItems: Map<string, CompiledSQFItem>;
    private readonly connection: _Connection;
    private readonly hasCompletionResolver: boolean = false;

    /* ----------------------------------------------------------------------------
		constructor
	---------------------------------------------------------------------------- */
    constructor() {
        this.sqfItems = getSqfItems();
        this.connection = createConnection(ProposedFeatures.all);
        this.textDocuments = new TextDocuments(TextDocument);

        this.docProvider = new DocProvider(this);
        this.hoverProvider = new HoverProvider(this);
        this.completionProvider = new CompletionProvider(this);

        // Create a connection for the server, using Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        this.connection.onInitialize(this.initializeConnection.bind(this));
        this.connection.onHover(
            this.hoverProvider.onHover.bind(this.hoverProvider)
        );

        this.connection.onCompletion(
            this.completionProvider.onCompletion.bind(
                this.completionProvider
            ) as ServerRequestHandler<
                CompletionParams,
                CompletionList | CompletionItem[] | null | undefined,
                CompletionItem[],
                void
            >
        );

        const completionResolver = this.completionProvider.onCompletionResolve;
        if (completionResolver) {
            this.hasCompletionResolver = true;
            this.connection.onCompletionResolve(
                completionResolver.bind(
                    this.completionProvider
                ) as unknown as RequestHandler<
                    CompletionItem,
                    CompletionItem,
                    void
                >
            );
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
        const init: InitializeResult = {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Incremental,
                hoverProvider: true,
                completionProvider: {
                    resolveProvider: this.hasCompletionResolver,
                    triggerCharacters: ["#"], // # does not trigger for things such as macros
                },
            },
        };

        return init;
    }

    /* ----------------------------------------------------------------------------
		getSQFItemMap
	---------------------------------------------------------------------------- */
    public getSQFItemMap(): Map<string, CompiledSQFItem> {
        return this.sqfItems;
    }

    /* ----------------------------------------------------------------------------
		getTextDocuments
	---------------------------------------------------------------------------- */
    public getTextDocuments(): ITextDocuments {
        return this.textDocuments as ITextDocuments;
    }
}
