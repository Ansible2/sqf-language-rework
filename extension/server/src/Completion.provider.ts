import { CompletionItem } from "vscode-languageserver";
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
        const severSQFItems = this.server.getSQFItemMap();

        this.completionItems = Object.entries(severSQFItems).map((item) => {
            const sqfItem = item[1];
            const docMarkup = this.docProvider.createMarkupDoc(
                sqfItem,
                DocumentationType.CompletionItem
            );
            const completionItem: CompletionItem = {
                ...sqfItem,
                documentation: docMarkup,
            };

            return completionItem;
        });
    }
}
