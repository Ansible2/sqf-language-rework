Returns objects intersecting with the virtual line from `begPos` to `endPos`. By default, the resulting array of intersecting objects is unsorted (see ``sortByDistance``).
{{Feature|informative|
* Does not work under water.
* Max hardcoded distance is 1000m.


---
*Example 1:*
```sqf
_objects = lineIntersectsWith [eyePos player, AGLToASL screenToWorld [0.5, 0.5]];
```

*Example 2:*
Sort by distance:

```sqf
_objects = lineIntersectsWith [eyePos player, AGLToASL screenToWorld [0.5, 0.5], objNull, objNull, true];
```

*Example 3:*
Ignore objects:

```sqf
_objects = lineIntersectsWith [eyePos player, aimPos chopper, player, chopper];
```