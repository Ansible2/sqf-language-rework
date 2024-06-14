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

interface IReplacementInfo {
    matchedString: string;
    indexOfMatch: number;
    searchedString: string;
    captureGroups: { [group: number]: string };
}
export function getStringReplacer(
    easyReplacer: (replacementInfo: IReplacementInfo) => string
): (substring: string, ...args: any[]) => string {
    return (subString: string, ...args: any[]) => {
        const replacementInfo: IReplacementInfo = {
            matchedString: subString,
            indexOfMatch: -1,
            searchedString: "",
            captureGroups: {},
        };

        let lastCaptureGroup = 0;
        args.forEach((arg) => {
            // original string commes immediately after index
            if (replacementInfo.indexOfMatch > -1) {
                replacementInfo.searchedString = arg;
            } else if (typeof arg === "number") {
                replacementInfo.indexOfMatch = arg;
            } else if (typeof arg === "string") {
                replacementInfo.captureGroups[++lastCaptureGroup] = arg;
            }
        });

        return easyReplacer(replacementInfo);
    };
}
