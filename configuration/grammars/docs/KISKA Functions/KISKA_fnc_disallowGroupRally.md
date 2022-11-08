#### Description:
Removes a groups ability to rally an deletes its marker if requested.

#### Parameters:
0: **_groupToRemove** *(GROUP or OBJECT)* - The group or the unit whose group to remove

1: **_deleteMarker** *(BOOL)* - Should the group's latest rally marker (if present) be deleted

#### Returns:
<BOOL> - True if no longer allowed or never was, false if error

#### Examples:
```sqf
// disallows player's group to drop a rally point (if they're the server)
[player] call KISKA_fnc_disallowGroupRally;
```

