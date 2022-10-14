Checks if the UAV has waypoints enabled.


---
*Syntaxes:*

`waypointsEnabledUAV` uav

---
*Example 1:*

```sqf
_uav enableUAVWaypoints false;
hint str waypointsEnabledUAV _uav; // returns false
```