Rotating a marker to new azimuth, using shortest turn, clockwise or anticlockwise movement.


---
*Syntaxes:*

[marker, newAzimuth, absoluteOrRelativ, shortestTurn, duraton] spawn `BIS_fnc_rotateMarker`

---
*Example 1:*

```sqf
["BIS_marker",90] spawn BIS_fnc_rotateMarker;
```

*Example 2:*

```sqf
["BIS_marker",90,false,2,5] spawn BIS_fnc_rotateMarker;
```