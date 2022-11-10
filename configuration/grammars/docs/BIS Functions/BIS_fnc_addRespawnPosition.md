Add a respawn position for the `Arma 3: Respawn|{{arma3}} Respawn Menu`.


---
*Syntaxes:*

[target, position, name] call `BIS_fnc_addRespawnPosition`

---
*Example 1:*

```sqf
[west, myRespawnAPC] call BIS_fnc_addRespawnPosition;
```

*Example 2:*

```sqf
myRespawn = [missionNamespace,"arena","Battle Arena"] call BIS_fnc_addRespawnPosition;
```