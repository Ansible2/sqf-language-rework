Returns combined array including all unit's stored `items` and all unit's stored `magazines` and all unit's `stored` `weapons`. Loaded magazines such as `currentMagazine`, `primaryWeaponMagazine`, `secondaryWeaponMagazine`, `handgunMagazine`, `binocularMagazine` as well as `assignedItems` are excluded.


---
*Syntaxes:*

`itemsWithMagazines` unit

---
*Example 1:*

```sqf
private _res1 = itemsWithMagazines player;
// ... is essentially the same as ...
private _res2 = items player + magazines player;
```
Example result:

```sqf
[
	"FirstAidKit",			//item
	"30Rnd_65x39_caseless_mag",	//magazine
	"16Rnd_9x21_Mag",		//magazine
	"Chemlight_green",		//magazine
	"HandGrenade",			//magazine
	"ToolKit",				//item
	"MineDetector"			//item
]
```