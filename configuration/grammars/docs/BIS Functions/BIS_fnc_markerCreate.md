<pre>/*

	Description:
	Creates marker with given params.
	Reads config to recognize settings - use for quick debugging only.

	Parameter(s):
	_this: ARRAY of values:
		STRING - one of type, color, brush or shape. If no corresponding class is found, value is used as marker text
		ARRAY
			[STRING(,ANY,ANY,...)] - marker name with optional arguments
			[NUMBER] - marker size [a,a]
			[NUMBER,NUMBER] - marker size [x,y]
			[NUMBER,NUMBER,NUMBER] - marker position [x,y,z]
		OBJECT - object's position
		NUMBER - marker dir
		BOOL - marker locality (true if global)

	Returns:
	STRING - created marker
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_markerCreate` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_markerCreate;
``` -->