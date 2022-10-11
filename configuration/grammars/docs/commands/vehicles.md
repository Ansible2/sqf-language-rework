Returns an array of all vehicles available to current client. This command returns both empty and crewed vehicles <u>but not soldiers</u>. It will also return "WeaponHolderSimulated" of dead bodies (weapon on the ground). Vehicles created with `createVehicleLocal` will only be returned on the client that created them.


---
*Example 1:*
```sqf
_vehicles = vehicles;
```