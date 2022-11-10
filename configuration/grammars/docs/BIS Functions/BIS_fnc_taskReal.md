Find the actual task associated with a task name assigned to a unit.


---
*Syntaxes:*

[taskName, owner] call `BIS_fnc_taskReal`

---
*Example 1:*

```sqf
[ "testTask", player ] call BIS_fnc_taskReal;
//Returns `Task testTask (id 0)`
```