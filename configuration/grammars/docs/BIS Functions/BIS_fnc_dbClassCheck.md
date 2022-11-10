Check if class exists in Scripted Database.


---
*Syntaxes:*

[databaseArray, path] call `BIS_fnc_dbClassCheck`

---
*Example 1:*

```sqf
`"#MILLER", ["&NAME", "Miller", "&UID", "1234", "&MONEY", 1000], ["miller"` call BIS_fnc_dbClassCheck // true
```