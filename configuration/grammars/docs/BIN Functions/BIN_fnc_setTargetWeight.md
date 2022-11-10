<pre>/*
	BIN_fnc_setTargetWeight
	Set target priroty which is used later by BIN_fnc_findTargetWeight function to find target.

	Input:
		0:
			_input - Unit, vehicle, group or side.
		1:
			_value - scalar above 0 - weight which is later used by selectRandomWeighted script command. Values equal or less than 0 are excluded from target selection

	Examples:

		[west,0] call BIN_fnc_setTargetWeight - all units from side "west" will be ignored by targeting system
		[player,10] call BIN_fnc_setTargetWeight - Increase player chance of being targeted by drone weapons
		[bis_car,0] call BIN_fnc_setTargetWeight - Vehicle & it is crew will be ignored by targeting system
*/</pre>
*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_setTargetWeight` -->

---
