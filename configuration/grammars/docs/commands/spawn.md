Adds given set of compiled instructions to the `scheduler`.
Exactly when the code will be executed is unknown, it depends on how busy is the engine and how filled up is the `scheduler`.
Therefore `spawn` does not wait for the supplied code to finish, instead, `spawn` returns a `Script` handle to the `scheduler` task.
`scriptDone` command can be used to check the code completion. Additional arguments are passed to the code in local variable `_this`.
Since {{GVI|arma3|1.56


---
*Syntaxes:*

arguments `spawn` code

---
*Example 1:*

```sqf
_handle = 0 spawn { player globalChat "Hello world!" };
```

*Example 2:*

There is no guarantee that spawned scripts will be executed in the same order they spawned: 

```sqf
for "_i" from 0 to 100 do
{
	_i spawn
	{
		diag_log _this;
	};
}; // Result: 51,1,2...49,50,0,52,53...100
```

*Example 3:*

Local variables declared in the main scope are not available in the spawned code. You have to pass them as parameters:

```sqf
private _localVariable = 1234;
[_localVariable] spawn 
{
	systemChat format ["_localVariable does not exist: %1", isNil "_localVariable"]; // _localVariable does not exist: true
	params ["_localVariable"];
	systemChat format ["_localVariable is now: %1", _localVariable]; // _localVariable is now: 1234
};
```