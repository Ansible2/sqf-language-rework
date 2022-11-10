Return a new array with randomized order of elements from input array.


---
*Syntaxes:*

array call `BIS_fnc_arrayShuffle`

---
*Example 1:*

```sqf
[1,2,3] call BIS_fnc_arrayShuffle; // can return [1,2,3] (the original order), [3,1,2], [2,3,1], [1,3,2], [2,1,3] or [3,2,1]
```