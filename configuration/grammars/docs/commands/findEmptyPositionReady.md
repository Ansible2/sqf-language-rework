Preloads area to be used with `findEmptyPosition` command and returns `true` when area is ready.
The size of the area preloaded is from **center - radius - maxDistance}} to {{hl|center + radius + maxDistance**


---
*Example 1:*
Preload aread within 500m:

```sqf
_ready = _center findEmptyPositionReady [0, 500];
```