Adds a weapon item to the specified weapon. The item can be weapon magazine, in which case the amount of ammo and target muzzle could also be specified.


---
*Syntaxes:*

unit `addWeaponItem` [weaponName, itemName, instant]

unit `addWeaponItem` [weaponName, [itemName, ammoCount, muzzleName], instant]

---
*Example 1:*

```sqf
player addWeaponItem ["arifle_MX_GL_ACO_F", "1Rnd_HE_Grenade_shell"];
```

*Example 2:*

```sqf
player addWeaponItem ["arifle_MX_GL_ACO_F", ["1Rnd_HE_Grenade_shell", 1, "GL_3GL_F"]];
```

*Example 3:*

```sqf
player addWeaponItem ["LaserDesignator", "LaserBatteries"];
```