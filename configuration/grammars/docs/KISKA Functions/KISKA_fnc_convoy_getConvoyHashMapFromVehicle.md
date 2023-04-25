#### Description:
Gets the corresponding hashmap of a convoy for a particular vehicle.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the convoy hashmap of

#### Returns:
*(HASHMAP)* - The hashmap of the convoy this vehicle belongs to 
    (nil in the case of the vehicle not belonging to a convoy)

#### Examples:
```sqf
private _convoyHashMap = [
    _vehicle
] call KISKA_fnc_convoy_getConvoyHashMapFromVehicle;
```

