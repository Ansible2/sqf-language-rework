#### Description:
Units will drive to point and get out of vehicle.

#### Parameters:
0: **_crew** : *(GROUP, OBJECT[], or OBJECT)* - The units to move into the vehicle and drive

1: **_vehicle** : *(OBJECT)* - The vehicle to put units into

2: **_dismountPoint** : *(OBJECT or ARRAY)* - The position to move to, can be object or position array

3: **_completionRadius** : *(NUMBER)* - The radius at which the waypoint is complete and the units can disembark from the _dismountPoint, -1 for exact placement

4: **_speed** : *(STRING)* - The for the driver group to move at

5: **_codeOnComplete** : *(CODE, STRING, or ARRAY)* - Code to run upon completion of disembark. See KISKA_fnc_callBack
Params:

    - 0: *(OBJECT)* - The vehicle, crew (ARRAY), and crew groups (ARRAY)
    - 1: *(OBJECT[])* - The crew of the vehicle
    - 2: *(GROUP[])* - All the groups that are in the vehicle crew

#### Returns:
*(BOOL)* - false if encountered error, true if success

#### Examples:
```sqf
[_group1, _vehicle, myDismountPoint] call KISKA_fnc_driveTo;
```

