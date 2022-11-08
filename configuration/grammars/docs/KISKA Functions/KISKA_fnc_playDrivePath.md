#### Description:
Records an array of positons and speeds for use with setDriveOnPath command.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to use setDriveOnPath command on

1: **_pathArray** *(ARRAY)* - An array of positions in [x,y,z] format or
    [x,y,z,speed-in-meters-per-second] for the vehicle to drive on.
    (see setDriveOnPath documentation)

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    _pathArray
] call KISKA_fnc_playDrivePath;
```

