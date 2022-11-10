Interpolates vector to target, scaled by distance.
Starts very fast and smoothes out.


---
*Syntaxes:*

[currentValue, targetValue, delta, interpSpeed] call `BIS_fnc_interpolateVector`

---
*Example 1:*

```sqf
[[1,1,1], [20,20,20], 0.2, 0.1] call BIS_fnc_interpolateVector;
```