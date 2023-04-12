#### Description:
Checks if a timeline has either fully been complete (_checkForFullCompletion = true) or is simply qued for end at the start of its next event (_checkForFullCompletion = false).

#### Parameters:
0: **_timelineId** *(NUMBER)* - The id of the timeline to check

1: **_checkForFullCompletion** *(BOOL)* - Check if the timeline's onComplete function has completed and the timeline is fully done.

#### Returns:
*(BOOL)* - The state of the timeline

#### Examples:
```sqf
private _isRunning = [123,false] call KISKA_fnc_isTimelineRunning;
```
```sqf
private _timelineIsNotComplete = [123,true] call KISKA_fnc_isTimelineRunning;
```

