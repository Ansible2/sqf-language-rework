Sets a variable to the innermost scope as demonstrated in Example 3. See also `param` and `params`.

*Example 1:*
```sqf
// since Arma 3 v1.54
private _varname = "this is my new variable"; 

// identical, but less performant
private "_varname";
_varname = "this is my new variable";
```

*Example 2:*
```sqf
private ["_varname1", "_varname2"];
_varname1 = "variable 1";
_varname2 = "variable 2";
```