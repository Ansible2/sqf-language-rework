#### Description:
Checks if a group is excluded from the Group Changer menu.

#### Parameters:
0: **_group** *(GROUP)* - The group to check exclusion of

#### Returns:
*(BOOL)* - Returns true if the group is excluded or false if not

#### Examples:
```sqf
private _isExcluded = [group player] call KISKA_fnc_GCH_isGroupExcluded;
```

