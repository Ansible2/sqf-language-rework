Returns road piece information.
. They are part of Road Net but excluded from path finding. Use `roadsConnectedTo` with alternative flag to find the connections between pedestrian roads.


---
*Example 1:*
```sqf
private _info = getRoadInfo _road;
_info params ["_mapType", "_width", "_isPedestrian", "_texture", "_textureEnd", "_material", "_begPos", "_endPos", "_isBridge"];
private _roadDirection = _begPos getDir _endPos;
```