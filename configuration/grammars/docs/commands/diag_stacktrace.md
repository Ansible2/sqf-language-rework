Returns an array containing the function name, line number, scope name and all local variables in form of a hashmap.


---
*Example 1:*
```sqf
private _testvar = 1;
private _testother = 2;
call 
{
	_testvar = 3;
	if (_testvar == 3) then 
	{
		_myVariable = 4;
		hint str diag_stacktrace;
	};
};
/*
[
	["", 3, "", `"_this", [`, ["_testother", 2], ["_testvar", 3]]],
	["", 6, "", []],
	["", 8, "", [["_myvariable", 4]]]
]
*/
```