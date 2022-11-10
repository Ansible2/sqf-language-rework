<pre>/*
	Encodes array of unique 4-state flags (0,1,2,3) into a single number.

	Syntax:
	-------
	_encodedFlags:scalar = _flags:array call BIS_fnc_encodeFlags4;

	Example:
	--------
	225 = [1,0,2,3] call BIS_fnc_encodeFlags4;

	Explanation:
	------------
	[1,0,2,3] -> 11 10 00 01 -> 225
	[0,0,0,0,0,0,0,1] -> 01 00 00 00 00 00 00 00 -> 0100 0000 0000 0000 -> 16384
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_encodeFlags4`

---
