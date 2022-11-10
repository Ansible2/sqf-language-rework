<pre>/*

	Description:
		Show hand-drawn bezier curve in the map

	Parameter(s):
		0: STRING - Unique ID of the ellipse. When such ellipse already exists, it will override it.
		1: ARRAY - control points of bezier curve
		2: ARRAY - color in [r,g,b,a] format
		3: STRING - fill texture
		   BOOL - true for default pen-blue color, false for the same, but faded

		Optional:
		4: NUMBER or ARRAY: thickness
		5: ARRAY - random thickness offset in format [min,mid,max]
		6: NUMBER - number od drawing steps

	Returns:
		NOTHING
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_handDrawBezier` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_handDrawBezier;
``` -->