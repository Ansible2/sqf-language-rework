#### Description:
Takes a set of units and moves them into aircraft to be dropped over a position via parachute from a spawned vehicle

#### Parameters:
0: **_dropZone** : *(OBJECT or ARRAY)* - Target of where to drop the units

1: **_unitsThatCanDrop** : *(ARRAY)* - An array of units that can be dropped

2: **_dropVehicleClass** : *(STRING)* - What vehicle class will drop the units

3: **_numToDrop** : *(NUMBER)* - The number of units out of the array to drop(if -1, will resize to the amount of units in _unitsToDrop)

4: **_flyDirection** : *(NUMBER)* - The direction that the aircraft will fly towards _dropZone(if -1, will be random direction)

5: **_flyInHeight** : *(NUMBER)* - The flyInHeight of the aircraft

6: **_side** : *(SIDE)* - What side is the drop aircraft

7: **_spawnDistance** : *(NUMBER)* - How far away should the aircraft spawn

8: **_invincibleOnDrop** : *(BOOL)* - Should the units be invincible while parachuting down

#### Returns:
NOTHING

#### Examples:
```sqf
[] spawn KISKA_fnc_paratroopers;
```

