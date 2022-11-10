Returns true if unit is in general able to revive someone.


---
*Syntaxes:*

[medic, unit] call `BIS_fnc_reviveAllowed`

---
*Example 1:*

```sqf
private _canRevive = [medic,target] call BIS_fnc_reviveAllowed;
```