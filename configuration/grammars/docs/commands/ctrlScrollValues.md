Returns scroll values for current scrollbars in range 0...1 (-1 if not applicable) for the following controls:
{{Columns|2|
* `CT_CONTROLS_TABLE`
* `CT_CONTROLS_GROUP`
* `CT_TREE`
* `CT_LISTBOX`
* `CT_COMBO`
* `CT_XCOMBO`
* `CT_LISTNBOX`
* `CT_LISTNBOX_CHECKABLE`


---
*Example 1:*
```sqf
private _scrollvalues = ctrlScrollValues _ctrl;
```

*Example 2:*
```sqf
// ControlsGroup
private _disp = findDisplay 46 createDisplay "RscDisplayEmpty";
private _ctrlGrp = _disp ctrlCreate ["RscControlsGroup", -1];
private _ctrl = _disp ctrlCreate ["RscTree", -1, _ctrlGrp];
_ctrl tvAdd [[], "Root"];
for "_i" from 1 to 25 do
{
	_ctrl tvAdd [[0], format ["Tree Item %1", _i]];
};
_ctrl ctrlSetPosition [0,0,0.3,1.2];
_ctrl ctrlCommit 0;
tvExpandAll _ctrl;
_ctrlGrp ctrlSetPosition [0,0,0.2,0.3];
_ctrlGrp ctrlCommit 0;
 
uiNamespace setVariable ["_ctrl", _ctrlGrp];
onEachFrame
{
	hintSilent str ctrlScrollValues (uiNamespace getVariable ["_ctrl", controlNull]);
};
[] spawn
{
	sleep 1;
	uiNamespace getVariable ["_ctrl", controlNull] ctrlSetScrollValues [0.3, -1];
	sleep 1;
	uiNamespace getVariable ["_ctrl", controlNull] ctrlSetScrollValues [-1, 0.3];
	sleep 1;
	uiNamespace getVariable ["_ctrl", controlNull] ctrlSetScrollValues [0.7, -1];
	sleep 1;
	uiNamespace getVariable ["_ctrl", controlNull] ctrlSetScrollValues [-1, 0.7];
};
```