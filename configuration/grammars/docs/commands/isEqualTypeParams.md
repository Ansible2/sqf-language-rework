Compares types of all elements of input array to types of all elements of template array. Similar to `isEqualTypeArray` however this command is designed for fast validation of functions params, so there are differences:
* Input can be anything but will be expected to be an `Array`, otherwise `false` is returned
* Input array can be longer but not shorter than template array, will return `false` if shorter
* `nil` could be used in template type array as a wild card to allow any type match


---
*Example 1:*
```sqf
// These all return true
[1,2,player,"10"] isEqualTypeParams [0,0,objNull,""];
[1,2,player,"10",true] isEqualTypeParams [0,0,nil,""];
[1,2,getPos player,"10",true] isEqualTypeParams [0,0,nil,""];
```

*Example 2:*
```sqf
// These all return false
123 isEqualTypeParams [0,0,objNull,""];
[] isEqualTypeParams [0,0,objNull,""];
[1,2,player] isEqualTypeParams [0,0,objNull,""];
```