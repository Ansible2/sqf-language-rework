This function removes the last (rightmost) element of an array and returns it.<br>
`The array is passed by reference` so changes inside the function will be reflected outside of it.


---
*Syntaxes:*

array call `BIS_fnc_arrayPop`

---
*Example 1:*

```sqf
private _array = [1,2,3,4];
_removedElement = _array call BIS_fnc_arrayPop; // _array is now [1,2,3] and _removedElement = 4
```