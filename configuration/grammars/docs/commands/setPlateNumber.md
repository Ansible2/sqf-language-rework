Change the license plates on any vehicle which has plates configured. Max 15 characters are allowed!


---
*Example 1:*
```sqf
    vehicle player setPlateNumber "K2000";
```

*Example 2:*
Reset plate to the world's randomized template:

```sqf
private _return = "";
private _cfg = (configFile >> "CfgWorlds" >> worldName);

{
	_return = _return + (call {
		if (_x == "$") exitWith {
			selectRandom (getText (_cfg >> "plateLetters") splitString "")
		};
		if (_x == "#") exitWith {
			selectRandom ["0","1","2","3","4","5","6","7","8","9"]
		};
		_x
	});
} forEach (getText (_cfg >> "plateFormat") splitString "");

_car setPlateNumber _return;
```