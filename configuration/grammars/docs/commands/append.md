Appends array2 to the back of array1 modifying array1. See `insert` for an "appendUnique" equivalent.


---
*Syntaxes:*

array1 `append` array2

---
*Example 1:*

```sqf
_arr = [1,2,3];
_arr append [4,5,6];
hint str _arr; // [1,2,3,4,5,6]
```