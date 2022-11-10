Return an appropriate crew type for a certain vehicle.<br>


---
*Syntaxes:*

[side, configEntry] call `BIS_fnc_selectCrew`

---
*Example 1:*

```sqf
private _crewType = [blufor, configFile >> "CfgVehicles" >> "B_MRAP_01_F"] call BIS_fnc_selectCrew;
```