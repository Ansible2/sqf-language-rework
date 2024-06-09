import { SQFItemConfig } from "../configuration/grammars/sqf.namespace";

export interface Parser {
    getPages: (any: any) => any[];
    parsePages: (pages: any[]) => any[];
    doWithParsedPages: (parsedPages: any[]) => any;
}

export interface IJSON<T> {
    [key: string]: T;
}

export interface UnparsedItem {
    text: string;
}

type SeedFileContent = string;

export interface DocParser {
    readonly SEED_FILE_NAME: string;
    getUnparsedItems(seedFilePath: string): Promise<UnparsedItem[]>;
    convertToItemConfigs(pages: UnparsedItem[]): Promise<SQFItemConfig[]>;
    getOutputFileName(): string;
    getLatestSeedFile(): Promise<SeedFileContent>;
}
