Deletes given task.


---
*Syntaxes:*

[taskID, owner, removeFromJIP] call `BIS_fnc_deleteTask`

---
*Example 1:*

```sqf
["task_1"] call BIS_fnc_deleteTask;
```

*Example 2:*

```sqf
["task_1", west] call BIS_fnc_deleteTask;
```

*Example 3:*

```sqf
["task_1", [west, player, group soldier]] call BIS_fnc_deleteTask;
```