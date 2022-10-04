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
	Unknown = "unknown",
}

export enum WikiPageDetailType {
	PageType,
	Parameter,
	Syntax,
	Description,
	ArgLocality,
	EffectLocality,
	Return,
	Example,
	Unknown,
	FunctionExecution,
}

export interface WikiPageDetail {
	pageTitle: string,
	index: number,
	type: WikiPageDetailType,
	detailFull: string,
	detailContent?: string,
	detailNameFull?: string,
	detailName?: string,
}

export interface ParsedSyntax {
    pageTitle: string;
    leftArgTypes?: SQFDataType[];
    rightArgTypes?: SQFDataType[];
    returnType: SQFDataType;
    syntaxType: SQFSyntaxType;
}

export interface ParsedWikiPage {
    syntaxes: ParsedSyntax[];
    argumentLocality?: SQFArgument;
    effectLocality?: SQFEffect;
}
