#### Description:
Returns the relative vector dir and up and world position from one object to another.

#### Parameters:
0: **_parent** *(OBJECT)* - The object to make the coordinates relative to.

1: **_child** *(OBJECT)* - The object to find coordinates for.

#### Returns:
*(ARRAY)* -
    0: *(ARRAY)* - Relative world pos
    1: *(ARRAY)* - Relative vector dir
    2: *(ARRAY)* - Relative vector up

#### Examples:
```sqf
private relativeArray = [
    parentObject,
    childObject
] call KISKA_fnc_getRelativeVectorAndPos
```

