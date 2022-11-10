This returns a sub-array of elements that satisfy a specific condition `in the order they have been passed`.


In the condition, the currently tested element is assigned to the variable "`_x`".
The original array is `not` modified.


---
*Syntaxes:*

[items, condition] call `BIS_fnc_conditionalSelect`

---
*Example 1:*

```sqf
[[10, 0, 8, 2, 6, 4], { _x > 5 }] call BIS_fnc_conditionalSelect; // will return [10,8,6]
```

*Example 2:*

```sqf
[[10, true, 8, player], { typeName _x == "STRING" }] call BIS_fnc_conditionalSelect; // will return []
```