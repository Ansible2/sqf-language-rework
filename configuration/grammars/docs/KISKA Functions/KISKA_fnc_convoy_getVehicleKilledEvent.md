#### Description:
Gets the code that should execute when a vehicle dies in a convoy. This will by default return KISKA_convoy_handleVehicleKilled_default if not explicitly set on the vehicle.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the killed event code of

#### Returns:
*(CODE)* - The code that executes when a vehicle is killed in the convoy

#### Examples:
```sqf
private _eventCode = [
    vic
] call KISKA_fnc_convoy_getVehicleKilledEvent;
```

