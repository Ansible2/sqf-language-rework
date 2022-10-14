Returns a cargo container of a unit's vest.


---
*Syntaxes:*

`vestContainer` unit

---
*Example 1:*

```sqf
hint str vestContainer player; // 2df7d600# 163942: dummyweapon.p3d
```

*Example 2:*

```sqf
hint str getMagazineCargo vestContainer player;
/*
	returns e.g
	[
		[
			"30Rnd_65x39_caseless_mag",
			"16Rnd_9x21_Mag",
			"HandGrenade",
			"APERSMine_Range_Mag",
			"SmokeShell",
			"SmokeShellGreen",
			"Chemlight_green"
		],[
			2,
			2,
			2,
			3,
			1,
			1,
			2
		]
	]
*/
```