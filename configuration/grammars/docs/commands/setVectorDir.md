Set object's direction vector. Up vector will remain unchanged.


---
*Example 1:*
```sqf
player setVectorDir [5,6,1];
```

*Example 2:*
```sqf
// provided _myMine is local
_myMine setVectorDir [0.3, 1, 0];
_myMine setPosWorld getPosWorld _myMine; // synchronises the mine's direction over the network (special case)
```