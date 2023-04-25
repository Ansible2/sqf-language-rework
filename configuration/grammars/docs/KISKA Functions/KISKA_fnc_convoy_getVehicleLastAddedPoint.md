#### Description:
Gets the last position added to the vehicle's drive path from the LEAD VEHICLE. This does not include modified positions from KISKA_fnc_convoy_modifyVehicleDrivePath.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the drive path of

#### Returns:
*(PositionATL or NIL)* - The last position to be added to the vehicle's drive path
 from the lead vehicles position.

#### Examples:
```sqf
private _lastAddedPositionFromLead = [
    _vehicle
] call KISKA_fnc_convoy_getVehicleLastAddedPoint;
```

