<pre>/*
	Author: Jiri Wainar

	Description:
	Return sequence of all synchronized objects forming either line or circle.

	Parameter(s):
		0: OBJECT - starting object
		1: STRING or ARRAY of STRINGs (Optional) - object types that are considered
		2: BOOL (Optional) - class filter uses exact match
			true (default): objects need to match exectly one of the filter classes
			false: exact match is not required, objects can inherit from one of the listed classes
		3: NUMBER (Optional) - expected connection shape
			0 (default): none, can be either line or circle
			1: line expected
			2: circle expected

	Returns:
	ARRAY of OBJECTs or empty ARRAY if error is encountered

	Errors:
		* There are more then 2 objects matching class filter connected.
		* Circle is required but closing connection is not detected.

	Example:
	[_start,["ModuleToWAreaVertex_F","ModuleToWAreaOptions_F"],true,0] call BIS_fnc_synchronizedObjectsQueue;
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_synchronizedObjectsQueue`

---
