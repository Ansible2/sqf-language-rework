#### Description:
Gets a vehicle's current debug followed path objects array. When a vehicle is in debug mode, a path of objects will be drawn for the duration that shows the positions the vehicle had followed while on its drive path. One followed object is created each time a drive path point is considered "complete" (vehicle within a radius of that point).

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the follow path of

#### Returns:
*(OBJECT[])* - An array of the vehicle's followed path objects

#### Examples:
```sqf
private _debugFollowedPathObjects = [
    _vehicle
] call KISKA_fnc_convoy_getVehicleDebugFollowedPath;
```

