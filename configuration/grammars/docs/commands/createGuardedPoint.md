Adds a point guarded by the given side (scripted way of adding equivalent of "GUARDED BY" trigger in [[3DEN|Editor]]). A closest AI group in the given side with assigned "GUARD" waypoint will attempt to secure this guard point. The actual guarded position is determined via the following rules:
* Given "position" is always considered. It could be `Object`, `Group`, [[Position#Introduction|Position2D]] or [[Position#Introduction|Position3D]]. In every case, z coordinate will be ignored and point will be placed on nearest surface.
* If "objectMapID" is not negative, the position of the object with the given ID is used (Overrides "position"). -1 to ignore this argument. z of the object position will be intact.
* If the given "vehicle" is valid, the position of the vehicle is extracted and guarded (Overrides both "position" and "objectMapID"). `objNull` to ignore. z of the vehicle position will be intact.
To be used with "GUARD" `waypoint`.


---
*Syntaxes:*

`createGuardedPoint` [side, position, objectMapID, vehicle]

---
*Example 1:*

```sqf
createGuardedPoint [east, [0,0], -1, vehicle player];
```