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
    Position,
    Range,
    TextDocument,
} from "vscode-languageserver-textdocument";
import {
    CompiledSQFItem,
    IJSON,
} from "../../../configuration/grammars/sqf.namespace";

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
        if (!documentUri) return {} as Hover;

        const document = this.server.textDocuments.get(documentUri);
        if (!document) return {} as Hover;

        const word = this.parseHoveredWord(document, params.position);
        console.log("Found word:", word);

        const sqfItems = this.server.getSQFItemMap();
        const hoverItem = this.getHoverItem(word, sqfItems);
        if (hoverItem) return hoverItem;

        return {} as Hover;
    }

    /* ----------------------------------------------------------------------------
		parseHoveredWord
	---------------------------------------------------------------------------- */
    private parseHoveredWord(
        document: TextDocument,
        positionOfHover: Position,
        allowedRegex?: string
    ): string {
        const hoveredLineNumber: number = positionOfHover.line;
        // this will get the whole range from the first character of
        /// the line being hovered on to the first character (non-inclusive)
        /// of the next line down (hence hoveredLineNumber + 1)
        const hoveredLineStartingPosition: Position = {
            line: hoveredLineNumber,
            character: 0,
        };
        const fullRangeOfLineBeingHovered: Range = {
            start: hoveredLineStartingPosition,
            end: {
                line: hoveredLineNumber + 1,
                character: 0,
            },
        };
        const textOnLineHovered = document.getText(fullRangeOfLineBeingHovered);

        if (!allowedRegex) {
            allowedRegex = "[a-z0-9_]";
        }

        // TODO: figure out how to make this more readable
        const matchChar = new RegExp(allowedRegex, "i");
        const matchAll = new RegExp(`(${allowedRegex}*)`, "i");

        const hoverCharacterIndex: number = positionOfHover.character;
        let indexOfCurrentCharacter: number = hoverCharacterIndex;

        while (indexOfCurrentCharacter > 0) {
            indexOfCurrentCharacter--;
            let subStringToMatch = textOnLineHovered.substring(
                indexOfCurrentCharacter,
                indexOfCurrentCharacter + 1
            );

            if (!matchChar.test(subStringToMatch)) {
                indexOfCurrentCharacter++;
                break;
            }
        }

        if (indexOfCurrentCharacter < 0) indexOfCurrentCharacter = 0;
        const def = textOnLineHovered.substring(indexOfCurrentCharacter);

        let match: RegExpExecArray | null = null;
        if ((match = matchAll.exec(def))) {
            return match[1];
        }

        return "";
    }

    /* ----------------------------------------------------------------------------
		getHoverItem
	---------------------------------------------------------------------------- */
    public getHoverItem(
        syntaxItemName: string,
        sqfItems: IJSON<CompiledSQFItem>
    ): Hover | undefined {
        const syntaxItem: CompiledSQFItem =
            sqfItems[syntaxItemName.toLowerCase()];
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
