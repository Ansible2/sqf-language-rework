#### Description:
Checks if a timeline has either fully been complete (_checkForFullCompletion = true) or is simply qued for end at the start of its next event (_checkForFullCompletion = false).

#### Parameters:
0: **_timelineId** *(STRING)* - The id of the timeline to check

1: **_checkForFullCompletion** *(BOOL)* - Check if the timeline's onComplete function has completed and the timeline is fully done.

#### Returns:
*(BOOL)* - The state of the timeline

#### Examples:
```sqf
private _isRunning = ["KISKA_timeline_1",false] call KISKA_fnc_timeline_isRunning;
```
```sqf
private _timelineIsNotComplete = ["KISKA_timeline_1",true] call KISKA_fnc_timeline_isRunning;
```

