import { getWordAtPosition } from "../common/getWordAtPosition";
import {
    ICompletionParams,
    ICompletionProvider,
    SQFCompletionItemKind,
    SQFItem,
} from "../types/providers.types";
import { ISQFServer } from "../types/server.types";

type FirstCharOfName = string;
export class CompletionProvider implements ICompletionProvider {
    private readonly server: ISQFServer;
    private wasTriggeredByHash: boolean;
    private completionItemMap: Map<FirstCharOfName, SQFItem[]>;
    private completionItemNamesSet: Set<string>;
    private otherDocumentWordsSet: Set<string>;
    private hashtagCompletionItems: SQFItem[] = [];

    constructor(server: ISQFServer) {
        this.completionItemNamesSet = new Set();
        this.otherDocumentWordsSet = new Set();
        this.completionItemMap = new Map();
        this.server = server;
        this.wasTriggeredByHash = false;
        this.loadCompletionItems();
    }

    onCompletion(params: ICompletionParams): SQFItem[] {
        if (params.context?.triggerCharacter === "#") {
            this.wasTriggeredByHash = true;
            return this.hashtagCompletionItems;
        }

        const textDocument = this.server.getTextDocuments().get(params.textDocument.uri);
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
        if (!firstChar) {
            return [];
        }

        const completionItems = this.completionItemMap.get(firstChar.toLowerCase());
        if (!completionItems) {
            return [];
        }

        // when just opening completion menu with no input
        if (!word?.parsedWord) {
            return completionItems;
        }

        /* ------------------------------------
            Provide completion for other words in file that might be trying to match
        ------------------------------------ */
        const parsedWord = word.parsedWord.toLowerCase();
        // make sure the word being typed does not get put into completion list
        this.completionItemNamesSet.add(parsedWord);
        this.otherDocumentWordsSet.add(parsedWord);

        const otherWordsInDocument: SQFItem[] = [];

        this.getWordsNotExcluded(textDocument.getText(), this.completionItemNamesSet).forEach(
            (otherWord: string) => {
                if (this.otherDocumentWordsSet.has(otherWord)) return;

                this.otherDocumentWordsSet.add(otherWord);
                otherWordsInDocument.push({
                    label: otherWord,
                    kind: SQFCompletionItemKind.Text,
                    documentation: null,
                });
            }
        );

        this.completionItemNamesSet.delete(parsedWord);
        this.otherDocumentWordsSet.clear();

        return [...otherWordsInDocument, ...completionItems];
    }

    /* ----------------------------------------------------------------------------
		getWordsNotExcluded
	---------------------------------------------------------------------------- */
    public getWordsNotExcluded(inputString: string, exclusionSet: Set<string>): string[] {
        const inputWithoutComments = inputString.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
        const words = inputWithoutComments.match(/[a-z_]+\w*/gi);
        if (!words) return [];

        const filteredWords = words.filter((word) => !exclusionSet.has(word.toLowerCase()));
        return filteredWords;
    }

    /* ----------------------------------------------------------------------------
		loadCompletionItems
	---------------------------------------------------------------------------- */
    private loadCompletionItems(): void {
        const severSQFItems = this.server.getSQFItemMap();

        this.hashtagCompletionItems = [];
        severSQFItems.forEach((sqfItem, itemName) => {
            if (sqfItem.label.startsWith("#")) {
                this.hashtagCompletionItems.push(sqfItem);
            } else {
                const firstLetter = itemName.charAt(0).toLowerCase();
                let itemArray = this.completionItemMap.get(firstLetter);
                if (!itemArray) {
                    itemArray = [];
                    this.completionItemMap.set(firstLetter, itemArray);
                }

                itemArray.push(sqfItem);
            }

            this.completionItemNamesSet.add(itemName.toLowerCase());
        });
    }
}
