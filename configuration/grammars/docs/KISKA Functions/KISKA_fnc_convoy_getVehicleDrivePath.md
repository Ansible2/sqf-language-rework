#### Description:
Gets a given convoy vehicle's current drive path. This will return the reference to the actual array used with `setDriveOnPath` for the vehicle's following. You should not set a vehicle's drive path directly. If you want to overwrite a vehicle's current path, use KISKA_fnc_convoy_modifyVehicleDrivePath.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the drive path of

#### Returns:
*(PositionATL[])* - An array of the current vehicle's path that it is following

#### Examples:
```sqf
private _currentDrivePath = [_vehicle] call KISKA_fnc_convoy_getVehicleDrivePath;
```

