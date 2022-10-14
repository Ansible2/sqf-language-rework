The waypoint is done only when the condition is fulfilled. When the waypoint is done, the statement expression is executed.<br>
Within the Condition & Statement code string:
* [[Magic Variables#this_2|this]] refers to the group leader
* `thisList` refers to the group's units


---
*Syntaxes:*

waypoint `setWaypointStatements` [condition, statement]

---
*Example 1:*

```sqf
_waypoint setWaypointStatements ["true", "hint 'hello'; hint 'goodbye'"];
```

*Example 2:*

```sqf
_waypoint setWaypointStatements ["true", "diag_log ['GroupLeader: ', this]; diag_log ['Units: ', thislist]"];
```