Checks if string is class definition.


---
*Syntaxes:*

text call `BIS_fnc_dbIsClass`

---
*Example 1:*

```sqf
"#MYCLASS" call BIS_fnc_dbIsClass; // true
"#myclass" call BIS_fnc_dbIsClass; // true
"MYCLASS" call BIS_fnc_dbIsClass; // false
1234 call BIS_fnc_dbIsClass; // false
```