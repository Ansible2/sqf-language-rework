Returns the class name of currently used magazine on specified turret. Use turret path [-1] for driver's turret. Note that a turret is not loaded until unit enters it, so this command will return "".


---
*Syntaxes:*

vehicle `currentMagazineDetailTurret` turretPath

---
*Example 1:*

```sqf
_magazineDetail = MBT_Kuma currentMagazineDetailTurret [0];
```