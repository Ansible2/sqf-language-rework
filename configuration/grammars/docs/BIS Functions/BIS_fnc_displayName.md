Return given class displayName value. Return base class name if displayName not defined.


---
*Syntaxes:*

[config] call `BIS_fnc_displayName`

---
*Example 1:*

```sqf
private _myDisplayName = [configFile >> "CfgVehicles" >> typeOf vehicle player] call BIS_fnc_displayName;
```