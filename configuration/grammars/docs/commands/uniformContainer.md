Returns a cargo container of a unit's uniform.


---
*Example 1:*
```sqf
hint str uniformContainer player; //2df7dd00# 163941: dummyweapon.p3d
```

*Example 2:*
```sqf
hint str getMagazineCargo uniformContainer player;
/*
	returns e.g
	[
		["30Rnd_65x39_caseless_mag"],
		[3]
	]
*/
```