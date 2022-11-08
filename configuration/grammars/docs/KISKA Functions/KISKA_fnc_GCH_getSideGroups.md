#### Description:
Gets all groups of a particular side and that are not exlcuded from the GCH

#### Parameters:
0: **_side** *(SIDE)* - The side to get the groups of

#### Returns:
*(ARRAY)* - List of all the groups

#### Examples:
```sqf
private _playerSide = [] call KISKA_fnc_GCH_getPlayerSide;
_groups = [_playerSide] call KISKA_fnc_GCH_getSideGroups;
```

