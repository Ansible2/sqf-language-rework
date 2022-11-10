Applies custom `color settings` to given `Display`.

Display must be already using color macros, function will just refresh the values according to current color settings.


---
*Syntaxes:*

[displayClass, display, commitTime, code] call `BIS_fnc_displayColorSet`

---
*Example 1:*

```sqf
[configFile >> (GUI_classes select _forEachIndex), _x] call BIS_fnc_displayColorSet;
```

*Example 2:*

```sqf
[
	configFile >> _class,
	_display,
	0,
	{
		_this ctrlSetFade 0;
		_this ctrlCommit 0.5;
	}
] call BIS_fnc_displayColorSet;
```