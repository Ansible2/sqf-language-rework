Collects all loaded `magazines` from all `handgunWeapon` muzzles and returns them in `Array`, otherwise it returns []. This command is used for infantry weapons only.


---
*Syntaxes:*

`handgunMagazine` unit

---
*Example 1:*

```sqf
hint str handgunMagazine player; // ["16Rnd_9x21_Mag"]
```

*Example 2:*

```sqf
_array = handgunMagazine player;
if (count _array > 0) then {
	hint ("Handgun is loaded with " + (_array select 0) + "!");
} else {
	if (handgunWeapon player != "") then {
		hint "Handgun is not loaded!";
	} else {
		hint "Player doesn't have a handgun!";
	};
};
```