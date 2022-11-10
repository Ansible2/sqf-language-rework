Checks if string is value definition.


---
*Syntaxes:*

text call `BIS_fnc_dbIsValue`

---
*Example 1:*

```sqf
"&MYVALUE" call BIS_fnc_dbIsValue; // true
"&myvalue" call BIS_fnc_dbIsValue; // true
"MYVALUE" call BIS_fnc_dbIsValue; // false
1234 call BIS_fnc_dbIsValue; // false
```