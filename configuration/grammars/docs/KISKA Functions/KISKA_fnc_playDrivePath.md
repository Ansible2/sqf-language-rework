#### Description:
Uses setDriveOnPath to move a vehicle. Additionally makes sure the vehicle can move before starting (turn engineOn and use doStop).

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to use setDriveOnPath command on

1: **_pathArray** *(ARRAY)* - An array of positions in [x,y,z] format or[x,y,z,speed-in-meters-per-second] for the vehicle to drive on.(see setDriveOnPath documentation)

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    _pathArray
] call KISKA_fnc_playDrivePath;
```

