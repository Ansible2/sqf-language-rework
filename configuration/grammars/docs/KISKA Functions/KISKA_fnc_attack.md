#### Description:
Modified version of CBA_fnc_taskAttack. Now allows setting of different behaviour and combatMode.

#### Parameters:
0: **_group** *(GROUP or OBJECT)* - Unit(s) to attack

1: **_position** *(OBJECT, LOCATION, GROUP, or ARRAY)* - The position to attack

2: **_radius** *(NUMBER)* - Radius for waypoint placement

3: **_behaviour** *(STRING)* - What behaviour will the attacker(s) have

4: **_combatMode** *(STRING)* - What combatMode will the attacker(s) have

5: **_override** *(BOOL)* - Clear units current waypoints

#### Returns:
NOTHING

#### Examples:
```sqf
[group1,attackPosition,100,"COMBAT","RED"] call KISKA_fnc_attack;
```

