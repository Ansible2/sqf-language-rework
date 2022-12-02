#### Description:
On selected objects, will disable simulation and hide the object or the reverse.

#### Parameters:
0: **_objects** *(ARRAY, GROUP, STRING, or OBJECT)* - Units to show or hide, if string, it is a mission layer

1: **_show** *(BOOL)* - True to show and simulate, false to hide and disable simulation

2: **_enableDynamicSim** *(BOOL)* - Should the object be dynamically simulated after shown

#### Returns:
*(BOOL)* - True if action performed, false otherwise

#### Examples:
```sqf
[group1, true, true] call KISKA_fnc_showHide;
```

