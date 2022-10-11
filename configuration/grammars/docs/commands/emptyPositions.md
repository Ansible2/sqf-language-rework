Returns the number of given empty positions in the vehicle.


---
*Example 1:*
```sqf
_freeCargoAndFFVPositions = vehicle player emptyPositions "Cargo";
```

*Example 2:*
```sqf
_freeCargoOnlyPositions = vehicle player emptyPositions "CargoNoFFV";
```