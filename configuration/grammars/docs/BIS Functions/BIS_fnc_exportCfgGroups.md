<pre>/*

	Description:
	Export group or object composition for use in CfgGroups. The result will be copied to clipboard.

	Parameter(s):
		0: position (for supported types see BIS_fnc_position). Screen center is used by default
		1: objects to be saved. Currently selected objects in curator are used by default
			ARRAY of OBJECTs - specific objects to be saved
			array in format used by nearEntities, which automatically get nearby objects
				0: STRING or ARRAY of STRINGS - object types
				1: NUMBER - radius in metres

	Returns:
	STRING
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_exportCfgGroups` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_exportCfgGroups;
``` -->