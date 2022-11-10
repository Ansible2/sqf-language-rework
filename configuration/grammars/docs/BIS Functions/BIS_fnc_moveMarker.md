Moves marker to a new position


---
*Syntaxes:*

[marker, newPosition, duration, interpolationType] call `BIS_fnc_moveMarker`

---
*Example 1:*

```sqf
["BIS_marker", [1111,2222,0]] call BIS_fnc_moveMarker;
```

*Example 2:*

```sqf
["BIS_marker", getMarkerPos "BIS_marker2", 2, 13] call BIS_fnc_moveMarker;
```