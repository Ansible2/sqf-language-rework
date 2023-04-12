#### Description:
Adds a killed event handler to a given entity that will persist even if the unit becomes remote. The order of execution is not guaranteed to be in the order added.

#### Parameters:
0: **_entity** *(OBJECT)* - The entity to add the object to

1: **_event** *(CODE, STRING, or ARRAY)* - The code to execute (SEE KISKA_fnc_callBack for array syntax).Parmeters:
    0. *(OBJECT)* - The killed entity
    1. *(OBJECT)* - The killer entity (vehicle or person)
    2. *(OBJECT)* - The instigator entity
    3. *(BOOL)* - same as useEffects in `setDamage` alt syntax

#### Returns:
*(NUMBER)* - The entity killed event handler ID for the unit

#### Examples:
```sqf
private _id = [aUnit,{hint _this}] call KISKA_fnc_addEntityKilledEventHandler;
```

