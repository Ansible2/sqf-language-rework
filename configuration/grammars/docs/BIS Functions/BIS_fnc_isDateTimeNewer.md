Returns true if the first passed datetime is newer than the second one.


---
*Syntaxes:*

[date1, date2] call `BIS_fnc_isDateTimeNewer`

---
*Example 1:*

```sqf
private _isNewer = `2035,5,28,13,37], [2032,5,28,13,37` call BIS_fnc_isDateTimeNewer;
```