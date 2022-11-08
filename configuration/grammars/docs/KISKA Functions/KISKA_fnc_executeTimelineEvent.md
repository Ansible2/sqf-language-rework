#### Description:
Executes a recursive chain timeline events. This should not be executed on its own but begins from KISKA_fnc_startTimeline.

#### Parameters:
0: **_timeline** *(ARRAY)* - An array of timeline events that will happen. 
See KISKA_fnc_startTimeline for formats

1: **_timelineId** *(NUMBER)* - The id of the timeline to stop

2: **_timelineMap** *(HASHMAP)* - The Individual map defined for a specific timeline of the given ID

3: **_previousReturn** *(ANY)* - The returned value from the previous events function

#### Returns:
NOTHING

#### Examples:
```sqf
[_timeline,123] call KISKA_fnc_executeTimelineEvent
```

