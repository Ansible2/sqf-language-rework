Removes the specified waypoint.


---
*Syntaxes:*

`deleteWaypoint` [group, index]

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