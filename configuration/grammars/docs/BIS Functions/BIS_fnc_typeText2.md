Types a structured text on the screen, letter by letter, cursor blinking. Note that line returns are manual, unlike `BIS_fnc_typeText`.


---
*Syntaxes:*

[stringLines, posX, posY, alignBottom, rootFormat, abortParams, abortCond, playSounds] call `BIS_fnc_typeText2`

---
*Example 1:*

```sqf
[
	[
		["CAMP ROGAIN, ", "align = 'center' shadow = '1' size = '0.7' font='PuristaBold'"],
		["RESUPPLY POINT", "align = 'center' shadow = '1' size = '0.7'", "#aaaaaa"],
		["", "<br/>"], // line break
		["10 MINUTES LATER...", "align = 'center' shadow = '1' size = '1.0'"]
	]
] spawn BIS_fnc_typeText2;
```

*Example 2:*

```sqf
[
	["Hello there"],
	safeZoneX, safeZoneH / 2,
	true,
	"<t font='PuristaBold'>%1</t>",
	[],
	{ false },
	true
] spawn BIS_fnc_typeText2;
```