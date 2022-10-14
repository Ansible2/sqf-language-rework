Returns the direction unit is looking in render time scope. While for AI the origin for the view direction vector can be taken from **`eyePos` unit}}, for human player the origin should be taken from player camera position {{hl|`positionCameraToWorld` [0,0,0]**


---
*Syntaxes:*

`getCameraViewDirection` unit

---
*Example 1:*

Draw AI eye direction (green), weapon direction (red) and camera direction (blue) in 3D:

```sqf
Bob = createGroup east createUnit ["O_Soldier_F", [0,0,0], [], 0, "NONE"];
Bob setVehiclePosition [player modelToWorld [0,100,0], [], 0, "NONE"];
onEachFrame {
	_beg = ASLToAGL eyePos Bob;
	_endE = (_beg vectorAdd (eyeDirection Bob vectorMultiply 100));
	drawLine3D [ _beg, _endE, [0,1,0,1]];
	_endW = (_beg vectorAdd (Bob weaponDirection currentWeapon Bob vectorMultiply 100));
	drawLine3D [_beg, _endW, [1,0,0,1]];
	_endV = (_beg vectorAdd (getCameraViewDirection Bob vectorMultiply 100));
	drawLine3D [_beg, _endV, [0,0,1,1]];
};
```