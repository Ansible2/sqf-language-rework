Sets how much ammunition (compared to a full state defined by the vehicle type) the vehicle has. Note that the ammo will be added only to `local` turrets. To check locality of turret use `turretLocal`.

The value ranges from 0 to 1.


---
*Syntaxes:*

vehicleName `setVehicleAmmo` value

---
*Example 1:*

```sqf
player setVehicleAmmo 0;
```

*Example 2:*

```sqf
_vehicle setVehicleAmmo 1;
```