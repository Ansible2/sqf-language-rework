#### Description:
Gets the positionWorld of a vehicles front or rear bumper. This function caches values in a hashmap for use in the frame by frame calls in KISKA's advanced convoy.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to get the bumper position of

1: **_isRearBumper** *(BOOL)* - True for rear bumper, false for front bumper

#### Returns:
*(PositionWorld)* - The world position of the vehicle's bumper

#### Examples:
```sqf
private _rearBumperPositionWorld = [vic,true] call KISKA_fnc_convoyAdvanced_getBumperPosition;
```

