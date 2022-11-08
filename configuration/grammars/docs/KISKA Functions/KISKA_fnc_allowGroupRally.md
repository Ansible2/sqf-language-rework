#### Description:
Adds group's ability to place rally points by setting "KISKA_canRally" in the group space to true.

#### Parameters:
0: **_groupToAdd** *(GROUP or OBJECT)* - The group or the unit whose group to add

#### Returns:
*(BOOL)* - True if allowed, false if not allowed or error

#### Examples:
```sqf
// allows player's group to drop a rally point (if they're the server)
[player] call KISKA_fnc_allowGroupRally;
```

