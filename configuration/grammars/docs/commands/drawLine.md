Draw a line on the map. Can decrease framerate!


---
*Example 1:*
```sqf
(findDisplay 12 displayCtrl 51) ctrlAddEventHandler ["Draw","
	(_this select 0) drawLine [
		getPos player,
		[0,0,0],
		[0,0,1,1]
	];
"];
```