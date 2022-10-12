An edit of the ACE function to allow for custom drop of units.

```sqf
[
	_vehicle,
	(fullCrew [_vehicle,"cargo"]) apply {
		_x select 0
	}
] call KISKA_fnc_ACE_deployFastRope;
```