Sets time of the day to the hour. Minutes will always be zero.


---
*Syntaxes:*

datetime call `BIS_fnc_paramDaytime`

---
*Example 1:*

```sqf
private _date = 12 call BIS_fnc_paramDaytime;
```

*Example 2:*

```sqf
private _date = [2001, 01, 01, 12, 00] call BIS_fnc_paramDaytime;
```

*Example 3:*

```sqf
private _date = call BIS_fnc_paramDaytime;
```