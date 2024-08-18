import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";
import { UnparsedBikiPage } from "./BikiParser";

export const BikiTestPages: {
    [name: string]: { parsed: SQFItemConfig; unparsed: string };
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
        unparsed: `{{RV|type=command

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
    action: {
        parsed: {
            documentation: {
                description:
                    'Make a unit perform an action. See [:Category:Actions](https://community.bistudio.com/wiki/%3ACategory%3AActions) for action names and syntaxes.\n**Arma 3**: \nSince Arma 3 2.18 it is possible to use `actionNow` to perform some actions immediately without any animation.\nHowever, note that some actions do require animations (for example, opening inventory while on foot), otherwise they will get cancelled.\n\n**NOTE**: \n* in singleplayer, when user Alt-Tabs the simulation is paused and so the action will also halt until user returns to the game. For example, <sqf inline>player action ["GetInDriver", car]; executed while user is Alt-Tabbed will result in the user seeing the action happening when he returns to the game screen. This does not happen in Multiplayer.\n* the alternative syntax creates a temporary Logic entity in place of _unit_.',
                examples: [
                    {
                        text: '```sqf\nplayer action ["SitDown", player];\n```',
                    },
                    {
                        text: '```sqf\n_soldier action ["Eject", vehicle _soldier];\n```',
                    },
                    {
                        text: '```sqf\n\nplayer action ["UseWeapon", player, player, 7]; // plays pick up animation before throwing grenade\naction ["UseWeapon", player, player, 7]; // normal grenade throw\n\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [
                            {
                                name: "unit",
                                description: "`Object`",
                            },
                            {
                                name: "actionArray",
                                description: "`Array`",
                            },
                        ],
                        outline: "unit `action` actionArray",
                        returns: "`Nothing`",
                    },
                    {
                        parameters: [
                            {
                                name: "actionArray",
                                description: "`Array`",
                            },
                        ],
                        outline: "`action` actionArray",
                        returns: "`Nothing`",
                    },
                ],
                effectLocality: "Global Effect",
                documentationLink: "https://community.bistudio.com/wiki/action",
            },
            configuration: {
                label: "action",
                grammarType: "command",
            },
        },
        unparsed: `{{RV|type=command

|game1= ofp
|version1= 1.00

|game2= ofpe
|version2= 1.00

|game3= arma1
|version3= 1.00

|game4= arma2
|version4= 1.00

|game5= arma2oa
|version5= 1.50

|game6= tkoh
|version6= 1.00

|game7= arma3
|version7= 0.50

|eff= global

|gr1= Interaction

|descr= Make a unit perform an action. See [[:Category:Actions]] for action names and syntaxes.
{{Feature|arma3|
Since {{arma3}} 2.18 it is possible to use [[actionNow]] to perform some actions immediately without any animation.
However, note that some actions do require animations (for example, opening inventory while on foot), otherwise they will get cancelled.
}}
{{Feature|informative|
* in singleplayer, when user Alt-Tabs the simulation is paused and so the action will also halt until user returns to the game. For example, <sqf inline>player action ["GetInDriver", car];</sqf> executed while user is Alt-Tabbed will result in the user seeing the action happening when he returns to the game screen. This does not happen in Multiplayer.
* the alternative syntax creates a temporary Logic entity in place of ''unit''.
}}

|mp= {{Feature|important|
The argument's [[Multiplayer Scripting#Locality|locality]] is '''usually''' local, but some actions can take a global argument (e.g "Eject", "GetOut", "GetInXXXX", "MoveToXXXX").
See [[:Category:Actions]] for more details.
}}

|s1= unit [[action]] actionArray

|p1= unit: [[Object]]

|p2= actionArray: [[Array]]

|r1= [[Nothing]]

|s2= [[action]] actionArray

|s2since= arma3 2.10

|p21= actionArray: [[Array]]

|r2= [[Nothing]]

|x1= <sqf>player action ["SitDown", player];</sqf>

|x2= <sqf>_soldier action ["Eject", vehicle _soldier];</sqf>

|x3= <sqf>
player action ["UseWeapon", player, player, 7]; // plays pick up animation before throwing grenade
action ["UseWeapon", player, player, 7]; // normal grenade throw
</sqf>

|seealso= [[actionNow]] [[actionIDs]] [[actionParams]] [[addAction]] [[setUserActionText]] [[inGameUISetEventHandler]] [[showHUD]] [[inputAction]] [[removeAction]] [[removeAllActions]] [[weaponsInfo]]
}}

{{Note
|user= Tom_48_97
|timestamp= 20090828092600
|text= In {{arma2}}, you can place a unique unit (for example a boat, far of all combats) and use it for all command lines with action.
}}

{{Note
|user= DreadedEntity
|timestamp= 20150327175700
|text= This command has no effect when a dead unit is used as input.
}}

{{Note
|user= DrSova
|timestamp= 20170627021500
|text= <sqf>player action ["SWITCHWEAPON", player, player, -1]</sqf>
Switching weapon to the back.
}}

{{Note
|user= Yuval
|timestamp= 20170720122200
|text= Some of the actions (such as "DropWeapon") do not always execute, and there should be a set of conditions for them to run.
The unit must be able to perform the dropping animation in order for the action to properly execute.
So, if for example we spawn a unit at [0,0,0] and make it perform a "DropWeapon" action - it won't work if [0,0,0] is water (which it is, if the current map is an island) because the unit will be swimming.<br>
<br>
Also, you cannot stack up actions right after the other. If you run a "DropWeapon" action when the current action animation is still going - it will not perform.
There are a few more conditions for an action to perform, but relying on a hundred percent success of the action is not a good practice.
}}
`,
    },
};
