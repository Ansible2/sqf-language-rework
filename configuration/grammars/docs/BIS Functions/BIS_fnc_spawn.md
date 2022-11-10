Execute given code with or without parameter.


---
*Syntaxes:*

[params, code] spawn `BIS_fnc_spawn`

code spawn `BIS_fnc_spawn`

---
*Example 1:*

Show a message for the current player:

```sqf
[["Hello"],  { hint (_this select 0) }] spawn BIS_fnc_spawn;
```

*Example 2:*

Show a message to all connected players:

```sqf
[[["Hello"], { hint (_this select 0) }], "BIS_fnc_spawn", true, false, false] call BIS_fnc_MP; // obsolete, use remoteExec

["Hello", { hint (_this select 0) }] remoteExec ["BIS_fnc_spawn"];	// since the introduction of remoteExec
["Hello", { hint (_this select 0) }] remoteExec ["spawn"];			// BIS_fnc_spawn is obsolete
["Hello"] remoteExec ["hint"];										// best solution here
```

*Example 3:*

```sqf
{ hint "Hello" } spawn BIS_fnc_spawn;
```