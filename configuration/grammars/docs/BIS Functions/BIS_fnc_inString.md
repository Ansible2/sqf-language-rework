Find a string within a string.


---
*Syntaxes:*

[searchTerm, searchText, caseSensitive] call `BIS_fnc_inString`

---
*Example 1:*

```sqf
["rabbit", "I ate a rabbit today"] call BIS_fnc_inString // will return true
```

*Example 2:*

```sqf
["RaBbiT", "I ate a rabbit today"] call BIS_fnc_inString // will return true
```

*Example 3:*

```sqf
["RaBbiT", "I ate a rabbit today", true] call BIS_fnc_inString // will return false because of case sensitivity
```