#### Description:
Removes a given vehicle from its convoy. This will shift the index's of all vehicles in the convoy that are lower than the given vehicle to remove. If the vehicle is moving (speed > 0) then the vehicle will be told to "stop" via a `move` order.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to remove

#### Returns:
NOTHING

#### Examples:
```sqf
[vic] call KISKA_fnc_convoy_removeVehicle;
```

