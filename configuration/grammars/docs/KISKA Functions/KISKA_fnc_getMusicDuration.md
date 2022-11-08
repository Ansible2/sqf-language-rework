#### Description:
Returns the duration of a track of music. Will return 0 if undefined duration or class.

#### Parameters:
0: **_track** *(STRING or CONFIG)* - a classname to check the duration of or its config path

#### Returns:
<NUMBER> - The duration of the requested track

#### Examples:
```sqf
_duration = ["LeadTrack01_F_Curator"] call KISKA_fnc_getMusicDuration;
```

