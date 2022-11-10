Set task parameters.
<br>Create the task when it doesn't exist.


---
*Syntaxes:*

[taskId, target, description, (destination, state, priority, showNotification, isGlobal, type, visibleIn3D)] call `BIS_fnc_setTask`

---
*Example 1:*

```sqf
["Task_01", true, ["Protect the respawn point.","Respawn Point West","respawn_west"], [MHQ,false], "ASSIGNED", 5, true, true, "Defend", true] call BIS_fnc_setTask;
```