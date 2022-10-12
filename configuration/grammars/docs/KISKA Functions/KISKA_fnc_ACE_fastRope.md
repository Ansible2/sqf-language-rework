Sends a vehicle to a given point and fastropes the given units from the helicopter.
Pilots should ideally be placed in "CARELESS" behaviour when around enemies.

```sqf
[
	_vehicle,
	_position,
	(fullCrew [_vehicle,"cargo"]) apply {
		_x select 0
	},
	{hint "fastrope done"},
	28,
	[[0,0,0]]
] call KISKA_fnc_ACE_fastRope;
```