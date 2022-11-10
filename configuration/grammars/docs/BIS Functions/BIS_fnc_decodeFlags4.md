<pre>/*
	Decodes a single scalar into array of unique 4-state flags (values 0,1,2,3). Max. number that can be decoded is 16777215 (= 4^12 - 1). An optional parameter can by supplied to resize the output.

	Syntax:
	-------
	_flags:array = _encodedFlags:scalar call BIS_fnc_decodeFlags4;
	_flags:array = [_encodedFlags:scalar,_size:scalar] call BIS_fnc_decodeFlags4;

	Example:
	--------
	[1,0,2,3] = 225 call BIS_fnc_decodeFlags4;
	[1,0,2,3,0,0,0,0] = [225,8] call BIS_fnc_decodeFlags4;

	Explanation:
	------------
	225 -> 11 10 00 01 -> [1,0,2,3]
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_decodeFlags4`

---
