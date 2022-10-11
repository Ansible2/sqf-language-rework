Converts a position from `PositionATL` to `PositionASL`


---
*Example 1:*
```sqf
ATLToASL (getPosATL player) isEqualTo getPosASL player;
```

*Example 2:*
```sqf
_camPosASL = ATLToASL positionCameraToWorld [0,0,0];
```