<pre>/*
	Decodes a single scalar into array of unique 8-state flags (values 0,1,2,3,4,5,6,7). Max. number that can be decoded is 16777215 (= 8^8 - 1). An optional parameter can by supplied to resize the output.

	Syntax:
	-------
	_flags:array = _encodedFlags:scalar call BIS_fnc_decodeFlags8;
	_flags:array = [_encodedFlags:scalar,_size:scalar] call BIS_fnc_decodeFlags8;

	Example:
	--------
	[7,2,3,0,1] = 4311 call BIS_fnc_decodeFlags8;
	[7,2,3,0,1,0,0,0] = [4311,8] call BIS_fnc_decodeFlags8;

	Explanation:
	------------
	4311 -> 0001 0000 1101 0111 -> 001 000 011 010 111 -> [7,2,3,0,1]
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_decodeFlags8`

---
