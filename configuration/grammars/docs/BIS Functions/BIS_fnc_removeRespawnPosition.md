Remove a respawn position added by `BIS_fnc_addRespawnPosition`.


---
*Syntaxes:*

[target, id] call `BIS_fnc_removeRespawnPosition`

---
*Example 1:*

```sqf
[west, 1] call BIS_fnc_removeRespawnPosition;
```

*Example 2:*

```sqf
myRespawn = [missionNamespace,"arena"] call BIS_fnc_addRespawnPosition;
myRespawn call BIS_fnc_removeRespawnPosition;
```