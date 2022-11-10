FLY STEADY `custom waypoint`.

Keep helicopter's pitch, bank, relative velocity a relative vector in given limits


---
*Syntaxes:*

`Custom Waypoint arguments`: [limitArray, failLimit, failCode, warningCode, positiveCode]

---
*Example 1:*

```sqf
[
	player,
	position dude,
	nil,
	[15,1.3,30], 10, { hintC "You failed"; }, { hint "Watch out!"; }, { hint "Good"; }
] spawn BIS_fnc_wpSteady;
```