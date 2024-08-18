import { expect, describe, it, beforeEach } from "vitest";
import { BikiCommandsParser, BikiTextInterpreter, UnparsedBikiPage } from "./BikiParser";
import { BikiTestPages } from "./BikiTestPages";

function removeUndefinedKeys<T extends object>(obj: T): T {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value === undefined) {
                delete obj[key];
            } else if (typeof value === "object" && value !== null) {
                obj[key] = removeUndefinedKeys(value as T);
            }
        }
    }
    return obj;
}

describe("BikiCommandsParser", () => {
    let parser: BikiCommandsParser;
    beforeEach(() => {
        parser = new BikiCommandsParser();
    });

    describe.concurrent("convertItemConfigs", () => {
        for (const [name, testInputs] of Object.entries(BikiTestPages)) {
            it(`should convert ${name} into a config`, async () => {
                const result = await parser.convertToItemConfigs([testInputs.unparsed]);
                // undefined properties are removed once written to the actual file
                const parsedConfig = removeUndefinedKeys(result[0]);
                expect(parsedConfig).toEqual(testInputs.parsed);
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
            console.debug(markdown);
            expect(markdown).toBe(
                "`Array` format [Position3D](https://community.bistudio.com/wiki/Position%23Introduction), **(Arma 3)** `Object` or `Group`"
            );
        });
    });
});
