Refresh a camera Field of View according to its distance with the target.


---
*Syntaxes:*

[camera, target, refreshTime] call `BIS_fnc_camFollow`

---
*Example 1:*

```sqf
private _camera = "camera" camCreate ((getPos player) vectorAdd [0,0,3]);
[_camera, player, -2] call BIS_fnc_camFollow;
```