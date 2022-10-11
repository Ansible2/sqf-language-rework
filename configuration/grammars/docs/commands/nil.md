Nil value. This value can be used to undefine existing `variables`.


---
*Example 1:*
```sqf
variableToDestroy = nil;
```

*Example 2:*
```sqf
private _variable = 50;
_variable = nil;
hint format ["Variable = %1", _variable]; // will display "Variable = any" (Arma 3)
```