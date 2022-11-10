Returns the value of <sqf inline>missionNamespace getVariable ["BIN_enableSaving", true]
```.


---
*Syntaxes:*

call `BIN_fnc_savingEnabled`

---
*Example 1:*

```sqf
call BIN_fnc_savingEnabled == (missionNamespace getVariable ["BIN_enableSaving", true]); // true
```