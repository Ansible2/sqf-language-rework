Ceases the using of the vehicle by a group and unassigns vehicle from the group.
If the argument is a single unit, the vehicle will be unassigned from unit's group.
After vehicle is unassigned from the group, each individual crew member then unassigned from the vehicle.<br>
<br>
In short the command could be hypothetically presented as:<br>

```sqf
leaveVehicle = un-addVehicle + unassignVehicle forEach crew
```

However, to make it more reliable, it is best to move unit out of the vehicle manually with `moveOut` and force unassign the vehicle with `unassignVehicle`.


---
*Syntaxes:*

group `leaveVehicle` vehicle

---
*Example 1:*

```sqf
_unit leaveVehicle _vehicle;
```

*Example 2:*

```sqf
_grp leaveVehicle _vehicle;
```