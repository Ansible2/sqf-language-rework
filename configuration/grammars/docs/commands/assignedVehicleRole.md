Returns the role a unit is assigned to within its assigned vehicle.


---
*Example 1:*
```sqf
_RoleArray = assignedVehicleRole player;
```

*Example 2:*
Get weapons available to player at player occupied turret:

```sqf
_weaponsTurret = vehicle player weaponsTurret (assignedVehicleRole player select 1);
```