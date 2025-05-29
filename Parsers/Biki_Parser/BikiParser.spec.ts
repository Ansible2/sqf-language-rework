import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import { removeUndefinedKeys } from "../SQFParser.namespace";
import { BikiCommandsParser, BikiTextInterpreter, UnparsedBikiPage } from "./BikiParser";
import { BikiTestPages } from "./BikiTestPages";
import { beforeEach, describe, expect, it } from "vitest";

describe("BikiCommandsParser", () => {
    let parser: BikiCommandsParser;
    beforeEach(() => {
        parser = new BikiCommandsParser();
    });

    describe.concurrent("convertItemConfigs", () => {
        for (const [name, testStatics] of Object.entries(BikiTestPages)) {
            it(`should convert ${name} into a config`, async () => {
                const page: UnparsedBikiPage = {
                    title: name,
                    text: testStatics.unparsed,
                };
                 const result = await parser.convertToItemConfigs([page]);
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

describe("BikiTextInterpreter", () => {
    let textInterpreter: BikiTextInterpreter;
    beforeEach(() => {
        textInterpreter = new BikiTextInterpreter();
    });

    describe("Convert text to markdown", () => {
        it("inPolygon", () => {
            const text =
                "[[Array]] format [[Position#Introduction|Position3D]], {{GVI|arma3|2.14|size= 0.75}} [[Object]] or [[Group]]";
            const markdown = textInterpreter.convertTextToMarkdown(text);
            expect(markdown).toBe(
                "`Array` format [Position3D](https://community.bistudio.com/wiki/Position#Introduction), (**Arma 3 v2.14**) `Object` or `Group`"
            );
        });
    });
});
