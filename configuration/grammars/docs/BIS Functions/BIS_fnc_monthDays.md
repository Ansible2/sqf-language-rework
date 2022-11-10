Returns number of days in given month. Takes in account for leap year.


---
*Syntaxes:*

[year, month] call `BIS_fnc_monthDays`

---
*Example 1:*

```sqf
private _daysInThisMonth = [date select 0, date select 1] call BIS_fnc_monthDays;
```