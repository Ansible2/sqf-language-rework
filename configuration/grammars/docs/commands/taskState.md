Returns the current state of a task.


---
*Syntaxes:*

`taskState` task

---
*Example 1:*

```sqf
tskSomeTask = player createSimpleTask ["NewTask"];
hint format["Taskstate: %1", taskState tskSomeTask];
```