Returns all weapons of a given turret. Use turret path [-1] for driver's turret.


---
*Example 1:*
```sqf
_weapons = vehicle player weaponsTurret [0,0];
```

*Example 2:*
```sqf
_weapons = _tank weaponsTurret [0];
```

*Example 3:*
```sqf
_driverWeapon = _ka50pilot weaponsTurret [-1];
```

*Example 4:*
```sqf
_weaponsForAnyTurrentPosition = (vehicle player) weaponsTurret ((assignedVehicleRole player) select 1);
```