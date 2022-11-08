#### Description:
Has a helicopter patrol looking for enemy men. If "spotted", the helicopter will land in a safe area and drop off infantry if onboard. It will then move to engage the units if it has weapons or just stalk them if not. The infantry will continually stalk the unit until dead.

#### Parameters:
0: **_helicopter** *(OBJECT)* - The patrolling helicopter

1: **_patrolPoints** *(ARRAY)* - An Array of patrol points (OBJECTs or positions)

2: **_spotDistance3D** *(NUMBER)* - How far away can the helicopter spot a player
3. _patrolHeight *(NUMBER)* - What's the flying height of the helicopter
4. _patrolSpeed *(STRING)* - setWaypointSpeed, takes "UNCHANGED", "LIMITED", "NORMAL", and "FULL"

5: **_randomPatrol** *(BOOL)* - Should patrol points be randomized or followed in array order

#### Returns:
<BOOL> - True if helicopter will patrol, false if problem encountered

#### Examples:
```sqf
[heli,[logic1,logic2,logic3],500,200,false] call KISKA_fnc_heliPatrol;
```

