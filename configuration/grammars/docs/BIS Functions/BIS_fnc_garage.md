Splendid&trade; Virtual Arsenal Garage.


---
*Syntaxes:*

[mode, params] call `BIS_fnc_garage`

---
*Example 1:*

```sqf
[] call BIS_fnc_garage;
```

*Example 2:*

```sqf
player addAction ["Open Garage", {

 	// create a position 30 meters infront of the player
	_pos = player getPos [30,getDir player];

	// create empty helipad at the position and save it in the global variable BIS_fnc_garage_center
	BIS_fnc_garage_center = createVehicle ["Land_HelipadEmpty_F", _pos, [], 0, "CAN_COLLIDE"];

	["Open", true] call BIS_fnc_garage;
}];
```

*Example 3:*

```sqf
player addAction ["Open Garage", {

 	// create a position 30 meters infront of the player
	_pos = player getPos [30, getDir player];

	// create empty helipad at the position
	_vehicle = createVehicle [ "Land_HelipadEmpty_F", _pos, [], 0, "CAN_COLLIDE"];

	// pass created vehicle to function for use as position
	["Open", [true, _vehicle]] call BIS_fnc_garage;
}];
```