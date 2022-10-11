Adds given set of compiled instructions to the current stack and waits for it to finish and return, provides an option to pass arguments to the executed `Code`. See `Scheduler` to learn more about how the code is excuted and behaves.


---
*Example 1:*
```sqf
call { hint str 123; };
```

*Example 2:*
```sqf
123 call { hint str _this; };
```

*Example 3:*
```sqf
_sum = [1, 2] call { (_this select 0) + (_this select 1); };
hint str _sum; // displays 3
```

*Example 4:*
```sqf
123 call compile "hint str _this;";
```

*Example 5:*
```sqf
_result = 123 call compile preprocessFileLineNumbers "myFile.sqf";
```