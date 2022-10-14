Returns road piece information.


---
*Syntaxes:*

`getRoadInfo` road

---
*Example 1:*

```sqf
private _info = getRoadInfo _road;
_info params ["_mapType", "_width", "_isPedestrian", "_texture", "_textureEnd", "_material", "_begPos", "_endPos", "_isBridge"];
private _roadDirection = _begPos getDir _endPos;
```