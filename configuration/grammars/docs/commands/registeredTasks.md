Returns array with all registered task types for the given agent. The values are the names set in **CfgTasks}} classes {{hl|name** property. The same names are used for `unregisterTask`


---
*Example 1:*
```sqf
tasklist = registeredTasks teamMember _agent;
```

*Example 2:*
```sqf
_rabbit = createAgent ["Rabbit_F", position player,[], 0, "None"];
hint str registeredTasks teamMember _rabbit; // shows ["Animal Main Task"] in Arma 3
```