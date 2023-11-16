#### Description:
Sets the (execution) statement of a given waypoint using an interface that allows arg passing. This statement will only be executed on the machine where added. Be aware that this will create variables on the provided waypoint's group. If a waypoint is deleted, the variable on the group will still remain.

#### Parameters:
0: **_waypoint** *(WAYPOINT)* - Default: `[]` - The waypoint you would like to the executionstatement of.

1: **_statement** *(CODE, STRING, or ARRAY)* - Default: `{}` - Code that executes once the given waypointis complete (see `KISKA_fnc_callBack` for examples).Parameters:- 0: *(GROUP)* - The group the waypoint belongs to- 1: *(OBJECT)* - The group leader for the group the waypoint belongs to- 2: *(OBJECT[])* - The units of the group that own the waypoint

3: **_existingId** *(STRING)* - Default: `""` - If updating an existing waypoint statement, provide theid that was previously returned.

#### Returns:
*(STRING)* - The id of the waypoint statment that can be used to update an existing statement

#### Examples:
```sqf
private _waypoint = myGroup addWaypoint [position player, 0];
private _id = [
    _waypoint,
    { hint str _this; }
] call KISKA_fnc_setWaypointExecStatement
```

