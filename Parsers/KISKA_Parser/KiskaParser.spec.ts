import { removeUndefinedKeys } from "../SQFParser.namespace";
import { KiskaParser } from "./KiskaParser";
import { KiskaTestPages } from "./KiskaTestPages";
import { beforeEach, describe, expect, it } from "vitest";

describe("KiskaParser", () => {
    let parser: KiskaParser;
    beforeEach(() => {
        parser = new KiskaParser();
    });

    describe.concurrent("convertItemConfigs", () => {
        for (const testStatics of KiskaTestPages) {
            it(`should convert ${testStatics.parsed.configuration.label} into a config`, async () => {
                const result = await parser.convertToItemConfigs([testStatics.unparsed]);
                // undefined properties are removed once written to the actual file
                const parsedConfig = removeUndefinedKeys(result[0]);
                expect(testStatics.parsed).toEqual(parsedConfig);
            });
        }
    });
});
