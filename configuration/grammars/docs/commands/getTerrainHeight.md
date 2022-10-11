Returns terrain height at the specified location.
{{Feature|informative|Unlike `getTerrainHeightASL` which returns the exact position's height, this command returns the height at the closest terrain grid pixel to the provided position:
<sqf>
private _cellWidth = getTerrainInfo # 2;
getTerrainHeightASL (_pos apply { _cellWidth * round (_x / _cellWidth) });
</sqf>


---
*Example 1:*
```sqf
private _gridCellHeight = getTerrainHeight getPosWorld player;
```