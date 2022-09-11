Applies the given code to each element of the given data structure and collects the results in an array.

*Array Example:*
```sqf
[0,1,2,3,4] apply { str _x }; 
// ["0","1","2","3","4"]
```

*HashMap Example:*
```sqf
private _hashmap = createHashMapFromArray [
	["Key 1", "Value 1"], 
	["Key 2", "Value 2"]
];
private _array = _hashmap apply { 
	_y + " Test" 
};
// ["Value 2 Test","Value 1 Test"]
```