Moves marker to a new position. Simple version of `BIS_fnc_moveMarker`.


---
*Syntaxes:*

[marker, newPosition, duration] call `BIS_fnc_simpleMoveMarker`

---
*Example 1:*

```sqf
["BIS_marker",[1111,2222,0]] call BIS_fnc_moveMarker;
```

*Example 2:*

```sqf
["BIS_marker",(getMarkerPos "BIS_marker2"),2] call BIS_fnc_simpleMoveMarker;
```