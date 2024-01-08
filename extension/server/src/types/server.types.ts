import { IHoverProvider, ICompletionProvider, SQFItem } from "./providers.types";
import { ITextDocuments } from "./textDocument.types";

export interface ISQFServer {
    readonly hoverProvider: IHoverProvider;
    readonly completionProvider: ICompletionProvider;

    getSQFItemMap(): Map<string, SQFItem>;
    getTextDocuments(): ITextDocuments;
}
