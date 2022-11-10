<pre>/*
	Author: Riccardo Argiolas

	Description:
		Translates (relative or absolute), scales (relative or absolute), sets the alpha over time.

	Parameters:
	Select 0 - CONTROL: picture that has to be modified
	Select 1 - NUMBER: duration of the animation (or speed of the translation, in case _translateUsingDuration is set to false)
	Select 2 - ARRAY: array containing translation parameters
		Select 0 - ARRAY: x and y translation coordinates
		Select 1 - BOOL: whether the coordinates are relative (ie: will be added to the picture's current position) or absolute (move picture to those coordinates, ignoring current position)
		Select 2 - BOOL: whether the _durationOrSpeed variable will be treated as a normal duration (by default) or as the translation speed.
	Select 3 - ARRAY: array containing scaling parameters
		Select 0 - ARRAY or NUMBER: x and y scale "amounts". If only a number is passed, both the x and y will be equal to that number
		Select 1 - BOOL: whether the amounts are relative or absolute
		Select 2 - STRING: the pivot/center of the scaling process
	Select 4 - NUMBER: alpha/transparency of the image at the end of the animation (1 = invisible)

	Returns: 
	NUMBER: Duration of the animation. (Useful for determining how much sleep time is needed between animations)

	Examples:
	_t =
	[
		_controlFront,
		1,
		[[0.5, 0.5], true, false],
		[],
		0.5
	] 
	call BIS_fnc_animatePicture;
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_animatePicture`

---
