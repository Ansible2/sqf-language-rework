`thumb`Interpolates and applies `PositionASL`, `velocity`, `vectorDir` and `vectorUp` to the given object based on the interval value.<br>
When interval is 0 the "fromXXX" values are used for the beginning of the interpolation. When interval is 1, the "toXXX" values are used for the end of interpolation. When interval value is in between, interpolated values are used (see diagram below). The interpolation is linear and along straight line between "from" and "to" positions. If curve is needed, then it should be constructed from multiple straight sections or by dynamically changing value of position params during the interpolation cycle, similar to [Quadratic Curve animation](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Quadratic_curves) (see Example 3).
<br>
The `velocity` param doesn't do much in SP, but in MP, provided the velocity component is set correctly, it helps the engine to figure out what the next position of the moving object should be on other clients.<br><br>
The actual approximate interpolation formula for this command is:

```sqf
_vecCurrent = _vecFrom vectorAdd (_vecTo vectorDiff _vecFrom vectorMultiply _interval);
```


---
*Syntaxes:*

object `setVelocityTransformation` [fromPosASL, toPosASL, fromVelocity, toVelocity, fromVectorDir, toVectorDir, fromVectorUp, toVectorUp, interval, customCenter]

---
*Example 1:*

```sqf
_tracker setVelocityTransformation 
[
	_currentPos,
	_nextPos,
	_currentVelocity,
	_nextVelocity,
	_currentVectorDir,
	_nextVectorDir,
	_currentVectorUp,
	_nextVectorUp,
	_interval
];
```

*Example 2:*

Bob on imaginary stairway to heaven:

```sqf
bob = createAgent ["C_man_1", player getRelPos [5, 0], [], 0, "CAN_COLLIDE"];
bob switchMove "ladderCivilUpLoop";
pos1 = getPosASL bob;
pos2 = pos1 vectorAdd [0,0,0.75];
bob addEventHandler ["AnimDone", 
{
	pos1 = pos2;
	pos2 = pos2 vectorAdd [0,0,0.75]
}];
onEachFrame
{
	if (!alive bob) then 
	{
		onEachFrame {};
		bob switchMove "";
		bob removeAllEventHandlers "AnimDone";
	};
	bob setVelocityTransformation [
		pos1, 
		pos2, 
		[0,0,0], 
		[0,0,0], 
		[0,1,0], 
		[0,1,0], 
		[0,0,1], 
		[0,0,1],
		moveTime bob
	];
};
```

*Example 3:*

Advanced trickery with curved movement. The curve is controlled with one control point (controlPointASL), just like quadratic Bézier curve:

```sqf
disableSerialization;
player setDir 0;
interval = 0;
_disp = findDisplay 46 createDisplay "RscDisplayEmpty";
_ctrl = _disp ctrlCreate ["RscSlider", -1];
_ctrl ctrlSetPosition [safeZoneX + 0.1, 1, safeZoneW - 0.2, 0.1];
_ctrl ctrlSetActiveColor [1,0,0,1];
_ctrl ctrlCommit 0;
_ctrl sliderSetPosition 0;
_ctrl sliderSetRange [0,1];
_ctrl sliderSetSpeed [0.1,0.5];
_ctrl ctrlAddEventHandler ["SliderPosChanged", {interval = _this select 1}];
ctrlSetFocus _ctrl;
box = "Land_VR_Shape_01_cube_1m_F" createVehicle [0,0,0];
controlPointASL = AGLToASL (player getRelPos [70, -30]) vectorAdd [0, 0, 30];
fromPosASL = AGLToASL (player getRelPos [10, -45]);
toPosASL = AGLToASL (player getRelPos [10, 45]);
fromControlPointOffset = controlPointASL vectorDiff fromPosASL;
toControlPointOffset = toPosASL vectorDiff controlPointASL;
onEachFrame
{
	hintSilent format ["Interval: %1", interval];
	box setVelocityTransformation
	[
		fromPosASL vectorAdd (fromControlPointOffset vectorMultiply interval),
		controlPointASL vectorAdd (toControlPointOffset vectorMultiply interval),
		[0,0,0],
		[0,0,0],
		[0,1,0],
		[1,0,0],
		[0,0,1],
		[0,1,0],
		interval
	];
};
```