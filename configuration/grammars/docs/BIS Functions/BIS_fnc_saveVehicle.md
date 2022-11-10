Save vehicle's params (textures, animations, crew).


---
*Syntaxes:*

[object,target,params,delete] call `BIS_fnc_saveVehicle`

---
*Example 1:*

```sqf
[BIS_tank, [missionNamespace, "BIS_someTankSave"], ["SomeRandomParam"], false ] call BIS_fnc_saveVehicle;
```