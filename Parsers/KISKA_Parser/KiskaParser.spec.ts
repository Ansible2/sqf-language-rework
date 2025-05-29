import { removeUndefinedKeys } from "../SQFParser.namespace";
import { KiskaParser } from "./KiskaParser";
import { KiskaTestPages } from "./KiskaTestPages";
import { beforeEach, describe, expect, it } from "vitest";
import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";

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
                const configurationKeys = Object.keys(testStatics.parsed.configuration) as Array<
                    keyof SQFItemConfig["configuration"]
                >;
                configurationKeys.forEach((configKey) => {
                    expect(parsedConfig.configuration[configKey]).toEqual(
                        testStatics.parsed.configuration[configKey]
                    );
                });
                const documentationKeys = Object.keys(testStatics.parsed.documentation) as Array<
                    keyof SQFItemConfig["documentation"]
                >;
                documentationKeys.forEach((configKey) => {
                    expect(parsedConfig.documentation[configKey]).toEqual(
                        testStatics.parsed.documentation[configKey]
                    );
                });
            });
        }
    });
});
