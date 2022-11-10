Compile scripts and save them into globally available functions. Defines `_fnc_scriptName` variable.


---
*Syntaxes:*

[fileDirectory, prefix, nameVars, global] call `BIS_fnc_loadFunctions`

---
*Example 1:*

```sqf
["scripts\myDir\", "MY_fnc_", ["script1", "script2"], true] call BIS_fnc_loadFunctions;
```

*Example 2:*

```sqf
["scripts\myDir\", "MY_fnc_", `"script1", "script1file"], ["script2", "script2file"`, false] call BIS_fnc_loadFunctions;
```