#### Description:
Plays a 2D sound if a player is within a given area. Used due to say2D's broken "maxTitlesDistance".

#### Parameters:
0: **_sound** *(STRING)* - The sound name to play

1: **_center** *(OBJECT or ARRAY)* - The center position of the radius to search around

2: **_radius** *(NUMBER)* - How far can the player be from the _center and still "hear" the sound

3: **_threeDimensional** *(BOOL)* - Whether to measure the distance to the player in 2d or 3d space

#### Returns:
*(BOOL)* - True if played, false if did not

#### Examples:
```sqf
["alarm",player,20] call KISKA_fnc_playSound2D;
```

