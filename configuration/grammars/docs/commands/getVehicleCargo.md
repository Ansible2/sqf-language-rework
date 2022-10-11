Get a list of vehicles loaded as cargo inside this vehicle. The returned array is in the order the cargo vehicles were added to containing vehicle.


---
*Example 1:*
```sqf
_vehicleCargo = getVehicleCargo blackfish; // returns [] if empty
```

*Example 2:*
```sqf
_vehicleCargo = getVehicleCargo blackfish; // returns [quad_3, quad_1, quad_2] as they were loaded in this order
```