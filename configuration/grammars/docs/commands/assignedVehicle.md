Returns the vehicle to which a unit is assigned, usually with `assignAsXXX` command. If no vehicle is assigned `objNull` is returned.


---
*Syntaxes:*

`assignedVehicle` unit

---
*Example 1:*

```sqf
_vehicle = assignedVehicle player;
```

*Example 2:*

```sqf
_units apply { _x leaveVehicle (assignedVehicle _x) };
```