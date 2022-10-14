Removes all magazines of the given type from given vehicle. Use turret path [-1] for driver's turret.


---
*Syntaxes:*

vehicle `removeMagazinesTurret` [magazineName, turretPath]

---
*Example 1:*

```sqf
vehicle player removeMagazinesTurret ["60rnd_cmflaremagazine",[-1]];
```

*Example 2:*

```sqf
_tank removeMagazinesTurret ["20Rnd_120mmSABOT_M1A2",[0]];
```