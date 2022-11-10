Function to spawn a certain vehicle type with all crew (including turrets). The vehicle can either become part of an existing `group` or create a new `group`.


---
*Syntaxes:*

[position, direction, type, sideOrGroup] call `BIS_fnc_spawnVehicle`

---
*Example 1:*

```sqf
[getPos player, 180, "BMP3", east] call BIS_fnc_spawnVehicle;
```

*Example 2:*

```sqf
private _result = [getPos player, 180, "BMP3", east] call BIS_fnc_spawnVehicle;

private _vehicle = _result select 0;
_result params ["_vehicle", "_crew", "_group"];
```