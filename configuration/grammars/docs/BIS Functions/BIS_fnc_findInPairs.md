Searches the associative array for the first occurance of the key string and returns its index. Seach is not case-sensitive.


---
*Syntaxes:*

[array, key] call `BIS_fnc_findInPairs`

---
*Example 1:*

```sqf
`["apple",3],["pear",2`,"apple"] call BIS_fnc_findInPairs; // Returns 0
```