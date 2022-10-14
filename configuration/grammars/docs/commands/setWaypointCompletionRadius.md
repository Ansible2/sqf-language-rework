The completion radius allows units to call the waypoint completed once they are inside of the given circle. However, `fleeing` units that are not in `player`'s `Group` will ignore the completion radius.


---
*Syntaxes:*

waypoint `setWaypointCompletionRadius` radius

---
*Example 1:*

```sqf
[grp, 2] setWaypointCompletionRadius 30;
```