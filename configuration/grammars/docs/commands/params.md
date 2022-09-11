Parses input argument into array of private variables. When used without argument, as shown in main syntax, internal variable _this, which is usually available inside functions and event handlers, is used as argument.

In addition to simple parsing directly into variables, input can be tested in case it is undefined, of the wrong type or of the wrong size (if array) and substituted if necessary with default values. Since Arma 3 v1.54, onscreen errors are displayed for when the input is of the wrong type or size.

---

**WARNING:** *All variables names must start with underscore and be enclosed in quotes: `params ["_myVar1", "_myVar2"];`*

**NOTE:** *It is a good practice to make your local variables private (through `private` or `params`) in order to avoid overwriting a local variable of the same name.*

---

Replace `private` with `params` example:
```sqf
[1, 2, 3] call {
	private ["_one", "_two", "_three"];
	_one = _this select 0;
	_two = _this select 1;
	_three = _this select 2;
	// ...
};

// Same as above, only using params
[1, 2, 3] call {
	params ["_one", "_two", "_three"];
	// ...
};
```

Example 2:
```sqf
[123] call {
	params ["_myvar"];
};

// Below would produce the same result as above
123 call {
	params ["_myvar"];
};
```