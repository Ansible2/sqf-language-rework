Return config paths to all display controls.


---
*Syntaxes:*

[display,path] call `BIS_fnc_controlConfigs`

---
*Example 1:*

```sqf
[ findDisplay 313, configFile >> "Display3DEN" ] call BIS_fnc_controlConfigs;
```