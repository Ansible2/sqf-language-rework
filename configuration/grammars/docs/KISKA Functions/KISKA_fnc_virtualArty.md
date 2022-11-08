#### Description:
Calls for an artillery or mortar strike at a designated position and marks the spot.

#### Parameters:
0: **_target** *(OBJECT, ARRAY, or STRING(marker))* - The target you want to cluter fire around

1: **_ammoType** *(STRING)* - The ammo type from cfgAmmo 

2: **_radius** *(NUMER)* - Spread of rounds

3: **_numberOfRounds** *(NUMER)* - The number of rounds to fire

4: **_delayBetween** *(NUMER)* - Time between shots

5: **_markPosition** *(BOOL)* - Marks the target position with smoke and chemlight (delete after 20 seconds)

#### Returns:
NOTHING

#### Examples:
```sqf
[target_1,"Sh_155mm_AMOS"] spawn KISKA_fnc_virtualArty;
```

