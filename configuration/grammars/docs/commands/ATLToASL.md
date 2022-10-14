Converts a position from `PositionATL` to `PositionASL`


---
*Syntaxes:*

`ATLToASL` pos

---
*Example 1:*

```sqf
ATLToASL (getPosATL player) isEqualTo getPosASL player;
```

*Example 2:*

```sqf
_camPosASL = ATLToASL positionCameraToWorld [0,0,0];
```