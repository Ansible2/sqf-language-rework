#### Description:
Sets the onprepare function of a specific vehicle when it conducts fastroping with KISKA_fnc_fastRope (not any other implementation of ACE fastroping). By default, ACE uses a config value (on the vehicle's class) of a string that is the name of the function to call. This function will overwrite that config function or add support for vehicles that do not have an onPrepare function defined. The onPrepare function is what happens just prior to the helicopter dropping its ropes. You may want to do something like openning the vehicles doors before the units fastrope, for example. Your new onPrepare function can return a number that will then be used as the time it takes for the ropes to be lowered down from the helicopter (the default is 4 seconds).

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to fastrope from

1: **_onPrepare** *(CODE, ARRAY, or STRING)* - A function that returns a number
    being the time it takes for the ropes to deploy from the given vehicle
    (SEE KISKA_fnc_callBack for array syntax).
     Args:
     0: *(OBJECT)* - The helicopter conducting a fastrope

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    {4} // takes 4 seconds to lower ropes
] call KISKA_fnc_ACE_setOnPrepareFastrope;
```

