Export vehicle settings


---
*Syntaxes:*

[vehicle,vehicleClass] call `BIS_fnc_exportVehicle`

---
*Example 1:*

```sqf
[BIS_tank,""] call BIS_fnc_exportVehicle;

//Returns 
"[
  _this,
  [""Hex"",1], 
  [""showCamonetHull"",1,""showCamonetTurret"",1]
] call BIS_fnc_initVehicle;"
```

*Example 2:*

```sqf
[BIS_tank] call BIS_fnc_exportVehicle;

//Returns 
"_veh = createVehicle [""O_MBT_04_cannon_F"",position player,[],0,""NONE""];
[
  _veh,
  [""Hex"",1], 
  [""showCamonetHull"",1,""showCamonetTurret"",1]
] call BIS_fnc_initVehicle;"
```