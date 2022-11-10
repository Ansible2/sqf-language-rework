Checks whether two vectors are equal with given tolerance.


---
*Syntaxes:*

[vector1, vector2, tolerance] call `BIS_fnc_isEqualVector`

---
*Example 1:*

```sqf
[[1,1,1], [2,2,2], 1] call BIS_fnc_isEqualVector; // returns true
```