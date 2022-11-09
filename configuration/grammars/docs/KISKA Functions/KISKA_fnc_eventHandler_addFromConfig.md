#### Description:
Adds a configed custom eventhandler.

#### Parameters:
0: **_entityToAddEventHandlerTo** *(ANY)* - The entity to add the eventhandler to

1: **_config** *(CONFIG)* - The config of the eventhandler

2: **_code** *(CODE or STRING)* - What to execute when the eventhandler is called_thisScriptedEventHandler is available with the event id

#### Returns:
*(NUMBER)* - The ID of the eventhandler

#### Examples:
```sqf
private _eventID = [
    player,
    myConfig
] call KISKA_fnc_eventHandler_addFromConfig
```

