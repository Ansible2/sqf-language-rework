Draws given polygon on the given map control with given color. The polygon must consist of at least 3 points. Unlike with other **draw*** commands and due to complexity, this command does not support filling of the polygon with color. Use `drawTriangle` command to construct and fill polygon shape as a workaround.


---
*Example 1:*
```sqf
test_polygon = [];
for "_i" from 1 to 12 do 
{
	test_polygon pushBack (player getPos [10 + random 100, 360 / _i]);
};

findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw", 
{
	params ["_control"];
	_control drawPolygon [test_polygon, [0,0,1,1]];
}];
```

*Example 2:*
Draw a polygon by adjusting the **_radius}} and {{hl|_numVertices**

```sqf
vertices = [];
private _numVertices = 2;
private _numVertices = _numVertices max 3;
private _radius = 100;

for "_i" from 1 to _numVertices do
{
	vertices pushBack (player getRelPos [_radius, 360 / _numVertices * _i]);
};

findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw",
{
	params ["_control"];
	_control drawPolygon [vertices, [0,0,1,1]];
}];
```