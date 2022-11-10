Adds a predefined loadout (either via **CfgVehicles}}, {{hl|CfgRespawnInventory**, or a custom inventory saved via `BIS_fnc_saveInventory`) to a specified unit.


---
*Syntaxes:*

param call `BIS_fnc_loadInventory`

---
*Example 1:*

```sqf
_loadout = [player, configFile >> "CfgVehicles" >> "B_Soldier_SL_F"] call BIS_fnc_loadInventory; // gives BLUFOR Squad Leader's loadout to player unit
```

*Example 2:*

to save and load the inventory:

```sqf
[player, [missionNamespace, "TAG_SavedInventory"]] call BIS_fnc_saveInventory;	// save it
[player, [missionNamespace, "TAG_SavedInventory"]] call BIS_fnc_loadInventory;	// load it
```