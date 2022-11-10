Execute given code with or without parameter.


---
*Syntaxes:*

[params, code] call `BIS_fnc_call`

code call `BIS_fnc_call`

---
*Example 1:*

Show a message for the current player.

```sqf
[["Hello"], {hint (_this select 0);}] call BIS_fnc_call;
```

*Example 2:*

Alternative syntax

```sqf
{ hint "Hello"; } call BIS_fnc_call;
```