#### Description:
Sets whether or not the vehicle will initiate new `setDriveOnPath`'s whenever new positions are added to its internal drive path. While false, a vehicle will continue to add points from the lead vehicle to its drive path and will continue to drive on the path prior to the setting of this to false unless otherwise stopped.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to set the doDriveOnPath var of

1: **_mode** *(BOOL)* - `true` to enable, `false` to disable driving on newly added points

#### Returns:
NOTHING

#### Examples:
```sqf
// do-drive-on-path enabled 
[
    _vehicle,
    true
] call KISKA_fnc_convoy_setVehicleDriveOnPath;
```

