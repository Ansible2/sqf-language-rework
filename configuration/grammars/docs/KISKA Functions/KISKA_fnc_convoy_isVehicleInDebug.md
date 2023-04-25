#### Description:
Gets whether or a given vehicle is in debug mode for a convoy.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the convoy index of

#### Returns:
*(BOOL)* - `true` if the vehicle is in debug mode

#### Examples:
```sqf
private _isInDebug = [
    _vehicle
] call KISKA_fnc_convoy_isVehicleInDebug;
```

