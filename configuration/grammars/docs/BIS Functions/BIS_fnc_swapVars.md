Swaps the values of two variables `passed as `String``.<br>
Nothing is returned as this function modifies the variables directly.


---
*Syntaxes:*

[variableName1, variableName2] call `BIS_fnc_swapVars`

---
*Example 1:*

```sqf
private _a = 1;
_b = 2;
["_a", "_b"] call BIS_fnc_swapVars;
_a == 2; // true
_b == 1; // true
```