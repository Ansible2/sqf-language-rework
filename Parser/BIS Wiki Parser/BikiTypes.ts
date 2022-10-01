import { SQFArgument, SQFDataType, SQFEffect, SQFSyntaxType } from "../SQFParser.namespace";

export interface WikiPage {
    title?: string;
    revision?: {
        text?: string;
    };
}

export enum WikiPageType {
	Function = "function",
	Command = "command",
}

export enum WikiPageDetailType {
	Type,
	Parameter,
	Syntax,
	Description,
	ArgLocality,
	EffectLocality,
	Return,
	Example,
	Unknown,
}

export interface WikiPageDetail {
	pageTitle: string,
	index: number,
	type: WikiPageDetailType,
	detail: string,
}

export interface ParsedSyntax {
    pageTitle: string;
    leftArgTypes?: SQFDataType | SQFDataType[];
    rightArgTypes?: SQFDataType | SQFDataType[];
    returnType: SQFDataType;
    type: SQFSyntaxType;
}

export interface ParsedWikiPage {
    syntaxes: ParsedSyntax[];
    argumentLocality?: SQFArgument;
    effectLocality?: SQFEffect;
}
