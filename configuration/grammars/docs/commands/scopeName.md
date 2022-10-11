Defines name of current scope. Name is visible in debugger, and name is also used as reference in some commands like `breakOut` and `breakTo`. Scope name should be defined only once per scope. Trying to set a different name on the scope that has already defined scope name will result in error.


---
*Example 1:*
```sqf
scopeName "main";
while {true} do {
	scopeName "loop1";
	while {true} do {
		scopeName "loop2";
		...
	};
};
```