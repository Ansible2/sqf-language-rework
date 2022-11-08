#### Description:
Add an action to given object that allows the spawn of a vehicle

#### Parameters:
0: **_controlPanel** *(OBJECT)* - The object to add the action to

1: **_spawnPosition** *(OBJECT or ARRAY)* - Where to spawn the vehicle (ASL)

2: **_vehicleTypes** *(ARRAY or STRING)* - The class names of vehicles to create an action for (each will get its own action if in an array)

3: **_clearRadius** *(NUMBER)* - How far until pad is considered clear of entities

4: **_onCreateCode** *(CODE)* - Code to run upon vehicle creation. Passed arg is the created vehicle

#### Returns:
<BOOL> - false if not added, true otherwise

#### Examples:
```sqf
[player,(getPosATL player) vectorAdd [2,2,0],"B_MRAP_01_F"] spawn KISKA_fnc_vehicleFactory;
```

