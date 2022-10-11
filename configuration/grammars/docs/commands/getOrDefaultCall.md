Retrieves a value from the `HashMap` for the given 'key', executes given 'code' if key was not found and returns result. Additionally sets key to the code result value if 'set' is true.


---
*Example 1:*
```sqf
_hashmap getOrDefaultCall [123, { systemChat "The key 123 does not exist and will be created and assigned 345"; 345 }, true]
```