Add a weapon to a unit. Infantry units can only carry weapons in their respective slots (primary, secondary and handgun), the `addWeaponGlobal` command will replace the weapon currently in a slot with the added weapon if it shares the same slot. This command can link items to respective slots as well, in which case the functionality is identical to `linkItem`.

To make sure the added weapon is loaded and ready, add the magazine first.


---
*Syntaxes:*

object `addWeaponGlobal` weapon

---
*Example 1:*

```sqf
{
	_x addMagazineGlobal "Laserbatteries";
	_x addWeaponGlobal "Laserdesignator";
} forEach allUnits;
```

*Example 2:*

```sqf
{
	if (typeOf _x == "O_Heli_Attack_02_black_F") then {
		_x addMagazineGlobal "38Rnd_80mm_rockets";
		_x addWeaponGlobal "rockets_Skyfire";
	};
} forEach vehicles;
```