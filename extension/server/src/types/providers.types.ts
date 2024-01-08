import { SQFCompletionItemKind } from "../../../../configuration/grammars/sqf.namespace";
import { IDocumentPosition } from "./textDocument.types";

export enum DocumentationType {
    CompletionItem = 1,
    HoverItem = 2,
}

export interface SQFMarkupContent {
    kind: string;
    value: string;
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
export interface ICompletionParams {
    context?: {
        triggerCharacter: string;
    };
    textDocument: {
        uri: string;
    };
    position: IDocumentPosition;
}

export interface SQFItem {
    label: string;
    documentation: SQFMarkupContent | null;
    kind: SQFCompletionItemKind;
    filterText?: string;
    insertText?: string;
}

export interface ICompletionProvider {
    onCompletion(params: ICompletionParams): SQFItem[];
    onCompletionResolve?(completionItem: SQFItem): SQFItem;
}
