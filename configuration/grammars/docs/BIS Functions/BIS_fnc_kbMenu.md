<pre>/*

	Description:
	Opens conversation menu. Script terminates itself when menu selection is finished.

	Parameter(s):
	_this select 0: ARRAY or STRING - List of responses (of type ARRAY) or Menu name
		Responses are in format:
		_response select 0: STRING or ANY - Display name when STRING, otherwise used as default option when menu is closed without selecting anything.
		_response select 1:
			STRING - expression
			ARRAY - BIS_fnc_kbTell params

	Returns:
	NUMBER - ID of select option
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_kbMenu` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_kbMenu;
``` -->