Converts given value from given "from" range to wanted "to" range. If clipping is set to `true`, the resulting value is guaranteed to be within "to" range no matter what.


---
*Syntaxes:*

`linearConversion`  [minFrom, maxFrom, value, minTo, maxTo, clip]

---
*Example 1:*

```sqf
// Say given range is 0 to 1 and wanted range is 0 to 100 (percent calculation). Given value 0.55 then will be 55
linearConversion [0, 1, 0.55, 0, 100];

// but if given value is 1.1 it will return 110
linearConversion [0, 1, 1.1, 0, 100, false];

// or if clipping is true it will return 100
linearConversion [0, 1, 1.1, 0, 100, true];
```

*Example 2:*

```sqf
linearConversion [4, 8, 5, 0, 1, false];
```

*Example 3:*

```sqf
// Calculate days from 1/1/1970
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