import { CompiledSQFItem, SQFMarkupContent } from "../../../../configuration/grammars/sqf.namespace";
import { IDocumentPosition } from "./textDocument.types";

export enum DocumentationType {
    CompletionItem = 1,
    HoverItem = 2,
}

export enum SqfMarkupKind {
    PlainText = "plaintext",
    Markdown = "markdown",
}

export interface ISqfHover {
    contents: SQFMarkupContent;
}

export interface ISqfHoverParams {
    textDocument: {
        uri: string;
    };
    position: IDocumentPosition;
}

export interface IHoverProvider {
    onHover(params: ISqfHoverParams): ISqfHover;
}

export interface IDocProvider {
    createMarkupDoc(
        sqfItem: CompiledSQFItem,
        docType: DocumentationType
    ): SQFMarkupContent;
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

export interface ISqfCompletionItem extends CompiledSQFItem {
    filterText?: string;
    insertText?: string;
}

export interface ICompletionProvider {
    onCompletion(params: ICompletionParams): ISqfCompletionItem[];
    onCompletionResolve?(
        completionItem: ISqfCompletionItem
    ): ISqfCompletionItem;
}
