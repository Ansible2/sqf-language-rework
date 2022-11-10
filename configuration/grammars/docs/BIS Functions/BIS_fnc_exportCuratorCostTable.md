<pre>/*

	Description:
	Generate spreadsheet with object classes and copy it to clipboard.
	The table will generate export code to be used in BIS_fnc_curatorObjectRegisteredTable

	Parameter(s):
		0 (Optional): ARRAY of STRINGs - supported addons (classes from CfgPatches). When empty, all preloaded addons will be added. Use empty string to export just the cost calculation.
		1 (Optional): STRING - format, can be "ods" or "xls"
		2 (Optional): STRING - name of sheet with cost calculation. When empty, the calculation will be inserted on top of the table
		3 (Optional): ARRAY of SIDEs or NUMBERs - filter only objects of listed sides or side IDs. Supported sides are west, east, resistance, civilian, sideUnknown and sideLogic
		4 (Optional): CODE - condition for class to be listed. Config path to the class is passed as an argument (default: {true})
		5 (Optional): CODE - default cost, must return STRING. When empty string is returned, no default cost will be used (default: {""})

	Returns:
	BOOL
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_exportCuratorCostTable` -->

---
