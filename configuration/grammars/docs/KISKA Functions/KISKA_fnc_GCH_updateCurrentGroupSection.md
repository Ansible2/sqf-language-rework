#### Description:
Updates the individual components of the current group section of the GUI.

#### Parameters:
0: **_updateUnitList** *(BOOL)* - Updates the list of units

1: **_updateLeaderIndicator** *(BOOL)* - Updates the text that shows the leader's name

2: **_updateGroupId** *(BOOL)* - Updates the group's ID name

3: **_updateCanDeleteCombo** *(BOOL)* - Updates the state of the can delete combo list

4: **_updateCanRallyCombo** *(BOOL)* - Updates the state of the can delete combo list

#### Returns:
NOTHING

#### Examples:
```sqf
// update just the unit list
[true] call KISKA_fnc_GCH_updateCurrentGroupSection;
```

