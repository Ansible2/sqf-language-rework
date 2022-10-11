Returns all vehicle's magazines and their ammo count (also works on supply boxes). When applied to a unit (soldier), the command behaves differently and will omit magazines already loaded into unit's weapons. Use `magazinesAmmoFull` to return all magazines.


---
*Example 1:*
```sqf
_magazinesAmmo = magazinesAmmo player;
/*
[
	["30Rnd_65x39_caseless_mag",30],
	["30Rnd_65x39_caseless_mag",30],
	["16Rnd_9x21_Mag",16],
	["SmokeShellGreen",1],
	["Chemlight_green",1],
	["HandGrenade",1]
]
*/
```

*Example 2:*
```sqf
_magazinesAmmo = magazinesAmmo Mi_48;
/*
[
	["250Rnd_30mm_APDS_shells",250],
	["250Rnd_30mm_HE_shells",250],
	["8Rnd_LG_scalpel",8],
	["38Rnd_80mm_rockets",38]
]
*/
```