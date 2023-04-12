#### Description:
Spawns a cruise missile at designated "launcher" and then guides it to a target. If you need a missile that terrain follows, see KISKA_fnc_vlsFireAt.

#### Parameters:
0: **_target** *(OBJECT or ARRAY)* - Target to hit missile with, can also be a position (ASL)

1: **_side** *(SIDE)* - The side that is launching the missile

2: **_launchPos** *(OBJECT or ARRAY)* - An object or position ASL to spawn the missile at.If empty array array (default), a random position is chosen 2000m away.

#### Returns:
NOTHING

#### Examples:
```sqf
[target_1] call KISKA_fnc_cruiseMissileStrike;
```

