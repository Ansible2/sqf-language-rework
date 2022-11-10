Initialize interactive leaflet.


---
*Syntaxes:*

[mode, parameters] call `BIS_fnc_initLeaflet`

---
*Example 1:*

```sqf
["init", [myLeaflet, "#(argb,8,8,3)color(1,1,0,1)", "Yellow pages"]] call BIS_fnc_initLeaflet;
```

*Example 2:*

```sqf
["init", [myLeaflet,"Custom_02"]] call BIS_fnc_initLeaflet;
```

*Example 3:*

```sqf
["init", [myLeaflet,"West"]] call BIS_fnc_initLeaflet;
```