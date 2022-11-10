Spawns given function and executes it in the order it was called in case multiple calls are made. If mutex name is not specified, function name is used.


---
*Syntaxes:*

[params, functionName, mutexName] call `BIS_fnc_spawnOrdered`

---
*Example 1:*

```sqf
myFnc = { diag_log [_this, canSuspend] };
for "_i" from 0 to 1000 do { [_i, "myFnc"] call BIS_fnc_spawnOrdered };
```