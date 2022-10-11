Returns the map grid position of an object or position.<br>
The format is determined by the Grid format specified in the CfgWorlds for the current world. Eg: "024577" or "De82" or similar.


---
*Example 1:*
```sqf
_gridPos = mapGridPosition player;
```

*Example 2:*
```sqf
_gridPos = mapGridPosition getPos player;
```