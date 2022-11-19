import {
    CancellationToken,
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
    WorkDoneProgressReporter,
    _Connection,
} from "vscode-languageserver/node";

import {
    Position,
    Range,
    TextDocument,
} from "vscode-languageserver-textdocument";

import {
    CompiledSQFItem,
    IJSON,
    SQFArgument,
    SQFEffect,
} from "../../../configuration/grammars/sqf.namespace";

export interface IHoverProvider {
    onHover(params: HoverParams): Hover;
}

export interface IDocProvider {
    createMarkupDoc(
        sqfItem: CompiledSQFItem,
        docType: DocumentationType
    ): MarkupContent;
}

export interface ICompletionProvider {
    onCompletion(
        params: CompletionParams,
        token: CancellationToken,
        workDoneProgress: WorkDoneProgressReporter
    ): CompletionItem[];
    onCompletionResolve?(): CompletionItem;
}

export interface ISQFServer {
    readonly hoverProvider: IHoverProvider;
    readonly docProvider: IDocProvider;
    readonly textDocuments: TextDocuments<TextDocument>;

    getSQFItemMap(): Map<string, CompiledSQFItem>;
}

export enum DocumentationType {
    CompletionItem = 1,
    HoverItem = 2,
}
