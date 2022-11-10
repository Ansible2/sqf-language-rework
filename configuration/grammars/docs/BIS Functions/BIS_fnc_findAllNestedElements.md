Returns array of paths to all matching elements in deeply nested array, similar to `BIS_fnc_findNestedElement` but with all occurences.


---
*Syntaxes:*

[array, query] call `BIS_fnc_findAllNestedElements`

---
*Example 1:*

```sqf
private _array = `1, 2, 3], [[1, 2, 3], 1, 2, 3`;
_result = [_array, 2] call BIS_fnc_findAllNestedElements; // returns `0, 1], [1, 0, 1], [1, 2`
```