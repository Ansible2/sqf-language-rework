Converts RGBA color format to #AARRGGBB HTML color format.


---
*Syntaxes:*

colorArray call `BIS_fnc_colorRGBAtoHTML`

---
*Example 1:*

```sqf
[0,0,0,1] call BIS_fnc_colorRGBAtoHTML; // will return #FF000000
```

*Example 2:*

```sqf
[2,93,0,1] call BIS_fnc_colorRGBAtoHTML; // will return #FF025D00
```