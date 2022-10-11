Find objects (Units, Vehicles, Dead, Map Objects) in a sphere with given radius. The first object in the returned array is `not` necessarily the closest one. If you need returned objects to be sorted by distance, use `nearestObjects`. If typeName is given, only objects of given type (or its subtype) are listed.


---
*Example 1:*
```sqf
_list = position player nearObjects 50;
```

*Example 2:*
```sqf
_list = [_xpos,_ypos] nearObjects ["House", 20];
```

*Example 3:*
```sqf
_list = player nearObjects 20;
```