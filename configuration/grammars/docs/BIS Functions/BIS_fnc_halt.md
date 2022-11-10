Halts current function and all its parents and logs an error message.


---
*Syntaxes:*

[param1, param2, ..., param10] call `BIS_fnc_halt`

---
*Example 1:*

```sqf
["You are now supposed to be %1", rank player] call BIS_fnc_halt;
```