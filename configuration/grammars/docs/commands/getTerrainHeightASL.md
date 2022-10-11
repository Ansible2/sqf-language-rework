Returns the terrain height above the sea for the given position.


---
*Example 1:*
```sqf
_height = getTerrainHeightASL (getPosATL player);
```

*Example 2:*
```sqf
_height = getTerrainHeightASL [5213,3245];
```

*Example 3:*
```sqf
_seaDepth = abs (getTerrainHeightASL getPosATL player); // sea depth at player's position
```