#### Description:
Gets the 3d debug marker class name that will be used to mark waypoints for a given vehicles path that have been completed.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the marker type of

#### Returns:
*(STRING)* - The classsName used for the 3d debug marker of the follow path
 of the given convoy vehicle.

#### Examples:
```sqf
private _followPathMarkerType = [
    _vehicle
] call KISKA_fnc_convoy_getVehicleDebugMarkerType_followPath;
```
