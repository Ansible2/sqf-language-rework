This function returns a 24-hour time as a string (or array) from a decimal.


---
*Syntaxes:*

[time, format] call `BIS_fnc_timeToString`

---
*Example 1:*

```sqf
private _time = 7.36;
[_time] call BIS_fnc_timeToString; // 07:21:36
```

*Example 2:*

```sqf
private _time = 7.36;
[_time, "HH:MM"] call BIS_fnc_timeToString; // 07:21
```