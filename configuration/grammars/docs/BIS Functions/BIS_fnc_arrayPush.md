This function adds an element to the end of an array and returns the array.<br>
`The array is passed by reference` so changes inside the function will be reflected outside of it.


---
*Syntaxes:*

[array, element] call `BIS_fnc_arrayPush`

---
*Example 1:*

```sqf
_newArray = [[0,1,2], 3] call BIS_fnc_arrayPush; // _newArray is [0,1,2,3]
```

*Example 2:*

```sqf
private _array = [0,1,2]; [_array, [3]] call BIS_fnc_arrayPush; // _array is [0,1,2,[3]]
```