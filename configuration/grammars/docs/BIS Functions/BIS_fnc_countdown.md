Triggers a countdown.


---
*Syntaxes:*

[timeInSeconds, global] call `BIS_fnc_countdown`

---
*Example 1:*

```sqf
private _initialCountdown = [50,false] call BIS_fnc_countdown; // sets countdown to 50 seconds where function is executed
```

*Example 2:*

```sqf
private _initialCountdown = [50] call BIS_fnc_countdown; // sets countdown to 50 seconds globally
```

*Example 3:*

```sqf
[-1] call BIS_fnc_countdown; // sets BIS_fnc_countdown_time to nil
```

*Example 4:*

```sqf
private _timeLeft = [0] call BIS_fnc_countdown; // returns the left over-time
```

*Example 5:*

```sqf
private _isTimeLeft = [true] call BIS_fnc_countdown; // returns true if countdown is greater than 0
```