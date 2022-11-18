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
import { CompiledSQFItem } from "../../../configuration/grammars/sqf.namespace";
import { getWordAtPosition } from "./helper-functions";
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

    onCompletion(
        params: CompletionParams,
        token: CancellationToken,
        workDoneProgress: WorkDoneProgressReporter
    ): CompletionItem[] {
		console.log("params:");
		console.log(params);
		if (params.context?.triggerCharacter === "#") {
			return this.completionItems.filter(item => item.label.startsWith("#"));
		}
		const textDocument = this.server.textDocuments.get(params.textDocument.uri);
		if (!textDocument) {
			return [];
		}
		
		// actual typed character is now the index behind of the cursor
		params.position.character = params.position.character - 1;
		const word = getWordAtPosition(textDocument,params.position);
		console.log("word:",word?.parsedWord);
		
        return this.completionItems;
    }

    /* ----------------------------------------------------------------------------
		loadCompletionItems
	---------------------------------------------------------------------------- */
    private loadCompletionItems(): void {
        const severSQFItems: Map<string, CompiledSQFItem> =
            this.server.getSQFItemMap();

        this.completionItems = [];
        severSQFItems.forEach((sqfItem, itemName) => {
            const docMarkup = this.docProvider.createMarkupDoc(
                sqfItem,
                DocumentationType.CompletionItem
            );
            const completionItem: CompletionItem = {
                ...sqfItem,
                documentation: docMarkup,
            };
            this.completionItems.push(completionItem);
        });
    }
}
