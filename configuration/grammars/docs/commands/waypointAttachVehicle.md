Attaches the `Waypoint` to the provided vehicle `Object`.


---
*Syntaxes:*

waypoint `waypointAttachVehicle` vehicleName

---
*Example 1:*

```sqf
[_grp, 2] waypointAttachVehicle vehicle player;
```

*Example 2:*

```sqf
((waypoints player) select 0) waypointAttachVehicle _soldier1;
```