Returns system time.


---
*Example 1:*
```sqf
private _currentTime = systemTime;
```

*Example 2:*
```sqf
systemTime apply {if (_x < 10) then {"0" + str _x} else {str _x}}; // ["2021","05","03","14","09","37","593"]
```

*Example 3:*
```sqf
systemTime params ["_year", "_month", "_day", "_hour", "_minute", "_second", "_millisecond"];
```