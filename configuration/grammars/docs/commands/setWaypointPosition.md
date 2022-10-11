Attempts to move given waypoint to a random position inside a circle with the given center and radius. 
The waypoint will be placed similar to **"NONE"}} attribute in `setVehiclePosition`, even if the radius is 0, which means it could still be off center. In order to force waypoint to the exact position, similar to {{hl|"CAN_COLLIDE"}} attribute, use a negative radius (see {{Link|#Example 2**).


---
*Example 1:*
```sqf
[_grp, 2] setWaypointPosition [position player, 0];
```

*Example 2:*
Exact placement using a negative `radius` and `PositionASL`:

```sqf
_wp setWaypointPosition [getPosASL player, -1];
```