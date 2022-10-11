Returns the position of a selected waypoint of a given group. Waypoints include only those which were placed in the mission editor.


---
*Example 1:*
```sqf
[_group1, 1] setWPPos [200,600,0];
_pos = getWPPos [_group1, 1]; // returns [200, 600, 0]
```