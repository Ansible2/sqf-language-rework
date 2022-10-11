Applies the given code to each element of the given data structure and collects the results in an array.


---
*Example 1:*
```sqf
private _arr = [1,2,3,4,5,6,7,8,9,0] apply { [1,0] select (_x % 2 == 0) }; // [1,0,1,0,1,0,1,0,1,0]
```

*Example 2:*
```sqf
private _arr = [1,2,3,4,5,6,7,8,9,0] apply { _x ^ _x }; // [1,4,27,256,3125,46656,823543,16777216,387420480,1]
```

*Example 3:*
```sqf
private _arr1 = [];
_arr1 resize 20;
_arr2 = _arr1 apply { 0 }; // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
```

*Example 4:*
```sqf
[0,1,2,3,4] apply { str _x }; // ["0","1","2","3","4"]
```

*Example 5:*
```sqf
private _hashmap = createHashMapFromArray [["Key 1", "Value 1"], ["Key 2", "Value 2"]];
private _array = _hashmap apply { _y + " Test" }; // ["Value 2 Test","Value 1 Test"]
```