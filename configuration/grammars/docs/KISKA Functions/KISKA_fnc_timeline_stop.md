#### Description:
Ques a timeline to end on the next execution of an event in it or at the very end of the timeline. This will immediately set KISKA_fnc_timeline_isRunning (where _isFullyComplete-is-false) to be true.

#### Parameters:
0: **_timelineId** *(STRING)* - The id of the timeline to stop

1: **_onTimelineStopped** *(CODE, STRING, or ARRAY)* - (see KISKA_fnc_callBack),code that will be executed once a timeline is stopped. Parameters:- 0: *(ARRAY)* - The timeline array in the state when the stoppage actually happens.- 1: *(HASHMAP)* - The Individual map defined for a specific timeline of the given ID

#### Returns:
NOTHING

#### Examples:
```sqf
["KISKA_timeline_1"] call KISKA_fnc_timeline_stop;
```
```sqf
["KISKA_timeline_1",{hint str ["timeline stopped!",_this]}] call KISKA_fnc_timeline_stop;
```

