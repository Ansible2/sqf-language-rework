Return the value of variable in the variable space of given FSM. The FSM handle is the number returned by the `execFSM` command.


---
*Example 1:*
```sqf
_handle getFSMVariable "_foo";
```

*Example 2:*
```sqf
_handle getFSMVariable ["_foo", 123];
```