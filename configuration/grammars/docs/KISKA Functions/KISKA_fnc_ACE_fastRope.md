#### Description:
Sends a vehicle to a given point and fastropes the given units from the helicopter. Pilots should ideally be placed in "CARELESS" behaviour when around enemies.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle to fastrope from

1: **_dropPosition** *(ARRAY or OBJECT)* - The positionASL to drop the units off at; Z coordinatematters

2: **_unitsToDeploy** *(CODE, STRING, ARRAY, OBJECT[], GROUP, or OBJECT)* - An array of units to drop from the _vehicle,Or code that will run once the helicopter has reached the drop point that must return an array of object(see KISKA_fnc_callBack for examples)Parameters:- 0: **_vehicle** - The drop vehicle

3: **_afterDropCode** *(CODE, STRING or ARRAY)* - Code to execute after the drop is complete, see KISKA_fnc_callBackParameters:- 0: **_vehicle** - The drop vehicle

4: **_hoverHeight** *(NUMBER)* - The height the helicopter should hover above the drop positionwhile units are fastroping. Max is 28, min is 5

5: **_ropeOrigins** *(ARRAY)* - An array of: either relative (to the vehicle) attachmentpoints for the ropes and/or memory points to attachTo

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    _position,
    (fullCrew [_vehicle,"cargo"]) apply {
        _x select 0
    },
    {hint "fastrope done"},
    28,
    [[0,0,0]]
] call KISKA_fnc_ACE_fastRope;
```

