A getter for `setTerrainGrid`, returns the current terrain grid.


---
*Example 1:*
```sqf
_terrainGrid = getTerrainGrid;
```

*Example 2:*
```sqf
if (getTerrainGrid < 50) then
{
   hint "Grass is enabled";
};
```