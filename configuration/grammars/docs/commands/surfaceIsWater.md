Returns whether there is water at given position. In Arma 3, it also detects pond objects, but only if they are loaded in memory (normally only true if the objects are within the `object view distance`)


---
*Example 1:*
```sqf
private _result = surfaceIsWater [1000, 3000];
```

*Example 2:*
```sqf
_isWater = surfaceIsWater position player;
```