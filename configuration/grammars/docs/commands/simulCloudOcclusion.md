Returns clouds occlusion between two given points.


---
*Syntaxes:*

`simulCloudOcclusion` [pos1, pos2]

---
*Example 1:*

```sqf
private _posPlayer = getPos player;
private _posAbovePlayer = +_posPlayer; _posAbovePlayer set [2,200];
simulCloudOcclusion [_posPlayer, _posAbovePlayer];
```