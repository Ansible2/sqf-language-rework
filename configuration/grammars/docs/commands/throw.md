Throws an exception. The exception is processed by first `catch` block. This command will terminate further execution of the code.


---
*Syntaxes:*

`throw` expression

if (condition) `throw` exception

---
*Example 1:*

```sqf
try {throw "invalid argument"} catch {hint str _exception};
```

*Example 2:*

```sqf
123 try {if (_this != 123) throw "invalid argument"} catch {hint str _exception};
```

*Example 3:*

The correct usage of shorthand alt syntax:

```sqf
try {
	if (a > b) throw "Error: some error"; // OK
	// The command argument is static
} catch {
	hint str _exception;
};

try {
	_someFunc = {
		.....
	};
	if (a > b) throw (call _someFunc); // NOT OK
	// The command argument is dynamic
	// _someFunc is called first to get the value regardless of (a > b) outcome
} catch {
	hint str _exception;
};

try {
	_someFunc = {
		.....
	};
	if (a > b) then {throw (call _someFunc)}; /// OK
	// The command argument is dynamic
	// _someFunc is only called when (a > b) is true
} catch {
	hint str _exception;
};
```