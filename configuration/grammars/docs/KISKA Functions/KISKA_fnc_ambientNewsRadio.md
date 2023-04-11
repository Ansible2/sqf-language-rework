#### Description:
Plays a selection of news sounds from the vanilla game at a given position.

#### Parameters:
0: **_origin** *(OBJECT or ARRAY)* - The position the sound will play at. If arrayposition is format ASL

1: **_duration** *(NUMBER)* - How long should this broadcast last. Negative valuewill go on forever.

2: **_distance** *(NUMBER)* - How far away the sound can be heard

3: **_volume** *(NUMBER)* - The volume of the sounds (0-5).

3: **_isInside** *(BOOL)* - Are these sounds being played indoors

#### Returns:
*(NUMBER)* - The KISKA_fnc_playRandom3dSoundLoop Handler ID for stopping the sound 
    with KISKA_fnc_stopRandom3dSoundLoop

#### Examples:
```sqf
[myRadio] call KISKA_fnc_ambientNewsRadio;
```

