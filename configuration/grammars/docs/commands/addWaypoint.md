Adds (or inserts when index is given) a new waypoint to a group.

The waypoint is placed randomly within a circle with the given center and radius.

The function returns a waypoint with format [group, index].<br><br>


---
*Syntaxes:*

groupName `addWaypoint` [center, radius, index, name]

---
*Example 1:*

```sqf
_wp = _grp addWaypoint [position player, 0];
```