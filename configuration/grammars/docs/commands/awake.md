Wakes up sleeping PhysX object or puts a PhysX object to sleep. In 2.10 this command can be used on corpses of type **Man** and has no effect on `alive` units. When unit gets killed it goes into ragdoll state for a short while, then the units get frozen and any simulation and collision is removed to save system resources. As a result, corpses do not react to their surrounding any more. Using this command will temporarily re-enable ragdoll state of a corpse to the same state it was when unit died. If this command is used in "enable/disable" sequence on a dead body, it gives the corpse a visible nudge (See example 3).


---
*Example 1:*
```sqf
_object awake false;
```

*Example 2:*
Since 2.10: 
```sqf
_deadUnit awake true;
```

*Example 3:*
Make corpse react to explosion (since 2.10): 
```sqf
_deadUnit addEventHandler ["Explosion", 
{
	params ["_unit", "_damage"];
	if (_damage < 0.01) exitWith {};
	_unit awake true;
	_unit awake false;
}];
```