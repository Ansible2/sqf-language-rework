Add value to Scripted Database. If the provided path does not exist it is created, otherwise the value is overwritten. The passed array gets modified.


---
*Syntaxes:*

[database, path, newvalue] call `BIS_fnc_dbValueSet`

---
*Example 1:*

```sqf
private _db = ["#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"]];
[_db, ["miller","kills"],200] call BIS_fnc_dbValueSet;
_db // ["#MILLER",["&KILLS",200,"&RANK","CAPTAIN"]]
```

*Example 2:*

```sqf
private _db = ["#MILLER", ["&KILLS", 1000, "&RANK", "CAPTAIN"]];
[_db, ["miller","iq"],200] call BIS_fnc_dbValueSet;
_db // ["#MILLER",["&KILLS",1000,"&RANK","CAPTAIN","&IQ",200]]
```