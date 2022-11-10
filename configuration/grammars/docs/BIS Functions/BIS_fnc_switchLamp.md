Switch streetlamp on/off.


---
*Syntaxes:*

[object, state] call `BIS_fnc_switchLamp`

---
*Example 1:*

```sqf
// switches all lamps off in a radius of 200m
private _lampsIn200m = nearestObjects [player, ["Lamps_base_F", "PowerLines_base_F", "PowerLines_Small_base_F"], 200];
{ [_x, false] call BIS_fnc_switchLamp; } forEach _lampsIn200m;
```

*Example 2:*

```sqf
// simulates a damaged street light
aLamp spawn {
	params [
		["_lamp", objNull, [objNull]]
	];
	while { player distance _lamp < 200 } do
	{
		[_lamp, selectRandom [true, false]] call BIS_fnc_switchLamp;
		sleep 0.1 + random 0.5;
	};
};
```