Check if loadout with given name exists.


---
*Syntaxes:*

[source, name] call `BIS_fnc_inventoryExists`

---
*Example 1:*

```sqf
private _hasSuperLoadout = [missionNamespace, "mySuperLoadout"] call BIS_fnc_inventoryExists;
```