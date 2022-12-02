#### Description:
Sends a vehicle to a given point and fastropes the given units from the helicopter. Pilots should ideally be placed in "CARELESS" behaviour when around enemies.

#### Parameters:
0: **_units** *(OBJECT[] or OBJECT)* - The units to get the loadouts of

1: **_exportAsConfig** *(BOOL)* - Will export list in config array format ({} instead of [])

#### Returns:
*(STRING)* - An array of loadouts as a string. This will be either

#### Examples:
```sqf
private _loadouts = [_units,true] call KISKA_fnc_exportLoadouts;
```

