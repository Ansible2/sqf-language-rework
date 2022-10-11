Defines a try-catch structure. This sets up an `exception handling` block. Any thrown exception in a try block is caught in a `catch` block. The structured exception block has the following form:
<sqf>try
{ /* block that can throw exception */ }
catch
{ /* block that processes the exception. Exception is described in the _exception variable */ };</sqf>


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
	if (a > b) then {throw (call _someFunc)}; // OK
	// The command argument is dynamic
	// _someFunc is only called when (a > b) is true
} catch {
	hint str _exception;
};
```