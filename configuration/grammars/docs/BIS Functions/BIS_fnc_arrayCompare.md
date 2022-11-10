This function checks if two arrays are containing the same elements in the same order.


---
*Syntaxes:*

[array1, array2] call `BIS_fnc_arrayCompare`

---
*Example 1:*

```sqf
private _array1 = [0,1,2];
private _array2 = [0,1,2];
[_array1, _array2] call BIS_fnc_arrayCompare; // returns true
```