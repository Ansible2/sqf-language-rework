Searches the associative array for the 1st occurance of the key string and returns the value associated with it. Search is not case sensitiv.


---
*Syntaxes:*

[array, key, defaultValue] call `BIS_fnc_getFromPairs`

---
*Example 1:*

```sqf
`["apple",3],["pear","test"`,"pear"] call BIS_fnc_getFromPairs; // Returns "test"
```

*Example 2:*

```sqf
`["apple",3],["pear",6`,"pear"] call BIS_fnc_getFromPairs; // Returns "6"
```