Set a task description.


---
*Syntaxes:*

[taskId, [taskDescription, taskTitle, taskMarker]] call `BIS_fnc_taskSetDescription`

---
*Example 1:*

```sqf
[
	"tsk_destroyAA",
	[
		"You should plant Satchels under those Shilkas! Good luck.",
		"Destroy the Shilkas",
		"Shilkas"
	]
] call BIS_fnc_taskSetDescription;
```