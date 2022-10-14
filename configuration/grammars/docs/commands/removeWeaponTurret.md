Removes weapon from the turret. Use turret path [-1] for driver's turret.


---
*Syntaxes:*

vehicle `removeWeaponTurret` [weaponName, turretPath]

---
*Example 1:*

```sqf
_tank removeWeaponTurret ["LMG_M200", [0,0]];
```

*Example 2:*

```sqf
vehicle player removeWeaponTurret ["SportCarHorn", [-1]];
```