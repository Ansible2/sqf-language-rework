Converts position from `PositionAGL` to `PositionASL`.


---
*Syntaxes:*

`AGLToASL` posAGL

---
*Example 1:*

```sqf
_playerPosASL = AGLToASL (player modelToWorld [0,0,0]);
```

*Example 2:*

```sqf
_camPosASL = AGLToASL positionCameraToWorld [0,0,0];
```