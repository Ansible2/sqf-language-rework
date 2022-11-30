import {
    CancellationToken,
    CompletionItem,
    CompletionParams,
    Hover,
    HoverParams,
    MarkupContent,
    WorkDoneProgressReporter,
    _Connection,
} from "vscode-languageserver/node";

import { CompiledSQFItem } from "../../../../configuration/grammars/sqf.namespace";
import { IDocumentPosition } from "./textDocument.types";

export enum DocumentationType {
    CompletionItem = 1,
    HoverItem = 2,
}

export interface IHoverProvider {
    onHover(params: HoverParams): Hover;
}

export interface IDocProvider {
    createMarkupDoc(
        sqfItem: CompiledSQFItem,
        docType: DocumentationType
    ): MarkupContent;
}

export interface ICompletionParams {
    context?: {
        triggerCharacter: string;
    };
    textDocument: {
        uri: string;
    };
    position: IDocumentPosition;
}

export interface ICompletionProvider {
	// TODO: replace CompletionItem[] return type with a generic
    onCompletion(params: ICompletionParams): CompletionItem[];
    onCompletionResolve?(
        completionItem: CompletionItem,
        token: CancellationToken
    ): CompletionItem;
}
