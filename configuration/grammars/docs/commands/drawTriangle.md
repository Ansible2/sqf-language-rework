[[Image:drawTriangle.jpg|right|250px]]
Draws one to multiple triangles on the map.


---
*Syntaxes:*

map `drawTriangle` [vertices, color, fill]

---
*Example 1:*

```sqf
findDisplay 12 displayCtrl 51 ctrlAddEventHandler ["Draw", 
{
	_this select 0 drawTriangle 
	[
		[
			// triangle 1 start
			player getRelPos [100, 0],
			player getRelPos [100, -135],
			player getRelPos [100, 135]
			// triangle 1 end
		],
		[1,0,0,0.5],
		"#(rgb,1,1,1)color(1,1,1,1)"		
	];
}];
```