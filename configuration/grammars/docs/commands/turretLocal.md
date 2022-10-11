Checks if a turret is `local`.


---
*Example 1:*
```sqf
_isLocal = vehicle player turretLocal [0];
```

*Example 2:*
```sqf
if (heli turretLocal [1]) then { heli setVehicleAmmo 1 };
```

*Example 3:*
```sqf
if (isNil { heli turretLocal [5] }) then { hint "Turret 5 is non-existent" };
```