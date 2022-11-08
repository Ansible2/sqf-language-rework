#### Description:
Acts as a liason from a client to add a group to auto delete if necessary. Only works where the group is local and need to use groupOwner to get that which only works on the server.

#### Parameters:
0: **_group** *(GROUP)* - The group to change the auto-deletion on

1: **_canDelete** *(BOOL)* - Set the group to be deleted or not

#### Returns:
NOTHING

#### Examples:
```sqf
[myGroup,false] call KISKA_fnc_GCH_groupDeleteQuery;
```

