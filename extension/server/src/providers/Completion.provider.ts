import { window } from "vscode";
import { TextDocument } from "vscode-languageserver-textdocument";
import {
    CancellationToken,
    CompletionItem,
    CompletionList,
    CompletionParams,
    ResultProgressReporter,
    WorkDoneProgressReporter,
} from "vscode-languageserver/node";
import { CompiledSQFItem } from "../../../../configuration/grammars/sqf.namespace";
import { getWordAtPosition } from "../common/getWordAtPosition";
import {
    DocumentationType,
    ICompletionProvider,
    IDocProvider,
    ISQFServer,
} from "../types/server.types";

export class CompletionProvider implements ICompletionProvider {
    private readonly server: ISQFServer;
    private readonly docProvider: IDocProvider;
    private wasTriggeredByHash: boolean;
    private completionItems: CompletionItem[] = [];
    private hashtagCompletionItems: CompletionItem[] = [];

    constructor(server: ISQFServer) {
        this.server = server;
        this.docProvider = this.server.docProvider;
        this.wasTriggeredByHash = false;
        this.loadCompletionItems();
    }

    onCompletion(
        params: CompletionParams,
        token: CancellationToken,
        workDoneProgress: WorkDoneProgressReporter
    ): CompletionItem[] {
        if (params.context?.triggerCharacter === "#") {
            this.wasTriggeredByHash = true;
            return this.hashtagCompletionItems;
        }

        const textDocument = this.server.textDocuments.get(
            params.textDocument.uri
        );
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

        return this.completionItems;
    }

    /* ----------------------------------------------------------------------------
		onCompletionResolve
	---------------------------------------------------------------------------- */
    onCompletionResolve(
        completionItem: CompletionItem,
        token: CancellationToken
    ): CompletionItem {
        completionItem.documentation = this.docProvider.createMarkupDoc(
            completionItem as unknown as CompiledSQFItem,
            DocumentationType.CompletionItem
        );

        return completionItem;
    }

    /* ----------------------------------------------------------------------------
		loadCompletionItems
	---------------------------------------------------------------------------- */
    private loadCompletionItems(): void {
        const severSQFItems: Map<string, CompiledSQFItem> =
            this.server.getSQFItemMap();

        this.completionItems = [];
        this.hashtagCompletionItems = [];
        severSQFItems.forEach((sqfItem, itemName) => {
            const docMarkup = this.docProvider.createMarkupDoc(
                sqfItem,
                DocumentationType.CompletionItem
            );
            const completionItem: CompletionItem = {
                ...sqfItem,
				documentation: docMarkup,
            } as CompletionItem;

            if (completionItem.label.startsWith("#")) {
                // items with leading # (preprocessor commands) are
                // filiterd out when included with a # as their filtertext (label by default).
                const labelWithoutHashtag = completionItem.label.slice(
                    1,
                    completionItem.label.length
                );
                const item: CompletionItem = {
                    ...completionItem,
                    filterText: labelWithoutHashtag,
                    insertText: labelWithoutHashtag,
                };

                this.hashtagCompletionItems.push(item);
            } else {
                this.completionItems.push(completionItem);
            }
        });
    }
}
