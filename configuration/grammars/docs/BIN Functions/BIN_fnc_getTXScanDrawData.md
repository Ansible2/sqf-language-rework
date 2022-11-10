<pre>/*
		Killzone_Kid

	Description:
		Returns draw data for given TXScan

	Parameter(s):
		0: STRING - scan name

	Returns:
		ARRAY in format [iconData, polygonData, triangleData, rectangleData, isDefaultPolygon] where:
			iconData: ARRAY - position in format [x,y,0]
			polygonData: ARRAY - array of polygon vertices, where each vertex is in format [x,y,0]
			triangleData: ARRAY - array of triangle vrtices, where each vertex is in format [x,y,0] 
			rectangleData: ARRAY - bounding rectangle in format [center, a, b, angle]
			isDefaultPolygon: BOOL - if a scan polygon has not yet been calculated, this will be true
		
	Example:
		"myScan" call BIN_fnc_getTXScanDrawData
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_getTXScanDrawData` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_getTXScanDrawData;
``` -->