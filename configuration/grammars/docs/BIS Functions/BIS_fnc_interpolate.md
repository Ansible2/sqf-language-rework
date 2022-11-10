Interpolates scalar to target, starts fast, eases out


---
*Syntaxes:*

[currentValue, targetValue, delta, interpSpeed] call `BIS_fnc_interpolate`

---
*Example 1:*

```sqf
private _value = [4,8,0.2,0.1] call BIS_fnc_interpolate;
```