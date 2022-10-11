Get the current optics mode of the optics in the turret occupied by the specified unit. The alternative syntax allows a vehicle and turret path to be specified without needing a unit.


---
*Example 1:*
```sqf
getTurretOpticsMode player;
```

*Example 2:*
```sqf
myTank getTurretOpticsMode [-1];
```

*Example 3:*
```sqf
myAircraft getTurretOpticsMode [0, 0];
```