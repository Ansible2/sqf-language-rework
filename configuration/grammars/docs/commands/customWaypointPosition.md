Returns player's custom waypoint (LShift + LMB) position or an empty array **[]** if no custom waypoint exists.


---
*Example 1:*
```sqf
if (customWaypointPosition isNotEqualTo []) then
{
	hint format ["You are %1m away from your custom waypoint.", round (player distance customWaypointPosition)];
};
```