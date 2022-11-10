<pre>/*

	Description:
	Prints config entries.

	Parameter(s):
		0: CONFIG - config class which will be searched (default: configFile)
		1: STRING or ARRAY - entry name(s) whose values will be printed
		2: STRING - scan mode, can be one of following:
			"controls" - recursively scans controls in root, class controls, class controlsBackground and in RscControlsGroup controls (type = 15).
			"turrets" - recursively scans vehicles's turrets.
			"weapons" - scans weapon muzzles and modes.
			(default) - scans just class roots.

	Returns:
	STRING

	Results are printed to debug log and wiki compatible table is copied to clipboard.
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_diagConfig` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_diagConfig;
``` -->