Tests a condition and if the condition is false, displays error on screen (if -showscripterrors enabled) and logs error into .rpt file. It does not interrupt the script execution.

If script was pre-processed with `preprocessFileLineNumbers`, it will also show/log the error line number and the file name.


---
*Syntaxes:*

`assert` condition

---
*Example 1:*

```sqf
assert (1 > 2);
``` 

`Image:PreprocessFile.jpg`

*Example 2:*

Check function params (Faster alternative to `BIS_fnc_param`)

```sqf
some_func = {
	_0 = _this select 0;
	_1 = _this select 1;
	_2 = _this select 2;
	if (!assert (
		typeName _0 == "ARRAY" && 
		typeName _1 == "STRING" &&
		typeName _2 == "SCALAR"
	)) exitWith { /* optional error logging */ };
	hint "Alright!";
};
[1,2,3] call some_func; // assert error
[[1],"2",3] call some_func; // Alright!
```