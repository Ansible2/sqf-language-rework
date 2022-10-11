import { CompletionItem } from "vscode-languageserver/node";
import { CompiledSQFItem } from "../../../configuration/grammars/sqf.namespace";
import {
    DocumentationType,
    ICompletionProvider,
    IDocProvider,
    ISQFServer,
} from "./server.types";

export class CompletionProvider implements ICompletionProvider {
    private readonly server: ISQFServer;
    private readonly docProvider: IDocProvider;
    private completionItems: CompletionItem[] = [];

    constructor(server: ISQFServer) {
        this.server = server;
        this.docProvider = this.server.docProvider;
        this.loadCompletionItems();
    }

    onCompletion(): CompletionItem[] {
        return this.completionItems;
    }

    /* ----------------------------------------------------------------------------
		loadCompletionItems
	---------------------------------------------------------------------------- */
    private loadCompletionItems(): void {
        const severSQFItems: Map<string, CompiledSQFItem> =
            this.server.getSQFItemMap();

        this.completionItems = Object.entries(severSQFItems).map(
            ([itemName, sqfItem]) => {
                const docMarkup = this.docProvider.createMarkupDoc(
                    sqfItem,
                    DocumentationType.CompletionItem
                );
                const completionItem: CompletionItem = {
                    ...sqfItem,
                    documentation: docMarkup,
                };

                return completionItem;
            }
        );
    }
}
