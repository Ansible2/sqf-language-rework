#### Description:
Clears a vehicle's current debug follow path objects array. When a vehicle is in debug mode, a path of objects will be drawn for the duration that shows the positions currently in the vehicle's drive path. This is the follow path.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to clear the debug follow path of

1: **_deleteExisting** *(BOOL)* - Whether or not to delete the objects that arecurrently in the array

#### Returns:
NOTHING

#### Examples:
```sqf
[_vehicle] call KISKA_fnc_convoy_clearVehicleDebugFollowPath;
```

