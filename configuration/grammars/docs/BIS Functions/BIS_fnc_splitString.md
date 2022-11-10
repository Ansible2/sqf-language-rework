Splits given string according to given separator(s).


---
*Syntaxes:*

[stringToSplit, separators, byWord] call `BIS_fnc_splitString`

---
*Example 1:*

```sqf
["this is a test", " "] call BIS_fnc_splitString; // returns ["this", "is", "a", "test"]
```

*Example 2:*

```sqf
["this is a test", "st"] call BIS_fnc_splitString; // returns ["hi"," i"," a ","e"]
```

*Example 3:*

```sqf
["this is a test", "is"] call BIS_fnc_splitString; // returns ["th"," "," a te","t"]
```

*Example 4:*

```sqf
["this is a test", "is", true] call BIS_fnc_splitString; // returns ["th"," "," a test"]
```