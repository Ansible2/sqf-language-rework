Add element to variable from someone's variable space.


---
*Syntaxes:*

[object, varName, element, global, inArray] call `BIS_fnc_variableSpaceAdd`

---
*Example 1:*

```sqf
[player, "someVar", 1337, true, true] call BIS_fnc_variableSpaceAdd;
```