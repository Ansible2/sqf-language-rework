Measures how much time it takes to execute given expression.
Results may vary based on overall performance; use this function to compare alternative scripting approaches rather than to measure specific values.
Upon function execution, window with results is opened. The user then has a choice to copy the result into clipboard or not.<br>
This function is using `diag_codePerformance` command.


---
*Syntaxes:*

[expression, arguments, cycles, display] call `BIS_fnc_codePerformance`

---
*Example 1:*

```sqf
// compare three methods of adding elements into array
testArray = [];
["testArray = testArray + [1]"] call BIS_fnc_codePerformance;
testArray = [];
["testArray set [count testArray, 1]"] call BIS_fnc_codePerformance;
testArray = [];
["testArray pushBack 1"] call BIS_fnc_codePerformance;
```

*Example 2:*

```sqf
[toString { hint "Hello there" }] call BIS_fnc_codePerformance;
```