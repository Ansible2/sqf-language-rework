Restore unit for curators after respawn.
When curator owner, it will transfer ownership to the new unit.
When editable by curator, it will remove the dead unit and register the new one.


---
*Syntaxes:*

[newUnit,oldUnit] call `BIS_fnc_curatorRespawn`

---
*Example 1:*

```sqf
[BIS_newUnit,BIS_oldUnit] call BIS_fnc_curatorRespawn;
```