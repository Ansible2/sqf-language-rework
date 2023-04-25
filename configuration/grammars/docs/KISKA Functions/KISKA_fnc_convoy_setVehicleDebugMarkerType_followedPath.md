#### Description:
Sets the 3d debug marker class name that will be used to mark waypoints for a given vehicles path that have been completed.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to set the marker type of

1: **_type** *(STRING)* - The class name of the object to spawn as a marker

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    "Sign_Arrow_Large_blue_F"
] call KISKA_fnc_convoy_setVehicleDebugMarkerType_followedPath;
```

