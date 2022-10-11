Defines an action performed when player clicked on group marker (3D or in a map). The code executed once.
This EH, unlike `onGroupIconOverEnter` and `onGroupIconOverLeave`, has one more param which returns 1 if RMB was pressed, 0 otherwise.


---
*Example 1:*
```sqf
onGroupIconClick
{
	// passed values for _this are:
	params ["_is3D", "_group", "_wpID", "_posX", "_posY", "_shift", "_ctrl", "_alt"];

	// before Arma 3
	_is3D = _this select 0;
	_group = _this select 1;
	_wpID = _this select 2;
	_RMB = _this select 3;
	_posx = _this select 4;
	_posy = _this select 5;
	_shift = _this select 6;
	_ctrl = _this select 7;
	_alt = _this select 8;

	_message = format ["____ Info ____"];
	{_message = _message + format ["\n %1", _x]} forEach _this;
	hint _message;
};
```