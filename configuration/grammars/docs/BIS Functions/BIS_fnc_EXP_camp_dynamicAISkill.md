Changes AI skill based on player count, responding to player connected / player disconnected events. This function does exactly the same as `BIS_fnc_EXP_camp_setSkill` execept that it automatically executes when a player joins or disconnects.


---
*Syntaxes:*

[mode, affectedSides] call `BIS_fnc_EXP_camp_dynamicAISkill`

---
*Example 1:*

```sqf
[
	true,
	[
		[WEST, 0.1, 0.2, 0.7, 0.6],
		[EAST, 0.1, 0.2, 0.7, 0.6]
	]
] call BIS_fnc_EXP_camp_dynamicAISkill;
```