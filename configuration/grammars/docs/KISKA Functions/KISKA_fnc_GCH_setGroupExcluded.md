#### Description:
Sets a group's exclusion from the Group Changer.

#### Parameters:
0: **_group** *(GROUP)* - The group to check exclusion of

1: **_isExcluded** *(BOOL)* - True to exclude group, false to include

2: **_synchronize** *(BOOL)* - True to remoteExec this function and provide a JIP message

#### Returns:
*(BOOL)* - Returns true if the group is excluded or false if not

#### Examples:
```sqf
// exclude group
private _isExcluded = [group player,true] call KISKA_fnc_GCH_setGroupExcluded;
```

