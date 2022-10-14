Switches the group formation when the waypoint becomes active.
<br>
<br>
Possible values are: 
* "NO CHANGE"
* "COLUMN"
* "STAG COLUMN"
* "WEDGE"
* "ECH LEFT"
* "ECH RIGHT"
* "VEE"
* "LINE"
* "FILE"
* "DIAMOND"


---
*Syntaxes:*

waypoint `setWaypointFormation` formation

---
*Example 1:*

```sqf
[_grp, 2] setWaypointFormation "LINE";
```