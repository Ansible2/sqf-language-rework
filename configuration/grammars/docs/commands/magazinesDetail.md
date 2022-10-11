Returns an array of strings with description of all vehicle's magazines, their ammo count (current/default) and their ids for the primary gunner. 

When applied to a unit (soldier), the command behaves differently and will omit magazines already loaded into unit's weapons. Use `currentMagazineDetail` to get this information for a currently loaded magazine.


---
*Example 1:*
```sqf
_magazinesDetail = magazinesDetail player;
/*
[
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000003/0]",
	"Chemlight (Green)(1/1)[id/cr:10000020/0]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000012/0]",
	"RGO Grenade(1/1)[id/cr:10000016/0]",
	"RGO Grenade(1/1)[id/cr:10000017/0]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000070/0]",
	"PCML Missile(1/1)[id/cr:10000072/0]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000001/0]",
	"9 mm 16Rnd Mag(16/16)[id/cr:10000013/0]"
]
*/
```

*Example 2:*
```sqf
_magazinesDetail = magazinesDetail Mi_48;
/*
[
	"30 mm HE Tracer (Green) Shells(250/250)[id/cr:10000043/0]",
	"30 mm APDS Tracer (Green) Shells(250/250)[id/cr:10000044/0]",
	"Designator Batteries(1/1)[id/cr:10000045/0]",
	"Scalpel 4x(4/4)[id/cr:10000049/0]",
	"Skyfire 19x(19/19)[id/cr:10000051/0]",
	"Skyfire 19x(19/19)[id/cr:10000052/0]",
	"Scalpel 4x(4/4)[id/cr:10000053/0]"
]
*/
```