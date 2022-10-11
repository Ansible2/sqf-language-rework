Draws an ellipse on the map. Just like with marker or trigger area, negative `a` and `b` will result in hexagon.


---
*Example 1:*
```sqf
findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw", 
{
	_this select 0 drawEllipse [
		player, 10, 10, 0, [1, 0, 0, 1], ""
	];
	_this select 0 drawEllipse [
		player, -10, -10, 0, [1, 1, 1, 1], "#(rgb,8,8,3)color(1,0.6,0,1)"
	];
	_this select 0 drawEllipse [
		player, -10, -10, 90, [0, 0, 1, 1], ""
	];
}];
```