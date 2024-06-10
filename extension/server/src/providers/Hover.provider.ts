import { ISQFServer } from "../types/server.types";
import { getWordAtPosition } from "../common/getWordAtPosition";
import { IHoverProvider, ISqfHover, ISqfHoverParams, SQFItem } from "../types/providers.types";

export class HoverProvider implements IHoverProvider {
    private readonly server: ISQFServer;
    constructor(server: ISQFServer) {
        this.server = server;
    }

    /* ----------------------------------------------------------------------------
		onHover
	---------------------------------------------------------------------------- */
    // TODO: hovering on some commands (missionNamespace, setTimeMultiplier, and null literal) just does nothing
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
    public getHoverItem(syntaxItemName: string, sqfItems: Map<string, SQFItem>): ISqfHover | null {
        const sqfItem = sqfItems.get(syntaxItemName.toLowerCase());
        if (!sqfItem?.documentation) return null;

        const hoverItem: ISqfHover = {
            contents: sqfItem.documentation,
        };
        return hoverItem;
    }
}
