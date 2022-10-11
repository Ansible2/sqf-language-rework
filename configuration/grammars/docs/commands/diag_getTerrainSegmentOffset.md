Returns the terrain segment. It is basically the same as:
<sqf>
_worldPos params ["_x", "_y"];
[floor (_x / diag_getTerrainGrid), floor (_y / diag_getTerrainGrid)];
</sqf>


---
*Example 1:*
```sqf
private _segmentOffset = diag_getTerrainSegmentOffset getPosWorld player;
```