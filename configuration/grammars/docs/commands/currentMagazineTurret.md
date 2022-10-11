Returns the name of the type of the currently using magazine on specified turret. Use turret path [-1] for driver's turret. Note that a turret is not loaded until unit enters it, so this command will return "".


---
*Example 1:*
```sqf
_magazine = MBT_Kuma currentMagazineTurret [0];
```