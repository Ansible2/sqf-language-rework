Enables/disables the option for player to set waypoints for UAV in AV terminal.


---
*Syntaxes:*

uav `enableUAVWaypoints` enable

---
*Example 1:*

```sqf
_uav enableUAVWaypoints false;
hint str waypointsEnabledUAV _uav; // returns false
```