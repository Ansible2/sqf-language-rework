`Image:transformVectorUpAndDir.jpg|300px|right`
Rotates both `vectorDir` and `vectorUp` on 3 axes: z (yaw), x (pitch) and y (roll). Positive angle direction is according to the [right hand rule](https://en.wikipedia.org/wiki/Right-hand_rule).


---
*Syntaxes:*

[vectorDirAndUp, yaw, pitch, roll] call `BIS_fnc_transformVectorDirAndUp`

---
*Example 1:*

```sqf
private _vDirUp = [[vectorDirVisual uav, vectorUpVisual uav], 0, 0, 90] call BIS_fnc_transformVectorDirAndUp;
```

*Example 2:*

Create UAV object and make it pitch with mouse up/down and roll with mouse left/right:

```sqf
uav = "B_UAV_05_F" createVehicle [0,0,0];
uav attachTo [player, [0,30,10]];
findDisplay 46 displayAddEventHandler ["MouseMoving", 
{
	uav setVectorDirAndUp
	(
		[
			[vectorDirVisual uav, vectorUpVisual uav],
			getDirVisual uav,
			_this select 2,
			_this select 1
		]
		call BIS_fnc_transformVectorDirAndUp
	);
}];
```