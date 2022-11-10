Function to find item in nested arrays and return a path to the first match.


---
*Syntaxes:*

[array, query] call `BIS_fnc_findNestedElement`

---
*Example 1:*

```sqf
private _array = `1, 2], [3, 4`;
_path = [_array, 3] call BIS_fnc_findNestedElement; // expected result: [1, 0]
// ((_array select 1) select 0) == 3
```