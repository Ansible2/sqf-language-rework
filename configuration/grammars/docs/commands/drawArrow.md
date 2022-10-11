Draws a single line arrow on the map. To draw a color filled arrow of custom shape see `BIS_fnc_drawArrow`


---
*Example 1:*
```sqf
findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw", 
{
	_this select 0 drawArrow [
		player, player getRelPos [100, 0], [1,0,0,1]
	];
}];
```