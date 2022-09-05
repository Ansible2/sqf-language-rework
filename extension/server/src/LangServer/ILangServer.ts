import {
	CompletionItem,
	CompletionList,
	CompletionParams,
    Hover,
    HoverParams,
    InitializeParams,
    InitializeResult,
	RequestHandler,
	ServerRequestHandler,
} from "vscode-languageserver";

export interface ILangServer {
    initializeConnection(params: InitializeParams): InitializeResult;
    onHover: ServerRequestHandler<HoverParams, Hover | undefined | null, never, void>;
	onCompletion: ServerRequestHandler<CompletionParams, CompletionItem[] | CompletionList | undefined | null, CompletionItem[], void>
	onCompletionResolve: RequestHandler<CompletionItem, CompletionItem, void>
}
