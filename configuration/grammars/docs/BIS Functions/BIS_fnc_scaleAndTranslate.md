<pre>/*
	Author: Riccardo Argiolas

	Description:
		Translates and scales (with pivot) and fades a picture over time.

	Parameters:
	Select 0 - CONTROL: picture that has to be modified
	Select 1 - NUMBER: how much the picture has to be scaled (>1 makes it bigger, 1 keeps it the same, <1 makes it smaller)
	Select 2 - STRING: select the pivot's position (i.e. center of the scaling process)
	Select 3 - ARRAY: how much the picture has to be translated/moved in [X,Y] format
	Select 4 - NUMBER: either the duration of the animation(default) or the speed of the translation, depending on what the next parameter is set to.
	Select 5 - BOOL: true = duration will be used, false = speed will be used.
	Select 6 - NUMBER: transparency of the image at the end of the animation (1 = invisible)

	Returns: 
	NUMBER: Duration of the animation. (Useful for determining how much sleep time is needed between animations)

	Examples:
	[_controlFront, 0.8, "topLeft"] call BIS_fnc_scaleAndTranslate;
	_t = [_controlFront, 1, "bottomRight", [0.1, 0.1], 0.5, false] call BIS_fnc_scaleAndTranslate;
	sleep (_t * 2);
	[_controlFront, 0.8, "topRight", [0.5, 0.3]] call BIS_fnc_scaleAndTranslate;
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_scaleAndTranslate`

---
