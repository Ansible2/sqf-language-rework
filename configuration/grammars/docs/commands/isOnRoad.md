Checks if given position is inside road segment. Same as `roadAt`, only return is boolean instead of road object.


---
*Example 1:*
```sqf
_objOnRoad = isOnRoad player;
```

*Example 2:*
```sqf
_posOnRoad = isOnRoad ASLToAGL getPosASL player;
```