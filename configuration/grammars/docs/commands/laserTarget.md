Returns the laser target object created by given unit (vehicle or soldier) when using a laser targeting device. The main syntax targets the primary gunner turret.


---
*Syntaxes:*

`laserTarget` entity

vehicle `laserTarget` turret

---
*Example 1:*

```sqf
private _target = laserTarget gunner heli;
```

*Example 2:*

```sqf
private _designatedPos = getPosATL laserTarget player;
```