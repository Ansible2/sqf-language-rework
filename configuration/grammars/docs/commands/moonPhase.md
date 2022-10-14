Returns the phase of the in-game Moon on the given date in range 0...1, where 0 - new Moon, 1 - full Moon. According to this command the fullest Moon in Arma 3 at midnight is on **`setDate` [4804,7,13,0,0];** Use [[Arma_3_Utilities#Moon_Phases|Moon Phase Utility]] to find out date for a mission with desired moon.


---
*Syntaxes:*

`moonPhase` date

---
*Example 1:*

```sqf
_currentMoonPhase = moonPhase date;
```

*Example 2:*

```sqf
// Returns array of dates for given year when moon is at its fullest
fnc_fullMoonDates = 
{
	private _year = param [0, 2035];
	private ["_date", "_phase", "_fullMoonDate"];
	private _fullMoonPhase = 1;
	private _waxing = false;
	private _fullMoonDates = [];
	for "_i" from dateToNumber [_year, 1, 1, 0, 0] to dateToNumber [_year, 12, 31, 23, 59] step 1 / 365 do
	{
		_date = numberToDate [_year, _i];
		_phase = moonPhase _date;
		call
		{
			if (_phase > _fullMoonPhase) exitWith
			{
				_waxing = true;
				_fullMoonDate = _date;
			};
			if (_waxing) exitWith 
			{
				_waxing = false;
				_fullMoonDates pushBack _fullMoonDate;
			};
		};
		_fullMoonPhase = _phase;
	};
	_fullMoonDates
};

//set random full moon date in year 1970
setDate selectRandom (1970 call fnc_fullMoonDates);
```