Checks specific difficulty settings of the current user. Difficulty flag names can be found in the `ArmA profile` file under class Difficulties/xxx/Flags (xxx being regular or veteran).


---
*Example 1:*
```sqf
hint str (difficultyEnabled "armor");
```

*Example 2:*
List current difficulty settings:

```sqf
call {
	private ["_diff", "_cfg", "_flags", "_res"];
	_diff = [];
	_cfg = configFile >> "CfgDifficulties";
	{
		_flags = _cfg >> configName _x >> "Flags";
		for "_i" from 0 to count _flags - 1 do {
			_diff pushBack configName (_flags select _i);
		};
	} forEach ("true" configClasses _cfg);
	_diff = _diff arrayIntersect _diff;
	_diff sort true;
	_res = text "";
	{
		_res = composeText [_res, parseText format [
			"<t align='left'>%1 - %2</t>", 
			_x, 
			[0, 1] select difficultyEnabled _x
		], lineBreak];
	} forEach _diff;
	hint _res;
};
```