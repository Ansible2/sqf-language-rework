Shows time gap between two dates.


---
*Syntaxes:*

[startDate, endDate] call `BIS_fnc_showTime`

---
*Example 1:*

```sqf
private _dayStart = date;
_dayStart set [3, 0]; // set hours to 0
_dayStart set [4, 0]; // set minutes to 0
_now = date;
[_dayStart, _now] call BIS_fnc_showTime;
```