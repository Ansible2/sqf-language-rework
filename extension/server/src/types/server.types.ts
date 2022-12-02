import { CompiledSQFItem } from "../../../../configuration/grammars/sqf.namespace";
import {
    IHoverProvider,
    IDocProvider,
    ICompletionProvider,
} from "./providers.types";
import { ITextDocuments } from "./textDocument.types";

export interface ISQFServer {
    readonly hoverProvider: IHoverProvider;
    readonly docProvider: IDocProvider;
    readonly completionProvider: ICompletionProvider;

    getSQFItemMap(): Map<string, CompiledSQFItem>;
    getTextDocuments(): ITextDocuments;
}
