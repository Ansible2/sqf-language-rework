Defines the time between condition satisfaction and waypoint finish (randomly from min to max, with an average value mid).


---
*Syntaxes:*

waypoint `setWaypointTimeout` [min, mid, max]

---
*Example 1:*

```sqf
[_grp, 2] setWaypointTimeout [5, 10, 6];
```