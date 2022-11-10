Returns the end datetime if an offset is passed, or the offset between start and end dates.


---
*Syntaxes:*

[startDate, endDateOrOffset, timeUnit] call `BIS_fnc_calculateDateTime`

---
*Example 1:*

```sqf
[date, 3600] call BIS_fnc_calculateDateTime;								// returns date in 3600 seconds (60min, 1h)
[date, 60, "m"] call BIS_fnc_calculateDateTime;								// returns date in 60 minutes (1h)
[[2035,8,28,11,55], [2035,8,29,11,55], "h"] call BIS_fnc_calculateDateTime;	// returns 24
```