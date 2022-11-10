Register code to be executed after a mission load (from a save, for example).


---
*Syntaxes:*

parameter call `BIS_fnc_onLoad`

---
*Example 1:*

```sqf
private _codeIndex = { hint "Welcome back!"; } call BIS_fnc_onLoad;
```

*Example 2:*

```sqf
0 call BIS_fnc_onLoad; // removes code with index 0
```