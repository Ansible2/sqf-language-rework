Returns content of given value.


---
*Syntaxes:*

[database, path, (defaultValue)] call `BIS_fnc_dbValueReturn`

---
*Example 1:*

```sqf
`"#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"]], ["miller","kills"` call BIS_fnc_dbValueReturn; // 1000
```