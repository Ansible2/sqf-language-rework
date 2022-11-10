<pre>/*

	Description:
		Show hand-drawn ellipse in the map

	Parameter(s):
		0: STRING - Unique ID of the ellipse. When such ellipse already exists, it will override it.
		1: ARRAY - center position
		2: NUMBER - semi-major axis
		3: NUMBER - semi-minor axis
		4: NUMBER - angle
		5: ARRAY - color in [r,g,b,a] format
		6: STRING - fill texture
		   BOOL - true for default pen-blue color, false for the same, but faded

		Optional:
		7: NUMBER - radius coef
		8: NUMBER - length coef
		9: NUMBER or ARRAY: thickness
		10: ARRAY - radius curve
		11: BOOL - true if clockwise
		12: NUMBER - starting angle
		13: ARRAY - random thickness offset in format [min,mid,max]
		14: NUMBER - number od drawing steps

	Returns:
		NOTHING

	Examples:
		//--- Show an ellipse on player's position
		["test1",position player,300,400,15] call BIN_fnc_handDrawEllipse;

		//--- Show the same ellipse, but faded
		["test1",position player,300,400,15,nil,false] call BIN_fnc_handDrawEllipse;
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_handDrawEllipse` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_handDrawEllipse;
``` -->