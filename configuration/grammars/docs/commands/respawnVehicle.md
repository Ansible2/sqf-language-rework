Sets vehicle as respawnable in MP game. The vehicle will be spawned at the locality and coordinates it was prior to destruction.
If respawn type is set to base respawn (type 3) and vehicle respawn marker is provided (respawn_vehicle_XXXSIDEXXX), vehicle will spawn on the marker.


---
*Example 1:*
```sqf
car respawnVehicle [5, 3]; // 'car' will respawn at the predefined marker for the side after 5 seconds. The unit will respawn 3 times.
```

*Example 2:*
```sqf
car respawnVehicle [30]; // 'car' will respawn at the predefined marker for the side after 30 seconds. The unit will respawn an unlimited number of times.
```