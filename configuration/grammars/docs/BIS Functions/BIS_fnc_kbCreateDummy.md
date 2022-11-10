Creates a dummy speaker (as a `Game Logic`). If given dummy variable has already been created, returns this one.


---
*Syntaxes:*

dummyVarName call `BIS_fnc_kbCreateDummy`

---
*Example 1:*

```sqf
private _dummySpeaker = "BIS_dummySpeaker" call BIS_fnc_kbCreateDummy; // _dummySpeaker == BIS_dummySpeaker now
```

*Example 2:*

```sqf
private _dummySpeaker = "Miller" call BIS_fnc_kbCreateDummy; // given Miller is defined in CfgIdentities
```