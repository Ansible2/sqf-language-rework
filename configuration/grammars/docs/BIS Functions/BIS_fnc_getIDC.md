Returns IDD of given display.


---
*Syntaxes:*

[config, ctrlName] call `BIS_fnc_getIDC`

---
*Example 1:*

```sqf
private _IDC = [configFile >> "Display3DENPlace", "ButtonCancel"] call BIS_fnc_getIDC;
```