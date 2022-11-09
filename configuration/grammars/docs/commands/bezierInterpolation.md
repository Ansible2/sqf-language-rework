Gets interpolated value based on *(Reference Wikipedia "Bézier_curve|Bézier curve")* with given control points (progress value is 0...1 for a curve that starts at pos0 and finishes at posN) <br>
[[Image:bezierInterpolation2.jpg|400px]]


---
*Syntaxes:*

progress `bezierInterpolation` positions

---
*Example 1:*

Quick demonstration that spawns some spheres around player object:

```sqf
for "_i" from 0 to 1 step 0.05 do {
	createVehicle ["Sign_Sphere10cm_F", (_i bezierInterpolation [
		player modelToWorld [0,0,0],
		player modelToWorld [0,2,2],
		player modelToWorld [2,0,2],
		player modelToWorld [0,0,4]
	]), [], 0, "CAN_COLLIDE"];
};
```

*Example 2:*

Create a map marker curve from 4 control points with overlap (progress is -0.5...1.5 instead of 0...1):

```sqf
private _controlPoints = [[100,-90], [200,-30], [150,60], [100,90]] apply { player getRelPos _x };
{
	private _marker = createMarkerLocal [str _x, _x];
	_marker setMarkerTypeLocal "mil_objective";
	_marker setMarkerTextLocal ("P" + str _forEachIndex);
}
forEach _controlPoints;

for "_i" from -0.5 to 1.5 step 0.01 do
{
	private _marker = createMarkerLocal [str _i, _i bezierInterpolation _controlPoints];
	_marker setMarkerTypeLocal "mil_dot";
};
openMap true;
```