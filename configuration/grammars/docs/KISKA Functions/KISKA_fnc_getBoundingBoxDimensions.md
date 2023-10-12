#### Description:
Returns the length, width, and height of a given object's bounding box, for a given clipping type.

#### Parameters:
0: **_object** *(OBJECT)* - The object to get the dimensions of

1: **_boxType** *(NUMBER or STRING)* - The `boundingBoxReal` command's clipping type orthe LOD name/resolution if `_isLOD` is true.

2: **_isLOD** *(BOOL)* - Whether or not to use the LOD syntax of `boundingBoxReal`

#### Returns:
*(NUMBER[])* - `[Length,Width,Height]` of the given object's dimensions

#### Examples:
```sqf
private _playerBoxDimensions = [player] call KISKA_fnc_getBoundingBoxDimensions;
```

