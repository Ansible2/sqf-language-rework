Converts RGB color format to HTML color format.


---
*Syntaxes:*

colorArray call `BIS_fnc_colorRGBtoHTML`

---
*Example 1:*

```sqf
private _htmlColor = [0,0,0,1] call BIS_fnc_colorRGBtoHTML; // will return #000000
```

*Example 2:*

```sqf
private _htmlColor = [2,93,0,1] call BIS_fnc_colorRGBtoHTML; // will return #025D00
```