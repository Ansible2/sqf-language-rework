import { ISQFServer } from "../types/server.types";
import { CompiledSQFItem } from "../../../../configuration/grammars/sqf.namespace";
import { getWordAtPosition } from "../common/getWordAtPosition";
import {
    IHoverProvider,
    IDocProvider,
    DocumentationType,
    ISqfHover,
    ISqfHoverParams,
} from "../types/providers.types";

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
    public onHover(params: ISqfHoverParams): ISqfHover {
        const documentUri = params.textDocument.uri;
        const emptyHoverReturn = {} as ISqfHover;
        if (!documentUri) return emptyHoverReturn;

        const document = this.server.getTextDocuments().get(documentUri);
        if (!document) return emptyHoverReturn;

        const sqfWord = getWordAtPosition(document, params.position);
        if (!sqfWord) return emptyHoverReturn;

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
    ): ISqfHover | undefined {
        const syntaxItem: CompiledSQFItem | undefined = sqfItems.get(
            syntaxItemName.toLowerCase()
        );
        if (!syntaxItem) return;

        const contents = this.docProvider.createMarkupDoc(
            syntaxItem,
            DocumentationType.HoverItem
        );

        const hoverItem: ISqfHover = {
            contents: contents,
        };
        return hoverItem;
    }
}
