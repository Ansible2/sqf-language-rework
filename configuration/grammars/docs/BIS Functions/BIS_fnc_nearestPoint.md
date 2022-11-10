Computes nearest point in a line.


---
*Syntaxes:*

[start, end, point, `is2D`] call `BIS_fnc_nearestPoint`

---
*Example 1:*

```sqf
private _idealLocation = [getMarkerPos "base", getMarkerPos "destination", getPos player, true] call BIS_fnc_nearestPoint;
```