Returns the SQUARE of the distance between the two objects or
positions "as the crow flies" (ignoring elevation).


---
*Syntaxes:*

[Point_1,Point_2] call `BIS_fnc_distance2Dsqr`

---
*Example 1:*

```sqf
[ player, soldier_1 ] call  BIS_fnc_distance2Dsqr
```

*Example 2:*

```sqf
[ [100,100,0],[0,0,0] ] call  BIS_fnc_distance2Dsqr
```