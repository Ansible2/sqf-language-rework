Gets the vehicle attached to the waypoint.
<br>A vehicle can be attached to a waypoint by
* creating the waypoint on top of the vehicle in the [[2D Editor]]
* using `waypointAttachVehicle`


---
*Syntaxes:*

`waypointAttachedVehicle` waypoint

---
*Example 1:*

```sqf
waypointAttachedVehicle [groupOne, 1];
```

*Example 2:*

```sqf
waypointAttachedVehicle [group player, currentWaypoint group player];
```