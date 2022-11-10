Function to set an item in a nested array using a path. Modifies the array by reference.


---
*Syntaxes:*

[array, path, value] call `BIS_fnc_setNestedElement`

---
*Example 1:*

```sqf
private _array = `1, 2], [3, 4`;
_bool = [_array, [0, 0], 0] call BIS_fnc_setNestedElement; // _array is now `0, 2], [3, 4`
```