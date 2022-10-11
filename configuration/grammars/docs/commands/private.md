Sets a variable to the innermost scope as demonstrated in Example 3. See also `param` and `params`.
{{Feature | Informative | `private` variables `must` start with an underscore: {{hl


---
*Example 1:*
```sqf
private _varname = "this is my new variable"; // since Arma 3 v1.54

// identical, but less performant
private "_varname";
_varname = "this is my new variable";
```

*Example 2:*
```sqf
private ["_varname1", "_varname2"];
_varname1 = "variable 1";
_varname2 = "variable 2";
```

*Example 3:*
```sqf
_lol =  123; call { hint str [_lol] }; // [123]
_lol =  123; call { private "_lol"; hint str [_lol] }; // [any]
```

*Example 4:*
```sqf
_myvar = 123;
systemChat str [_myvar];		// [123]
call {
	systemChat str [_myvar];	// [123]
	private "_myvar";
	systemChat str [_myvar];	// [any]
	_myvar = 345;
	systemChat str [_myvar];	// [345]
};
systemChat str [_myvar];		// [123]
```