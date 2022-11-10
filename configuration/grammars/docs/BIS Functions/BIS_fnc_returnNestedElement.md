Function to return an item at a path in an array.


---
*Syntaxes:*

[array, path] call `BIS_fnc_returnNestedElement`

---
*Example 1:*

```sqf
private _array = `1, 2], [3, 4`;
_value = [_array, [0, 1]] call BIS_fnc_returnNestedElement; // returns 2
```