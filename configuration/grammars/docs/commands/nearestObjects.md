Returns a list of nearest objects of the given types to the given position or object, within the specified distance. If more than one object is found they will be ordered by proximity, the closest one will be first in the array. If an object is given as the center and the filter criteria applies to it, it will be the first result in the list. Alternatively, you can use `nearObjects` command, which doesn't sort results.
<br><br>
A list of ClassName types (e.g **Tank**) can be found in `CfgVehicles`.


---
*Example 1:*
```sqf
nearestObjects [player, ["Car", "Tank"], 200];
```

*Example 2:*
```sqf
nearestObjects [player, ["house"], 200];
```

*Example 3:*
```sqf
nearestObjects [[2716,2949,0], ["Car", "Truck"], 100];
```

*Example 4:*
Return every object in 50 metres radius around player:

```sqf
nearestObjects [player, [], 50];
```