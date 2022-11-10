Takes an array, and returns a new array with the specified index(es) removed.
This takes the array passed in the first parameter, and returns an array that has the index number in the second parameter removed.
If a third parameter is passed, then a range of indexes will be removed.
Alternatively, an array of indices to remove can be passed in the second parameter.


---
*Syntaxes:*

[array, startIndex, endIndex] call `BIS_fnc_removeIndex`

[array, indices] call `BIS_fnc_removeIndex`

---
*Example 1:*

```sqf
private _array = [0,1,2,3,4];
[array, 0] call BIS_fnc_removeIndex; // returns [1,2,3,4]
```

*Example 2:*

```sqf
private _array = [0,1,2,3,4];
[_array, 0, 4] call BIS_fnc_removeIndex; // returns []
```

*Example 3:*

```sqf
private _array = [0,1,2,3,4];
[_array, [0,4]] call BIS_fnc_removeIndex; // returns [1,2,3]
```