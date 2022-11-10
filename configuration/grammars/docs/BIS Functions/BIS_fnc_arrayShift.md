This function removes the first (leftmost) element of an array and returns it.<br>
The array is passed by reference so changes inside the function will be reflected outside of it.


---
*Syntaxes:*

[array] call `BIS_fnc_arrayShift`

---
*Example 1:*

```sqf
private _myArray = ["2", "report", "status"];
_removedElement = [_myArray] call BIS_fnc_arrayShift;	// array is -within an array-
_removedElement == "2";									// true
_myArray isEqualTo ["report", "status"];				// true
```