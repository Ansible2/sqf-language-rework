Function which returns vector direction from pos1 to pos2.


---
*Syntaxes:*

[param1, param2] call `BIS_fnc_dirTo`

---
*Example 1:*

sets unit1 in the direction of unit2

```sqf
unit1 setDir ([unit1, unit2] call BIS_fnc_dirTo);
```