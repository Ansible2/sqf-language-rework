#### Description:
Returns a relative position but that the position is at the 0 position for the surface beneath (being either water or the terrain) in an ATL format. This means the z will always be 0 or the height of the sea above the terrain level at the given _centerPosition.

#### Parameters:
0: **_centerPosition** *(OBJECT or Position)* - The center position to find arelative position to. If a 2d position, height will be 0.

1: **_distance** *(NUMBER)* - The distance away from the _centerPosition to get the position

2: **_bearing** *(NUMBER)* - The direction relative to the position to find the new position

3: **_zOffSet** *(NUMBER)* - An offset to add to the Z-axis AFTER the surface position is found

#### Returns:
PositionATL[] - the new position

#### Examples:
```sqf
[
    player,
    100,
    180
] call KISKA_fnc_getPosRelativeSurface;
```
```sqf
[
    player,
    100,
    180,
    10 // 10 meters above water surface or terrain
] call KISKA_fnc_getPosRelativeSurface;
```

