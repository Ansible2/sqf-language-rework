Attempts to run given code with given arguments given number of cycles in unscheduled environment and returns average time it took to run the code as well as actual number of executions performed.
The command will return as soon as possible if the tested code is slow and the duration of the command exceeds 1 second.
Engine alternative to `BIS_fnc_codePerformance`.


---
*Syntaxes:*

`diag_codePerformance` [code, arguments, cycles]

---
*Example 1:*

```sqf
private _result = diag_codePerformance [{ private _a = 123; }, 0, 10000];
```