Opens the `ORBAT Viewer`.


---
*Syntaxes:*

[path, display, tags, numTiers, parameters] call `BIS_fnc_ORBATOpen`

---
*Example 1:*

```sqf
[configFile >> "CfgORBAT" >> "BIS" >> "O_Brigade", findDisplay 46, [], 4, ["ConfigClass_1", { systemChat "ConfigClass_1" }]] call BIS_fnc_ORBATOpen;
```