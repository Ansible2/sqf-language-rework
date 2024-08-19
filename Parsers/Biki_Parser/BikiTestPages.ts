import { SQFItemConfig } from "../../configuration/grammars/sqf.namespace";

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
                                    "`Array` format [Position3D](https://community.bistudio.com/wiki/Position#Introduction), **(Arma 3 v2.14)** `Object` or `Group`",
                            },
                            {
                                name: "polygon",
                                description:
                                    "`Array` of [Position3D](https://community.bistudio.com/wiki/Position#Introduction) - positions in format: [position1, position2...., positionN]",
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
    ["||"]: {
        unparsed: `{{RV|type=command

|sortKey= #

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

|gr1= Math

|gr2= Variables

|descr= Returns [[true]] if one or both conditions are [[true]]. In case of the alternative syntax, {{Link|https://en.wikipedia.org/wiki/Lazy_evaluation#Control_structures|lazy evaluation}} is used. That means that if left operand is [[true]], evaluation of the right side is skipped completely.

|alias= [[or]]

|s1= a [[a or b|{{!}}{{!}}]] b

|p1= a: [[Boolean]] - test condition or variable

|p2= b: [[Boolean]] - test condition or variable

|r1= [[Boolean]]

|s2= a [[a or b|{{!}}{{!}}]] b

|s2since= arma2oa 1.62

|p21= a: [[Boolean]] - test condition or variable

|p22= b: [[Code]] - code that returns [[Boolean]]. It is not evaluated if ''a'' returns [[true]]

|r2= [[Boolean]]


|x1= <sqf>if (OBJ1 || _enemycount == 0) then { hint "you win !" };</sqf>

|x2= <sqf>
if (count _array == 0 || { (_array select 0) != player }) then
{
	hint "It works! Without lazy evaluation it would throw an error if array was empty.";
};
</sqf>

|seealso= [[or]] [[and]] [[Operators]]
}}

`,
        parsed: {
            documentation: {
                description:
                    "Returns `true` if one or both conditions are `true`. In case of the alternative syntax, [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation#Control_structures) is used. That means that if left operand is `true`, evaluation of the right side is skipped completely.",
                examples: [
                    {
                        text: '```sqf\nif (OBJ1 || _enemycount == 0) then { hint "you win !" };\n```',
                    },
                    {
                        text: '```sqf\n\nif (count _array == 0 || { (_array select 0) != player }) then\n{\n\thint "It works! Without lazy evaluation it would throw an error if array was empty.";\n};\n\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [
                            {
                                name: "a",
                                description: "`Boolean` - test condition or variable",
                            },
                            {
                                name: "b",
                                description: "`Boolean` - test condition or variable",
                            },
                        ],
                        outline: "a || b",
                        returns: "`Boolean`",
                    },
                    {
                        parameters: [
                            {
                                name: "a",
                                description: "`Boolean` - test condition or variable",
                            },
                            {
                                name: "b",
                                description:
                                    "`Code` - code that returns `Boolean`. It is not evaluated if _a_ returns `true`",
                            },
                        ],
                        outline: "a || b",
                        returns: "`Boolean`",
                    },
                ],
                documentationLink: "https://community.bistudio.com/wiki/a_or_b",
            },
            configuration: {
                label: "||",
                grammarType: "command",
            },
        },
    },
    addForce: {
        unparsed: `{{RV|type=command

|game1= arma3
|version1= 1.72

|arg= global

|eff= global

|gr1= Object Manipulation

|descr= Applies impulse force to unit or given PhysX object at given position.
{{Feature|informative|For more information see {{Link|http://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/apireference/files/classPxRigidBody.html|NVIDIA docs}}.}}

|s1= object [[addForce]] [force, position, setUnconscious]

|p1= object: [[Object]] - PhysX object or {{GVI|arma3|2.04|size= 0.75}}{{Icon|localargument|24}} unit, in which case the unit must be local and will be [[setUnconscious|set unconscious]]

|p2= force: [[Array]] - in format [x,y,z], force vector in '''world''' space; force is expressed in {{Link|https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/apireference/files/structPxForceMode.html|Newton}}

|p3= position: [[Array]] - in format [x,y,z], in ''object''<nowiki/>'s [[Position#PositionRelative|relative position]]

|p4= setUnconscious: [[Boolean]] - (Optional, default [[true]]) only applies to "CAManBase" ''object''; set to [[false]] to keep the person conscious
|p4since= arma3 2.18

|r1= [[Nothing]]

|x1= Apply force [0,1000,0] defined in world space (not factoring object actual positioning) to object position [1,0,0]:
<sqf>_object addForce [[0,1000,0], [1,0,0]];</sqf>

|x2= Apply force [0,1000,0] defined in model space (relative to object) to object position [1,0,0]:
<sqf>_object addForce [_object vectorModelToWorld [0,1000,0], [1,0,0]];</sqf>

|x3= Can be used on units since {{arma3}} v2.04:
<sqf>
if (local bob) then
{
	0 spawn 
	{
		bob addForce [bob vectorModelToWorld [0,-200,0], bob selectionPosition "rightfoot"];
		sleep 5;
		bob setUnconscious false;
	};
};
</sqf>

|x4= <sqf>
player addForce [player vectorModelToWorld [0, -1, 0], [0, 1, 0], false]; // not unconscious
</sqf>

|seealso= [[addTorque]] [[awake]] [[isAwake]] [[vectorModelToWorld]] [[vectorModelToWorldVisual]] [[selectionPosition]] [[disableBrakes]] [[brakesDisabled]]
}}
`,
        parsed: {
            documentation: {
                description:
                    "Applies impulse force to unit or given PhysX object at given position.\n**NOTE**: For more information see [NVIDIA docs](http://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/apireference/files/classPxRigidBody.html).",
                examples: [
                    {
                        text: "Apply force [0,1000,0] defined in world space (not factoring object actual positioning) to object position [1,0,0]:\n\n```sqf\n_object addForce [[0,1000,0], [1,0,0]];\n```",
                    },
                    {
                        text: "Apply force [0,1000,0] defined in model space (relative to object) to object position [1,0,0]:\n\n```sqf\n_object addForce [_object vectorModelToWorld [0,1000,0], [1,0,0]];\n```",
                    },
                    {
                        text: 'Can be used on units since Arma 3 v2.04:\n\n```sqf\n\nif (local bob) then\n{\n\t0 spawn \n\t{\n\t\tbob addForce [bob vectorModelToWorld [0,-200,0], bob selectionPosition "rightfoot"];\n\t\tsleep 5;\n\t\tbob setUnconscious false;\n\t};\n};\n\n```',
                    },
                    {
                        text: "```sqf\n\nplayer addForce [player vectorModelToWorld [0, -1, 0], [0, 1, 0], false]; // not unconscious\n\n```",
                    },
                ],
                syntaxes: [
                    {
                        parameters: [
                            {
                                name: "object",
                                description:
                                    "`Object` - PhysX object or **(Arma 3 v2.14)** **(local arguement)** unit, in which case the unit must be local and will be [set unconscious](https://community.bistudio.com/wiki/setUnconscious)",
                            },
                            {
                                name: "force",
                                description:
                                    "`Array` - in format [x,y,z], force vector in **world** space; force is expressed in [Newton](https://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/apireference/files/structPxForceMode.html)",
                            },
                            {
                                name: "position",
                                description:
                                    "`Array` - in format [x,y,z], in _object_'s [relative position](https://community.bistudio.com/wiki/Position#PositionRelative)",
                            },
                            {
                                name: "setUnconscious",
                                description:
                                    '`Boolean` - (Optional, default `true`) only applies to "CAManBase" _object_; set to `false` to keep the person conscious',
                            },
                        ],
                        outline: "object `addForce` [force, position, setUnconscious]",
                        returns: "`Nothing`",
                    },
                ],
                argumentLocality: "Global Argument",
                effectLocality: "Global Effect",
                documentationLink: "https://community.bistudio.com/wiki/addForce",
            },
            configuration: {
                label: "addForce",
                grammarType: "command",
            },
        },
    },
    addMissionEventHandler: {
        unparsed: `{{RV|type=command

|game1= arma3
|version1= 0.50

|eff= local

|gr1= Event Handlers

|descr= Adds event handler attached to the current mission and returns event handler handle. For the list of available mission event handlers see: [[Arma 3: Mission Event Handlers]]

|s1= [[addMissionEventHandler]] [event, expression, arguments]

|p1= event: [[String]] - event name

|p2= expression: [[Code]] or [[String]] - expression that will be executed in [[missionNamespace]] when event handler fires.
* If the event handler has some data to return upon activation they are stored in the {{hl|_this}} variable
* {{GVI|arma3|1.64|size= 0.75}} the event handler's handle is stored in {{hl|_thisEventHandler}} variable and is available during event handler code execution
* {{GVI|arma3|2.04|size= 0.75}} it is possible to pass additional arguments to the EH code via optional param. The ''args'' are stored in {{hl|_thisArgs}} variable
{{Feature|important|Only arguments of simple types get proper serialization. [[Object]]s, [[Group]]s etc will not serialize and appear as NULLs on game load.}}
* {{GVI|arma3|2.06|size= 0.75}} the event's name is available from {{hl|_thisEvent}} variable

|p3= arguments: [[Array]] - (Optional, default <sqf inline>[]</sqf>) additional arguments to be passed to the EH code. Available during code execution via {{hl|_thisArgs}} variable.
|p3since= arma3 2.04

|r1= [[Number]] - the index of the currently added mission event handler is returned

|x1= <sqf>_id = addMissionEventHandler ["PlayerDisconnected", { systemChat str _this }];</sqf>

|x2= <sqf>_id = addMissionEventHandler ["EachFrame", { systemChat str [_thisArgs, time] }, [time]];</sqf>

|seealso= [[removeMissionEventHandler]] [[removeAllMissionEventHandlers]] [[getEventHandlerInfo]]
}}
`,
        parsed: {
            documentation: {
                description:
                    "Adds event handler attached to the current mission and returns event handler handle. For the list of available mission event handlers see: [Arma 3: Mission Event Handlers](https://community.bistudio.com/wiki/Arma_3:_Mission_Event_Handlers)",
                examples: [
                    {
                        text: '```sqf\n_id = addMissionEventHandler ["PlayerDisconnected", { systemChat str _this }];\n```',
                    },
                    {
                        text: '```sqf\n_id = addMissionEventHandler ["EachFrame", { systemChat str [_thisArgs, time] }, [time]];\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [
                            {
                                name: "event",
                                description: "`String` - event name",
                            },
                            {
                                name: "expression",
                                description:
                                    "`Code` or `String` - expression that will be executed in `missionNamespace` when event handler fires.\n* If the event handler has some data to return upon activation they are stored in the **`_this`** variable\n* **(Arma 3 v1.64)** the event handler's handle is stored in **`_thisEventHandler`** variable and is available during event handler code execution\n* **(Arma 3 v2.04)** it is possible to pass additional arguments to the EH code via optional param. The _args_ are stored in **`_thisArgs`** variable\n**IMPORTANT**: Only arguments of simple types get proper serialization. `Object`s, `Group`s etc will not serialize and appear as NULLs on game load.\n* **(Arma 3 v2.06)** the event's name is available from **`_thisEvent`** variable",
                            },
                            {
                                name: "arguments",
                                description:
                                    "`Array` - (Optional, default <sqf inline>[]) additional arguments to be passed to the EH code. Available during code execution via **`_thisArgs`** variable.",
                            },
                        ],
                        outline: "`addMissionEventHandler` [event, expression, arguments]",
                        returns:
                            "`Number` - the index of the currently added mission event handler is returned",
                    },
                ],
                effectLocality: "Local Effect",
                documentationLink: "https://community.bistudio.com/wiki/addMissionEventHandler",
            },
            configuration: {
                label: "addMissionEventHandler",
                grammarType: "command",
            },
        },
    },
    allAddonsInfo: {
        unparsed: `{{RV|type=command

|game1= arma3
|version1= 2.00

|gr1= Mods and Addons

|descr= Returns the list of all loaded addons.

|s1= [[allAddonsInfo]]

|r1= [[Array]] of [[Array]]s in format [prefix, version, isPatched, modIndex, hash], where:
* prefix: [[String]] - addon prefix
* version: [[String]] - addon revision version
* isPatched: [[Boolean]] - [[true]] if patching is enabled and this addon is being patched 
* {{GVI|arma3|2.14|size= 0.75}} modIndex: [[Number]] - index of mod in [[getLoadedModsInfo]] array. -1 if not found.
* {{GVI|arma3|2.14|size= 0.75}} hash: [[String]] - hash of the addon PBO file. "" if hashing fails.
|x1= <sqf>
allAddonsInfo
/*
	[
		["bin\","150301",false,-1,"66b6d1a87da30e0386fec881504c14a0a6025cb1"],
		["core\","129618",false,-1,"49e1b8da67de848c8ea058fd8512c222ccb6d919"],
		["Languagecore_F\","150376",false,-1,"2ee7b09d60f916d7e56934632f55683a14a636b7"],
		["a3\anims_f_aow\","149768",false,0,"59df21ad1fc6939c460a555b3af662f725564b37"],
		["a3\dubbing_radio_f_enoch\","150070",false,1,"5ca436c61a634fcbd28ca9480a4c8249c5b0e4bd"],
		["a3\armor_f_tank\","150292",false,2,"6d0ea8b45ff4cd316b3d6c5575def9dd048e198e"],
		["a3\music_f_tacops\","124064",false,3,"435c2b0338fe6bec7685002dca7c47778abf44ee"],
		...
	]
*/
</sqf>

|seealso= [[addonFiles]]
}}
`,
        parsed: {
            documentation: {
                description: "Returns the list of all loaded addons.",
                examples: [
                    {
                        text: '```sqf\n\nallAddonsInfo\n/*\n\t[\n\t\t["bin","150301",false,-1,"66b6d1a87da30e0386fec881504c14a0a6025cb1"],\n\t\t["core","129618",false,-1,"49e1b8da67de848c8ea058fd8512c222ccb6d919"],\n\t\t["Languagecore_F","150376",false,-1,"2ee7b09d60f916d7e56934632f55683a14a636b7"],\n\t\t["a3anims_f_aow","149768",false,0,"59df21ad1fc6939c460a555b3af662f725564b37"],\n\t\t["a3dubbing_radio_f_enoch","150070",false,1,"5ca436c61a634fcbd28ca9480a4c8249c5b0e4bd"],\n\t\t["a3armor_f_tank","150292",false,2,"6d0ea8b45ff4cd316b3d6c5575def9dd048e198e"],\n\t\t["a3music_f_tacops","124064",false,3,"435c2b0338fe6bec7685002dca7c47778abf44ee"],\n\t\t...\n\t]\n*/\n\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [],
                        outline: "`allAddonsInfo`",
                        returns:
                            '`Array` of `Array`s in format [prefix, version, isPatched, modIndex, hash], where:\n* prefix: `String` - addon prefix\n* version: `String` - addon revision version\n* isPatched: `Boolean` - `true` if patching is enabled and this addon is being patched \n* **(Arma 3 v2.14)** modIndex: `Number` - index of mod in `getLoadedModsInfo` array. -1 if not found.\n* **(Arma 3 v2.14)** hash: `String` - hash of the addon PBO file. "" if hashing fails.',
                    },
                ],
                documentationLink: "https://community.bistudio.com/wiki/allAddonsInfo",
            },
            configuration: {
                label: "allAddonsInfo",
                grammarType: "command",
            },
        },
    },
    allMapMarkers: {
        unparsed: `{{RV|type=command

|game1= arma3
|version1= 0.50

|gr1= Markers

|descr= Returns all map marker names, including user-placed markers.

{{Feature|informative|
* {{GVI|arma3|1.58|size= 0.75}} User-defined markers have the following name format: {{hl|_USER_DEFINED #<PlayerID>/<MarkerID>/<ChannelID>}}, where:
** <PlayerID> - unique network id of the player in [[String]] format, also available as [[String]] in the 6th param in [[Arma 3: Mission Event Handlers#PlayerConnected | "PlayerConnected"]] and [[Arma 3: Mission Event Handlers#PlayerDisconnected|"PlayerDisconnected"]] Event Handlers
** <MarkerID> - an incrementing marker counter id
** <ChannelID> - id of the chat channel in which the marker was placed (see [[currentChannel]])
* To obtain the custom waypoint's (set with {{Controls|LShift|LMB}}) position, see [[customWaypointPosition]].
}}

|s1= [[allMapMarkers]]

|r1= [[Array]] of [[String]]s

|x1= <sqf>_markers = allMapMarkers; // returns e.g ["marker1", "_USER_DEFINED #2/0"]</sqf>

|x2= <sqf>
{
	private "_a";
	_a = toArray _x;
	_a resize 15;
	if (toString _a == "_USER_DEFINED #") then
	// or if (_x select [0, 15] == "_USER_DEFINED #") since {{arma3}} v1.28
	{
		deleteMarker _x;
	};
} forEach allMapMarkers;
</sqf>

|x3= <sqf>
if (_someString in allMapMarkers) then
{
	hint (_someString + " is an existing marker");
};
</sqf>

|seealso= [[createMarker]] [[deleteMarker]] [[customWaypointPosition]]
}}
`,
        parsed: {
            documentation: {
                description:
                    'Returns all map marker names, including user-placed markers.\n\n**NOTE**: \n* **(Arma 3 v1.58)** User-defined markers have the following name format: **`_USER_DEFINED #<PlayerID>/<MarkerID>/<ChannelID>`**, where:\n** <PlayerID> - unique network id of the player in `String` format, also available as `String` in the 6th param in ["PlayerConnected"](https://community.bistudio.com/wiki/Arma_3:_Mission_Event_Handlers#PlayerConnected) and ["PlayerDisconnected"](https://community.bistudio.com/wiki/Arma_3:_Mission_Event_Handlers#PlayerDisconnected) Event Handlers\n** <MarkerID> - an incrementing marker counter id\n** <ChannelID> - id of the chat channel in which the marker was placed (see `currentChannel`)\n* To obtain the custom waypoint\'s (set with LShift + LMB) position, see `customWaypointPosition`.',
                examples: [
                    {
                        text: '```sqf\n_markers = allMapMarkers; // returns e.g ["marker1", "_USER_DEFINED #2/0"]\n```',
                    },
                    {
                        text: '```sqf\n\n{\n\tprivate "_a";\n\t_a = toArray _x;\n\t_a resize 15;\n\tif (toString _a == "_USER_DEFINED #") then\n\t// or if (_x select [0, 15] == "_USER_DEFINED #") since {{arma3}} v1.28\n\t{\n\t\tdeleteMarker _x;\n\t};\n} forEach allMapMarkers;\n\n```',
                    },
                    {
                        text: '```sqf\n\nif (_someString in allMapMarkers) then\n{\n\thint (_someString + " is an existing marker");\n};\n\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [],
                        outline: "`allMapMarkers`",
                        returns: "`Array` of `String`s",
                    },
                ],
                documentationLink: "https://community.bistudio.com/wiki/allMapMarkers",
            },
            configuration: {
                label: "allMapMarkers",
                grammarType: "command",
            },
        },
    },
    drawIcon3D: {
        unparsed: `{{RV|type=command

|game1= arma3
|version1= 0.50

|gr1= Interaction

|eff= local

|descr= Draws an icon at the given position in the game world. This command has to be executed every frame. Use the [[Arma 3: Mission Event Handlers#Draw3D|Draw3D]] Mission Event Handler (which is executed every frame if the user can see the icon).<br>
In order for the results of this command to be visible through a [[camCreate|custom camera]], enable HUD with [[cameraEffectEnableHUD]].<br>
<sqf inline>showHUD false</sqf> will hide the icon drawn by this command.<br>
In order for arrows to appear, the icon texture should exist. The arrow size is proportionate to the icon size.

{{Feature|informative|
* To avoid flickering and ensure visual fidelity, always use the [[Position#Formats|visual]] (render time scope) variant of position commands, such as [[getPosASLVisual]].
* The ''width'' and ''height'' parameters are multipliers for {{hl|activeWidth}} and {{hl|activeHeight}} set in config. So for example, if one needs to create an icon half the screen wide (<sqf inline>safeZoneW / 2</sqf>) and half the screen tall (<sqf inline>safeZoneH / 2</sqf>), divide these by the according config values: <sqf>
private _iconWidth = (safeZoneW / 2) / getNumber (configFile >> "CfgInGameUI" >> "Cursor" >> "activeWidth");
private _iconHeight = (safeZoneH / 2) / getNumber (configFile >> "CfgInGameUI" >> "Cursor" >> "activeHeight");
</sqf>
}}

|s1= [[drawIcon3D]] [texture, color, position, width, height, angle, text, shadow, textSize, font, textAlign, drawSideArrows, offsetX, offsetY]

|p1= texture: [[String]] - icon texture

|p2= color:
* [[Array]] format [[Color|Color (RGBA)]] - icon color
* {{GVI|arma3|2.04|size= 0.75}} [[Array]] of two [[Array]]s format [[Color|Color (RGBA)]] - Icon and text color

|p3= position: [[Array]] format [[Position#PositionAGL|PositionAGL]] - icon position

|p4= width: [[Number]] - icon width

|p5= height: [[Number]] - icon height

|p6= angle: [[Number]] - icon rotation angle

|p7= text: [[String]] - (Optional, default "") text label to display next to the icon

|p8= shadow: (Optional, default 0)
* [[Number]]:
** '''0:''' no shadow
** '''1:''' shadow (not used in this context, used in UI context)
** '''2:''' outline
* [[Boolean]]:
** [[true]] - outline
** [[false]] - no shadow

|p9= textSize: [[Number]] - (Optional, default size of system) text size

|p10= font: [[String]] - (Optional, default "RobotoCondensedBold") font class name from {{hl|CfgFontFamilies}} (see {{Link|FXY File Format#Available Fonts}})

|p11= textAlign: [[String]] - (Optional, default "center") text alignment, can be one of:
* "left"
* "center"
* "right"

|p12= drawSideArrows: [[Boolean]] - (Optional, default [[false]]) [[true]] to draw arrows and the text label at edge of screen when the icon moves off the screen

|p13= offsetX: [[Number]] - (Optional, default 0) X offset for the icon text
|p13since= arma3 2.04

|p14= offsetY: [[Number]] - (Optional, default 0) Y offset for the icon text
|p14since= arma3 2.04

|r1= [[Nothing]]

|x1= Icon and text:
<sqf>
addMissionEventHandler ["Draw3D", {
	drawIcon3D ["targetIcon.paa", [1,1,1,1], ASLToAGL getPosASLVisual cursorTarget, 1, 1, 45, "Target", 1, 0.05, "TahomaB"];
}];
</sqf>

|x2= Just text:
<sqf>
addMissionEventHandler ["Draw3D", {
	drawIcon3D ["", [1,0,0,1], ASLToAGL getPosASLVisual cursorTarget, 0, 0, 0, "Target", 1, 0.05, "PuristaMedium"];
}];
</sqf>

|x3= <sqf>
iconPos = player getPos [10, 0] vectorAdd [0,0,2];
addMissionEventHandler ["draw3D",
{
	drawIcon3D
	[
		"\\a3\\ui_f\\data\\IGUI\\Cfg\\Radar\\radar_ca.paa",
		[0,0,1,1],
		iconPos,
		5,
		5,
		getDirVisual player,
		"COMPASS",
		0,
		0.3,
		"PuristaMedium",
		"center",
		true
	];
}];
</sqf>

|x4= Since {{GVI|arma3|2.04}}
<sqf>
pos = player getPos [10, 0] vectorAdd [0,0,2];
addMissionEventHandler ["draw3D",
{
	_k = 10 / (player distance pos);
	drawIcon3D
	[
		"\\a3\\ui_f\\data\\IGUI\\Cfg\\Radar\\radar_ca.paa",
		[1,0,0,1],
		pos,
		1 * _k,
		1 * _k,
		0,
		name player,
		0,
		0.04 * _k,
		"RobotoCondensed",
		"right",
		true,
		0.005 * _k,
		-0.035 * _k
	];
}];
</sqf>

|seealso= [[drawLine3D]] [[getMissionPath]] [[showHUD]] [[cameraEffectEnableHUD]]
}}

{{Note
|user= Killzone_Kid
|timestamp= 20130831095100
|text= As command syntax indicates, this command expects icon position in format [[Position#PositionAGL|PositionAGL]] meaning that over the land it expects [[Position#PositionATL|PositionATL]] and over the sea [[Position#PositionASLW|PositionASLW]].<br>
This command works well with addon textures, however getting it to display mission textures is a bit tricky. Follow {{Link|http://killzonekid.com/arma-scripting-tutorials-mission-root/|this guide}}.
}}

{{Note
|user= AgentRev
|timestamp= 20140419223500
|text= You should rely exclusively on [[modelToWorldVisual]] for a moving object's icon position if you want it to accurately stay at the correct height over the sea. It computes faster than [[ASLToAGL]].<br>
Width, height, and textSize are proportional to the user's interface size, which can optionally be compensated against via {{hl|size / ([[getResolution]] select 5)}}<br>
Additionally, width and height are inversely proportional to the {{hl|fovLeft}} and {{hl|fovTop}} parameters from the user's [[Profile|ArmaProfile]], and AFAIK those parameters are not retrievable via scripting.
For example, a {{hl|fovTop}} higher than the default value of 0.75 will make all 3D icons smaller vertically. I'm not sure if this is a bug or by design, however it is definitely annoying to take into account.
}}

{{Note
|user= DreadedEntity
|timestamp= 20141023024200
|text= [[drawIcon3D]] and [[BIS_fnc_addStackedEventHandler]] work well together.<br>
Using formatting commands with [[drawIcon3D]] will not work, instead, they will be added to the string.<br>
<sqf>
["uniqueID", "onEachFrame",
{
	drawIcon3D ["myIcon.jpg", [1,1,1,0.5], getPos player, 1, 1, 0, format ["%1\n%2", "Dreaded", "Entity"]];
}] call BIS_fnc_addStackedEventHandler;
</sqf>
Shown text will be '''Dreaded\nEntity'''. '''(A3 1.32.127785)'''<br><br>

The "text" parameter must be a string. You cannot use [[Structured_Text]].<br>
<sqf>
["uniqueID", "onEachFrame",
{
	drawIcon3D
	[
		"myIcon.jpg",
		[1,1,1,0.5],
		getPos player,
		1,
		1,
		0,
		parseText format ["<t size='1.25' font='PuristaLight' color='#ff0000'>%1%2</t>", Dreaded, Entity]
	];
}] call BIS_fnc_addStackedEventHandler;
</sqf>
'''(A3 1.32.127785)'''
}}

{{Note
|user= PierreMGI
|timestamp= 20160322203800
|text= If you want to use this command, on each frame, with plenty of objects or entities to mark, you can manage conditions in order to reduce the number of CPU operations.
One of the most demanding CPU resource is probably a DrawIcon3D treatment for these objects/entities because even if not displayed (like for objects behind player), the CPU calculates the icons in the defined radius of your nearEntities / nearestObjects command.
Don't stay with a simple radius condition (disk selecting entities or nearestObjects) which calculates all, then useless (not displayed), icons!

Here is a way to restrict this command to your screen display:
in a onEachFramed context:
<sqf>
unitsToDisplay = allUnits;
addMissionEventHandler ["EachFrame", {
	private _offset = [0,0,0];
	{
		private _screenPosition = worldToScreen (_x modelToWorldVisual _offset);
		if (_screenPosition isEqualTo []) then { continue };
		// < your drawIcon3D treatment here >
	} foreach unitsToDisplay
}];
</sqf>
Tested with +100 units, equally spread on a disk. (Note: FPS depend also on environment in map. Choose a "desert" for that).
}}
`,
        parsed: {
            documentation: {
                description:
                    'Draws an icon at the given position in the game world. This command has to be executed every frame. Use the [Draw3D](https://community.bistudio.com/wiki/Arma_3:_Mission_Event_Handlers#Draw3D) Mission Event Handler (which is executed every frame if the user can see the icon).\n\nIn order for the results of this command to be visible through a [custom camera](https://community.bistudio.com/wiki/camCreate), enable HUD with `cameraEffectEnableHUD`.\n\n<sqf inline>showHUD false will hide the icon drawn by this command.\n\nIn order for arrows to appear, the icon texture should exist. The arrow size is proportionate to the icon size.\n\n**NOTE**: \n* To avoid flickering and ensure visual fidelity, always use the [visual](https://community.bistudio.com/wiki/Position#Formats) (render time scope) variant of position commands, such as `getPosASLVisual`.\n* The _width_ and _height_ parameters are multipliers for **`activeWidth`** and **`activeHeight`** set in config. So for example, if one needs to create an icon half the screen wide (<sqf inline>safeZoneW / 2) and half the screen tall (<sqf inline>safeZoneH / 2), divide these by the according config values: \n```sqf\n\nprivate _iconWidth = (safeZoneW / 2) / getNumber (configFile >> "CfgInGameUI" >> "Cursor" >> "activeWidth");\nprivate _iconHeight = (safeZoneH / 2) / getNumber (configFile >> "CfgInGameUI" >> "Cursor" >> "activeHeight");\n\n```',
                examples: [
                    {
                        text: 'Icon and text:\n\n```sqf\n\naddMissionEventHandler ["Draw3D", {\n\tdrawIcon3D ["targetIcon.paa", [1,1,1,1], ASLToAGL getPosASLVisual cursorTarget, 1, 1, 45, "Target", 1, 0.05, "TahomaB"];\n}];\n\n```',
                    },
                    {
                        text: 'Just text:\n\n```sqf\n\naddMissionEventHandler ["Draw3D", {\n\tdrawIcon3D ["", [1,0,0,1], ASLToAGL getPosASLVisual cursorTarget, 0, 0, 0, "Target", 1, 0.05, "PuristaMedium"];\n}];\n\n```',
                    },
                    {
                        text: '```sqf\n\niconPos = player getPos [10, 0] vectorAdd [0,0,2];\naddMissionEventHandler ["draw3D",\n{\n\tdrawIcon3D\n\t[\n\t\t"\\a3\\ui_f\\data\\IGUI\\Cfg\\Radar\\radar_ca.paa",\n\t\t[0,0,1,1],\n\t\ticonPos,\n\t\t5,\n\t\t5,\n\t\tgetDirVisual player,\n\t\t"COMPASS",\n\t\t0,\n\t\t0.3,\n\t\t"PuristaMedium",\n\t\t"center",\n\t\ttrue\n\t];\n}];\n\n```',
                    },
                    {
                        text: 'Since **(Arma 3 v2.04)**\n\n```sqf\n\npos = player getPos [10, 0] vectorAdd [0,0,2];\naddMissionEventHandler ["draw3D",\n{\n\t_k = 10 / (player distance pos);\n\tdrawIcon3D\n\t[\n\t\t"\\a3\\ui_f\\data\\IGUI\\Cfg\\Radar\\radar_ca.paa",\n\t\t[1,0,0,1],\n\t\tpos,\n\t\t1 * _k,\n\t\t1 * _k,\n\t\t0,\n\t\tname player,\n\t\t0,\n\t\t0.04 * _k,\n\t\t"RobotoCondensed",\n\t\t"right",\n\t\ttrue,\n\t\t0.005 * _k,\n\t\t-0.035 * _k\n\t];\n}];\n\n```',
                    },
                ],
                syntaxes: [
                    {
                        parameters: [
                            {
                                name: "texture",
                                description: "`String` - icon texture",
                            },
                            {
                                name: "color",
                                description:
                                    "* `Array` format [Color (RGBA)](https://community.bistudio.com/wiki/Color) - icon color\n* **(Arma 3 v2.04)** `Array` of two `Array`s format [Color (RGBA)](https://community.bistudio.com/wiki/Color) - Icon and text color",
                            },
                            {
                                name: "position",
                                description:
                                    "`Array` format [PositionAGL](https://community.bistudio.com/wiki/Position#PositionAGL) - icon position",
                            },
                            {
                                name: "width",
                                description: "`Number` - icon width",
                            },
                            {
                                name: "height",
                                description: "`Number` - icon height",
                            },
                            {
                                name: "angle",
                                description: "`Number` - icon rotation angle",
                            },
                            {
                                name: "text",
                                description:
                                    '`String` - (Optional, default "") text label to display next to the icon',
                            },
                            {
                                name: "shadow",
                                description:
                                    "(Optional, default 0)\n* `Number`:\n** **0:** no shadow\n** **1:** shadow (not used in this context, used in UI context)\n** **2:** outline\n* `Boolean`:\n** `true` - outline\n** `false` - no shadow",
                            },
                            {
                                name: "textSize",
                                description:
                                    "`Number` - (Optional, default size of system) text size",
                            },
                            {
                                name: "font",
                                description:
                                    '`String` - (Optional, default "RobotoCondensedBold") font class name from **`CfgFontFamilies`** (see [FXY File Format - Available Fonts](https://community.bistudio.com/wiki/FXY_File_Format#Available_Fonts))',
                            },
                            {
                                name: "textAlign",
                                description:
                                    '`String` - (Optional, default "center") text alignment, can be one of:\n* "left"\n* "center"\n* "right"',
                            },
                            {
                                name: "drawSideArrows",
                                description:
                                    "`Boolean` - (Optional, default `false`) `true` to draw arrows and the text label at edge of screen when the icon moves off the screen",
                            },
                            {
                                name: "offsetX",
                                description:
                                    "`Number` - (Optional, default 0) X offset for the icon text",
                            },
                            {
                                name: "offsetY",
                                description:
                                    "`Number` - (Optional, default 0) Y offset for the icon text",
                            },
                        ],
                        outline:
                            "`drawIcon3D` [texture, color, position, width, height, angle, text, shadow, textSize, font, textAlign, drawSideArrows, offsetX, offsetY]",
                        returns: "`Nothing`",
                    },
                ],
                effectLocality: "Local Effect",
                documentationLink: "https://community.bistudio.com/wiki/drawIcon3D",
            },
            configuration: {
                label: "drawIcon3D",
                grammarType: "command",
            },
        },
    },
};
