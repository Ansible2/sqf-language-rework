Remove a weapon from a unit. An attempt to remove a weapon, which is not in unit's possession, is simply ignored.


---
*Example 1:*
```sqf
{
	_x removeWeaponGlobal "Laserdesignator";
} forEach allUnits;
```

*Example 2:*
```sqf
{
	if (typeOf _x == "O_Heli_Attack_02_black_F") then {
		_x removeWeaponGlobal "rockets_Skyfire";
	};
} forEach vehicles;
```