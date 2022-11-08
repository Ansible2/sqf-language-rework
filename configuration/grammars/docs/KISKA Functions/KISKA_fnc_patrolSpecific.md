#### Description:
Creates a cycle of waypoints for a patrol using a predetermined set of possible points

#### Parameters:
0: **_group** *(GROUP or OBJECT)* - The group or unit to give waypoints to

1: **_postions** *(ARRAY)* - An array of possible positions to patrol between, can be either positions or objects

2: **_numWaypoints** *(NUMBER)* - The number of waypoints, use -1 to patrol all given positions

(Optional)

3: **_random** *(BOOL)* - Should waypoints be randomized from _positions array

4: **_behaviour** *(STRING)* - setWaypointBehaviour, takes "UNCHANGED", "SAFE", "COMBAT", "AWARE", "CARELESS", and "STEALTH"

5: **_speed** *(STRING)* - setWaypointSpeed, takes "UNCHANGED", "LIMITED", "NORMAL", and "FULL"

6: **_combatMode** *(STRING)* - setWaypointCombatMode, takes "NO CHANGE", "BLUE", "GREEN", "WHITE", "YELLOW", and "RED"

7: **_formation** *(STRING)* - setWaypointFormation, takes "NO CHANGE", "COLUMN", "STAG COLUMN", "WEDGE", "ECH LEFT", "ECH RIGHT", "VEE", "LINE", "FILE", and "DIAMOND"

#### Returns:
*(BOOL)* - True if units will patrol, false if problem encountered

#### Examples:
```sqf
[_group,_positionsArray,5] call KISKA_fnc_patrolSpecific;
```

