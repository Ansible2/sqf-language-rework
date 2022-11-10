<pre>/*
		Killzone_Kid

	Description:
		Returns array with given TXScan data which is used for saving/loading

	Parameter(s):
		0: STRING - TXScan name or "" to return all saved scan names

	Returns:
		ARRAY - save data for given scan name 
		or if argument was ""
		ARRAY in format [allscannames, activeareaboundaries]
		
	Example:
		"MyScan" call BIN_fnc_getTXScanSaveData
		"" call BIN_fnc_getTXScanSaveData
*/

#define SAVEVAR_NAME "BIN_fnc_TXScan_saveData"
#define IDD_DEFAULT 12
#define IDC_DEFAULT 51

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_getTXScanSaveData` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_getTXScanSaveData;
``` -->