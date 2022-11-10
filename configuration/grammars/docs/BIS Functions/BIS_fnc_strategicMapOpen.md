Creates a strategic map.


---
*Syntaxes:*

[display, pos, missions, ORBATs, markers, images, weather, night, scale, simulation, label, missionName, missionIcon] call `BIS_fnc_strategicMapOpen`

---
*Example 1:*

```sqf
[
	findDisplay 46,
	[2000,2000,0],
	[
		[
			[2000,2000,0],
			{systemChat format ["%1",name ((_this # 9) # 0)]},
			"1st Mission",
			"This is mission one",
			"Name of mission's player",
			"\A3\Data_F_Exp\Logos\arma3_exp_icon_ca.paa",
			1.5,
			[ player ]
		],
		[
			[1000,1000,0],
			{systemChat format ["%1",name ((_this # 9) # 0)]},
			"2nd Mission",
			"This is mission two",
			"Name of mission's player",
			"\A3\Data_F_Argo\Logos\arma3_argo_logoTitle_ca.paa",
			1.5,
			[ player ]
		]
	],
	[
		[
			[3000,3000,0],
			configFile >> "CfgORBAT" >> "BIS" >> "B_1_A_1_2",
			configFile >> "CfgORBAT" >> "BIS" >> "B_1",
			[],
			10
		]
	],
	[
		"marker_1",
		"marker_2"
	],
	[
		[
			"\A3\Ui_f\data\Logos\arma3_white_ca.paa",
			[0,0,0,1],
			[4000,4000,0],
			8,
			8,
			0,
			"Arma 3 Logo",
			true
		]
	],
	0,
	false,
	1,
	true,
	"Strategic Map Example",
	false,
	"\A3\Ui_f\data\Logos\arma3_white_ca.paa"
] call BIS_fnc_strategicMapOpen;
```