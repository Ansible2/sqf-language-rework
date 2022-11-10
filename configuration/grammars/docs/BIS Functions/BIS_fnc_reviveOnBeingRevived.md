Used to execute specific code locally on every client whenever "being revived" flag changes.


---
*Syntaxes:*

[nil, flagState, unit] call `BIS_fnc_reviveOnBeingRevived`

---
*Example 1:*

```sqf
[nil, true, squadLeader] call BIS_fnc_reviveOnBeingRevived;
```