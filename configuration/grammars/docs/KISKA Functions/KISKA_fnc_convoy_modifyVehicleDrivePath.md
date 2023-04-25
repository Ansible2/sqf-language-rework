#### Description:
Changes the drive path of a given convoy vehicle. The drive path will be overwritten from the _lastIndexToModify (inclusive) backwards until all of the _pointsToAdd have been placed in the array. This means that this function is not capable of appending to the end of an array, but only adding to the front.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to modify the drive path of

1: **_lastIndexToModify** *(NUMBER)* - The (inclusive) index to stop the modification at

2: **_pointsToAdd** *(PositionATL[])* - The array of ATL positions to set to

#### Returns:
NOTHING

#### Examples:
```sqf
// overwrite array entirely
[
    _vehicle,
    -1, // without deleting any points in current drive path, add positions to the front of path
    [
        [12,34,56],
        [12,34,58]
    ]
] call KISKA_fnc_convoy_modifyVehicleDrivePath;
```

