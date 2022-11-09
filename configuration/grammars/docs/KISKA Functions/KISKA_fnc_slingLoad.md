#### Description:
Tells AI helicopter to pick up a given object and drop it off at a given location.

#### Parameters:
0: **_heli** : *(OBJECT)* - Helicopter with pilot to perform slingload

1: **_liftObject** : *(OBJECT)* - The object to sling load

2: **_dropOffPoint** : *(ARRAY, OBJECT, LOCATION, or GROUP)* - Where to drop the _liftObject off at

3: **_afterDropCode** : *(ARRAY, CODE, or STRING)* - Code to execute after the drop off waypoint is complete.This is saved to the pilot's namespace in "KISKA_postSlingLoadCode" which is deleted afterit is called. (See KISKA_fnc_callBack)
    Parmeters:
        0. *(OBJECT)* - The pilot of the helicopter
        

4: **_flightPath** : *(ARRAY)* - An array of sequential positions (*(ARRAY, OBJECT, LOCATION, or GROUP)*)the aircraft must travel prior to droping off the _liftObject

#### Returns:
*(ARRAY)* -
    0: *(OBJECT)* - The pilot
    1: *(GROUP)* - Pilot's group
    2: *(ARRAY)* - Generated waypoints

#### Examples:
```sqf
[
    heli,
    someObject,
    dropOff,
    [
        [heli],
        {
            hint str [_this,_thisArgs]
        }
    ]
] call KISKA_fnc_slingLoad;
```

