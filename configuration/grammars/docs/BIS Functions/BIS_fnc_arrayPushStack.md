This function is similar to the array push function; however, it pushes the contents of an array onto the stack array.


---
*Syntaxes:*

[array1, array2] call `BIS_fnc_arrayPushStack`

---
*Example 1:*

```sqf
private _array = [0,1,2];
[_array, [3,4,5]] call BIS_fnc_arrayPushStack; // _array is [0,1,2,3,4,5]
```

*Example 2:*

```sqf
private _array = `5, 6, 7], [8, [9], 10` call BIS_fnc_arrayPushStack; // _array is [5, 6, 7, 8, [9], 10]
```