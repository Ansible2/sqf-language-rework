Zeus lightning strike.


---
*Syntaxes:*

[target, nil, activate] call `BIS_fnc_moduleLightning`

---
*Example 1:*

```sqf
player addAction 
[
	"Eat that!", 
	{
		private _tempTarget = createSimpleObject ["Land_HelipadEmpty_F", getPosASL cursorTarget];
		[_tempTarget, nil, true] spawn BIS_fnc_moduleLightning;
		cursorTarget setDamage 1;
	},
	[],
	1.5, 
	true, 
	true, 
	"",
	"!isNull cursorTarget"
];
```

*Example 2:*

```sqf
[] spawn // Who gets hit first? ;-)
{
	{
		private _tempTarget = createSimpleObject ["Land_HelipadEmpty_F", getPosASL _x];
		[_tempTarget, nil, true] spawn BIS_fnc_moduleLightning;
		sleep (1 + random 4);
	} forEach (allPlayers call BIS_fnc_arrayShuffle);
};
```