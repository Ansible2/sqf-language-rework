Returns vehicle crew turrets, which will be filled with crew if `createVehicleCrew` command is executed on the vehicle. If vehicle class is passed as param, all vehicle crew turrets are returned.


---
*Syntaxes:*

vehicle call `BIS_fnc_vehicleCrewTurrets`

---
*Example 1:*

```sqf
"B_APC_Wheeled_01_cannon_F" call BIS_fnc_vehicleCrewTurrets;
```

*Example 2:*

```sqf
car1 call BIS_fnc_vehicleCrewTurrets;
```