Convert a date to a float number, based on Jan 1st 00:00:00 = 0 and Dec 31st  23:59:59 = 1. The same day and time in leap year will be different after 28th of February and 23:59 on 31st of December will be 1.00274.<br><br>
This is how this command works. The 365 days of the year are presented in range 0...1. So each day will be:

```sqf
1 / 365 = 0.00273973
```
In a leap year there are 366 days, so the range will increase by 1 day:

```sqf
1 / 365 * 366 = 1.00274
```
In short, in a normal year the command returns in range 0...1 in a leap year it will return in range 0...1.00274.


---
*Syntaxes:*

`dateToNumber` date

---
*Example 1:*

```sqf
_float = dateToNumber [2035,7,6,12,0]; // 0.510959
```

*Example 2:*

```sqf
dateToNumber date; // returns float number for the current date
```

*Example 3:*

Calculate days from 1/1/1970:

```sqf
fnc_daysFromEpoc = 
{
	private _year = param [0];
	private _days = 0;
	for "_i" from 1970 to _year - 1 do 
	{
		_days = _days + round linearConversion [0, 1, dateToNumber [_i, 12, 31, 23, 59], 0, 365, false];
	};
	_days + linearConversion [0, 1, dateToNumber _this, 0, 365, false];
};

hint str (date call fnc_daysFromEpoc);
```