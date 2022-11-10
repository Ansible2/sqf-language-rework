<pre>/*
		Killzone_Kid

	Description:
		Adds measurement point to IDWMap

	Parameter(s):
		ARRAY (Optional) - position in format [x,y] or [x,y,z] in which case z is ignored. Default: position player

	Returns:
		NUMBER 
			0 ... 1 - strength at given coordinates 
			-1 - point is out of bounds
			-999 - error
		
	Example:
		call BIN_fnc_addIDWMapMeasurementPoint
		[x,y] call BIN_fnc_addIDWMapMeasurementPoint
		[x,y,z] call BIN_fnc_addIDWMapMeasurementPoint
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_addIDWMapMeasurementPoint` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_addIDWMapMeasurementPoint;
``` -->