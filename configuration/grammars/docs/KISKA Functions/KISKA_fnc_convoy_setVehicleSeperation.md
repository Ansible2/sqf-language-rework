#### Description:
Sets the distance that a given vehicle will keep from the vehicle in front of it when in a convoy.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to set the convoy seperation of

1: **_seperation** *(NUMBER)* - The distance the vehicle should try to maintainto the vehicle in front of it in a convoy (minimum of 10m)

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    10
] call KISKA_fnc_convoy_setVehicleSeperation;
```

