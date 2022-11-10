Add a respawn inventory for `Arma 3 Respawn#MenuInventory|respawn menu`.<br>
Available loadouts are defined in `CfgRespawnInventory`.


---
*Syntaxes:*

[target, inventoryParams] call `BIS_fnc_addRespawnInventory`

---
*Example 1:*

```sqf
[west, "WEST1"] call BIS_fnc_addRespawnInventory;
```

*Example 2:*

```sqf
private _myRespawnInventory = [missionNamespace, "ATSniper"] call BIS_fnc_addRespawnInventory;
```