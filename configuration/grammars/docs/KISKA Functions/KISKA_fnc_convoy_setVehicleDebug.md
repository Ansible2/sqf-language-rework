#### Description:
Sets whether or not a given vehicle is in debug mode for convoys.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to set the convoy seperation of

1: **_debugMode** *(BOOL)* - `true` to enable, `false` to disable debug

#### Returns:
NOTHING

#### Examples:
```sqf
// debug enabled 
[
    _vehicle,
    true
] call KISKA_fnc_convoy_setVehicleDebug;
```

