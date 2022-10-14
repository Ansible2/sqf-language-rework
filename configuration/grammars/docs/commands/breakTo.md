Breaks block to scope named `name`. Nil is returned.

Scope name can be assigned using `scopeName` command.


---
*Syntaxes:*

`breakTo` name

---
*Example 1:*

```sqf
scopeName "main";
while { true } do
{
	scopeName "loop1";
	while { true } do
	{
		scopeName "loop2";
		if (condition1) then { breakTo "main" };	// breaks all scopes and return to "main"
		if (condition2) then { breakOut "loop2" };	// breaks scope named "loop2"
		sleep 1;
	};
	sleep 1;
};
```