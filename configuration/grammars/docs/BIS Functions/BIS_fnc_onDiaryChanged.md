<pre>/*

	Description:
	Register code to be executed when diary item changes.

	Arguments passed into code are:
		0: DISPLAY - map display
		1: BOOL - true if clicked on subject list, false when on record list (clicking on subject may also trigger record)
		2: STRING - subject name
		3: STRING - record name
		4: ANY - passed arguments (index of onDiaryChanged code when no custom arguments were used)

	Parameter(s):
	_this:
		CODE
		ARRAY - code with custom arguments in format [CODE,ARG1,ARG2,...]
		NUMBER - remove code of given index

	Returns:
	NUMBER - index of onDiaryChanged code
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_onDiaryChanged` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_onDiaryChanged;
``` -->