#### Description:
Spawns a group, adds to curator, and sets to aware. Based on selected unit types

#### Parameters:
0: **_numberOfUnits** *(NUMBER)* - Number of units to spawn

1: **_unitTypes** *(ARRAY)* - Unit types to select randomly from (can be weighted array)

2: **_side** *(SIDE)* - ...
3. _position *(ARRAY, OBJECT, GROUP)* - Position to spawn on
4. _enableDynamicSimulation *(BOOL)* - ... (optional)

#### Returns:
<GROUP> - The group created by the function

#### Examples:
```sqf
_spawnedGroup = [4, _listOfUnitTypes, OPFOR, [0,0,0], true] call KISKA_fnc_spawnGroup;
```

