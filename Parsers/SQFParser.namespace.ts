import { SQFItemConfig } from "../configuration/grammars/sqf.namespace";
import fs from "fs-extra";
import path from "path";

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
    input: string;
    captureGroups: { [group: number]: string };
}

type StringReplacementFunction = (substring: string, ...args: any[]) => string;
type EasyStringReplacementFunction = (replacementInfo: IReplacementInfo) => string;
export function getStringReplacer(
    easyReplacer: EasyStringReplacementFunction
): StringReplacementFunction {
    return (subString: string, ...args: any[]) => {
        const replacementInfo: IReplacementInfo = {
            matchedString: subString,
            indexOfMatch: -1,
            input: "",
            captureGroups: {},
        };

        let lastCaptureGroup = 0;
        args.forEach((arg) => {
            // original string commes immediately after index
            if (typeof arg === "number") {
                replacementInfo.indexOfMatch = arg;
            } else if (replacementInfo.indexOfMatch > -1 && !replacementInfo.input) {
                replacementInfo.input = arg;
            } else if (typeof arg === "string") {
                replacementInfo.captureGroups[++lastCaptureGroup] = arg;
            }
        });

        return easyReplacer(replacementInfo);
    };
}

type BlobEntry = {
    path: string;
    mode: string;
    type: "blob";
    sha: string;
    url: string;
    size: number;
};

type TreeEntry = { path: string; mode: string; type: "tree"; sha: string; url: string };

export type IGithubTreeEntry = BlobEntry | TreeEntry;

export interface IGithubTreeResponse {
    sha: string;
    url: string;
    tree: IGithubTreeEntry[];
    truncated: boolean;
}

export interface IGithubBlobResponse {
    sha: string;
    node_id: string;
    size: number;
    url: string;
    content: string;
    encoding: string;
}

export interface ISecrets {
    KiskaToken: string;
}

export async function getParserSecrets(): Promise<ISecrets> {
    return fs.readJson(path.resolve(__dirname, "./secrets.json"));
}

export function removeUndefinedKeys<T extends object>(obj: T): T {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value === undefined) {
                delete obj[key];
            } else if (typeof value === "object" && value !== null) {
                obj[key] = removeUndefinedKeys(value);
            }
        }
    }
    return obj;
}
