<pre>/*

	Description:
	Creates a marker on each uncompleted waypoint and marks it checked after completing that WP.
	Note: "On Activation" WP code is used for handling the markers; if this code is overwritten during the course, it can break this functionality

	Parameter(s):
	_this select 0: OBJECT - unit who will have its waypoints marked
	_this select 1 (Optional, use "" for default): STRING - text of hint shown after completing a waypoint, %1 is used for WP number (default "")
	_this select 2 (Optional, use [] for default): ARRAY of STRINGS - marker text format for [uncompleted, completed] waypoints, %1 is used for WP number (default ["%1", "%1"])
	_this select 3 (Optional, use [] for default): ARRAY of STRINGS - marker icon for [uncompleted, completed] waypoints (default ["mil_circle", "mil_circle"])
	_this select 4 (Optional, use [] for default): ARRAY of STRINGS - marker color for [uncompleted, completed] waypoints (default ["ColorRed", "ColorGreen"])
	_this select 5 (Optional, use [] for default): ARRAY of NUMBERS - marker size for [uncompleted, completed] waypoints (default [0.75, 0.75])

	Returns:
	NOTHING
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_markWaypoints` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_markWaypoints;
``` -->