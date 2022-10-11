Removes a range of array elements from the given array. Modifies the original array, just like `resize` or `set`.


---
*Example 1:*
```sqf
_arr = [1,2,3,4,5,6];
_arr deleteRange [1,4];
hint str _arr; // [1,6]
```