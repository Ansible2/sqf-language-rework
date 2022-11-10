Remove class from Scripted Database. The function does not return the modified database but modifies the passed array directly.


---
*Syntaxes:*

[database, path] call `BIS_fnc_dbClassRemove`

---
*Example 1:*

```sqf
private _db = ["#MILLER", ["&KILLS", 1000], "#TERRA", ["&WEAPON", "MX 6.5mm"]];
[_db, ["terra"]] call BIS_fnc_dbClassRemove; // true
_db // ["#MILLER",["&KILLS",1000]]
```