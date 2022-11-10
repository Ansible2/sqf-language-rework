Make a list of units use any *chat command (`groupChat`, `vehicleChat`, `sideChat`, `commandChat`, `globalChat`).


---
*Syntaxes:*

[logic, units, isActivated] call `BIS_fnc_moduleChat`

---
*Example 1:*

```sqf
myLogic setVariable ["Channel", "2"];
myLogic setVariable ["Text", "Hello everyone, this is side chat!"];
[myLogic, [player], true] call BIS_fnc_moduleChat;
```