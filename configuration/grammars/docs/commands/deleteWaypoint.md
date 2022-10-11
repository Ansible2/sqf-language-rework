Removes the specified waypoint.
 for a deletion of all group's waypoints.
* Deleting a group's `current waypoint` will `not` stop the group on its tracks.


---
*Example 1:*
```sqf
deleteWaypoint [_grp, 2];
```

*Example 2:*
Because waypoints get immediately re-indexed when one gets deleted, delete them from last to first:

```sqf
private _group = group _unit;
for "_i" from count waypoints _group - 1 to 0 step -1 do
{
	deleteWaypoint [_group, _i];
};
```