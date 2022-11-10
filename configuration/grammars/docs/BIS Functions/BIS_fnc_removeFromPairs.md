Removes an item from pair array modifying the original array. This can be overriden by setting `_copyArray` to true.


---
*Syntaxes:*

[array, key, copyArray] call `BIS_fnc_removeFromPairs`

---
*Example 1:*

```sqf
private _pairs = `["apple", 3], ["pear", 2`, "pear"];
[_pairs, "pear", true]	call BIS_fnc_removeFromPairs; // returns `"apple", 3` - _pairs is not modified
[_pairs, "pear"]		call BIS_fnc_removeFromPairs; // returns `"apple", 3]] - _pairs is now [["apple", 3`
```