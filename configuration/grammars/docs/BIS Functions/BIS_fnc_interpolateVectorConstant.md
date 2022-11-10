Interpolates vector to target linearly.


---
*Syntaxes:*

[currentValue, targetValue, delta, interpSpeed] call `BIS_fnc_interpolateVectorConstant`

---
*Example 1:*

```sqf
[[1,1,1], [20,20,20], 0.2, 0.1] call BIS_fnc_interpolateVectorConstant;
```