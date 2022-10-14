Creates vehicle crew corresponding to the provided vehicle's `faction`. If the vehicle is already occupied, the command will only create missing crew in the existing vehicle's group.<br>
To find out which crew will be created, use `BIS_fnc_vehicleCrewTurrets`.
  
{{Feature|informative|This command:
* {{GVI|arma3|1.26


---
*Syntaxes:*

`createVehicleCrew` vehicle

---
*Example 1:*

```sqf
_veh = createVehicle ["B_MRAP_01_F", getMarkerPos "createVeh", [], 0, "NONE"];
createVehicleCrew _veh;
```

*Example 2:*

```sqf
_veh = createVehicle ["O_MRAP_02_hmg_F", position player, [], 0, "NONE"];
createVehicleCrew _veh;
{
	diag_log [_x, faction _x, side _x, side group _x];
} forEach crew _veh;

// [O Alpha 1-1:1,"OPF_F",EAST,EAST]
// [O Alpha 1-1:2,"OPF_F",EAST,EAST]
```