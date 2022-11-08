#### Description:
Checks if a group is has KISKA_canRally saved to its namespace on the server which allows its members to place down rally points.

#### Parameters:
0: **_groupToCheck** *(GROUP or OBJECT)* - The group or the unit whose group you want to check

#### Returns:
<BOOL> - True if allowed, false if not or error

#### Examples:
```sqf
// checks if player's group can use the rally system (if they're the server)
[player] call KISKA_fnc_isGroupRallyAllowed;
```

