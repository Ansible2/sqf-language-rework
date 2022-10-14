Checks for intersection of terrain between two ASL positions. Returns `true` if intersects with terrain.
For AGL variant, see `terrainIntersect`.


---
*Syntaxes:*

`terrainIntersectASL` [start, end]

---
*Example 1:*

```sqf
_intersects = terrainIntersectASL [getPosASL player, getPosASL chopper];
```

*Example 2:*

```sqf
_intersects = terrainIntersectASL [eyePos player, eyePos enemy1];
```