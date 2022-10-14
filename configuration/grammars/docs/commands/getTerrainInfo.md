Returns the terrain heightmap information, as well as sea level offset (due to tides, if available).


---
*Syntaxes:*

`getTerrainInfo`

---
*Example 1:*

```sqf
private _terrainInfo = getTerrainInfo; // Stratis: [32,256,4,2048,0]; Altis: [30,1024,7.5,4096,0] 
```

*Example 2:*

```sqf
 // Draws a 20x20 terrain grid when clicking on the map
// Each triangle of the terrain is formed by a diagonal that starts from the top-left corner of the cell and ends and the bottom-right corner.
// The green lines show the cell diagonals 
onMapSingleClick {
	getTerrainInfo params ["", "", "_cellsize", "_resolution"];
	gridLines = [];
	_pos apply {floor (_x / _cellsize)} params ["_x0", "_y0"];
	for "_x" from ((_x0 - 10) max 0) to ((_x0 + 10) min _resolution) do {
		for "_y" from ((_y0 - 10) max 0) to ((_y0 + 10) min _resolution) do {
			private _p1 = [_x, _y] vectorMultiply _cellsize;	  //bottom-left corner
			private _p2 = [_x, _y + 1] vectorMultiply _cellsize;  //top-left corner
			private _p3 = [_x + 1, _y] vectorMultiply _cellsize;  //bottom-right corner
			// Positions are AGL, and Z value of 0 is already at the terrain surface (except on water surface). 
			// Just move them up a few centimeters so they're visible.
			_p1 set [2, 0.1];
			_p2 set [2, 0.1];
			_p3 set [2, 0.1];
			
			gridLines pushBack [_p1, _p2, [1,0,0,1]];
			gridLines pushBack [_p1, _p3, [1,0,0,1]];
			gridLines pushBack [_p2, _p3, [0,1,0,1]];
		};
	
	};
	
	onEachFrame {
	
		{
			drawLine3d _x;
		} forEach gridLines;
	
	}
};
```