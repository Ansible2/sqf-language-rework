Returns array with all ` uncompleted` tasks for the given agent.
`getVariable` could be used on `Task` to get the following special local variables from the task:
* **"_this"** `Team Member` - the `teamMember` `agent` the task is assigned to
* **"_taskType"** `String` - the name of the task (see `registeredTasks`)
* **"_thisCreated"** `Number` - 1 or 0
* **"_thisRunning"** `Number` - 1 or 0
* **"_totalCreated"** `Number` - total number of tasks
* **"_totalRunning"** `Number` - total number of running tasks
* **"_task"**`Task` - often null


---
*Example 1:*
```sqf
currentTasks teamMember _agent;
```