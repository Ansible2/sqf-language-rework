Sets the visibility of the given waypoint in 3D HUD view (for map visibility see `showWaypoint`).


---
*Example 1:*
```sqf
[grp, 2] setWaypointVisible false;
```

*Example 2:*
```sqf
[group player, currentWaypoint group player] setWaypointVisible false;
```