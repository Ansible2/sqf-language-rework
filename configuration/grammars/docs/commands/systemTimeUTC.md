Returns `systemTime` according to `U`niversal `T`ime `C`oordinated time scale.


---
*Syntaxes:*

`systemTimeUTC`

---
*Example 1:*

```sqf
private _UKTime = systemTimeUTC;
```

*Example 2:*

```sqf
systemTimeUTC apply { if (_x < 10) then { "0" + str _x } else { str _x } }; // ["2021","05","03","14","09","37","593"]
```

*Example 3:*

```sqf
private _timeUTC = systemTimeUTC;
private _time = systemTime;
private _timeDiffH = (_time select 3) - (_timeUTC select 3);
private _timeDiffM = (_time select 4) - (_timeUTC select 4);
if (_timeDiffM < 0) then
{
	_timeDiffH = _timeDiffH - 1;
	_timeDiffM = _timeDiffM + 60;
};
if (_timeDiffH < -12) then
{
	_timeDiffH = _timeDiffH + 24;
};
if (_timeDiffH > 12) then
{
	_timeDiffH = _timeDiffH - 24;
};
private _timeZone = [_timeDiffH, _timeDiffM]; // hour (_timeDiffH) is in range -12..+12
```