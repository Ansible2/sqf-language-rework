Return if task is completed. (state Succeeded, Failed or Canceled)


---
*Syntaxes:*

`taskCompleted` task

---
*Example 1:*

```sqf
_task = createSimpleTask ["task_1"];
_done = taskCompleted _task;
```