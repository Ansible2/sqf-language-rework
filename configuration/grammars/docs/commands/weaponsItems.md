[[Image:Weaponsitems.jpg|150px|right|border]]Returns an array with subarrays contains class names and also names of connected items of all the vehicle's weapons. 

* Since Arma 3 v1.22 it is possible to query weapon holders and ammo crates with this command. If the argument is a vehicle, the command will return vehicle's weapons. If the argument is a container, the command will act identical to `weaponsItemsCargo`.
* Since Arma 3 v1.96 the returned array always contains secondary muzzle magazine info and consistent with `getUnitLoadout` format for weapon items.
* Since Arma 3 v2.02 the returned array can contains binocular weapon items.


---
*Syntaxes:*

`weaponsItems` vehicle

---
*Example 1:*

```sqf
hint str weaponsItems player;
// returns e.g
/*
[
	["arifle_MX_ACO_pointer_F","muzzle_snds_H","acc_pointer_IR","optic_Aco",["30Rnd_65x39_caseless_mag",30],[],"bipod_01_F_blk"],
	["launch_NLAW_F","","","",["NLAW_F",1],[],""],
	["hgun_P07_F","muzzle_snds_L","","",["16Rnd_9x21_Mag",11],[],""]
]
*/
```

*Example 2:*

```sqf
hint str weaponsItems vehicle player;
// returns e.g
/*
[
	["gatling_30mm","","","",["250Rnd_30mm_HE_shells",250],[],""],
	["missiles_SCALPEL","","","",["8Rnd_LG_scalpel",8],[],""],
	["rockets_Skyfire","","","",["38Rnd_80mm_rockets",38],[],""]
]
*/
```