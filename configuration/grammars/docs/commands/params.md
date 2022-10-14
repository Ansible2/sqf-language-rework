Parses input argument into array of `private` variables. When used without argument, as shown in main syntax, internal variable `_this`, which is usually available inside functions and event handlers, is used as argument.<br><br>
In addition to simple parsing directly into variables, input can be tested in case it is undefined, of the wrong type or of the wrong size (if array) and substituted if necessary with default values. Since Arma 3 v1.54, onscreen errors are displayed for when the input is of the wrong type or size.
{{Feature|Warning| All variables names must start with underscore and be enclosed in quotes: {{hl


---
*Syntaxes:*

`params` [element1, element2,...elementN]

argument `params` [element1, element2,...elementN]

---
*Example 1:*

```sqf
[1, 2, 3] call {
	private ["_one", "_two", "_three"];
	_one = _this select 0;
	_two = _this select 1;
	_three = _this select 2;
	// ...
};

// Same as above, only using params
[1, 2, 3] call {
	params ["_one", "_two", "_three"];
	// ...
};
```

*Example 2:*

```sqf
[123] call {
	params ["_myvar"];
};

// Below would produce the same result as above
123 call {
	params ["_myvar"];
};
```

*Example 3:*

```sqf
position player params ["", "", "_z"];
if (_z > 10) then {
	hint "YOU ARE FLYING!";
};
```

*Example 4:*

```sqf
[1, nil, 2] params ["_var1", "_var2", "_var3"];
// All 3 variables are made private but only _var1 and _var3 are defined

[1, nil, 2] params ["_var1", ["_var2", 23], "_var3"];
// All 3 variables are private and defined
```

*Example 5:*

```sqf
[1, 2] call {
	if (!params ["_var1", "_var2", ["_var3", true, [true]]]) exitWith {
		hint str [_var1, _var2, _var3];
	};
};
// The hint shows [1,2,true]
// Script exits, default value was used due to missing value

[1, 2, 3] call {
	if (!params ["_var1", "_var2", ["_var3", true, [true]]]) exitWith {
		hint str [_var1, _var2, _var3];
	};
};
// The hint shows [1,2,true]
// Script exits, default value was used due incorrect value type
```

*Example 6:*

```sqf
[1, "ok", [1, 2, 3]] call {
	if (!params [
		["_var1", 0, [0]],
		["_var2", "", [""]],
		["_var3", [0,0,0], [[], objNull, 0], [2,3]]
	]) exitWith {};
	hint "ok";
};
// Passes validation

[1, 2, [3, 4, 5]] call {
	if (!params ["_var1", "_var2", ["_var3", [], [[], objNull, 0], 0]]) exitWith {};
	hint "ok";
};
// Fails, because passed array is expected to be of 0 length, i.e. empty
```

*Example 7:*

```sqf
[1, 2, 3, [4, 5, 6]] call {
	params ["_one", "_two", "_three"];
	_this select 3 params ["_four", "_five", "_six"];
};
```

*Example 8:*

```sqf
{
	_x params ["_group", "_index"];
	// ...
} forEach waypoints group player;

fn_someFnc = {
	params ["_position", ["_direction", 0], ["_name", ""]];
	// Extract the x, y, and z from "_position" array:
	_position params ["_x", "_y", "_z"];
	// ...
};

[position player, direction player, name player] call fn_someFnc;
```

*Example 9:*

```sqf
player addEventHandler ["HitPart", {
	_this select 0 params ["_target", "_shooter", "_projectile"];
}];
```