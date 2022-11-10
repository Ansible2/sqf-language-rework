Create marker(s) between two points.


---
*Syntaxes:*

[start, end, spacing, params] call `BIS_fnc_markerPath`

---
*Example 1:*

```sqf
["markerStart", "markerEnd"] call BIS_fnc_markerPath;
```

*Example 2:*

```sqf
[player, nearestLocation [getPos player, "nameCity"]] call BIS_fnc_markerPath;
```