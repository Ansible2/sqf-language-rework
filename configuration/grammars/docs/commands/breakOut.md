Breaks out of the `scope` with given `name`.
* An unknown `scopeName` name will cause the script error **Generic error in expression**
* If multiple scopes with the same `name` exist, the command will break out the nearest scope. See *(Reference Link "#Example 3")*.


---
*Syntaxes:*

`breakOut`  name

value `breakOut`  name

---
*Example 1:*

```sqf
scopeName "main";
while { true } do {
	scopeName "loop1";
	while {true} do {
		scopeName "loop2";
		if (condition1) then {breakTo "main"}; // Breaks all scopes and return to "main"
		if (condition2) then {breakOut "loop2"}; // Breaks scope named "loop2"
		sleep 1;
	};
	sleep 1;
};
```

*Example 2:*

```sqf
call {
	scopeName "main";
	call {
		123 breakOut "main"
	};
	345
}; // call returns 123
```

*Example 3:*

```sqf
call {
	scopeName "Main"; // Parent Main
	call {
		scopeName "Main"; // Child Main
		"String" breakOut "Main"; // Will break out of child main and return "String" to parent main
	};
};
```