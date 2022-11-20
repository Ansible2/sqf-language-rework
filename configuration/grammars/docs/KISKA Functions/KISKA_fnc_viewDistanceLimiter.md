#### Description:
Starts a looping function for limiting a player's viewDistance. Loop can be stopped by setting mission variable "KISKA_VDL_run" to false. All other values have global vars that can be edited while it is in use. See each param for associated global var.

#### Parameters:
0: **_targetFPS** *(NUMBER)* - The desired FPS (lower) limit (KISKA_VDL_fps)

1: **_checkFreq** *(NUMBER)* - The frequency of checks for FPS (KISKA_VDL_freq)

2: **_minObjectDistance** *(NUMBER)* - The minimum the objectViewDistance, can be set by (KISKA_VDL_minDist)

3: **_maxObjectDistance** *(NUMBER)* - The max the objectViewDistance, can be set by (KISKA_VDL_maxDist)

4: **_increment** *(NUMBER)* - The amount the viewDistance can incriment up or down each cycle (KISKA_VDL_inc)

5: **_viewDistance** *(NUMBER)* - This is the static overall viewDistance, can be set by (KISKA_VDL_viewDist)
 This is static because it doesn't affect FPS too much.

#### Returns:
NOTHING

#### Examples:
```sqf
Every 3 seconds, check
[45,3,500,1700,25,3000] spawn KISKA_fnc_viewDistanceLimiter;
```

