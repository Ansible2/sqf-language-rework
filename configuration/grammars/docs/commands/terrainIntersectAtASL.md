Checks for intersection of terrain between two ASL positions. Same as `terrainIntersectASL` but returns the intersection ASL position.


---
*Syntaxes:*

`terrainIntersectAtASL` [start, end]

---
*Example 1:*

```sqf
_posASL = terrainIntersectAtASL [eyePos player, getPosASL chopper];
```