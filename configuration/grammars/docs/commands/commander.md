In <See o Reference p> it returns the commander of a vehicle. Since <See arm Reference 1> it returns the primary observer. The commander of a vehicle can be found with `effectiveCommander`.


---
*Example 1:*
```sqf
moveOut commander _tank;
```

*Example 2:*
Detect if player is in commander turret of a vehicle:

```sqf
_isVehicleCommander = player isEqualTo commander objectParent player;
```