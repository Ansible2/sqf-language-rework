<pre>/*
		Killzone_Kid

	Description:
		Creates a scan with the name defined as class in CfgTXScans or from given params. 
		If name doesn't exists in config and params are not provided, default scan is created which could be tweaked later

	Parameter(s):
		0: STRING - "" create every scan from config
		or
		0: STRING - scan name
		1: ARRAY (Optional) - TX position
		2: NUMBER (Optional) - scan angle
		3: NUMBER (Optional) - scan precision
		4: ARRAY (Optional) - scan polygon

	Returns:
		BOOL - false on error
		
	Examples:
		"MyScan" call BIN_fnc_createTXScan
		"" call BIN_fnc_createTXScan - creates every scan from config
		["MyScan", [1,2,3], 20, 0.1] call BIN_fnc_createTXScan - creates every scan from config
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_createTXScan` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_createTXScan;
``` -->