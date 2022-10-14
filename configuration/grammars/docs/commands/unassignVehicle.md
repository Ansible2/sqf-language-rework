Unassigns individual unit from a vehicle, usually previously assigned with `assignAsXXX` command, i.e removes `assignedVehicleRole` of the unit.
If the unit is currently in that vehicle, the group leader will issue an order to disembark.


---
*Syntaxes:*

`unassignVehicle` unitName

---
*Example 1:*

```sqf
unassignVehicle player;
```

*Example 2:*

```sqf
{ unassignVehicle _x } forEach crew _vehiclenNme;
``` Will make all the occupants of a vehicle disembark

*Example 3:*

```sqf
{ unassignVehicle _x } forEach crew _vehicleName; crew _vehiclename allowGetIn false;
``` Will make all the occupants of a vehicle disembark and stop them from getting back in