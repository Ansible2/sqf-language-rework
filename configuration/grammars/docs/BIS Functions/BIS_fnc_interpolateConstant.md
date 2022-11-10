Interpolates scalar to target linearly.


---
*Syntaxes:*

[currentValue, targetValue, delta, interpSpeed] call `BIS_fnc_interpolateConstant`

---
*Example 1:*

```sqf
private _value = [4,8,0.2,0.1] call BIS_fnc_interpolateConstant;
```