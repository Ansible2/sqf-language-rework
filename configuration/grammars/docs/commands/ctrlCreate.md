Creates a new control in the given display.<br>
The control class could be an existing class from the ` main config` or a custom class defined in the ` mission config`.
The main config is searched first, if the class does not exist there, the mission config is searched.
Some of the common controls defined in the main config that can be used with this command:
<spoiler text="Show list">
 input box with [[DialogControls-EditBox | {{hl


---
*Example 1:*
```sqf
_display ctrlCreate ["RscText", 1234];
```

*Example 2:*
```sqf
_map = findDisplay 46 ctrlCreate ["RscMapControl", -1];
_multiLineText = findDisplay 46 ctrlCreate ["RscTextMulti", -1];
_multiLineEdit = findDisplay 46 ctrlCreate ["RscEditMulti", -1];
```

*Example 3:*
```sqf
myControl = findDisplay 0 ctrlCreate ["RscText", 1234, findDisplay 0 displayCtrl 2300];
```

*Example 4:*
Create Tree View control with search. Available **RscTreeSearch}} class is hardcoded to be used with <See hl Reference t> with idc {{hl|645**. Example below demonstrates how to. After tree is generated, try typing something in the top box.

```sqf
[] spawn 
{
	disableSerialization;

	_display = (if (is3DEN) then {findDisplay 313} else {[] call BIS_fnc_displayMission}) createDisplay "RscDisplayEmpty";

	_edit = _display ctrlCreate ["RscEdit", 645];
	_edit ctrlSetPosition [0,0,1,0.04];
	_edit ctrlSetBackgroundColor [0,0,0,1];
	_edit ctrlCommit 0;

	_tv = _display ctrlCreate ["RscTreeSearch", -1];
	_tv ctrlSetFont "EtelkaMonospacePro";
	_tv ctrlSetFontHeight 0.03;
	_tv ctrlSetPosition [0,0.06,1,0.94];
	_tv ctrlSetBackgroundColor [0,0,0,1];
	_tv ctrlCommit 0;

	_classes = "true" configClasses (configFile >> "CfgVehicles");

	for "_i" from 0 to 5 do
	{
		_tv tvAdd [[], configName selectRandom _classes];
		for "_j" from 0 to 5 do
		{
			_tv tvAdd [[_i], configName selectRandom _classes];
			for "_k" from 0 to 5 do
			{
				_tv tvAdd [[_i, _j], configName selectRandom _classes];
				for "_n" from 0 to 5 do
				{
					_tv tvAdd [[_i, _j, _k], configName selectRandom _classes];
				};
			};
		};
	};
};
```

*Example 5:*
Create a simple submit edit box and show content in hint:

```sqf
disableSerialization;
private _display = findDisplay 46 createDisplay "RscDisplayEmpty";
private _ctrlGroup = _display ctrlCreate ["RscControlsGroupNoScrollbars", -1];
private _ctrlBackground = _display ctrlCreate ["RscTextMulti", -1, _ctrlGroup];
IDD_EDIT_BOX = 123;
private _ctrlEdit = _display ctrlCreate ["RscEditMulti", IDD_EDIT_BOX, _ctrlGroup];
private _ctrlButton = _display ctrlCreate ["RscShortcutButton", -1, _ctrlGroup];
_ctrlGroup ctrlSetPosition [0.5, 0.5, 0, 0];
_ctrlGroup ctrlCommit 0;
_ctrlBackground ctrlSetPosition [0, 0, 0.5, 0.5];
_ctrlBackground ctrlSetBackgroundColor [0.5, 0.5, 0.5, 0.9];
_ctrlBackground ctrlSetText "ENTER TEXT:";
_ctrlBackground ctrlEnable false;
_ctrlBackground ctrlCommit 0;
_ctrlEdit ctrlSetPosition [0.01, 0.05, 0.48, 0.34];
_ctrlEdit ctrlSetBackgroundColor [0, 0, 0, 0.5];
_ctrlEdit ctrlCommit 0;
_ctrlButton ctrlSetPosition [0.185, 0.42, 0.13, 0.05];
_ctrlButton ctrlCommit 0;
_ctrlButton ctrlSetText "SUBMIT";
_ctrlButton ctrlAddEventHandler ["ButtonClick", 
{
	params ["_ctrl"];
	_display = ctrlParent _ctrl;
	_text = ctrlText (_display displayCtrl IDD_EDIT_BOX);
	if (_text == "") then { _text = "EMPTY" };
	hint _text;
	_display closeDisplay 1;
}];
ctrlSetFocus _ctrlEdit;
_ctrlGroup ctrlSetPosition [0.25, 0.25, 0.5, 0.5];
_ctrlGroup ctrlCommit 0.1;
playSound "Hint3";
```