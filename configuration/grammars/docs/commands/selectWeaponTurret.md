Selects the given weapon on the specified turret. Use turret path [-1] for the driver's turret.


---
*Syntaxes:*

vehicle `selectWeaponTurret` [weapon, turretPath, muzzle, firemode]

---
*Example 1:*

```sqf
MBT_Kuma selectWeaponTurret ["LMG_coax",[0]];
```

*Example 2:*

```sqf
Kamysh selectWeaponTurret ["missiles_titan", [0], "missiles_titan", "topdown"];
```