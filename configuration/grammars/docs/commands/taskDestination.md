Returns the position of the task (as specified by destination parameter in config).


---
*Syntaxes:*

`taskDestination` task

---
*Example 1:*

```sqf
if (!isNull currentTask player) then {taskDestination currentTask`player`}; //return Position (Array)
```