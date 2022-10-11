Return a list of all dead units including agents and destroyed vehicles. Dead units may be in vehicles.


---
*Example 1:*
```sqf
{ deleteVehicle _x } forEach allDead;
```

*Example 2:*
allAlive:

```sqf
_all = allUnits + vehicles;
{
	_all pushBack agent _x;
} forEach (agents - [teamMemberNull]);
allAlive = _all - allDead;
```