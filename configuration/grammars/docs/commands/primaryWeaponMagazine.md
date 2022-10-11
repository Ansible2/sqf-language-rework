Collects all loaded `magazines` from all `primaryWeapon` muzzles and returns them in `Array`, otherwise it returns []. This command is used for infantry weapons only.


---
*Example 1:*
```sqf
hint str primaryWeaponMagazine player; //["30Rnd_65x39_caseless_mag"]
```

*Example 2:*
```sqf
_array = primaryWeaponMagazine player;
if (count _array > 0) then {
	hint ("Primary weapon is loaded with " + (_array select 0) + "!");
} else {
	if (primaryWeapon player != "") then {
		hint "Primary weapon is not loaded!";
	} else {
		hint "Player doesn't have a primary weapon!";
	};
};
```