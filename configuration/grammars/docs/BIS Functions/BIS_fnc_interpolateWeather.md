<pre>/*

	Description:
	Interpolate weather (overcast and fog) according to 2 boundry dates and their weather conditions.

	Parameter(s):
	_this select 0: array	- _date1 	[_year1,_month1,_day1,_hour1,_min1]
	_this select 1: array	- _weather1	[_overcast1,_fog1]
	_this select 2: array	- _date2 	[_year2,_month2,_day2,_hour2,_min2]
	_this select 3: array	- _weather2	[_overcast2,_fog2]
	_this select 4: array	- _subjectDate 	[_year,_month,_day,_hour,_min] (default: current date)

	Returns:
	[_interpolatedOvercast,_interpolatedFog]

	Example:
	[_overcast,_fog] = `2035,1,5,24,00],[0.1,0.5],[2035,1,10,24,00],[0.3,0.2],[2035,1,7,24,00` call BIS_fnc_interpolateWeather;
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_interpolateWeather` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_interpolateWeather;
``` -->