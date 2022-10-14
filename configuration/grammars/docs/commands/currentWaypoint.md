Returns the `index` of the current waypoint contrary to misleading name.

To determine the validity of the index, compare it to the waypoints count.

If all waypoints are completed, then the index is 1 greater than the last valid index.

If there are no waypoints, then the index is 0.

By default, a group has 1 waypoint at their starting position, which is considered completed and so the currentWaypoint is 1.


---
*Syntaxes:*

`currentWaypoint`  groupName

---
*Example 1:*

```sqf
_index = currentWaypoint group player;
```