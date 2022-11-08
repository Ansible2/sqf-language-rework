#### Description:
Places a number of objects around a given radius to mark an area.

#### Parameters:
0: **_centerPos** *(POSITION_ASL or OBJECT)* - The center of the area to mark

1: **_radius** *(NUMBER)* - The distance from the center to place markers around

2: **_markerCount** *(NUMBER)* - The number of markers to use for the area

3: **_verticalOffset** *(NUMBER)* - Objects will be placed at Z axis of 0, this will offset that position

4: **_markerObjectClass** *(STRING)* - The classname of the object to place to mark the area

#### Returns:
*(ARRAY)* - An array of simple objects created to mark the area

#### Examples:
```sqf
_markers = [
    player
] call KISKA_fnc_markBorder;
```

