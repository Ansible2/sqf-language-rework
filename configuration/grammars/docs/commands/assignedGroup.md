Returns `Group` to which the given vehicle was added last with `addVehicle`. To update `assignedGroup` to the current group, run `addVehicle` to the current group again.


---
*Example 1:*
```sqf
_group = assignedGroup vehicle player;
```