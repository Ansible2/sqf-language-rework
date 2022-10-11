Returns an array with all crew inside given vehicle, with or without empty seats.


---
*Example 1:*
```sqf
_list = fullCrew vehicle player;
```

*Example 2:*
```sqf
_list = fullCrew [vehicle player, "turret"];
```

*Example 3:*
```sqf
private _actionCompatibleCargoIndexes = fullCrew [heli, "cargo", true];
/*
	returns for example (on an armed WY-55 Hellcat):
	[
		[objNull, "cargo" ,2, [], false],
		[objNull, "cargo", 3, [], false],
		[objNull, "cargo", 4, [], false],
		[objNull, "cargo", 5, [], false]
	]
	using the element's index is compatible with action cargo commands - see below
*/

// the following commands will put the player in the same seat:
player moveInCargo [heli, 2];
player action ["GetInCargo", heli, 0];
```