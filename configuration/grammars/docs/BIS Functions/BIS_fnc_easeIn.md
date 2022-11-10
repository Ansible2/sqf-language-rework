Wraps `BIS_fnc_lerp`.


---
*Syntaxes:*

[a, b, alpha, exp] call `BIS_fnc_easeIn`

---
*Example 1:*

```sqf
[] call BIS_fnc_easeIn; // returns 0
```

*Example 2:*

```sqf
[0, 2, 0.5] call BIS_fnc_easeIn; // returns 0.5
```

*Example 3:*

```sqf
([0, 2, 0.5] call BIS_fnc_lerp) == ([0, 2, 0.5, 1] call BIS_fnc_easeIn); // returns true
```