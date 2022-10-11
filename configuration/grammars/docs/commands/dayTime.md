Returns the current in-game time in hours. For a formatted version of time, see `BIS_fnc_timeToString`.


---
*Example 1:*
```sqf
dayTime; // returns 16.5 given it is 16:30 (4.30pm) in game
```

*Example 2:*
Get hour, minute, seconds:

```sqf
private _daytime = dayTime; // assuming dayTime returns 1.66046
private _hours = floor _daytime;											//  1
private _minutes = floor ((_daytime - _hours) * 60);						// 39
private _seconds = floor ((((_daytime - _hours) * 60) - _minutes) * 60);	// 37
```