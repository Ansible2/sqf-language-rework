<pre>#define POINT_W			(0.03)
#define POINT_H			(POINT_W / 0.75)
#define RESOLUTION		50
#define MAX_POINTS		16
#define GRIDS			10
#define REFRESH			([_ctrlParent] call (_ctrlArea getvariable "fnc_draw"))
#define POINTS			(_ctrlArea getvariable "points")
#define LINES			(_ctrlArea getvariable "lines")
#define CURVE			(_ctrlArea getvariable "curve")
#define BUTTONS			(_ctrlArea getvariable "buttons")
#define HOVER			(_ctrlArea getvariable "hover")
#define SELECTED		(_ctrlArea getvariable "selected")
#define SET_HOVER(CTRL)		_ctrlArea setvariable ["hover",CTRL]; CTRL ctrlsettextcolor COLOR_SELECTED
#define SET_SELECTED(CTRL)	_ctrlArea setvariable ["selected",CTRL]
#define COLOR_BACKGROUND	[0.4,0.4,0.4,1]
#define COLOR			[0,0,0,1]
#define COLOR_SELECTED		[1,1,1,1]
#define COLOR_CURVE		[1,0,0,1]
#define COLOR_LINE		[0,0,0,0.2]
#define COLOR_TIMELINE		[1,1,1,1]
#define COLOR_GRID		[1,1,1,0.3]
#define POINT_POS		[\
					(_posX - POINT_W / 2) max 0 min ((ctrlposition _ctrlArea select 2) - POINT_W),\
					(_posY - POINT_H / 2) max 0 min ((ctrlposition _ctrlArea select 3) - POINT_H),\
					POINT_W,\
					POINT_H\
				]

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_bezierEditor` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_bezierEditor;
``` -->