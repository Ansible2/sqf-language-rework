This operator creates a `If Type` which is used in the if-construct as described `here`.


---
*Example 1:*
```sqf
_retVal = if (1 > 0) then { "It's true" } else { "It's false" };
hint str _retVal;
```

*Example 2:*
```sqf
_val = if (true) then [{ "true" }, { "false" }];
hint _val;
```