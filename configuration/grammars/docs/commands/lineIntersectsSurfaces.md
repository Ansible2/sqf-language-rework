Returns a list of intersections with surfaces and ground from `begPosASL` to `endPosASL`. Doesn't return intersection with sea surface. Works underwater, unlike `lineIntersects`. Hardcoded max distance: 5000m.
{{Feature|important|
* if `begPosASL` is under the ground and `endPosASL` is above it, the command will only return intersection with the ground, this is an engine limitation and none of the intersectXXX commands will work when initiated from under the ground.
* only a single LOD is checked for intersection. LOD2 will only be checked if LOD1 is unavailable.


---
*Example 1:*
```sqf
_intersections = lineIntersectsSurfaces [eyePos player, aimPos chopper, player, chopper, true, -1];
```

*Example 2:*
```sqf
arrow = "Sign_Arrow_F" createVehicle [0,0,0];
onEachFrame {
	_ins = lineIntersectsSurfaces [
		AGLToASL positionCameraToWorld [0,0,0], 
		AGLToASL positionCameraToWorld [0,0,1000], 
		player
	];
	if (count _ins == 0) exitWith { arrow setPosASL [0,0,0] };
	arrow setPosASL (_ins select 0 select 0);
	arrow setVectorUp (_ins select 0 select 1);
	hintSilent str _ins;
};
```

*Example 3:*
This should detect glass windows and wire fences (since <See arm Reference 3> v1.52):

```sqf
wirefence = "Land_New_WiredFence_5m_F" createVehicle position player;
arrow = "Sign_Arrow_F" createVehicle [0,0,0];
onEachFrame {
	_ins = lineIntersectsSurfaces [
		AGLToASL positionCameraToWorld [0,0,0], 
		AGLToASL positionCameraToWorld [0,0,1000], 
		player,
		objNull,
		true,
		1,
		"GEOM",
		"NONE"
	];
	if (count _ins == 0) exitWith { arrow setPosASL [0,0,0] };
	arrow setPosASL (_ins select 0 select 0);
	arrow setVectorUp (_ins select 0 select 1);
	hintSilent str _ins;
};
```