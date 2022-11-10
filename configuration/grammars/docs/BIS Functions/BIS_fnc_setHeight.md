Set an object's altitude.


---
*Syntaxes:*

[target, height, position, mode] call `BIS_fnc_setHeight`

[height, mode] call `BIS_fnc_setHeight`

---
*Example 1:*

```sqf
// will place player's vehicle on "myHeightMarker", 50m above terrain
[vehicle player, 50, getMarkerPos "myHeightMarker", "ATL"]]] call BIS_fnc_setHeight;
```

*Example 2:*

```sqf
// will set the "this" object 50m above sea level at its position
// use where "this" has a value like in an init field
[50, "ASL"] call BIS_fnc_setHeight;
```