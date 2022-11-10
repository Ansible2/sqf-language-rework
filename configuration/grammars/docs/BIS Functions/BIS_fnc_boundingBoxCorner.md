<pre>
/*

	Description:
		Returns position of all four bounding box corners
		OR
		Returns position of the nearest corner to the given position

	Parameter(s):
		_this: OBJECT - object with bounding box
		OR
		_this: ARRAY in format:
			0: OBJECT - object with bounding box
			1: ARRAY or OBJECT - position for which the nearest corner is returned
	Returns:
		ARRAY in format [pos1, pos2, pos3, pos4] - 4 corners of the bounding box
		OR
		ARRAY in format [x,y,z] - position of the nearest corner
		
	Example 1:
		_corners = car call BIS_fnc_boundingBoxCorner;
		
	Example 2:
		_nearestCorner = [car, player] call BIS_fnc_boundingBoxCorner;

*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_boundingBoxCorner` -->

---
