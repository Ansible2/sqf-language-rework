import { expect, describe, it, beforeEach } from "vitest";
import { BikiTextInterpreter } from "./BikiParser";

describe("BikiTextInterpreter", () => {
    let textInterpreter: BikiTextInterpreter;
    beforeEach(() => {
        textInterpreter = new BikiTextInterpreter();
    });

    describe("Convert text to markdown", () => {
        it("inPolygon", () => {
            const text =
                "position: [[Array]] format [[Position#Introduction|Position3D]], {{GVI|arma3|2.14|size= 0.75}} [[Object]] or [[Group]]";
            const markdown = textInterpreter.convertTextToMarkdown(text);
            console.debug(markdown);
            expect(markdown).toBe(
                "position: `Array` format [Position3D](https://community.bistudio.com/wiki/Position%23Introduction), **(Arma 3)** `Object` or `Group`"
            );
        });
    });
});
