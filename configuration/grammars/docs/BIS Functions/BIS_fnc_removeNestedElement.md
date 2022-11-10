Function to remove an item in a nested array. Modifies the array by reference.


---
*Syntaxes:*

[array, itemToRemove] call `BIS_fnc_removeNestedElement`

---
*Example 1:*

```sqf
private _array = `1, 2], [3, 3, 4`;
private _success = [_array, 3] call BIS_fnc_removeNestedElement; // _array is now `1, 2], [4`
```