Return respawn inventories available for the given target.


---
*Syntaxes:*

[target, showDisabled, returnAllInfo] call `BIS_fnc_getRespawnInventories`

---
*Example 1:*

```sqf
private _respawnInfo = [player] call BIS_fnc_getRespawnInventories;
```

*Example 2:*

```sqf
private _respawnInfo = [west, true, false] call BIS_fnc_getRespawnInventories;
```