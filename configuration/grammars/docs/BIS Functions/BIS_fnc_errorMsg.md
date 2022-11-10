Display error window.


---
*Syntaxes:*

[message, otherParameters] call `BIS_fnc_errorMsg`

---
*Example 1:*

```sqf
["This is an error message"] call BIS_fnc_errorMsg;
```

*Example 2:*

```sqf
["This is an error message: player is: %1", player] call BIS_fnc_errorMsg;
```