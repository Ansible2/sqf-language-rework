Returns all values within class.


---
*Syntaxes:*

[database, path] call `BIS_fnc_dbValueList`

---
*Example 1:*

```sqf
`"#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"]], ["miller"` call BIS_fnc_dbValueList; // ["KILLS", "RANK"]
```