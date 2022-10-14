Unregisters a task type from given agent. The task type is the name given in **CfgTasks}} classes in {{hl|name** property. Also available from `registeredTasks` array.


---
*Syntaxes:*

teamMember `unregisterTask` name

---
*Example 1:*

```sqf
teamMember _agent unregisterTask (registeredTasks select 0);
```