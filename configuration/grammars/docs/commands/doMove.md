Order the given unit(s) to move to the given position (without radio messages). Upon reaching its destination, if it is the group leader it will order the group to form around it's new position. If it is not the leader, it will immediately be ordered to return to formation by the group leader and begin moving back to the group. Use `doStop` to stop units returning to formation. `moveToCompleted` will return true when a unit issued this command reaches its destination.


---
*Syntaxes:*

unit(s) `doMove` position

---
*Example 1:*

```sqf
_soldier1 doMove (position _officer);
```

*Example 2:*

```sqf
this doMove (getMarkerPos "Marker1");
```