Returns array with all items assigned to the `primaryWeapon` except magazines. Use `primaryWeaponMagazine` command for the latter. This command is used for infantry weapons only.


---
*Example 1:*
```sqf
primaryWeaponItems player;
/*
[
	"muzzle_snds_H",	// silencer
	"acc_pointer_IR",	// laser
	"optic_Aco",		// optics
	"bipod_01_F_blk"	// bipod
]
*/
```