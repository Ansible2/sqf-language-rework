Returns a cargo container of a unit's backpack.


---
*Example 1:*
```sqf
hint str backpackContainer player; // 1a5f7900# 163944: backpack_fast.p3d
```

*Example 2:*
```sqf
hint str getMagazineCargo backpackContainer player;
/*
	returns e.g
	[
		[
			"APERSBoundingMine_Range_Mag",
			"ClaymoreDirectionalMine_Remote_Mag",
			"SLAMDirectionalMine_Wire_Mag",
			"DemoCharge_Remote_Mag"
		],[
			3,
			2,
			2,
			1
		]
	]
*/
```

*Example 3:*
```sqf
(backpackContainer player) addWeaponCargoGlobal [weapons player select 0, 1];
```