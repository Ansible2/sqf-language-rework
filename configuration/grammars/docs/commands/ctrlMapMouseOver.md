Returns description of map sign mouse cursor is over. Works with in-game map as well as 2D editor map in edit mode.


---
*Syntaxes:*

`ctrlMapMouseOver` control

---
*Example 1:*

```sqf
(uiNamespace getVariable "_map") ctrlMapCursor ["Track","HC_overFriendly"];

_mouseover = if (count (ctrlMapMouseOver (uiNamespace getVariable "_map")) > 0) then
{
	ctrlMapMouseOver (uiNamespace getVariable "_map")
}
else
{
	[""]
};

if (_mouseover select 0 == "task" && str(_logic getVariable "onTaskAssigned") != str{}) then
{
	//--- Task
	(uiNamespace getVariable "_map") ctrlMapCursor ["Track","HC_overMission"];
}
else
{
	//--- Waypoint
	(uiNamespace getVariable "_map") ctrlMapCursor ["Track","HC_move"];
};
```

*Example 2:*

```sqf
onEachFrame {hintSilent str ctrlMapMouseOver (findDisplay 12 displayCtrl 51)};
```