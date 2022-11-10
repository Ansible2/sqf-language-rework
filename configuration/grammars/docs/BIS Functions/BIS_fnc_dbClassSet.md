Add class to Scripted Database. The function modifies the passed array and returns a success flag.


---
*Syntaxes:*

[database, path, (value)] call `BIS_fnc_dbClassSet`

---
*Example 1:*

```sqf
private _db = ["#MILLER", ["&KILLS", 1000], "#TERRA", ["&WEAPON", "MX 6.5mm"]];
[_db, ["kavala"], ["&POPULATION", 42]] call BIS_fnc_dbClassSet;
_db // ["#MILLER",["&KILLS",1000],"#TERRA",["&WEAPON","MX 6.5mm"],"#KAVALA",["&POPULATION",42]]
```