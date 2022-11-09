#### Description:
Plays music with smooth fade between tracks. Must be run in scheduled environment (spawn)

#### Parameters:
0: **_track** *(STRING)* - Music to play

1: **_startTime** *(NUMBER OR ARRAY)* - Starting time of music. -1 for random start time.If array, duration of track can also be specified (SEE EXAMPLE 2).THIS INCLUDES FADE TIME

2: **_canInterrupt** *(BOOL)* - Interrupt playing music

3: **_volume** *(NUMBER)* - Volume to play at

4: **_fadeTime** *(NUMBER)* - Time to fade tracks down & up

#### Returns:
NOTHING

#### Examples:
```sqf
["track", 0, true, 1, 3] spawn KISKA_fnc_playMusic;
```
```sqf
[
"track",
[10,60]// start ten seconds into the song, and play for 60 seconds
] spawn KISKA_fnc_playMusic;
```

