import {
    Hover,
    HoverParams,
} from "vscode-languageserver/node";
import {
    DocumentationType,
    IDocProvider,
    IHoverProvider,
    ISQFServer,
} from "./server.types";
import {
    CompiledSQFItem,
} from "../../../configuration/grammars/sqf.namespace";
import { getWordAtPosition } from "./helper-functions";

export class HoverProvider implements IHoverProvider {
    private readonly server: ISQFServer;
    private readonly docProvider: IDocProvider;
    constructor(server: ISQFServer) {
        this.server = server;
        this.docProvider = this.server.docProvider;
    }

    /* ----------------------------------------------------------------------------
		onHover
	---------------------------------------------------------------------------- */
    public onHover(params: HoverParams): Hover {
        const documentUri = params.textDocument.uri;
		const emptyHoverReturn = {} as Hover;
        if (!documentUri) return emptyHoverReturn;

        const document = this.server.textDocuments.get(documentUri);
        if (!document) return emptyHoverReturn;
		
		const sqfWord = getWordAtPosition(document, params.position);
		if (!sqfWord) return emptyHoverReturn;

		if (sqfWord) {
			console.log("sqfWord:");
			console.log("parsedWord:",sqfWord.parsedWord);
			console.log("rangeOfParsedWord:",sqfWord.rangeOfParsedWord);
			console.log("startingChar:",sqfWord.startingChar);
			console.log("startingIndex:",sqfWord.startingIndex);
			console.log("leadingHash:",sqfWord.leadingHash);
		}

        const sqfItems = this.server.getSQFItemMap();

		let word = sqfWord.parsedWord;
		const possibleMacroWord = `#${sqfWord.parsedWord}`;
		if (sqfWord.leadingHash && sqfItems.has(possibleMacroWord)) {
			word = possibleMacroWord;
		}

        const hoverItem = this.getHoverItem(word, sqfItems);
        if (!hoverItem) return emptyHoverReturn;

        return hoverItem;
    }

    /* ----------------------------------------------------------------------------
		getHoverItem
	---------------------------------------------------------------------------- */
    public getHoverItem(
        syntaxItemName: string,
        sqfItems: Map<string, CompiledSQFItem>
    ): Hover | undefined {
        const syntaxItem: CompiledSQFItem | undefined =
            sqfItems.get(syntaxItemName.toLowerCase());
        if (!syntaxItem) return;

        const contents = this.docProvider.createMarkupDoc(
            syntaxItem,
            DocumentationType.HoverItem
        );

        const hoverItem: Hover = {
            contents: contents,
        };
        return hoverItem;
    }
}
