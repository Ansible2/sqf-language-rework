#### Description:
Exports a given unit or units loadout into an array or loadouts. This can be either a standard array or formatted for config files.

#### Parameters:
0: **_units** *(OBJECT[] or OBJECT)* - The units to get the loadouts of

1: **_exportAsConfig** *(BOOL)* - Will export list in config array format ({} instead of [])

#### Returns:
*(STRING)* - An array of loadouts as a string. This will be either

#### Examples:
```sqf
private _loadouts = [_units,true] call KISKA_fnc_exportLoadouts;
```

