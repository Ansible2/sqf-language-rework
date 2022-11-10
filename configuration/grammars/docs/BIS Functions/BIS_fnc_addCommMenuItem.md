Add `Arma 3: Communication Menu|communication menu` to the given unit.

The item will be available in the Communication menu and visualized in comm menu icon area.


---
*Syntaxes:*

[owner, itemClass, textArguments, expressionArguments, notification] call `BIS_fnc_addCommMenuItem`

---
*Example 1:*

```sqf
private _supportHeli = [player,"Support_Request_CAS_Heli"] call BIS_fnc_addCommMenuItem;
_supportHeli = [player,"Support_Request_CAS_Heli",nil,nil,""] call BIS_fnc_addCommMenuItem; // don't show notification
```