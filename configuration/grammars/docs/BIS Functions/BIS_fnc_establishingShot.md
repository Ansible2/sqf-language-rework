Plays a fake UAV observational sequence which serves as an establishing shot.<br>


---
*Syntaxes:*

[target, text, altitude, radius, angle, rotation, iconOptions, mode, fadeIn,waitTime] spawn `BIS_fnc_establishingShot`

---
*Example 1:*

```sqf
[player, "I can see my house from here", 500, 250, 75, 1, [], 0, true] spawn BIS_fnc_establishingShot;
```

*Example 2:*

```sqf
[
	[5229.97,5233.07,0],
	"BLUFOR and OPFOR firefight",
	500,
	250,
	75,
	1,
	[
		["\A3\ui_f\data\map\markers\nato\b_inf.paa",[0,0.3,0.6,1],group_1,1,1,0,"BLUFOR"],
		["\A3\ui_f\data\map\markers\nato\o_inf.paa",[0.5,0,0,1],group_2,1,1,0,"OPFOR"]
	],
	0,
	true,
	15
] spawn BIS_fnc_establishingShot;
```