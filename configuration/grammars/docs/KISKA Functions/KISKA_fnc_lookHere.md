#### Description:
Takes objects and sets their direction towards the nearest object or position within a set

#### Parameters:
0: **_objectsToRotate** *(OBJECT or ARRAY)* - The objects to setDir on 

1: **_positionsToLookAt** *(OBJECT or ARRAY)* - The positions or objects to search for nearest

2: **_setDirection** *(BOOL)* - Also set objects direction relative to the look position

#### Returns:
BOOL

#### Examples:
```sqf
[player,[[0,0,0]]] call KISKA_fnc_lookHere;
```

