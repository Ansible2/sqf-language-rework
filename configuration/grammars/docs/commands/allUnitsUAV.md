Return a list of all UAV vehicles.


---
*Example 1:*
```sqf
hint format ["Number of UAV(s) on the map: %1", count allUnitsUAV];
```

*Example 2:*
```sqf
{ _x setDamage 1 } forEach allUnitsUAV;
```