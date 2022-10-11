Finds named selections in object which are in specified LOD, intersected by given section of a line. Return value is in the form of [selection, distance]. Multiple returned arrays are nested within a single array. No intersection returns []. `lodName` could be one of the following: 
* "FIRE"
* "VIEW"
* "GEOM"
* "IFIRE" - ("I" stands for Indirect, almost the same as FIRE)
* {{GVI|arma3|2.02


---
*Example 1:*
```sqf
[_tank, "VIEW"] intersect [[1500, 1500, 2], [1550, 1500, 2]];
```

*Example 2:*
```sqf
sphere = "Sign_Sphere10cm_F" createVehicle [0,0,0];
onEachFrame {
	_begPos = positionCameraToWorld [0,0,0];
	_begPosASL = AGLToASL _begPos;
	_endPos = positionCameraToWorld [0,0,1000];
	_endPosASL = AGLToASL _endPos;
	_ins = lineIntersectsSurfaces [_begPosASL, _endPosASL, player, objNull, true, 1, "FIRE", "NONE"];
	if (_ins isEqualTo []) exitWith {sphere setPosASL [0,0,0]};
	_ins select 0 params ["_pos", "_norm", "_obj", "_parent"];
	if !(getModelInfo _parent select 2) exitWith {sphere setPosASL [0,0,0]};
	_ins2 = [_parent, "FIRE"] intersect [_begPos, _endPos];
	if (_ins2 isEqualTo []) exitWith {sphere setPosASL [0,0,0]};
	_ins2 select 0 params ["_name", "_dist"];
	_posASL = _begPosASL vectorAdd ((_begPosASL vectorFromTo _endPosASL) vectorMultiply _dist);
	drawIcon3D ["", [1,1,1,1], ASLToAGL _posASL, 0, 0, 0, _name, 1, 0.03, "PuristaMedium"];
	sphere setPosASL _posASL;
};
```