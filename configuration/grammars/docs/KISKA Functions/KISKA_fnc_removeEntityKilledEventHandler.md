#### Description:
Removes a killed KISKA entity event handler.

#### Parameters:
0: **_entity** *(OBJECT)* - The entity to remove event from

1: **_eventId** *(NUMBER)* - The Id of the event to remove

#### Returns:
NOTHING

#### Examples:
```sqf
[aUnit,{hint _this}] call KISKA_fnc_removeEntityKilledEventHandler;
```

