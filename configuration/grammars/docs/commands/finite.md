Returns `true` if the provided number is finite (not infinite and a valid number). 
{{ Feature | Informative | 
* Maximum finite `Number` : 3.40282e+38
* Minimum finite `Number` : -3.40282e+38 }}


---
*Example 1:*
```sqf
finite 123; // returns true
```

*Example 2:*
```sqf
finite log -1; // returns false
```

*Example 3:*
```sqf
if (not finite log -1) then { hint "Infinite" };
```