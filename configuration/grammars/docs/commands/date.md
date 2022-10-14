Return the actual in-mission date and time.


---
*Syntaxes:*

`date`

---
*Example 1:*

```sqf
// in Arma 3
date params ["_year", "_month", "_day", "_hours", "_minutes"];

// pre Arma 3
_now = date;	// [2014,10,30,2,30] a.k.a Oct. 30th, 2:30am
_year		= _now select 0;
_month		= _now select 1;
_day		= _now select 2;
_hours		= _now select 3;
_minutes	= _now select 4;
```

*Example 2:*

```sqf
if (date select 3 >= 19) then		// 7pm
{
	hintSilent "ah, Arma sunset";	// ...cue bad guys
};
```