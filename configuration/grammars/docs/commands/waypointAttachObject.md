Attaches a static object via it is numeric ID to the given waypoint.


---
*Syntaxes:*

waypoint `waypointAttachObject` objectID

waypoint `waypointAttachObject` object

---
*Example 1:*

```sqf
[_grp, 2] waypointAttachObject 1234;
```

*Example 2:*

```sqf
private _wp = group player addWaypoint [[1907.5, 5746.5, 0.00144196], 0];
_wp waypointAttachObject ((waypointPosition _wp) nearestObject 66220);
```