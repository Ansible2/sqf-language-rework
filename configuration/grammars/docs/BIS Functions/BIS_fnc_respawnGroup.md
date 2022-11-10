Camera script used by the "group respawn" template - when the player dies and gets transferred to the new group member.


---
*Syntaxes:*

[oldUnit, newUnit] call `BIS_fnc_respawnGroup`

---
*Example 1:*

```sqf
// in onPlayerRespawn.sqf
params ["_newUnit", "_oldUnit", "_respawn", "_respawnDelay"];
[_oldUnit, _newUnit] spawn BIS_fnc_respawnGroup;
```