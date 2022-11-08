#### Description:
Moves units into a vehicle as crew and then as passengers.

#### Parameters:
0: **_crew** : *(GROUP, ARRAY, or OBJECT)* - The units to move into the vehicle

1: **_vehicle** : *(OBJECT)* - The vehicle to put units into

2: **_deleteCrewIfNull** : *(BOOL)* - If the vehicle turns out to be null, the provided crew will be deleted

#### Returns:
<BOOL> - True if crew was set, false if problem encountered

#### Examples:
```sqf
[_group1,_vehicle] call KISKA_fnc_setCrew;
```

