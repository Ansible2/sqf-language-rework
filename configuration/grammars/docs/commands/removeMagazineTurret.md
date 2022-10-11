Removes the magazine from the turret. Use turret path [-1] for driver's turret.

Note: you may create invalid combinations by using this function. When doing so, application behaviour is undefined.


---
*Example 1:*
```sqf
vehicle player removeMagazineTurret ["60rnd_cmflaremagazine",[-1]];
```

*Example 2:*
```sqf
_tank removeMagazineTurret ["20Rnd_120mmSABOT_M1A2",[0]];
```