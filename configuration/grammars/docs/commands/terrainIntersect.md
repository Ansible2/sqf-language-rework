Checks for intersection of terrain between two AGL positions. Returns `true` if intersects with terrain. For ASL variant see `terrainIntersectASL`.


---
*Syntaxes:*

`terrainIntersect` [start, end]

---
*Example 1:*

```sqf
_intersects = terrainIntersect [getPos player, getPos chopper];
```

*Example 2:*

```sqf
_intersects = terrainIntersect [position player, position enemy1];
```