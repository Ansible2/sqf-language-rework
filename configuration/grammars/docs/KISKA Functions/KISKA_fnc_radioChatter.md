#### Description:
Plays a random radio ambient at the specified position. This has a global effect now and should be executed on one machine.

#### Parameters:
0: **_followSource** *(BOOL)* - Should the radio audio be attached to the _source object?
This will use say3D instead of playSound3d.

1: **_soundParams** *(ARRAY)* - An array of parameters that are slightly different depending on the _followSource value
If _followSource is true:
0: **_source** *(OBJECT)* - Where the sound is coming from
1: **_distance** *(NUMBER)* - Max distance at which the sound can be heard
2: **_offset** *(ARRAY)* - AttachTo coordinates that can be used to offset the sound
If _followSource is false:
0: **_source** *(OBJECT or ARRAY)* - Where the sound is coming from.
If array format positionASL.
1: **_distance** *(NUMBER)* - Max distance at which the sound can be heard
2: **_volume** *(NUMBER)* - How loud the sound plays

#### Returns:
<NUMBER> - the "chatter ID" that can be used with KISKA_fnc_stopRadioChatter. -1 if error

#### Examples:
```sqf
// radio sound follows player
[
true,
[player]
] call KISKA_fnc_radioChatter;
```
```sqf
// radio sound follows front of player
[
true,
[player,5,[0,1,0]]
] call KISKA_fnc_radioChatter;
```

