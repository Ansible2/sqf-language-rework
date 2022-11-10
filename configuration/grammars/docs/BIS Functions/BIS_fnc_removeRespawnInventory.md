Remove a respawn inventory added by `BIS_fnc_addRespawnInventory`.


---
*Syntaxes:*

[target, id] call `BIS_fnc_removeRespawnInventory`

---
*Example 1:*

```sqf
[west, 1] call BIS_fnc_removeRespawnInventory;
```

*Example 2:*

```sqf
private _myRespawnInventory = [missionNamespace,"ATSniper"] call BIS_fnc_addRespawnInventory;
_myRespawnInventory call BIS_fnc_removeRespawnInventory;
```