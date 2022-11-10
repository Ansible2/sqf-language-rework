Returns the minimum or maximum value in an array of numbers.


---
*Syntaxes:*

[numbers, mode] call `BIS_fnc_findExtreme`

---
*Example 1:*

```sqf
private _result = [[1,4,5,8,3,7], 1] call BIS_fnc_findExtreme; // returns 8
_result = [[1,4,5,8,3,7], 0] call BIS_fnc_findExtreme; // returns 1
```