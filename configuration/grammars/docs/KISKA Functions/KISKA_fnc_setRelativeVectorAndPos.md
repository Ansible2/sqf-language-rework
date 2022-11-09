#### Description:
Sets the position and vector dir and up of one object to another based on relative coordinates to the parent object.

#### Parameters:
0: **_parent** *(OBJECT)* - The object to make the coordinates relative to.

1: **_child** *(OBJECT)* - The object to find coordinates for.

2: **_relativeInfo** *(ARRAY)* - An array containing the relative coordinates tochange to worldspace:
    0. *(ARRAY)* - Relative world pos
    1. *(ARRAY)* - Relative vector dir
    2. *(ARRAY)* - Relative vector up

#### Returns:
NOTHING

#### Examples:
```sqf
[
    parentObject,
    childObject,
    [[0,0,0],[0,1,0],[0,0,1]]
] call KISKA_fnc_setRelativeVectorAndPos;
```

