Returns `true` if task state is either "SUCCEEDED", "FAILED" or "CANCELED".


---
*Syntaxes:*

taskID call `BIS_fnc_taskCompleted`

---
*Example 1:*

```sqf
private _completed = "task_1" call BIS_fnc_taskCompleted;
```