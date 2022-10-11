Removes array element at the given 0-based index and returns removed element (modifies the original array, just like `resize` or `set`).


---
*Example 1:*
```sqf
_arr = [1,2,3];
_rem = _arr deleteAt 1;
hint str [_rem, _arr]; // [2, [1, 3]]
```

*Example 2:*
```sqf
_arr = [1,2,3];
_arr deleteAt (_arr find 0); // non existent item
hint str _arr; // [1,2,3]
_arr deleteAt (_arr find 2); // existent item
hint str _arr; // [1,3]
```

*Example 3:*
```sqf
_arr = [1,2,3];
_arr deleteAt (_arr findIf {(_x % 5) == 0}); // Remove first number that's divisible by 5
hint str _arr; // [1,2,3]
_arr deleteAt (_arr findIf {(_x % 2) == 0}); // Remove first number that's divisible by 2
hint str _arr; // [1,3]
```