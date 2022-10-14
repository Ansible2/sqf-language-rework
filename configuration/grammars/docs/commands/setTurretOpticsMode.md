Set the current optics mode of the optics in the turret occupied by the specified unit. Alt syntax allows a vehicle and turret path to be specified instead of a unit.


---
*Syntaxes:*

obj `setTurretOpticsMode` mode

obj `setTurretOpticsMode` [turretPath, opticModeIndex]

---
*Example 1:*

```sqf
player setTurretOpticsMode 0;
```

*Example 2:*

```sqf
myTank setTurretOpticsMode [[-1], 1];
```

*Example 3:*

```sqf
myAircraft setTurretOpticsMode [[0, 0], 0];
```