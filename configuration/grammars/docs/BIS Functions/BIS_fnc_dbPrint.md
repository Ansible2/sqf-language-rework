Copy Scripted Database content into clipboard for evaluation. Text will be formatted as config.


---
*Syntaxes:*

[database, tabs] call `BIS_fnc_dbPrint`

---
*Example 1:*

```sqf
`"#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"], "#TERRA", ["&WEAPON", "MX 6.5mm"]` call BIS_fnc_dbPrint;
```

*Example 2:*

```sqf
`"#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"], "#TERRA", ["&WEAPON", "MX 6.5mm"`, 1] call BIS_fnc_dbPrint;
```