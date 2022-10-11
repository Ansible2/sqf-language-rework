Suspends execution of `scheduled` script until the given condition satisfied. 
* This command will loop and call the code inside <sqf inline>{}</sqf> `mostly every frame`, depends on complexity of the condition and the overall engine load, until the `code` returns `true`
* If the very first execution of the code returns `true` the command will exit immediately, therefore it will not produce any "Suspending not allowed in this context" error when used inside `non-scheduled` script. For all other uses it must be executed in environment that allows `suspension` (`canSuspend`), such as `spawn`ed or `execVM`ed code
* Avoid doing <sqf inline>waitUntil { time > 20 };</sqf> and use <sqf inline>sleep 20;</sqf> instead!
* If you can, add a `sleep` to the condition to save some cpu cycles <sqf inline>waitUntil { sleep 1; !alive player };</sqf>


---
*Example 1:*
```sqf
waitUntil { not alive player };
```

*Example 2:*
```sqf
_i = 0; waitUntil { _i = _i + 1; _i >= 100 };
```

*Example 3:*
`waitUntil` can lead to performance loss if used improperly:

```sqf
waitUntil { not alive player };			// bad
waitUntil { sleep 1; not alive player };	// good - checks every 1 second
player addEventHandler ["Killed", {  }];	// best - don't forget about Event Handlers
```

*Example 4:*
An on-the-fly custom [[Arma 3: Event Handlers|event handler]]:

```sqf
_myEH = ["ZoomIn"] spawn {
	while { true } do
	{
		waitUntil { inputAction (_this select 0) == 1 };
		diag_log format ["%1 @ %2", _this select 0, diag_tickTime];
	};
};
```
Although it may be better to use `onEachFrame` (`stacked`) [[Arma_3:_Mission_Event_Handlers#EachFrame|mission Event Handler]], depending on the application.

*Example 5:*
Use `getVariable` with default value to prevent unexcepted script errors:

```sqf
waitUntil { bank getVariable ["money", 0] > 0 };
waitUntil { missionNamespace getVariable ["isready", false] };
```

*Example 6:*
Always return `Boolean`:

```sqf
waitUntil { sleep 1; if (not alive player) exitWith {}; _time = _time + 1 };				// bad
waitUntil { sleep 1; if (not alive player) exitWith { true }; _time = _time + 1; false };	// good
waitUntil { sleep 1; not alive player };													// perfect
```