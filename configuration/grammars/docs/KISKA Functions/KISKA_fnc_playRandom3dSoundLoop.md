#### Description:
Randomly plays sounds (or music) in 3d space from a given list at one or multiple origins. This function will produce synchronized audio on all machines.

#### Parameters:
0: **_origin** *(OBJECT or ARRAY)* - The position (ASL), object from which the sound comes from, or an array of any combination of the two (effectively multiple origins)

1: **_sounds** *(ARRAY)* - An array of sounds to play randomly with any combination of three formats:- *(STRING)*: A config name of a sound in either CfgSounds and/or CfgMusic. This config Musthave a "duration" number property. - [*(STRING)*,*(NUMBER)*] ([*(configClassName)*,*(duration)*]): a config class name that is in CfgSounds and/or CfgMusic and the duration the sound lasts.- *(CONFIG)*: a config path to a class with a "sound[]" array property that has it's first entryas a sound file path, and has a "duration" number property.

2: **_timeBetweenSounds** *(NUMBER or ARRAY)* - A buffer time between each sound once one completes. If array, random syntax of random [min,mid,max] is used to get buffer each time a sound completes.

3: **_soundParams** *(ARRAY)* - An array of parameters for playSound3D:0. _distance *(NUMBER)* - Distance at which the sound can be heard1. _volume *(NUMBER)* - Range from 0-52. _isInside *(BOOL)* - Is _origin inside3. _pitch *(NUMBER)* - Range from 0-5

4: **_onSoundPlayed** *(ARRAY, CODE, STRING)* - A callback function that executes each time a sound is played(See KISKA_fnc_callback). Parameters are:0. *(NUMBER)* - An id that can be used with KISKA_fnc_stopRandom3dSoundLoop to stop sounds1. *(OBJECT or ARRAY)* - The position the sound is playing at2. *(CONFIG)* - The config of the current sound being played

#### Returns:
*(NUMBER)* - An id that can be used with KISKA_fnc_stopRandom3dSoundLoop to stop
the sound loop.

#### Examples:
```sqf
[
player,
[],
5,
[],
{hint str _this}
] call KISKA_fnc_playRandom3dSoundLoop;
```

