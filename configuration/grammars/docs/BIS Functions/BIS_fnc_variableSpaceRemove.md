Remove element from variable from someone's variable space.


---
*Syntaxes:*

[object,varName,element,global,inArray] call `BIS_fnc_variableSpaceRemove`

---
*Example 1:*

```sqf
[player, "someVar", 1337, true] call BIS_fnc_variableSpaceRemove;
```