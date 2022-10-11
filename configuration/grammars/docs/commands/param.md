Extracts a single value with given index from input argument, similar to `BIS_fnc_param`.  When used without argument, as shown in main syntax, internal variable `_this`, which is usually available inside functions and event handlers, is used as argument. If input argument is not an array, it will be converted to 1 element array.
<br><br>
If extracted item of input with given index is undefined, of the wrong type or of the wrong length (if the item is an array), default value is used instead. Since Arma 3 v1.54, onscreen errors are displayed for when the input is of the wrong type or size.


---
*Example 1:*
```sqf
[1, 2, 3] call 
{
	private _one = param [0, 1];
	private _two = param [1, 2];
	private _three = param [2, 3];
	// ...
};
```

*Example 2:*
```sqf
[123] call 
{
	private _val = param [0];
};

// Below would produce the same result as above
123 call 
{
	private _val = param [0];
};
```

*Example 3:*
```sqf
_z = position player param [2, 0];
if (_z > 10) then 
{
	hint "YOU ARE FLYING!";
};
```

*Example 4:*
```sqf
fnc = 
{
	private _pos = param [0, [0,0,0], [objNull, []], [2,3]];
	private _rad = param [1, 0, [0]];
	_pos nearObjects _rad;
};

[position player, 25] call fnc; // ok
[player, 25] call fnc; // ok
[25, player] call fnc; // default values are used
```