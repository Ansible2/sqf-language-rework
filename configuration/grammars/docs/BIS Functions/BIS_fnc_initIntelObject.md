This function sets up an object as intel retrievable by the players by adding a "Take Intel" `addAction` to it.<br>
When a player uses the action, they will play an animation to pick the object up and the object will be deleted from the mission.<br>
The player and any defined recipients will then receive a diary entry which can contain a `title`, `description` and `picture`.<br>
The diary entry will also contain a marker shortcut showing where the intel was found.<br><br>
This function is similar to placing an intel object as Zeus, but the Zeus interface provides some extra options like:<br>
* Which sides can interact with the action
* The picture, title and description used in the diary entry
<br>
When using this function from script there are several variables that need to be set up to acquire the same results (see the examples below).<br>
Without this extra setup the functionality provided is minimal and only includes:
* The "Take Intel" action on the object
* The object can be picked up by a player from any side
* When picked up it will have no title or description and the picture will be a default exclamation mark
* The diary entry will only be given to the person who picked it up
<br>
There are some optional features of intel objects that can be used:
* The diary entry's `description` can be further enhanced by using the supported tags found on the `createDiaryRecord` page.
* There is also a `scripted eventhandler` called `"IntelObjectFound"` that can be registered  on the intel object. The event provides the parameters [object, caller] where `object` is the intel object and `caller` the person who picked it up.
* A Zeus who has the intel object registered as a curator editable object can also receive feedback that the intel has been picked up if the `scripted eventhandler` called `"intelObjectFound"` was registered on the curator module. The event provides the parameters [zeus, caller, object] where `zeus` is the curator module, `caller` the person who picked it up and `object` is the intel object.
The usage of these scripted event handlers is shown in *(Reference Link "#Example 3")*.<br>


---
*Syntaxes:*

[object] call `BIS_fnc_initIntelObject`

---
*Example 1:*

Setup an object as intel from its init attribute in the editor.<br>
Basic version including `picture`, `title`, `description`, `recipients` and `sides that can interact with it`:

```sqf
[this] call BIS_fnc_initIntelObject;

if (isServer) then
{
	// Diary picture:
	this setVariable [
		"RscAttributeDiaryRecord_texture",
		"a3\structures_f_epc\Items\Documents\Data\document_secret_01_co.paa", // Path to picture
		true
	];

	// Diary Title and Description:
	[
		this,
		"RscAttributeDiaryRecord",
		["New Intel", "The enemies have a cave troll!"] // Array in format [Title, Description]
	] call BIS_fnc_setServerVariable;

	// Diary entry shared with (follows BIS_fnc_MP target rules):
	this setVariable ["recipients", west, true];

	// Sides that can interact with the intel object:
	this setVariable ["RscAttributeOwners", [west], true];
};
```

*Example 2:*

To set up an object as intel from its init attribute in the editor with a custom `addAction` title, replace the first line of *(Reference Link "#Example 1")* with the following:

```sqf
if (hasInterface) then
{
	this addAction [
		"Pick up laptop", // custom addAction title
		{ [_this, "action"] spawn BIS_fnc_initIntelObject },
		[],
		10,
		true,
		true,
		"",
		"isPlayer _this && { _this distance _target < 2 } &&
		{ (side group _this) in (_target getVariable ['RscAttributeOwners', [west, east, resistance, civilian]]) }"
	];
};
```

*Example 3:*

Set up an object as intel from its init attribute in the editor.<br>
Basic version plus curator and scripted event handlers:

```sqf
[this] call BIS_fnc_initIntelObject;

if (isServer) then
{
	// Diary picture:
	this setVariable [
		"RscAttributeDiaryRecord_texture",
		"a3\structures_f_epc\Items\Documents\Data\document_secret_01_co.paa", // Path to picture
		true
	];

	// Diary Title and Description:
	[
		this,
		"RscAttributeDiaryRecord",
		["New Intel", "The enemies have a cave troll!"] // Array in format [Title, Description]
	] call BIS_fnc_setServerVariable;

	// Diary entry shared with (follows BIS_fnc_MP target rules):
	this setVariable ["recipients", west, true];

	// Sides that can interact with the intel object:
	this setVariable ["RscAttributeOwners", [west], true];

	// Register intel object with Zeus as curator editable (_zeus is the curator module):
	_zeus addCuratorEditableObjects [[this], false];

	// Add Zeus scripted event:
	[_zeus, "IntelObjectFound", {hint "Intel found"}] call BIS_fnc_addScriptedEventHandler;

	// Add a scripted event that notifies all clients via systemChat when the intel is found:
	[
		this,
		"IntelObjectFound",
		{
			params ["", "_foundBy"];
			private _msg = format ["Intel found by %1", name _foundBy];
			_msg remoteExec ["systemChat", 0];
		}
	 ] call BIS_fnc_addScriptedEventHandler;
};
```
Although both scripted event handlers supply a reference to the intel object, it is deleted from the mission almost immediately, so it could already be `null` when queried.