Create a random patrol of several `waypoints` around a given `position`.


---
*Syntaxes:*

[group, position, distance, blacklist] call `BIS_fnc_taskPatrol`

---
*Example 1:*

```sqf
[group _unit, getPos _unit, 1000] call BIS_fnc_taskPatrol;
```