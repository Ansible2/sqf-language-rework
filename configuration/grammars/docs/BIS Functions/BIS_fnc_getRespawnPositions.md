Return scripted respawn positions available for the given unit.


---
*Syntaxes:*

input call `BIS_fnc_getRespawnPositions`

---
*Example 1:*

```sqf
private _respawnPositions = missionNamespace call BIS_fnc_getRespawnPositions; // can be e.g [bis_o1, [1337, 4200, 0.01], "myMarker", myVehicle]
```