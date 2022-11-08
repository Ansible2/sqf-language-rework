#### Description:
Randomly spawns units on an array of positions. PositionATL is expected and arrays can have 4 indexes with a direction for the unit to face being the 4th. If no direction is specified, a random one is chosen. Using an object instead of a position will result in the unit facing the same way that the object is. This is destructive on the _spawnPositions array so be sure to copy (+_spawnPositions) if you need to reuse the array.

#### Parameters:
0: **_numberOfUnits** *(NUMBER)* - Number of units to spawn, if -1, all provided positions
will be filled

1: **_numberOfUnitsPerGroup** *(NUMBER)* - Number of units per group

2: **_unitTypes** *(ARRAY)* - Unit types to select randomly from (can be weighted or unweighted array)

3: **_spawnPositions** *(ARRAY)* - List of positions at which units will randomly spawn, the array can be positions and/or objects.
If given an empty array, all units will spawn at [0,0,0]


4: **_canUnitsMove** *(BOOL)* - Can units walk (optional)

5: **_enableDynamic** *(BOOL)* - Should the units be dynamically simmed (Optional)

6: **_side** *(SIDE)* - Side of units (optional)

#### Returns:
*(ARRAY)* - All units spawned by the function

#### Examples:
```sqf
_spawnedUnits = [2, 2, _arrayOfTypes, [[0,0,0],spawnObject]] call KISKA_fnc_spawn;
```

