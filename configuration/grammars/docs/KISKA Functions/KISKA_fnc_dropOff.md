#### Description:
Tells a vehicle to move to a position and then drop off the specified units.

#### Parameters:
0: **_vehicle** : *(OBJECT)* - The vehicle that will drop of units

1: **_dropOffPosition** : *(OBJECT or ARRAY)* - The position to drop units off, can be object or position array

2: **_unitsToDropOff** : *(GROUP, ARRAY, or OBJECT)* - The units to drop off

3: **_completionRadius** : *(NUMBER)* - The radius at which the waypoint is complete and the units can disembark from the _dropOffPosition, -1 for exact placement

4: **_speed** : *(STRING)* - The for the driver group to move at

5: **_codeOnComplete** : *(CODE, STRING, or ARRAY)* - Code to run upon completion of disembark. See KISKA_fnc_callBackParams:
    0. *(OBJECT)* - The vehicle that will drop of units
    1. *(ARRAY)* - The units dropped off at this location

#### Returns:
NOTHING

#### Examples:
```sqf
[
    myVehicle,
    myPosition,
    player
] call KISKA_fnc_dropOff;
```

