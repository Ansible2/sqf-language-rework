Order the given unit(s) to watch the given position or target (without radio messages). Use `objNull` as the target to order a unit to stop watching a position/target.


---
*Example 1:*
```sqf
_soldierOne doWatch markerPos "MarkerMoveOne";
```

The unit named "soldierOne" will watch the position where the marker "MarkerMoveOne" is placed.

*Example 2:*
```sqf
_soldierOne doWatch _eastSoldier;
```

The unit named "soldierOne" will watch the unit named "eastSoldier".