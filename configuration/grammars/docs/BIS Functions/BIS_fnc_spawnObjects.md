Create a stack of objects at given position or on top of given object (eg. table).


---
*Syntaxes:*

[position, className, count, offsetMatrix, offsetDir, dirNoise, enableSimulation] call `BIS_fnc_spawnObjects`

---
*Example 1:*

```sqf
private _randomPos = [(random 0.2) -0.1, (random 0.2) -0.1, 0];
_objects = [[_table, "TOP"], "Box_NATO_Wps_F", 3, _randomPos,(random 20)-10] call BIS_fnc_spawnObjects;
```