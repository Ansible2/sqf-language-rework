Compares two values' types. A much faster alternative to <sqf inline>typeName a == typeName b</sqf>.


---
*Example 1:*
```sqf
private _var = [1,2,3];
_var isEqualType 0; // false
_var isEqualType []; // true
```