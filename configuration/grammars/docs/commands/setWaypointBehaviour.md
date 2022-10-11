Switches the unit behaviour when the waypoint becomes active.
<br>
<br>
Possible values are:
* "UNCHANGED"
* "CARELESS"
* "SAFE"
* "AWARE"
* "COMBAT"
* "STEALTH"

See the `AIBehaviour` page for details of the effect of this command on AI units.


---
*Example 1:*
```sqf
[_grp, 2] setWaypointBehaviour "AWARE";
```