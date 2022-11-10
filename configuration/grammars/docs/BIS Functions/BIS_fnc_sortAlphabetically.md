Alphabetically sort an array of strings without modifying the original. See also `sort`.


---
*Syntaxes:*

arrayOfStrings call `BIS_fnc_sortAlphabetically`

---
*Example 1:*

```sqf
private _sortedNames = ["John", "Jane", "Julia", "Geronimo"] call BIS_fnc_sortAlphabetically; // will return ["Geronimo", "Jane", "John", "Julia"]
```