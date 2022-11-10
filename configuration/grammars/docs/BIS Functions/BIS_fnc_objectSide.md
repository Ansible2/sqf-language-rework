Returns object side as defined in config (i.e. not affected by dynamic changing like rating)


---
*Syntaxes:*

[target, boolean] call `BIS_fnc_objectSide`

target call `BIS_fnc_objectSide`

---
*Example 1:*

```sqf
private _realVehicleSide = [vehicle player, true] call BIS_fnc_objectSide;
```

*Example 2:*

```sqf
private _unknownSide = [objNull, false] call BIS_fnc_objectSide; // will return sideUnknown
private _eastSide    = [objNull, true]  call BIS_fnc_objectSide; // will return east
```

*Example 3:*

```sqf
// same results
_result1 = myVehicle call BIS_fnc_objectSide;
_result2 = [myVehicle] call BIS_fnc_objectSide;
_result3 = [myVehicle, false] call BIS_fnc_objectSide;
```