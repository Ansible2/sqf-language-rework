Transforms position from camera coordinate space to world coordinate space. 

Camera axes are relative to camera orientation. x axis goes from left of the camera to right of the camera, z axis goes from underneath the camera to above the camera and y axis goes from back of the camera to where the camera is looking.


---
*Syntaxes:*

`positionCameraToWorld` cameraPos

---
*Example 1:*

```sqf
_worldPos = positionCameraToWorld _cameraPos;
```

*Example 2:*

Example demonstrating reversed y and z:

```sqf
player setDir 0; // assuming player is looking forward
hint str [positionCameraToWorld [0,0,0], positionCameraToWorld [0,0,1]];
/*
[
	[2481.35, 5671.21, 1.51395],
	[2481.35, 5672.21, 1.46955]
]
*/
```