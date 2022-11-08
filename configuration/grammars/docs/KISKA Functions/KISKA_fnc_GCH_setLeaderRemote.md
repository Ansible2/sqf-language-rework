#### Description:
Remotely sets a leader of a group from the server. (Must be run on the server)

#### Parameters:
0: **_group** *(GROUP)* - The group to set the unit to leader

1: **_unitToSet** *(OBJECT)* - The unit to set to leader of the group

#### Returns:
NOTHING

#### Examples:
```sqf
[group player, player] call KISKA_fnc_GCH_setLeaderRemote;
```

