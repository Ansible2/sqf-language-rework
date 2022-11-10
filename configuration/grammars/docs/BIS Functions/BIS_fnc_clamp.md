Clamps provided value within min..max range.


---
*Syntaxes:*

[value, min, max] call `BIS_fnc_clamp`

---
*Example 1:*

```sqf
[5, 0, 10] call BIS_fnc_clamp; // returns 5
 [0, 0, 10] call BIS_fnc_clamp; // returns 0
[10, 0, 10] call BIS_fnc_clamp; // returns 10
[-5, 0, 10] call BIS_fnc_clamp; // returns 0
[15, 0, 10] call BIS_fnc_clamp; // returns 10

 [5, `10`, 3] call BIS_fnc_clamp; // returns 10
```