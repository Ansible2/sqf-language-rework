#### Description:
Sets the code that should execute when a vehicle dies in a convoy.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to set the killed event on

1: **_eventCode** *(CODE)* - The code to execute when the vehicle dies in a convoyParameters:- 0: **_vehicle** *(OBJECT)* - The vehicle that died- 1: **_convoyHashMap** *(OBJECT)* - The hashmap used for the convoy- 2: **_convoyLead** *(OBJECT)* - The lead vehicle of the convoy

#### Returns:
NOTHING

#### Examples:
```sqf
[
    vic,
    {hint str _this}
] call KISKA_fnc_convoy_setVehicleKilledEvent;
```

