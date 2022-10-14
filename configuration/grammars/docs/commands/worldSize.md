Returns the engine calculated size (terrain side length) of the current world (`BIS_fnc_mapSize` may return the same value, but is just a simple look up in ` config`).


---
*Syntaxes:*

`worldSize`

---
*Example 1:*

```sqf
private _size = worldSize;
```

*Example 2:*

```sqf
// A round marker that should cover the whole map, placed in the center of the map, should have the following radius (a, b)
private _radius = sqrt 2 / 2 * worldSize;
```

*Example 3:*

```sqf
private _axis = worldSize / 2;
private _center = [_axis, _axis , 0];
private _radius = sqrt 2 * _axis;
```