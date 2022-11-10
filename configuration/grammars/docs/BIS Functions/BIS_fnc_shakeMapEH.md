<pre>/*
	Author: Riccardo Argiolas

	Description:
		Event handler function for the shakeMap.sqf function

	Parameters:
	Select 0 - NUMBER: duration of shake effect.
	Select 1 - NUMBER: magnitude of the shaking force.
	Select 2 - ARRAY: position of the camera center around which the shake effect occurs.
	Select 3 - NUMBER: starting shake time (i.e. time elapsed since mission started till the start of the shake animation).

	Returns: None

	Examples:

		private _shakeEventCode = format ["[%1, %2, %3, %4] call BIS_fnc_drawMapShake", _shakeDuration, _shakeMagnitude, _shakeCenter, time];
		BIS_shakeEventHandler = _map ctrladdeventhandler ["draw",_shakeEventCode];
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_shakeMapEH`

---
