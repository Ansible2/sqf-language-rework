Defines an action performed when player moves pointer over group marker (3D or in a map). The code will execute continuously while pointer is over icon.


---
*Example 1:*
```sqf
onGroupIconOverEnter
{
	// passed values for _this are:
	params ["_is3D", "_group", "_wpID", "_posX", "_posY", "_shift", "_ctrl", "_alt"];

	// passed values for _this are:
	_is3D = _this select 0;
	_group = _this select 1;
	_wpID = _this select 2;
	_posx = _this select 3;
	_posy = _this select 4;
	_shift = _this select 5;
	_ctrl = _this select 6;
	_alt = _this select 7;

	_message = format ["____ Info ____"];
	{_message = _message + format ["\n %1",_x]} forEach _this;
	hint _message;
}
```