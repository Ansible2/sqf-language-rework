export interface IDocumentPosition {
    line: number;
    character: number;
}

export interface IDocumentRange {
    start: IDocumentPosition;
    end: IDocumentPosition;
}

export interface ITextDocument {
    getText(range?: IDocumentRange): string;
}

export interface ITextDocuments {
	get(documentUri: string): ITextDocument;
}