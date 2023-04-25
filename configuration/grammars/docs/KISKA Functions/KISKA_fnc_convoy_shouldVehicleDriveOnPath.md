#### Description:
Gets whether or not the vehicle will initiate new `setDriveOnPath`'s whenever a new point is added to the vehicle's drive path. While false, a vehicle will continue to receive new points in the vehicles drive path.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to check the value of

#### Returns:
*(BOOL)* - The vehicle's state of `KISKA_convoy_doDriveOnPath`

#### Examples:
```sqf
private _doDriveOnPath = [_vehicle] call KISKA_fnc_convoy_shouldVehicleDriveOnPath;
```

