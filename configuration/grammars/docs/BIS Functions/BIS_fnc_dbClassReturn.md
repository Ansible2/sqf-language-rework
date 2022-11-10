Returns content of given class.


---
*Syntaxes:*

[database, path] call `BIS_fnc_dbClassReturn`

---
*Example 1:*

```sqf
`"#MILLER", ["&KILLS", 1000], "#TERRA", ["&WEAPON", "MX 6.5mm"]], ["miller"` call BIS_fnc_dbClassReturn; // ["&KILLS", 1000]
```