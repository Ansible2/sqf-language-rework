Returns an array with the type names of all the unit's backpack magazines.


---
*Syntaxes:*

`magazinesDetailBackpack` unit

`magazinesDetailBackpack` [unit, includeEmpty, includeLoaded]

---
*Example 1:*

```sqf
magazinesDetailBackpack player;
/*
[
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000011/2]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000012/2]",
	"Chemlight (Green)(1/1)[id/cr:10000027/2]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000013/2]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000014/2]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000015/2]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000016/2]",
	"6.5 mm 30Rnd Sand Mag(30/30)[id/cr:10000017/2]",
	"9 mm 16Rnd Mag(16/16)[id/cr:10000019/2]",
	"9 mm 16Rnd Mag(16/16)[id/cr:10000020/2]",
	"RGO Grenade(1/1)[id/cr:10000021/2]",
	"RGO Grenade(1/1)[id/cr:10000022/2]",
	"IR Grenade [NATO](1/1)[id/cr:10000023/2]",
	"IR Grenade [NATO](1/1)[id/cr:10000024/2]",
	"Smoke Grenade (White)(1/1)[id/cr:10000025/2]",
	"Smoke Grenade (Green)(1/1)[id/cr:10000026/2]",
	"Chemlight (Green)(1/1)[id/cr:10000028/2]"
]
*/
```