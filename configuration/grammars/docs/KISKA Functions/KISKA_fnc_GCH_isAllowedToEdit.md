#### Description:
Checks if a machine is allowed to edit a given property in the GCH dialog.

#### Parameters:
0: **_groupLeader** *(OBJECT or GROUP)* - The leader or group to edit the property on.
If provided, it will be assumed that even the group leader can edit the property

#### Returns:
*(BOOL)* - True if yes, false if no.

#### Examples:
```sqf
_canEdit = [myGroup] call KISKA_fnc_GCH_isAllowedToEdit;
```

