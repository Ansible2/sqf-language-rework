Adds element to the back of the given array but only if it is unique to the array. The index of the added element is returned upon success, otherwise -1. This command modifies the original array.


---
*Example 1:*
```sqf
_arr = [1,2,3];
_index = _arr pushBackUnique 3;
hint str [_index, _arr]; // [-1,[1,2,3]]
```

*Example 2:*
```sqf
_arr = [1,2,3];
_index = _arr pushBackUnique 4;
hint str [_index, _arr]; // [3,[1,2,3,4]]
```