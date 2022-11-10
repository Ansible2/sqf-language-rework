Display a text in the "mission" GUI area with some effects. Good for the beginning of a mission.<br>


---
*Syntaxes:*

[string_1, string_2, string_n] spawn `BIS_fnc_infoText`

---
*Example 1:*

```sqf
["Somewhere on Altis", format ["Year %1", date select 0], mapGridPosition player] spawn BIS_fnc_infoText;
```