Searches for class in mission, campaign and then in global config file.


---
*Syntaxes:*

[input, defaultValue] call `BIS_fnc_loadClass`

---
*Example 1:*

```sqf
[ ["bin\config.bin"], configFile >> "Cfg3DEN" >> "Camera"] call BIS_fnc_loadClass
```