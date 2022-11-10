Converts string to value definition or vice versa.


---
*Syntaxes:*

valueString call `BIS_fnc_dbValueId`

---
*Example 1:*

```sqf
"MYVALUE" call BIS_fnc_dbValueId; // "&MYVALUE"
```

*Example 2:*

```sqf
["&MYVALUE"] call BIS_fnc_dbValueId; // "MYVALUE"
```