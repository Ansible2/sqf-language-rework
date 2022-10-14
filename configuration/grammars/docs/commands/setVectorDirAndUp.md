Sets orientation of an object.
The command takes 2 vector arrays, one for `vectorDir` and one for `vectorUp`.
Default object orientation will always have `vectorDir` pointing forward (North) along Y axis and `vectorUp` pointing up along Z axis - [[0,1,0],[0,0,1]], as shown on the diagram below (see also `BIS_fnc_transformVectorDirAndUp`).<br>

When attaching object to an object the axes are relative to the object that gets the attachment.
If it is player object for example, then X goes from left to right, Y goes from back to front, and Z goes from down up.<br>

The `setDir` command is incompatible with `setVectorDirAndUp` and should not be used together on the same object.
Using `setVectorDirAndUp` alone should be sufficient for any orientation.


---
*Syntaxes:*

vehicle `setVectorDirAndUp` [vectorDir, vectorUp]

---
*Example 1:*

```sqf
// set exact yaw, pitch, and roll
_y = 45; _p = -80; _r = 0;
BRICK setVectorDirAndUp [
	[sin _y * cos _p, cos _y * cos _p, sin _p],
	[[sin _r, -sin _p, cos _r * cos _p], -_y] call BIS_fnc_rotateVector2D
];
```

*Example 2:*

To rotate BRICK on Z axis 90 degrees clockwise, change its `vectorDir` but leave `vectorUp` unchanged.

```sqf
BRICK setVectorDirAndUp [[1,0,0], [0,0,1]];
```

*Example 3:*

To rotate BRICK on Y axis 90 degrees clockwise, change its `vectorUp` but leave `vectorDir` unchanged.

```sqf
BRICK setVectorDirAndUp [[0,1,0], [1,0,0]];
```

*Example 4:*

To rotate BRICK on X axis 90 degrees (tilt forward), change both `vectorDir` and `vectorUp` accordingly.

```sqf
BRICK setVectorDirAndUp [[0,0,-1], [0,1,0]];
```

*Example 5:*

More complex orientations

```sqf
// tilt forward 90 + rotate left 90
BRICK setVectorDirAndUp [[1,0,0], [0,1,0]];
// tilt backward 45 degrees
BRICK setVectorDirAndUp [[0,0.5,0.5], [0,-0.5,0.5]];
// tilt forward 30 degrees
BRICK setVectorDirAndUp [[0,0.66,-0.33], [0,0.33,0.66]];
```