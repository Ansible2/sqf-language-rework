#### Description:
The Individual map defined for a specific timeline of the given ID. This is the hashmap available in each timeline's event's code.

#### Parameters:
0: **_timelineId** *(STRING)* - The id of the timeline to get

#### Returns:
*(HASHMAP)* - A hashmap containing information for the timeline events

#### Examples:
```sqf
private _timelineMapForId = ["KISKA_timeline_1"] call KISKA_fnc_timeline_getInfoMap;
```

