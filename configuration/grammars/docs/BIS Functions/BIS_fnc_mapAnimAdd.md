Similar to `mapAnimAdd`, yet it provides additional parameters to allow for a non-linear zoom and various position interpolation modes.


---
*Syntaxes:*

[duration, toZoom, toPosition, interpModeZoom, interpModePosition, fromZoom, fromPosition] call `BIS_fnc_mapAnimAdd`

---
*Example 1:*

```sqf
openMap true; // the function will not work if the map is not open
[2.0, 0.05, getPosASL player] call BIS_fnc_mapAnimAdd;
```