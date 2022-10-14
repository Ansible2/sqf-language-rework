Returns the camera `Object` used by the `Eden Editor`.


---
*Syntaxes:*

[[get3DENCamera]]

---
*Example 1:*

```sqf
// set exact yaw, pitch, and roll
_y = 45; _p = -80; _r = 0;
get3DENCamera setVectorDirAndUp [
	[ sin _y * cos _p,cos _y * cos _p,sin _p],
	[ [sin _r,-sin _p,cos _r * cos _p],-_y] call BIS_fnc_rotateVector2D
];
```

*Example 2:*

```sqf
//Look at player
_a = positionCameraToWorld [0,0,0] vectorFromTo (getPosATL player);
_y = asin(_a select 0);
_b = [_a,_y] call BIS_fnc_rotateVector2D;
_z = _b select 2;
_p = asin(_z / sqrt((_b select 1)^2 + _z^2));
get3DENCamera setVectorDirAndUp [
	_a,
	[ [0,-sin _p,cos _p],-_y] call BIS_fnc_rotateVector2D
];
```