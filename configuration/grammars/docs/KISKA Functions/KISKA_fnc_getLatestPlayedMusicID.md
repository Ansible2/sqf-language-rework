#### Description:
Returns the latest track ID of music that played (each song played increments) the ID by one. This DOES NOT indicated whether or not this ID is still playing. See KISKA_fnc_getPlayingMusic to check what track is present (if any).

#### Parameters:
NONE

#### Returns:
<NUMBER> - The highest incremented track "ID". -1 indicates no music has ever been played

#### Examples:
```sqf
private _id = call KISKA_fnc_getLatestPlayedMusicID;
```

