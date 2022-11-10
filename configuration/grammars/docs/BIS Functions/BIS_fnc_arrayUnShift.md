This function adds an element to the beginning of an array and returns the array.
The array is passed by reference so changes inside the function will be reflected outside of it.


---
*Syntaxes:*

[array, value] call `BIS_fnc_arrayUnShift`

---
*Example 1:*

```sqf
private _array = [2,3,4];
[_array, 1] call BIS_fnc_arrayUnShift;						// _array is now [1,2,3,4]
```

*Example 2:*

```sqf
private _array = [[2,3,4], 1] call BIS_fnc_arrayUnShift;	// _array is now [1,2,3,4]
```