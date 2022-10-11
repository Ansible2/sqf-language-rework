Adds the next frame to the map animation.


---
*Example 1:*
```sqf
_map ctrlMapAnimAdd [1, 0.1, getMarkerPos "anim1"];
ctrlMapAnimCommit _map;
```

*Example 2:*
Center map on player:

```sqf
_ctrl ctrlMapAnimAdd [0, 0.05, player];
ctrlMapAnimCommit _ctrl;
```

*Example 3:*
```sqf
_map ctrlMapSetPosition [];
_map ctrlMapAnimAdd [1, 0.1, getMarkerPos "anim1"];
ctrlMapAnimCommit _map;
```