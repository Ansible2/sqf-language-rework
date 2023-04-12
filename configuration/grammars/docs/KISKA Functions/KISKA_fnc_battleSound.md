#### Description:
Create ambient battlefield sounds for a specified duration

#### Parameters:
0: **_source** *(OBJECT or ARRAY)* - Where the sound is coming from. Can be an object or positions array (ASL)

1: **_distance** *(NUMBER or ARRAY)* - Distance at which the sounds can be heard,if an array, will be used with the "random" command (random _distance)for getting a random value between the numbers.

2: **_duration** *(NUMBER)* - How long the sounds should play for in seconds

3: **_intensity** *(NUMBER)* - Value between 1-5 that determines how frequent these sounds are played (5 being the fastest)

#### Returns:
*(NUMBER)* - The Handler ID for stopping the sound with KISKA_fnc_stopBattleSound

#### Examples:
```sqf
[player,20,10] call KISKA_fnc_battleSound;
```
```sqf
// distance will be between 10-30m, leaning towards 20m
[player,[10,20,30],10] call KISKA_fnc_battleSound;
```

