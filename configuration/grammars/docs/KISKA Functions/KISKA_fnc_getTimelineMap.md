#### Description:
The Individual map defined for a specific timeline of the given ID. This is the hashmap available in each timeline's event's code.

#### Parameters:
0: **_timelineId** *(NUMBER)* - The id of the timeline to get or less than 0
for the global timeline map

#### Returns:
<HASHMAP> - A hashmap containing information for the timeline events

#### Examples:
```sqf
private _timelineMapForIdZero = [0] call KISKA_fnc_getTimelineMap;
```

