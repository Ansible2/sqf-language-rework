<pre>/*

	Description:
	Set overcast and fog

	Parameter(s):
		0: STRING - mode, can be one of following

			"enableDelay" - enable delayed activation (i.e., weather changes are not applied manually and have to be confirmed by mission)
				1: BOOL - true to enbale, false to disable
				Returns: Nothing
		
			"isDelayEnabled"
				Returns: true if delayed activation is enabled, otherwise false

			"commit" - apply weather changes
	Returns:
	Nothing
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_moduleWeather` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_moduleWeather;
``` -->