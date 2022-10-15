#### Description:
An edit of the ACE function to allow for custom drop of units.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to fastrope from

1: **_unitsToDeploy** *(ARRAY)* - An array of units to drop from the _vehicle. This function has a destructive effect on this array (deletes entries)

2: **_ropeOrigins** *(ARRAY)* - An array of either relative (to the vehicle attachment points for the ropes or a memory point to attachTo

#### Returns:
NOTHING

#### Examples:

```sqf
[
	_vehicle,
	(fullCrew [_vehicle,"cargo"]) apply {
		_x select 0
	}
] call KISKA_fnc_ACE_deployFastRope;
```