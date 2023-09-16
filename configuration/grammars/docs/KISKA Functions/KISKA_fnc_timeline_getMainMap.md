#### Description:
The map that links a given timeline id to its info map. This is an internal function that you (likely) don't need to use except for altering timelines that have already started. See KISKA_fnc_timeline_getInfoMap to retrieve an info map for a given timeline.

#### Parameters:
NONE

#### Returns:
*(HASHMAP)* - The overall timeline map to get info on certain timelines

#### Examples:
```sqf
private _mainTimelineMap = call KISKA_fnc_timeline_getMainMap;
private _timelineId = "KISKA_timeline_1";
private _timelineValues = _mainTimelineMap get _timelineId;
_timelineValues params ["_timelineEvents","_timelineMap","_onTimelineStopped"];
```

