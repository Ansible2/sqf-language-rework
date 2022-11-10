Returns all classes within class.


---
*Syntaxes:*

[database, path] call `BIS_fnc_dbClassList`

---
*Example 1:*

```sqf
`"#MILLER", ["&KILLS", 1000], "#TERRA", ["&WEAPON", "MX 6.5mm"]], [` call BIS_fnc_dbClassList; // ["MILLER","TERRA"]
```