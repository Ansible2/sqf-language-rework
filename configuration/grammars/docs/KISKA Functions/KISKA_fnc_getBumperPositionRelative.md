#### Description:
Gets the PositionRelative of a vehicles front or rear bumper.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the bumper position of

1: **_isRearBumper** *(BOOL)* - True for rear bumper, false for front bumper

#### Returns:
*(PositionRelative)* - The world position of the vehicle's bumper

#### Examples:
```sqf
private _rearBumperPositionRelatives = [vic,true] call KISKA_fnc_getBumperPositionRelative;
```

