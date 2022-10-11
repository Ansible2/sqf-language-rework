Collects all loaded `magazines` from all `secondaryWeapon` muzzles and returns them in `Array`, otherwise it returns []. This command is used for infantry weapons only.


---
*Example 1:*
```sqf
hint str secondaryWeaponMagazine player; //["NLAW_F"]
```

*Example 2:*
```sqf
_array = secondaryWeaponMagazine player;
if (count _array > 0) then {
	hint ("Secondary weapon is loaded with " + (_array select 0) + "!");
} else {
	if (secondaryWeapon player != "") then {
		hint "Secondary weapon is not loaded!";
	} else {
		hint "Player doesn't have a secondary weapon!";
	};
};
```