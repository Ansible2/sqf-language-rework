Returns a random element from the given array according to assigned weights. Engine solution to `BIS_fnc_selectRandomWeighted`. A few notes:
* Negative weights are not supported
* If an item's weight is 0, the item is ignored
* The weights don't have to total to 1 
* If numbers of items and weights do not match, the shortest array is used
* A single array Syntax is slightly faster than Alt Syntax


---
*Example 1:*
```sqf
private _randomWeightedElement = selectRandomWeighted [1,0.1,2,0.2,3,1.3,4,2.4,5,7.5];
```

*Example 2:*
```sqf
private _randomWeightedElement = [1,2,3,4,5] selectRandomWeighted [0.1,0.2,1.3,2.4,7.5];
```