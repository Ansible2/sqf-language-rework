<pre>#define DEBUG
#define ALPHA_ON	1.0
#define ALPHA_OFF	0.4
#define DRAW(SHOW)\
	_color = `1,0,0,1],[0,1,0,1],[0,0,1,1],[1,1,0,1],[1,0,1,1],[0,1,1,1],[1,0.5,0,1` select ((_logic getvariable ["#index",0]) % 7);\
	if !(SHOW) then {_color set [3,0.4];};\
	_drawIcon = ["\a3\Ui_f\data\Map\LocationTypes\borderCrossing_CA.paa",_color,position _logic,0.75,0.75,0,_class,2,0.04,"RobotoCondensed","right"];\
	["bin_diagSites",_class,"icon",[_drawIcon]] call BIN_fnc_debugDraw;\
	_isRectangle = false;\
	_drawArea = if (SHOW) then {\
		_areaOut = _logic getvariable ["areaOut",[position _logic,0,0,0,false]];\
		_isRectangle = _areaOut select 4;\
		[_areaOut select 0,_areaOut select 1,_areaOut select 2,_areaOut select 3,_color,""]\
	} else {\
		_areaIn = _logic getvariable ["areaIn",[position _logic,0,0,0,false]];\
		_isRectangle = _areaIn select 4;\
		[_areaIn select 0,_areaIn select 1,_areaIn select 2,_areaIn select 3,_color,""]\
	};\
	["bin_diagSites",_class,if (_isRectangle) then {"rectangle"} else {"ellipse"},[_drawArea]] call BIN_fnc_debugDraw;

#define VAR_IGNORE	"$i"
#define VAR_KILL	"$k"
#define VAR_VISITED	"$v"
#define VAR_SPAWNED	"#spawned"</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_setSite` -->

---
