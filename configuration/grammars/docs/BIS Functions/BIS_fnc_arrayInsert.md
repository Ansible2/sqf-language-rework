Inserts the elements of one array into another, at a specified index. Neither arrays are touched by reference, a new array is returned.


---
*Syntaxes:*

[array1, array2, index] call `BIS_fnc_arrayInsert`

---
*Example 1:*

```sqf
private _result = [[0,1,2,3,4], ["a","b","c"], 1] call BIS_fnc_arrayInsert; // returns [0,"a","b","c",1,2,3,4]
```