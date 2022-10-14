Forces a unit to fire the given weapon.


---
*Syntaxes:*

unit `fire` muzzle

unit `fire` [muzzle, mode, magazine]

---
*Example 1:*

```sqf
_soldier fire "M16";
```

*Example 2:*

```sqf
_soldier fire "SmokeShellMuzzle";
```

*Example 3:*

```sqf
_soldier fire ["SmokeShellMuzzle", "SmokeShellMuzzle", "SmokeShellRed"];
```

*Example 4:*

```sqf
player playActionNow "PutDown";
player selectWeapon "DemoChargeMuzzle";
player fire ["DemoChargeMuzzle", "DemoChargeMuzzle", "DemoCharge_Remote_Mag"];
player setWeaponReloadingTime [player, "DemoChargeMuzzle", 0];
```