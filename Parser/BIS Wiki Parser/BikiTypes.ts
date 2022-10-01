import { SQFSyntaxType } from "../SQFParser.namespace";

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
}

export interface WikiPageDetail {
	pageTitle: string,
	index: number,
	type: WikiPageDetailType,
	detailContent: string,
	detailFull: string,
}

export interface ParsedSyntax {
    commandName: string;
    leftArgTypes?: string | string[];
    rightArgTypes?: string | string[];
    returnType: string;
    type: SQFSyntaxType;
}

export interface ParsedPage {
    syntaxes: ParsedSyntax[];
    argumentLocality?: string;
    effectLocality?: string;
}
