Returns `true` if `sleep`, `uiSleep` or `waitUntil` commands can be used in current scope. Usually when suspension is not allowed but used, for example when code is executed in `unscheduled environment`, the script engine would ignore any suspension command and throw error: "Suspending not allowed in this context". Using `canSuspend` command allows to detect the correct environment for the code.


---
*Syntaxes:*

`canSuspend`

---
*Example 1:*

```sqf
onEachFrame 
{
	systemChat str canSuspend;			// false
	[] spawn { hint str canSuspend };	// true
	onEachFrame {};
};
```

*Example 2:*

Make sure the function code is always spawned even when called:

```sqf
sleepingCode = 
{
	if (!canSuspend) exitWith { _this spawn sleepingCode };
	sleep _this;
	hint ("slept " + str _this);
};

5 call sleepingCode;
```