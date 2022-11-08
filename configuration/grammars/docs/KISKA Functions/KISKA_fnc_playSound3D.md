#### Description:
Plays a sound 3D but the function accepts the CFGSounds name rather then the file path.

#### Parameters:
0: **_sound** *(STRING or CONFIG)* - The sound to play. The classname of a CfgSounds entry (if string)
or any config class that has a "sound[]" array and "duration" number property (such as CfgMusic classes)

1: **_origin** *(OBJECT or ARRAY)* - The position (ASL), object from which the sound comes from, 
or an array of any combination of the two (effectively multiple origins)

2: **_distance** *(NUMBER)* - Distance at which the sound can be heard

3: **_volume** *(NUMBER)* - Range from 0-5

4: **_isInside** *(BOOL)* - Is _origin inside

5: **_pitch** *(NUMBER)* - Range from 0-5

#### Returns:
*(BOOL)* - True if sound found and played, false if error

#### Examples:
```sqf
[
"BattlefieldJet1_3D",
(getPosASL player) vectorAdd [50,50,100],
2000
] call KISKA_fnc_playSound3D;
```

