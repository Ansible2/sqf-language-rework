import { performance } from "perf_hooks";
import { CompiledSQFItem } from "../../../../configuration/grammars/sqf.namespace";
import { getWordAtPosition } from "../common/getWordAtPosition";
import {
    DocumentationType,
    ICompletionParams,
    ICompletionProvider,
    IDocProvider,
    ISqfCompletionItem,
} from "../types/providers.types";
import { ISQFServer } from "../types/server.types";

export class CompletionProvider implements ICompletionProvider {
    private readonly server: ISQFServer;
    private readonly docProvider: IDocProvider;
    private wasTriggeredByHash: boolean;
    private completionItemMap: Map<string, ISqfCompletionItem[]>;
    private hashtagCompletionItems: ISqfCompletionItem[] = [];

    constructor(server: ISQFServer) {
        this.completionItemMap = new Map();
        this.server = server;
        this.docProvider = this.server.docProvider;
        this.wasTriggeredByHash = false;
        this.loadCompletionItems();
    }

    onCompletion(params: ICompletionParams): ISqfCompletionItem[] {
        if (params.context?.triggerCharacter === "#") {
            this.wasTriggeredByHash = true;
            return this.hashtagCompletionItems;
        }

        const textDocument = this.server
            .getTextDocuments()
            .get(params.textDocument.uri);
        if (!textDocument) {
            return [];
        }

        // actual typed character is now the index behind of the cursor
        params.position.character = params.position.character - 1;
        const word = getWordAtPosition(textDocument, params.position);

        if (this.wasTriggeredByHash && word?.leadingHash) {
            const filteredItems = this.hashtagCompletionItems.filter((item) =>
                item.label.includes(word.parsedWord)
            );

            return filteredItems;
        } else {
            this.wasTriggeredByHash = false;
        }

        const firstChar = word?.parsedWord.charAt(0);
        if (!firstChar) { return []; }

        const completionItems = this.completionItemMap.get(firstChar.toLowerCase());
        if (!completionItems) { return []; }

        return completionItems;
    }

    /* ----------------------------------------------------------------------------
		loadCompletionItems
	---------------------------------------------------------------------------- */
    private loadCompletionItems(): void {
        const severSQFItems: Map<string, CompiledSQFItem> =
            this.server.getSQFItemMap();

        this.hashtagCompletionItems = [];
        severSQFItems.forEach((sqfItem, itemName) => {
            const docMarkup = this.docProvider.createMarkupDoc(
                sqfItem,
                DocumentationType.CompletionItem
            );
            const completionItem: ISqfCompletionItem = {
                ...sqfItem,
                documentation: docMarkup,
            };

            if (completionItem.label.startsWith("#")) {
                // items with leading # (preprocessor commands) are
                // filiterd out when included with a # as their filtertext (label by default).
                const labelWithoutHashtag = completionItem.label.slice(
                    1,
                    completionItem.label.length
                );
                const item: ISqfCompletionItem = {
                    ...completionItem,
                    filterText: labelWithoutHashtag,
                    insertText: labelWithoutHashtag,
                };

                this.hashtagCompletionItems.push(item);
            } else {
                const firstLetter = itemName.charAt(0).toLowerCase();
                let itemArray = this.completionItemMap.get(firstLetter);
                if (!itemArray) {
                    itemArray = [];
                    this.completionItemMap.set(firstLetter, itemArray);
                }

                itemArray.push(completionItem);
            }
        });
    }
}
