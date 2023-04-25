#### Description:
Gets a given convoy vehicle's current debug follow path. When a vehicle is in debug mode, a path of objects will be drawn for the duration that shows the positions currently in the vehicle's drive path. This is the follow path.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the follow path of

#### Returns:
*(OBJECT[])* - An array of the vehicle's follow path objects

#### Examples:
```sqf
private _debugFollowPathObjects = [
    _vehicle
] call KISKA_fnc_convoy_getVehicleDebugFollowPath;
```

