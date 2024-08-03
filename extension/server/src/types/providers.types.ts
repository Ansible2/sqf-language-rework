import { CompletionItem } from "vscode-languageserver";
import { IDocumentPosition } from "./textDocument.types";

export enum DocumentationType {
    CompletionItem = 1,
    HoverItem = 2,
}

export enum SQFCompletionItemKind {
    Text,
    Method,
    Function,
    Constructor,
    Field,
    Variable,
    Class,
    Interface,
    Module,
    Property,
    Unit,
    Value,
    Enum,
    Keyword,
    Snippet,
    Color,
    File,
    Reference,
    Folder,
    EnumMember,
    Constant,
    Struct,
    Event,
    Operator,
    TypeParameter,
}

export enum SQFCompletionItemTag {
    Deprecated = 1,
}

export interface SQFMarkupContent {
    kind: "markdown" | "plaintext";
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

type Modify<T, R> = Omit<T, keyof R> & R;
export interface SQFItem
    extends Modify<
        CompletionItem,
        { kind: SQFCompletionItemKind; documentation: SQFMarkupContent | null }
    > {
    label: string;
    documentation: SQFMarkupContent | null;
    kind: SQFCompletionItemKind;
    filterText?: string;
    insertText?: string;
    tags?: SQFCompletionItemTag[];
}

export interface ICompletionProvider {
    onCompletion(params: ICompletionParams): SQFItem[];
    onCompletionResolve?(completionItem: SQFItem): SQFItem;
}
