Add a weapon to a unit. For a global version of this command see `addWeaponGlobal`.

Infantry units can only carry a specific number of weapons, once the weapon slots are filled, any further `addWeapon` commands are ignored.


---
*Syntaxes:*

object `addWeapon` weapon

---
*Example 1:*

```sqf
player addMagazine "30Rnd_556x45_Stanag";
player addWeapon "BAF_L85A2_RIS_SUSAT";
```

*Example 2:*

```sqf
An_2 addMagazine "100Rnd_762x51_M240";
An_2 addWeapon "M240_veh";
```