Lock all cargo positions of a vehicle or lock by index.
This command will remove user "get in" action (not get out) but will also stop player getting into vehicle via script commands (e.g `moveInCargo`) unlike `lock` command.


---
*Example 1:*
```sqf
vehicleName lockCargo true;
```

*Example 2:*
```sqf
vehicleName lockCargo [0, true];
```