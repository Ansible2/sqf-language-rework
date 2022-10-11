Returns a road segment containing given position, `objNull` otherwise. Same as `isOnRoad` only returns the actual road object instead of boolean.


---
*Example 1:*
```sqf
_road = roadAt ASLToAGL getPosASL player;
```

*Example 2:*
```sqf
_isOnRoad = !isNull roadAt player;
```

*Example 3:*
For detecting bridges, for example:

```sqf
getModelInfo (roadAt ASLToAGL getPosASL player); // ["bridgesea_01_f.p3d", "a3\structures_f_exp\infrastructure\bridges\bridgesea_01_f.p3d", true]
```