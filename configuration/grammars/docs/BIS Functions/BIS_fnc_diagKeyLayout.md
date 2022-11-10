<pre>/*

	Description:
	Exports default key layout to wiki template.

	Parameter(s):
	_this select 0: STRING - category, can be one of following
		"" - all controls in game
		"All"
		"BasicInfantryControls"
		"Car"
		"Air"
		"Helicopter"
		"Submarine"
		"Buldozer"
		"UserActions"
	_this select 1: STRING - selection method, can be one of following
		"" - single tap
		"double" - double tap
		"LCtrl" - with left control pressed
		"RCtrl" - with right control pressed
		"LShift" - with left shift pressed
		"RShift" - with right shift pressed

	Returns:
	STRING - wiki export text (also copied to clipboard)
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_diagKeyLayout` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_diagKeyLayout;
``` -->