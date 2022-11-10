Check if value exists in Scripted Database.


---
*Syntaxes:*

[database, path] call `BIS_fnc_dbValueCheck`

---
*Example 1:*

```sqf
`"#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"]` call BIS_fnc_dbValueCheck; // true
```