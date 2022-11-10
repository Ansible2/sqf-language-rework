Types a structured text on the screen, letter by letter, cursor blinking.<br>


---
*Syntaxes:*

[stringLines, posX, posY, rootFormat] spawn `BIS_fnc_typeText`

---
*Example 1:*

```sqf
[
	[
		["CAMP ROGAIN,", "<t align = 'center' shadow = '1' size = '0.7' font='PuristaBold'>%1</t>"],
		["RESUPPLY POINT", "<t align = 'center' shadow = '1' size = '0.7'>%1</t><br/>"],
		["10 MINUTES LATER ...", "<t align = 'center' shadow = '1' size = '1.0'>%1</t>", 15]
	]
] spawn BIS_fnc_typeText;
```

*Example 2:*

```sqf
[
	[
		["Hello there...", nil, 30]
	],
	0, safeZoneY + safeZoneH / 2
] spawn BIS_fnc_typeText;
```