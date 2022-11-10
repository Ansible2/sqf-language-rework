Get a substring out of the string.


---
*Syntaxes:*

[someText, beginning, length] call `BIS_fnc_trimString`

---
*Example 1:*

```sqf
["dreaded_is_the_man", 0, 6] call BIS_fnc_trimString; // will return "dreaded"
```

*Example 2:*

```sqf
["dreaded_is_the_man", 15] call BIS_fnc_trimString; // will return "man"
```

*Example 3:*

```sqf
["dreaded_is_the_man"] call BIS_fnc_trimString; // will return "dreaded_is_the_man"
```