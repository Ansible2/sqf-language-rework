#### Description:
Clears a group's waypoints and conditionally halts their previous movement.

#### Parameters:
0: **_group** *(GROUP or OBJECT)* - The group to clear the waypoints of.

1: **_numberToRemove** *(NUMBER)* - The number of waypoints to remove (-1 will remove all)

2: **_stopUnits** *(BOOL)* - Should the units stop in place after clear?

#### Returns:
NOTHING

Example:
    (begin example)
        [group player,-1,false] call KISKA_fnc_clearWaypoints
    (end)

#### Examples:
```sqf
[group player,-1,false] call KISKA_fnc_clearWaypoints
```

