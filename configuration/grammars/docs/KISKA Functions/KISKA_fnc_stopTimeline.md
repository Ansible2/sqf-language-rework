#### Description:
Ques a timeline to end on the next execution of an event in it or at the very end of the timeline. This will immediately set KISKA_fnc_isTimelineRunning (where _isFullyComplete-is-false) to be true.

#### Parameters:
0: **_timelineId** *(NUMBER)* - The id of the timeline to stop

1: **_onTimelineStopped** *(CODE, STRING, or ARRAY)* - (see KISKA_fnc_callBack),
code that will be executed once a timeline is stopped. Params:
0: *(ARRAY)* - The timeline array in the state when the stoppage actually happens.
1: *(HASHMAP)* - The Individual map defined for a specific timeline of the given ID

#### Returns:
NOTHING

#### Examples:
```sqf
[123] call KISKA_fnc_stopTimeline;
```
```sqf
[123,{hint str ["timeline stopped!",_this]}] call KISKA_fnc_stopTimeline;
```

