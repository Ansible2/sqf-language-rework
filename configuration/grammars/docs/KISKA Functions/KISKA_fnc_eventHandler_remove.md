#### Description:
Removes a configed custom eventhandler. Worth noting that this will still return true even after the event has been removed as BIS_fnc_removeScriptedEventHandler essentially checks that the event isn't one that never could have existed.

#### Parameters:
0: **_entity** *(ANY)* - The config of the eventhandler

1: **_eventConfig** *(CONFIG)* - The eventhandler config path

2: **_id** *(NUMBER)* - The event to remove

#### Returns:
<BOOL> - True if removed, false if it never existed

#### Examples:
```sqf
private _removed = [
    player,
    configFile >> "KISKA_EventHandlers" >> "KISKA_combatBehaviourChangedEvent",
    0
] call KISKA_fnc_eventHandler_remove
```

