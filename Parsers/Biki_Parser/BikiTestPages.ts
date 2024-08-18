import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import { UnparsedBikiPage } from "./BikiParser";

export const BikiTestPages: {
    [name: string]: { parsed: SQFItemConfig; unparsed: UnparsedBikiPage };
} = {
    inPolygon: {
        parsed: {
            documentation: {
                description:
                    "Checks whether position is inside given polygon. The polygon is only checked in 2 dimensions, i.e. the value of Z is ignored.",
                examples: [
                    {
                        text: "```sqf\nprivate _isInside = [100, 100, 0] inPolygon [[0, 0, 0], [1000, 1000, 0], [1000, 0, 0]];\n```",
                    },
                    {
                        text: '```sqf\n\nprivate _markerName = "_USER_DEFINED #0/0/1";\n\nprivate _xy2DPositions = markerPolyline _markerName;\nprivate _positions = [];\n\n// let\'s convert these x,y coordinates to "normal" position arrays\nfor "_i" from 0 to count _xy2DPositions - 1 step 2 do\n{\n\t_positions pushBack [_xy2DPositions select _i, _xy2DPositions select (_i + 1), 0];\n};\n\nplayer inPolygon _positions; // true if in the drawn shape, false if not\n\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [
                            {
                                name: "position",
                                description:
                                    "`Array` format [Position3D](https://community.bistudio.com/wiki/Position%23Introduction), **(Arma 3)** `Object` or `Group`",
                            },
                            {
                                name: "polygon",
                                description:
                                    "`Array` of [Position3D](https://community.bistudio.com/wiki/Position%23Introduction) - positions in format: [position1, position2...., positionN]",
                            },
                        ],
                        outline: "position `inPolygon` polygon",
                        returns: "`Boolean`",
                    },
                ],
                documentationLink: "https://community.bistudio.com/wiki/inPolygon",
            },
            configuration: {
                label: "inPolygon",
                grammarType: "command",
            },
        },
        unparsed: {
            title: "inPolygon",
            text: `{{RV|type=command

|game1= arma3
|version1= 1.54

|gr1= Positions

|descr= Checks whether position is inside given polygon. The polygon is only checked in 2 dimensions, i.e. the value of Z is ignored.

|s1= position [[inPolygon]] polygon

|p1= position: [[Array]] format [[Position#Introduction|Position3D]], {{GVI|arma3|2.14|size= 0.75}} [[Object]] or [[Group]]

|p2= polygon: [[Array]] of [[Position#Introduction|Position3D]] - positions in format: [position1, position2...., positionN]

|r1= [[Boolean]]

|x1= <sqf>private _isInside = [100, 100, 0] inPolygon [[0, 0, 0], [1000, 1000, 0], [1000, 0, 0]];</sqf>

|x2= <sqf>
private _markerName = "_USER_DEFINED #0/0/1";

private _xy2DPositions = markerPolyline _markerName;
private _positions = [];

// let's convert these x,y coordinates to "normal" position arrays
for "_i" from 0 to count _xy2DPositions - 1 step 2 do
{
	_positions pushBack [_xy2DPositions select _i, _xy2DPositions select (_i + 1), 0];
};

player inPolygon _positions; // true if in the drawn shape, false if not
</sqf>

|seealso= [[in]] [[inArea]] [[drawPolygon]]
}}
`,
        },
    },
};
