Draws a line of a given colour between two 3D positions in the current frame. To be used mostly in a [[Arma 3: Mission Event Handlers#Draw3D|"Draw3D"]] `mission event handler`.


---
*Example 1:*
```sqf
onEachFrame {
	drawLine3D [getPos player, getPos cursorTarget, [1,1,1,1]];
};
```